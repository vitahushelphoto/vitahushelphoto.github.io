import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

import weddingTips from '../assets/blog/wedding-tips.jpg';
import naturalLight from '../assets/blog/natural-light.jpg';
import familyGuide from '../assets/blog/family-guide.jpg';

const blogImages = [weddingTips, naturalLight, familyGuide];

const POSTS_PER_PAGE = 6;

export const Blog: React.FC = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allPosts = [
    ...t.blog.posts.map((post, index) => ({
      ...post,
      id: index + 1,
      image: blogImages[index],
      slug: `post-${index + 1}`,
      tags: index === 0 ? ['photography', 'wedding'] : index === 1 ? ['tutorial', 'lighting'] : ['family', 'preparation'],
      content: `Full content for ${post.title}...`
    })),
    ...Array.from({ length: 97 }, (_, i) => ({
      id: i + 4,
      title: `Post ${i + 4}`,
      excerpt: `This is an excerpt for blog post ${i + 4}. It provides a brief overview of photography techniques and tips that will help you improve your skills.`,
      date: `${Math.floor(Math.random() * 28) + 1} ${['January', 'February', 'March', 'April', 'May', 'June'][Math.floor(Math.random() * 6)]} 2024`,
      category: ['Wedding', 'Tutorial', 'Family'][i % 3],
      image: blogImages[i % 3],
      slug: `post-${i + 4}`,
      tags: ['photography', 'tips'],
      content: `Full content for Post ${i + 4}...`
    }))
  ];

  const filteredPosts = selectedCategory 
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const categories = Array.from(new Set(allPosts.map(post => post.category)));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">
                  {t.nav.home}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-primary transition-colors">
                  {t.blog.title}
                </Link>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-elegant font-semibold text-primary mb-6">
                {t.blog.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.blog.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                {t.blog.filterBy || 'Filter by category:'}
              </span>

              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(null)}
                className="text-xs"
              >
                {t.blog.allPosts || 'All Posts'}
              </Button>

              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                  className="text-xs"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 border-0 bg-card"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span className="px-3 py-1 bg-accent rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-elegant font-semibold text-primary mb-3 line-clamp-2 group-hover:text-charcoal transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`/blog/${post.slug}.html`}
                      className="inline-flex items-center text-primary hover:text-charcoal font-medium group/btn transition-colors duration-300"
                    >
                      {t.blog.readMore}
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t.blog.previous || 'Previous'}
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className="w-10 h-10 p-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2"
                >
                  {t.blog.next || 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};
