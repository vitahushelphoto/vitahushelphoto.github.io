import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// FIXED: sanitize user input to prevent XSS in email HTML
const sanitize = (str: string): string => {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// FIXED: validate email format server-side
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const { name, email, phone, serviceType, date, time, message, honeypot } = body

    // FIXED: server-side honeypot check (was only client-side before)
    if (honeypot) {
      console.log('Spam blocked via honeypot')
      return new Response(
        JSON.stringify({ success: true }), // fake success so bots don't retry
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

    // FIXED: server-side input validation
    if (!name || !email || !serviceType) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // FIXED: all user data sanitized before insertion into HTML
    const safeName        = sanitize(name)
    const safeEmail       = sanitize(email)
    const safePhone       = sanitize(phone || '')
    const safeServiceType = sanitize(serviceType)
    const safeDate        = sanitize(date || '')
    const safeTime        = sanitize(time || '')
    const safeMessage     = sanitize(message || '')

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Нове бронювання сесії</title>
    <style>
      body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; }
      .header { background: #2d2416; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
      .content { border: 1px solid #ddd; border-top: none; padding: 24px; border-radius: 0 0 8px 8px; }
      .field { margin-bottom: 12px; }
      .label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; }
      .value { font-size: 16px; margin-top: 4px; }
      .divider { border: none; border-top: 1px solid #eee; margin: 16px 0; }
    </style>
</head>
<body>
    <div class="header">
      <h2 style="margin:0">📸 Нове бронювання фотосесії</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Ім'я</div>
        <div class="value">${safeName}</div>
      </div>
      <hr class="divider">
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
      </div>
      <hr class="divider">
      <div class="field">
        <div class="label">Телефон</div>
        <div class="value">${safePhone || 'Не вказано'}</div>
      </div>
      <hr class="divider">
      <div class="field">
        <div class="label">Тип сесії</div>
        <div class="value">${safeServiceType}</div>
      </div>
      <hr class="divider">
      <div class="field">
        <div class="label">Дата</div>
        <div class="value">${safeDate || 'Не вказано'}</div>
      </div>
      <hr class="divider">
      <div class="field">
        <div class="label">Час</div>
        <div class="value">${safeTime || 'Не вказано'}</div>
      </div>
      <hr class="divider">
      <div class="field">
        <div class="label">Повідомлення</div>
        <div class="value">${safeMessage || 'Не вказано'}</div>
      </div>
    </div>
</body>
</html>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['vitahushelphoto@gmail.com'],
        subject: `📸 Нове бронювання від ${safeName}`,
        html: emailContent,
        reply_to: safeEmail,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend API error:', resendResponse.status, errorText)
      throw new Error(`Resend API error: ${resendResponse.status}`)
    }

    const result = await resendResponse.json()

    return new Response(
      JSON.stringify({ success: true, id: result.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error sending email:', error)

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
