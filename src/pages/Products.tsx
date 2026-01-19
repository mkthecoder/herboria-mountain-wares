import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Filter, X } from "lucide-react";
import shilajitImage from "@/assets/product-shilajit.jpg";
import teaImage from "@/assets/product-tea.jpg";
import herbsImage from "@/assets/product-herbs.jpg";

const categories = [
  { id: "all", name: "All Products" },
  { id: "shilajit", name: "Shilajit" },
  { id: "tea", name: "Herbal Teas" },
  { id: "remedies", name: "Natural Remedies" },
];

const products = [
  {
    id: 1,
    name: "Pure Himalayan Shilajit",
    category: "shilajit",
    price: 79.99,
    image: shilajitImage,
    benefits: ["Energy & Vitality", "Mineral Rich"],
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Mountain Green Tea",
    category: "tea",
    price: 24.99,
    image: teaImage,
    benefits: ["Antioxidant Rich", "Calming"],
    badge: null,
  },
  {
    id: 3,
    name: "Herbal Wellness Collection",
    category: "remedies",
    price: 54.99,
    image: herbsImage,
    benefits: ["4 Premium Herbs", "Immunity Boost"],
    badge: "New",
  },
  {
    id: 4,
    name: "Gold Grade Shilajit",
    category: "shilajit",
    price: 129.99,
    image: shilajitImage,
    benefits: ["Premium Grade", "Maximum Potency"],
    badge: "Premium",
  },
  {
    id: 5,
    name: "Himalayan Chamomile Blend",
    category: "tea",
    price: 19.99,
    image: teaImage,
    benefits: ["Sleep Support", "Relaxing"],
    badge: null,
  },
  {
    id: 6,
    name: "Ashwagandha Extract",
    category: "remedies",
    price: 34.99,
    image: herbsImage,
    benefits: ["Stress Relief", "Adaptogenic"],
    badge: null,
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Our Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
              Premium Products
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover authentic Himalayan herbs and natural wellness products, ethically sourced for your health.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            {/* Category Tabs - Desktop */}
            <div className="hidden md:flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground"
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>

            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mb-8 p-4 rounded-xl bg-card border border-border">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Categories</span>
                <button onClick={() => setShowFilters(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setShowFilters(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-secondary">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-gold-foreground text-xs font-semibold uppercase tracking-wide">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="font-serif text-2xl font-semibold text-foreground">
                        ${product.price}
                      </span>
                      <Button variant="default" size="sm" className="group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
