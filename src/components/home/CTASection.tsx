import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-nature">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Decorative Elements */}
          <div className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-gold/10 blur-2xl" />
          <div className="absolute -bottom-10 right-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <Gift className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold">
              Free shipping on orders over $50
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Begin Your Wellness Journey
            <span className="block text-primary mt-2">With Nature's Finest</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Experience the transformative power of authentic Himalayan herbs. 
            Join our community and discover products that have been trusted for generations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="premium" size="xl" asChild>
              <Link to="/products">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-muted-foreground">
            ✓ 30-day money back guarantee &nbsp; ✓ Secure checkout &nbsp; ✓ 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
}
