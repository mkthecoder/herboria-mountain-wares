import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";
import shilajitImage from "@/assets/product-shilajit.jpg";
import teaImage from "@/assets/product-tea.jpg";
import herbsImage from "@/assets/product-herbs.jpg";

const products = [
  {
    id: 1,
    name: "Pure Himalayan Shilajit",
    category: "Shilajit",
    price: 22500,
    image: shilajitImage,
    benefits: ["Energy & Vitality", "Mineral Rich", "Traditional Remedy"],
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Mountain Green Tea",
    category: "Herbal Teas",
    price: 7000,
    image: teaImage,
    benefits: ["Antioxidant Rich", "Calming", "Fresh Picked"],
    badge: null,
  },
  {
    id: 3,
    name: "Herbal Wellness Collection",
    category: "Natural Remedies",
    price: 15500,
    image: herbsImage,
    benefits: ["4 Premium Herbs", "Immunity Boost", "Gift Ready"],
    badge: "New",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-nature">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Our Collection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our handpicked selection of premium Himalayan herbs and natural wellness products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
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
                    {product.category}
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
                      PKR {product.price.toLocaleString()}
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

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
