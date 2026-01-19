import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Mountain, Award } from "lucide-react";
import sourcingImage from "@/assets/about-sourcing.jpg";
import heroImage from "@/assets/hero-mountains.jpg";

const values = [
  {
    icon: Mountain,
    title: "Mountain Sourcing",
    description: "We work directly with local communities in the Himalayas, ensuring authentic products while supporting sustainable practices.",
  },
  {
    icon: Heart,
    title: "Pure & Natural",
    description: "No additives, no fillers. Every product is 100% natural and undergoes rigorous testing for purity and potency.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Fair trade practices ensure that the communities who harvest these precious herbs receive fair compensation.",
  },
  {
    icon: Award,
    title: "Quality Promise",
    description: "Lab-tested, certified, and guaranteed. We stand behind every product with our quality guarantee.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Himalayan mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mt-3 mb-6">
              Where Ancient Wisdom Meets Modern Wellness
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              For over 15 years, we've been bridging the gap between Himalayan herbal traditions and people seeking natural wellness solutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-medium text-gold uppercase tracking-wider">
                The Beginning
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-6">
                A Journey Born from Passion
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Herboria was founded on a simple yet profound belief: that nature provides everything we need for optimal health and wellness. Our journey began in the remote villages of the Himalayas, where ancient herbal wisdom has been passed down through generations.
                </p>
                <p>
                  Witnessing the incredible power of Shilajit and traditional herbs firsthand, we knew we had to share these gifts with the world. But we also knew that authenticity matters—which is why we've built direct relationships with local harvesters who understand the land and its treasures.
                </p>
                <p>
                  Today, every Herboria product carries this legacy. From the high-altitude caves where Shilajit forms over centuries, to the organic tea gardens nestled in mountain mists, we ensure that what reaches you is pure, potent, and true to tradition.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={sourcingImage}
                    alt="Traditional herb harvesting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold text-gold-foreground px-6 py-4 rounded-xl shadow-lg">
                  <span className="font-serif text-3xl font-bold">2008</span>
                  <span className="block text-sm font-medium mt-1">Founded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              These core principles guide everything we do, from sourcing to delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-background shadow-soft hover-lift text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Join thousands who have discovered the transformative power of authentic Himalayan herbs.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/products">
              Shop Our Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
