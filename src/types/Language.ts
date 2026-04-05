// Language types and content for multilingual support
export type Language = 'en' | 'uk' | 'pl';

export interface TranslationContent {
  name: string;
  nav: {
    home: string;
    about: string;
    portfolio: string;
    prices: string;
    booking: string;
    testimonials: string;
    blog: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  prices: {
    title: string;
    subtitle: string;
    packages: {
      portrait: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
      family: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
      children: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
      wedding: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
      event: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
      studio: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
    };
    additionalInfo: {
      delivery: string;
      originals: string;
    };
    mostPopular: string;
    bookNow: string;
  };
  booking: {
    title: string;
    subtitle: string;
    formUrl: string;
    form: {
      name: string;
      email: string;
      phone: string;
      serviceType: string;
      date: string;
      time: string;
      message: string;
      submit: string;
      servicePlaceholder: string;
      timePlaceholder: string;
      agreement: string;
      validation: {
        serviceRequired: string;
        dateRequired: string;
        timeRequired: string;
      };
      services: {
        wedding: string;
        portrait: string;
        family: string;
        children: string;
        event: string;
        studio: string;
      };
    };
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    viewAllPosts: string;
    filterBy: string;
    allPosts: string;
    previous: string;
    next: string;
    posts: {
      title: string;
      excerpt: string;
      date: string;
      category: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      content: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    social: {
      whatsapp: string;
      telegram: string;
      instagram: string;
    };
  };
  footer: {
    copyright: string;
    backToTop: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    name: "Vita Hushel",
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      prices: "Prices",
      booking: "Booking",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      title: "Vita Hushel",
      subtitle: "Capturing Life's Most Precious Moments with Artistic Elegance",
      cta: "Book Your Session Now"
    },
    about: {
      title: "About Me",
      content: "Hello! My name is Vita, and I'm a photographer — so delighted to welcome you to my website! I've been living in Poland for almost three years now, and before that, I lived with my family in Kyiv. My love for photography began in childhood — I photographed friends on film with a 'Kodak', capturing moments of life that I wanted to preserve for a long time. Later, after receiving my first scholarship, I bought a digital Olympus — and that was the first step towards something bigger. I've always been drawn to the ability to capture not just an image, but an emotion, a mood, warmth. Over time, through Instagram, I began sharing pieces of my life: everyday moments, food, atmosphere. At the same time, I was learning editing, searching for my style and sense of composition. I bought my first professional camera just a year ago. It was scary — but I knew dreams are worth pursuing. Today I have the most grateful clients and sincerely rejoice at every opportunity to give someone a memory for life. For me, photography is not just about a beautiful picture. It's about sincerity, attention, interaction. About your smiles, hugs, genuine moments that you want to preserve not only in your heart, but also in photos. I invite you to a photo session — I promise lots of light, warmth, and shots you'll want to return to."
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "A glimpse into my world of photography"
    },
    prices: {
      title: "Photography Packages",
      subtitle: "Professional photography services tailored to your needs",
      packages: {
        portrait: {
          title: "Individual Photo Session",
          price: "250 zł",
          description: "50 minutes duration",
          features: [
            "40+ edited photos",
            "Wardrobe consultation",
            "Location assistance"
          ]
        },
        family: {
          title: "Family Photo Session", 
          price: "250 zł",
          description: "50 minutes duration",
          features: [
            "40+ edited photos",
            "Wardrobe consultation", 
            "Location assistance"
          ]
        },
        children: {
          title: "Children Photo Session",
          price: "250 zł", 
          description: "50 minutes duration",
          features: [
            "40+ edited photos",
            "Wardrobe consultation",
            "Location assistance"
          ]
        },
        wedding: {
          title: "Wedding Photography",
          price: "Package 1: 200 zł | Package 2: 300 zł",
          description: "Package 1: Wedding walk 30 min (40+ photos) | Package 2: Registry + walk 30 min (70+ photos)",
          features: [
            "Package 1: Wedding walk 30 min",
            "40+ edited photos (Package 1)",
            "Package 2: Registry + walk 30 min", 
            "70+ edited photos (Package 2)"
          ]
        },
        event: {
          title: "Celebration Photography",
          price: "Package 1: 250 zł | Package 2: 400 zł",
          description: "Package 1: Photo zone session (50+ photos) | Package 2: Photo zone + 1 hour celebration (100+ photos)",
          features: [
            "Package 1: Photo zone session 50 min",
            "50+ edited photos (Package 1)",
            "Package 2: Photo zone + 1 hour celebration",
            "100+ edited photos (Package 2)"
          ]
        },
        studio: {
          title: "Studio Photography",
          price: "300 zł",
          description: "Up to 1 hour duration",
          features: [
            "40+ edited photos",
            "Wardrobe consultation",
            "Studio selection assistance (client pays for studio)"
          ]
        }
      },
      additionalInfo: {
        delivery: "Edited photos sent via Google Drive file storage, photos available for 30 days, during which you can save them.",
        originals: "All originals optionally transferred to your flash drive within 3 days after receiving edited photos."
      },
      mostPopular: "Most Popular",
      bookNow: "Book Now"
    },
    booking: {
      title: "Book Your Session",
      subtitle: "Let's create beautiful memories together",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc5ibYT0MzB56igtsGds6dqsA5toMBurgbPZgkQ9jwg2ySm-A/viewform?usp=sharing",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        serviceType: "Service Type",
        date: "Preferred Date",
        time: "Preferred Time",
        message: "Message (Optional)",
        submit: "Send Booking Request",
        servicePlaceholder: "Select a service",
        timePlaceholder: "Select time",
        agreement: "By submitting this form, you agree to be contacted about your photography inquiry.",
        validation: {
          serviceRequired: "Please select a service type",
          dateRequired: "Please select a date",
          timeRequired: "Please select a time"
        },
        services: {
          portrait: "Individual photoshoot",
          family: "Family photoshoot",
          children: "Children's photoshoot",
          wedding: "Wedding photography",
          event: "Event / celebration coverage",
          studio: "Studio photoshoot"
        }
      }
    },
    blog: {
      title: "Photography Blog",
      subtitle: "Tips, stories, and inspiration from behind the lens",
      readMore: "Read More",
      viewAllPosts: "View All Posts",
      filterBy: "Filter by category:",
      allPosts: "All Posts",
      previous: "Previous",
      next: "Next",
      posts: [
        {
          title: "5 Tips for Perfect Wedding Photos",
          excerpt: "Discover the secrets to capturing magical wedding moments that couples will treasure forever.",
          date: "March 15, 2024",
          category: "Wedding"
        },
        {
          title: "The Art of Natural Light Photography",
          excerpt: "Learn how to use natural light to create stunning portraits that showcase your subject's personality.",
          date: "March 8, 2024",
          category: "Tutorial"
        },
        {
          title: "Family Photo Session Preparation Guide",
          excerpt: "Everything families need to know to prepare for a successful and fun photo session.",
          date: "February 28, 2024",
          category: "Family"
        }
      ]
    },
    testimonials: {
      title: "What Clients Say",
      subtitle: "Stories from families and couples I've had the joy to photograph",
      items: [
        {
          name: "Sarah & Michael",
          role: "Wedding Couple",
          content: "Wiktoria captured our wedding day perfectly! Her attention to detail and ability to make us feel comfortable resulted in the most beautiful photos we could have dreamed of. Every single shot tells the story of our love."
        },
        {
          name: "Jessica Thompson",
          role: "Mother of Two",
          content: "Our family photo session with Wiktoria was absolutely wonderful. She was so patient with our kids and managed to capture their personalities beautifully. We treasure these photos and will book with her again!"
        },
        {
          name: "David Rodriguez",
          role: "Corporate Executive",
          content: "Wiktoria's professionalism and artistic eye made my headshot session a breeze. The photos she delivered exceeded my expectations and have opened many doors in my career. Highly recommend!"
        },
        {
          name: "Anna & James",
          role: "Expecting Parents",
          content: "Wiktoria made our maternity shoot so special and comfortable. She guided us through every pose and captured the joy of this precious time in our lives. We can't wait to work with her for newborn photos!"
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to capture your special moments?",
      address: "Wolsztyn, 64-200, Poland",
      phone: "Phone",
      email: "Email",
      social: {
        whatsapp: "WhatsApp",
        telegram: "Telegram",
        instagram: "Instagram"
      }
    },
    footer: {
      copyright: "© 2024 Wiktoria Hushel Photography. All rights reserved.",
      backToTop: "Back to top"
    },
    meta: {
      title: "Vita Hushel - Professional Photographer",
      description: "Professional photographer specializing in capturing life's most precious moments with artistic elegance. Creating timeless memories that last a lifetime."
    }
  },
  uk: {
    name: "Віта Гушель",
    nav: {
      home: "Головна",
      about: "Про мене",
      portfolio: "Портфоліо",
      prices: "Ціни",
      booking: "Бронювання",
      testimonials: "Відгуки",
      blog: "Блог",
      contact: "Контакти"
    },
    hero: {
      title: "Віта Гушель",
      subtitle: "Захоплюю найцінніші моменти життя з художньою елегантністю",
      cta: "Забронювати сесію"
    },
    about: {
      title: "Про мене",
      content: "Привіт! Мене звати Віта, я фотограф — і дуже рада вітати вас на своєму сайті! Вже майже три роки я живу в Польщі, а до цього мешкала з родиною в Києві. Моя любов до фотографії почалася ще в дитинстві — я фотографувала подруг на плівкову «Кодак», ловлячи моменти життя, які хочеться зберегти надовго. Згодом, отримавши свою першу стипендію, купила цифровий Olympus — і це стало першим кроком до чогось більшого. Мене завжди приваблювала можливість зафіксувати не просто зображення, а емоцію, настрій, тепло. З часом через Instagram я почала ділитися частинками свого життя: моментами буднів, їжею, атмосферою. Паралельно вчилася обробці, шукала свій стиль і відчуття кадру. Свій перший професійний фотоапарат я придбала всього рік тому. Було страшно — але я знала: мрії варто втілювати. Сьогодні я маю найвдячніших клієнтів і щиро радію кожній можливості подарувати комусь пам'ять на все життя. Для мене фотографія — це не лише про красиву картинку. Це про щирість, увагу, взаємодію. Про ваші посмішки, обійми, справжні моменти, які хочеться зберегти не лише в серці, а й на фото. Запрошую вас на фотосесію — обіцяю багато світла, тепла і кадрів, до яких захочеться повертатися."
    },
    portfolio: {
      title: "Портфоліо",
      subtitle: "Погляд у мій світ фотографії"
    },
    prices: {
      title: "Фотографічні пакети",
      subtitle: "Професійні фотографічні послуги, адаптовані до ваших потреб",
      packages: {
        portrait: {
          title: "Індивідуальна фотосесія",
          price: "250 zł",
          description: "Тривалість 50 хв",
          features: [
            "40+ оброблених фото",
            "Консультація по гардеробу",
            "Допомога в підбору локації"
          ]
        },
        family: {
          title: "Сімейна фотосесія",
          price: "250 zł",
          description: "Тривалість 50 хв",
          features: [
            "40+ оброблених фотографій",
            "Консультація по гардеробу",
            "Допомога в підбору локації"
          ]
        },
        children: {
          title: "Дитяча фотосесія",
          price: "250 zł",
          description: "Тривалість 50 хв",
          features: [
            "40+ оброблених фотографій",
            "Консультація по гардеробу",
            "Допомога в підбору локації"
          ]
        },
        wedding: {
          title: "Весільна фотозйомка",
          price: "Пакет 1: 200 zł | Пакет 2: 300 zł",
          description: "Пакет 1: Весільна прогулянка 30 хв (40+ фото) | Пакет 2: Фотозйомка розпису + прогулянка 30 хв (70+ фото)",
          features: [
            "Пакет 1: Весільна прогулянка 30 хв",
            "40+ оброблених фотографій (Пакет 1)",
            "Пакет 2: Фотозйомка розпису + прогулянка 30 хв",
            "70+ оброблених фотографій (Пакет 2)"
          ]
        },
        event: {
          title: "Фотозйомка святкування",
          price: "Пакет 1: 250 zł | Пакет 2: 400 zł",
          description: "Пакет 1: Фотосесія коло фотозони (50+ фото) | Пакет 2: Фотосесія коло фотозони + 1 година фотозйомки святкування (100+ фото)",
          features: [
            "Пакет 1: Фотосесія коло фотозони",
            "Тривалість 50 хв",
            "50+ оброблених фото (Пакет 1)",
            "Пакет 2: Фотосесія коло фотозони + 1 година фотозйомки святкування",
            "100+ оброблених фотографій (Пакет 2)"
          ]
        },
        studio: {
          title: "Студійна фотозйомка",
          price: "300 zł",
          description: "Тривалість до 1 години",
          features: [
            "40+ оброблених фотографій",
            "Консультація по гардеробу",
            "Допомога у виборі студії (студію оплачує клієнт)"
          ]
        }
      },
      additionalInfo: {
        delivery: "Оброблені фотографії надсилаю через хмарне файлове сховище Google Диск, фото в доступі 30 днів, протягом яких ви маєте можливість їх зберегти в себе.",
        originals: "Всі оригінали за бажанням скидаю на вашу флешку впродовж 3 днів після отримання оброблених фото."
      },
      mostPopular: "Найпопулярніше",
      bookNow: "Забронювати"
    },
    booking: {
      title: "Забронювати сесію",
      subtitle: "Давайте створимо прекрасні спогади разом",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdTZICrSs1-Qt44scaUk0gQIuJH9gwzh9jxgAwt-Bysdjj3Cw/viewform?usp=sharing&ouid=102239375901531470922",
      form: {
        name: "Повне ім'я",
        email: "Електронна пошта",
        phone: "Номер телефону",
        serviceType: "Тип послуги",
        date: "Бажана дата",
        time: "Бажаний час",
        message: "Повідомлення (Необов'язково)",
        submit: "Відправити запит на бронювання",
        servicePlaceholder: "Оберіть послугу",
        timePlaceholder: "Оберіть час",
        agreement: "Відправляючи цю форму, ви погоджуєтеся на контакт щодо вашого запиту з фотографії.",
        validation: {
          serviceRequired: "Будь ласка, оберіть тип послуги",
          dateRequired: "Будь ласка, оберіть дату",
          timeRequired: "Будь ласка, оберіть час"
        },
        services: {
          portrait: "Індивідуальна фотосесія",
          family: "Сімейна фотосесія",
          children: "Дитяча фотосесія",
          wedding: "Весільна фотозйомка",
          event: "Фотозйомка святкування",
          studio: "Студійна фотозйомка"
        }
      }
    },
    blog: {
      title: "Фото блог",
      subtitle: "Поради, історії та натхнення з-за об'єктива",
      readMore: "Читати далі",
      viewAllPosts: "Переглянути всі пости",
      filterBy: "Фільтрувати за категорією:",
      allPosts: "Всі пости",
      previous: "Попередня",
      next: "Наступна",
      posts: [
        {
          title: "5 порад для ідеальних весільних фото",
          excerpt: "Відкрийте секрети захоплення чарівних весільних моментів, які пари будуть берегти вічно.",
          date: "15 березня 2024",
          category: "Весілля"
        },
        {
          title: "Мистецтво фотографії в природному освітленні",
          excerpt: "Дізнайтеся, як використовувати природне світло для створення приголомшливих портретів.",
          date: "8 березня 2024",
          category: "Урок"
        },
        {
          title: "Підготовка до сімейної фотосесії",
          excerpt: "Все, що потрібно знати сім'ям для підготовки до успішної та веселої фотосесії.",
          date: "28 лютого 2024",
          category: "Сім'я"
        }
      ]
    },
    testimonials: {
      title: "Що кажуть клієнти",
      subtitle: "Історії від сімей та пар, яких мені довелося фотографувати з радістю",
      items: [
        {
          name: "Сара та Іван",
          role: "Весільна пара",
          content: "Віта ідеально запечатала наш весільний день! Її увага до деталей і здатність заспокоїти нас призвели до найкрасивіших фотографій, про які ми могли мріяти. Кожен знімок розповідає історію нашого кохання."
        },
        {
          name: "Джесіка Томек",
          role: "Мама двох дітей",
          content: "Наша сімейна фотосесія з Вітою була просто чудовою. Вона була такою терплячою з нашими дітьми і зуміла прекрасно передати їх особистості. Ми дорожимо цими фото і знову забронюємо у неї!"
        },
        {
          name: "Девід Родрігес",
          role: "Корпоративний керівник",
          content: "Професіоналізм Віти та художнє око зробили мою фотосесію портретів легкою. Фотографії, які вона зробила, перевершили мої очікування і відкрили багато дверей у моїй кар'єрі. Дуже рекомендую!"
        },
        {
          name: "Анна та Петро",
          role: "Майбутні батьки",
          content: "Віта зробила нашу фотосесію вагітності такою особливою та комфортною. Вона провела нас через кожну позу і запечатала радість цього дорогоцінного часу в нашому житті. Не можемо дочекатися роботи з нею для фото новонародженого!"
        }
      ]
    },
    contact: {
      title: "Зв'яжіться зі мною",
      subtitle: "Готові зафіксувати ваші особливі моменти?",
      address: "Вольштин, 64-200, Польща",
      phone: "Телефон",
      email: "Електронна пошта",
      social: {
        whatsapp: "WhatsApp",
        telegram: "Telegram",
        instagram: "Інстаграм"
      }
    },
    footer: {
      copyright: "© 2024 Віта Гушель Фото. Всі права захищені.",
      backToTop: "Повернутися наверх"
    },
    meta: {
      title: "Віта Гушель - Професійний фотограф",
      description: "Професійний фотограф, що спеціалізується на захопленні найцінніших життєвих моментів з художньою елегантністю. Створюю вічні спогади, які залишаються на все життя."
    }
  },
  pl: {
    name: "Wiktoria Hushel",
    nav: {
      home: "Główna",
      about: "O mnie",
      portfolio: "Portfolio",
      prices: "Cennik",
      booking: "Rezerwacja",
      testimonials: "Opinie",
      blog: "Blog",
      contact: "Kontakt"
    },
    hero: {
      title: "Wiktoria Hushel",
      subtitle: "Uwiecznianie najcenniejszych życiowych chwil z artystyczną elegancją",
      cta: "Zarezerwuj sesję"
    },
    about: {
      title: "O mnie",
      content: "Cześć! Nazywam się Wiktoria, jestem fotografem — i bardzo się cieszę, że mogę powitać Cię na mojej stronie! Od prawie trzech lat mieszkam w Polsce, a wcześniej mieszkałam z rodziną w Kijowie. Moja miłość do fotografii zaczęła się w dzieciństwie — fotografowałam przyjaciółki na analogowym 'Kodaku', łapiąc chwile życia, które chciałam zachować na długo. Później, po otrzymaniu pierwszego stypendium, kupiłam cyfrowego Olympusa — i to był pierwszy krok w kierunku czegoś większego. Zawsze pociągała mnie możliwość uchwycenia nie tylko obrazu, ale emocji, nastroju, ciepła. Z czasem przez Instagram zaczęłam dzielić się kawałkami mojego życia: chwilami dnia codziennego, jedzeniem, atmosferą. Równolegle uczyłam się obróbki, szukałam swojego stylu i wyczucia kadru. Mój pierwszy profesjonalny aparat kupiłam dopiero rok temu. Było straszno — ale wiedziałam: marzenia warto realizować. Dziś mam najwdzięczniejszych klientów i szczerze cieszę się z każdej możliwości podarowania komuś wspomnień na całe życie. Dla mnie fotografia to nie tylko piękny obraz. To szczerość, uwaga, interakcja. To Wasze uśmiechy, objęcia, prawdziwe chwile, które chcecie zachować nie tylko w sercu, ale też na zdjęciach. Zapraszam Was na sesję zdjęciową — obiecuję dużo światła, ciepła i kadrów, do których będziecie chcieli wracać."
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Spojrzenie w mój świat fotografii"
    },
    prices: {
      title: "Pakiety fotograficzne",
      subtitle: "Profesjonalne usługi fotograficzne dostosowane do Twoich potrzeb",
      packages: {
        portrait: {
          title: "Sesja indywidualna",
          price: "250 zł",
          description: "Czas trwania 50 min",
          features: [
            "40+ obrobionych zdjęć",
            "Konsultacja stylizacji",
            "Pomoc w wyborze lokalizacji"
          ]
        },
        family: {
          title: "Sesja rodzinna",
          price: "250 zł",
          description: "Czas trwania 50 min",
          features: [
            "40+ obrobionych zdjęć",
            "Konsultacja stylizacji",
            "Pomoc w wyborze lokalizacji"
          ]
        },
        children: {
          title: "Sesja dziecięca",
          price: "250 zł",
          description: "Czas trwania 50 min",
          features: [
            "40+ obrobionych zdjęć",
            "Konsultacja stylizacji",
            "Pomoc w wyborze lokalizacji"
          ]
        },
        wedding: {
          title: "Fotografia ślubna",
          price: "Pakiet 1: 200 zł | Pakiet 2: 300 zł",
          description: "Pakiet 1: Spacer ślubny 30 min (40+ zdjęć) | Pakiet 2: Ślub cywilny + spacer 30 min (70+ zdjęć)",
          features: [
            "Pakiet 1: Spacer ślubny 30 min",
            "40+ obrobionych zdjęć (Pakiet 1)",
            "Pakiet 2: Ślub cywilny + spacer 30 min",
            "70+ obrobionych zdjęć (Pakiet 2)"
          ]
        },
        event: {
          title: "Fotografia uroczystości",
          price: "Pakiet 1: 250 zł | Pakiet 2: 400 zł",
          description: "Pakiet 1: Sesja przy strefie foto (50+ zdjęć) | Pakiet 2: Strefa foto + 1 godzina uroczystości (100+ zdjęć)",
          features: [
            "Pakiet 1: Sesja przy strefie foto",
            "Czas trwania 50 min",
            "50+ obrobionych zdjęć (Pakiet 1)",
            "Pakiet 2: Strefa foto + 1 godzina uroczystości",
            "100+ obrobionych zdjęć (Pakiet 2)"
          ]
        },
        studio: {
          title: "Sesja studyjna",
          price: "300 zł",
          description: "Czas trwania do 1 godziny",
          features: [
            "40+ obrobionych zdjęć",
            "Konsultacja stylizacji",
            "Pomoc w wyborze studia (studio płaci klient)"
          ]
        }
      },
      additionalInfo: {
        delivery: "Obrobione zdjęcia wysyłam przez dysk Google, zdjęcia dostępne przez 30 dni, w czasie których możesz je zapisać.",
        originals: "Wszystkie oryginały opcjonalnie przegrywam na Twoją pendrive w ciągu 3 dni po otrzymaniu obrobionych zdjęć."
      },
      mostPopular: "Najpopularniejsze",
      bookNow: "Zarezerwuj"
    },
    booking: {
      title: "Zarezerwuj sesję",
      subtitle: "Stwórzmy razem piękne wspomnienia",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeMbcQpKK4L11C0oSUDnir3rEVgfnxWjPStaZmxuePIfBeAzQ/viewform?usp=sharing&ouid=102239375901531470922",
      form: {
        name: "Imię i nazwisko",
        email: "Adres e-mail",
        phone: "Numer telefonu",
        serviceType: "Typ usługi",
        date: "Preferowana data",
        time: "Preferowana godzina",
        message: "Wiadomość (Opcjonalnie)",
        submit: "Wyślij prośbę o rezerwację",
        servicePlaceholder: "Wybierz usługę",
        timePlaceholder: "Wybierz godzinę",
        agreement: "Przesyłając ten formularz, wyrażasz zgodę na kontakt w sprawie zapytania fotograficznego.",
        validation: {
          serviceRequired: "Proszę wybrać typ usługi",
          dateRequired: "Proszę wybrać datę",
          timeRequired: "Proszę wybrać godzinę"
        },
        services: {
          portrait: "Indywidualna sesja zdjęciowa",
          family: "Rodzinna sesja zdjęciowa",
          children: "Dziecięca sesja zdjęciowa",
          wedding: "Fotografia ślubna",
          event: "Fotoreportaż z uroczystości",
          studio: "Sesja studyjna"
        }
      }
    },
    blog: {
      title: "Blog fotograficzny",
      subtitle: "Porady, historie i inspiracje zza obiektywu",
      readMore: "Czytaj więcej",
      viewAllPosts: "Zobacz wszystkie posty",
      filterBy: "Filtruj według kategorii:",
      allPosts: "Wszystkie posty",
      previous: "Poprzedni",
      next: "Następny",
      posts: [
        {
          title: "5 wskazówek do idealnych zdjęć ślubnych",
          excerpt: "Odkryj sekrety uwieczniania magicznych chwil ślubnych, które pary będą cenić na zawsze.",
          date: "15 marca 2024",
          category: "Ślub"
        },
        {
          title: "Sztuka fotografii w naturalnym świetle",
          excerpt: "Dowiedz się, jak wykorzystać naturalne światło do tworzenia oszałamiających portretów.",
          date: "8 marca 2024",
          category: "Poradnik"
        },
        {
          title: "Przewodnik przygotowania do sesji rodzinnej",
          excerpt: "Wszystko, co rodziny muszą wiedzieć, aby przygotować się do udanej i zabawnej sesji zdjęciowej.",
          date: "28 lutego 2024",
          category: "Rodzina"
        }
      ]
    },
    testimonials: {
      title: "Co mówią klienci",
      subtitle: "Historie od rodzin i par, które miałam radość fotografować",
      items: [
        {
          name: "Hanna & Michael",
          role: "Para młoda",
          content: "Wiktoria idealnie uwieczniła nasz dzień ślubu! Jej dbałość o szczegóły i umiejętność wprowadzenia nas w komfortową atmosferę zaowocowały najpiękniejszymi zdjęciami, o których mogliśmy marzyć. Każde ujęcie opowiada historię naszej miłości."
        },
        {
          name: "Jessica Tomek",
          role: "Mama dwójki dzieci",
          content: "Nasza rodzinna sesja zdjęciowa z Wiktoria była absolutnie wspaniała. Była tak cierpliwa z naszymi dziećmi i zdołała pięknie uchwycić ich osobowości. Cenimy te zdjęcia i ponownie zarezerwujemy u niej sesję!"
        },
        {
          name: "David",
          role: "Dyrektor korporacyjny",
          content: "Profesjonalizm Wiktorii i artystyczne oko sprawiły, że moja sesja portretowa przebiegła bez problemu. Zdjęcia, które dostarczyła, przekroczyły moje oczekiwania i otworzyły wiele drzwi w mojej karierze. Gorąco polecam!"
        },
        {
          name: "Anna & James",
          role: "Przyszli rodzice",
          content: "Wiktoria sprawiła, że nasza sesja ciążowa była tak wyjątkowa i komfortowa. Prowadziła nas przez każdą pozę i uwieczniła radość z tego cennego czasu w naszym życiu. Nie możemy się doczekać współpracy z nią przy zdjęciach noworodka!"
        }
      ]
    },
    contact: {
      title: "Skontaktuj się",
      subtitle: "Gotowi uwiecznić swoje wyjątkowe chwile?",
      address: "Wolsztyn, 64-200, Polska",
      phone: "Telefon",
      email: "E-mail",
      social: {
        whatsapp: "WhatsApp",
        telegram: "Telegram",
        instagram: "Instagram"
      }
    },
    footer: {
      copyright: "© 2024 Wiktoria Hushel Photography. Wszystkie prawa zastrzeżone.",
      backToTop: "Powrót na górę"
    },
    meta: {
      title: "Wiktoria Hushel - Profesjonalny fotograf",
      description: "Profesjonalny fotograf specjalizujący się w uwiecznianiu najcenniejszych życiowych chwil z artystyczną elegancją. Tworzę ponadczasowe wspomnienia, które pozostają na całe życie."
    }
  }
};
