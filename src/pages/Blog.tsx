import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";
import shilajitImage from "@/assets/product-shilajit.jpg";
import teaImage from "@/assets/product-tea.jpg";
import herbsImage from "@/assets/product-herbs.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Shilajit: Benefits, Uses & How to Choose",
    excerpt: "Discover why Shilajit has been called 'the destroyer of weakness' in Ayurvedic medicine and how to select authentic, high-quality resin.",
    image: shilajitImage,
    category: "Wellness",
    author: "Dr. Maya Patel",
    date: "January 15, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "5 Himalayan Herbs Every Wellness Enthusiast Should Know",
    excerpt: "From Ashwagandha to Tulsi, explore the powerful adaptogenic herbs that have been used for centuries in traditional medicine.",
    image: herbsImage,
    category: "Herbal Remedies",
    author: "Sarah Chen",
    date: "January 10, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "The Art of Himalayan Tea: A Journey from Leaf to Cup",
    excerpt: "Take a journey through the misty tea gardens of the Himalayas and learn what makes mountain-grown tea so special.",
    image: teaImage,
    category: "Tea Culture",
    author: "Raj Kumar",
    date: "January 5, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Building an Ayurvedic Morning Routine for Optimal Energy",
    excerpt: "Start your day with ancient wisdom. Learn how to create a morning ritual that sets you up for sustained energy and mental clarity.",
    image: heroImage,
    category: "Lifestyle",
    author: "Dr. Maya Patel",
    date: "December 28, 2025",
    readTime: "7 min read",
    featured: false,
  },
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Knowledge Center
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
              The Herboria Blog
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore articles on natural wellness, herbal remedies, and the wisdom of traditional medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to={`/blog/${featuredPost.id}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-card hover-lift">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wide mb-4">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
            Latest Articles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="bg-card rounded-2xl overflow-hidden shadow-soft hover-lift h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-medium text-gold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h4 className="font-serif text-xl font-medium text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
