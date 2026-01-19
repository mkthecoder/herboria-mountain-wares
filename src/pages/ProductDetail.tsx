import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Minus, Plus, Star, Check, ArrowLeft, Leaf, FlaskConical, Mountain } from "lucide-react";
import shilajitImage from "@/assets/product-shilajit.jpg";
import teaImage from "@/assets/product-tea.jpg";
import herbsImage from "@/assets/product-herbs.jpg";

const productData: Record<string, {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  certifications: string[];
}> = {
  "1": {
    id: 1,
    name: "Pure Himalayan Shilajit",
    category: "Shilajit",
    price: 79.99,
    image: shilajitImage,
    description: "Experience the ancient power of pure Himalayan Shilajit, carefully harvested from high-altitude rock formations above 16,000 feet. This mineral-rich resin has been used for centuries in Ayurvedic medicine to enhance energy, vitality, and overall wellness.",
    benefits: [
      "Boosts energy and reduces fatigue",
      "Supports cognitive function and mental clarity",
      "Rich in fulvic acid and 84+ minerals",
      "Promotes healthy aging",
      "Supports immune system function",
    ],
    ingredients: ["Pure Himalayan Shilajit Resin (100%)"],
    howToUse: "Dissolve a pea-sized amount (300-500mg) in warm water, milk, or tea. Take once daily, preferably in the morning on an empty stomach.",
    certifications: ["Lab Tested", "Heavy Metal Free", "Authentic Source Verified", "GMP Certified"],
  },
  "2": {
    id: 2,
    name: "Mountain Green Tea",
    category: "Herbal Teas",
    price: 24.99,
    image: teaImage,
    description: "Hand-picked from organic tea gardens nestled in the Himalayan foothills, our Mountain Green Tea offers a delicate, refreshing taste with powerful antioxidant properties. Each leaf is carefully selected and minimally processed to preserve its natural goodness.",
    benefits: [
      "Rich in natural antioxidants",
      "Supports metabolism and energy",
      "Promotes mental alertness",
      "Calming and refreshing",
    ],
    ingredients: ["Organic Himalayan Green Tea Leaves (100%)"],
    howToUse: "Steep 1 teaspoon in hot water (175°F/80°C) for 2-3 minutes. Enjoy up to 3 cups daily.",
    certifications: ["Organic Certified", "Fair Trade", "Single Origin"],
  },
  "3": {
    id: 3,
    name: "Herbal Wellness Collection",
    category: "Natural Remedies",
    price: 54.99,
    image: herbsImage,
    description: "A curated collection of four premium Himalayan herbs, each selected for their unique wellness benefits. This beautiful gift-ready set includes Ashwagandha, Tulsi, Brahmi, and Triphala—the foundation of any herbal wellness journey.",
    benefits: [
      "Complete adaptogenic support",
      "Enhances immunity naturally",
      "Promotes stress relief and balance",
      "Perfect introduction to Ayurveda",
    ],
    ingredients: ["Ashwagandha Root", "Tulsi Leaves", "Brahmi Powder", "Triphala Blend"],
    howToUse: "Follow individual herb instructions included in the set. Generally, take 1/4-1/2 teaspoon with warm water or honey.",
    certifications: ["Organic Certified", "Lab Tested", "Traditionally Sourced"],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = productData[id || "1"];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="animate-slide-in-right">
              <span className="text-sm font-medium text-gold uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(47 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-4xl font-semibold text-foreground">
                  ${product.price}
                </span>
                <span className="text-sm text-muted-foreground">+ Free shipping over $50</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-4 p-2 rounded-lg bg-secondary w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-md hover:bg-background transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-md hover:bg-background transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button variant="gold" size="lg" className="flex-1 sm:flex-none">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-border">
                {product.certifications.map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <Check className="h-3.5 w-3.5" />
                    {cert}
                  </span>
                ))}
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="font-serif text-xl font-medium text-foreground mb-4 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-serif text-xl font-medium text-foreground mb-4 flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  Ingredients
                </h3>
                <p className="text-muted-foreground">
                  {product.ingredients.join(", ")}
                </p>
              </div>

              {/* How to Use */}
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-4 flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-primary" />
                  How to Use
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.howToUse}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
