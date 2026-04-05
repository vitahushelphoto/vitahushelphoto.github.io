import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogSection = () => {
  const { t, language } = useLanguage();

  const posts = [
    {
      title: t.blog.posts[0].title,
      description: t.blog.posts[0].excerpt,
      image: "/assets/blog/wedding-tips.jpg",
      slug: "post-1",
    },
    {
      title: t.blog.posts[1].title,
      description: t.blog.posts[1].excerpt,
      image: "/assets/blog/natural-light.jpg",
      slug: "post-2",
    },
    {
      title: t.blog.posts[2].title,
      description: t.blog.posts[2].excerpt,
      image: "/assets/blog/family-guide.jpg",
      slug: "post-3",
    },
  ];

  return (
  <section className="py-10 px-4 md:px-12 lg:px-24" id="blog">
    <h2 className="text-3xl font-bold mb-6">{t.nav.blog}</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map(({ title, description, image, slug }) => (
        <Card key={slug} className="overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <Button variant="outline" asChild>
              <a
                href={`/blog/${slug}.html?lang=${language}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.blog.readMore}: ${title}`}
              >
                {t.blog.readMore}
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
  );
};

export default BlogSection;
export { BlogSection };
