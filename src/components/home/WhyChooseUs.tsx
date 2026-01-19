import { Sparkles, Heart, Users, Award } from "lucide-react";
import sourcingImage from "@/assets/about-sourcing.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Ancient Wisdom",
    description: "Time-honored Ayurvedic traditions passed down through generations of mountain healers.",
  },
  {
    icon: Heart,
    title: "Pure & Authentic",
    description: "Every product is sourced directly from pristine Himalayan regions, ensuring maximum potency.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We support local farming communities with fair trade practices and sustainable harvesting.",
  },
  {
    icon: Award,
    title: "Quality Promise",
    description: "Rigorous testing and certification ensure you receive only the finest natural products.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={sourcingImage}
                alt="Traditional herb harvesting in the Himalayas"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-gold text-gold-foreground px-6 py-4 rounded-xl shadow-lg">
              <span className="font-serif text-3xl font-bold">15+</span>
              <span className="block text-sm font-medium mt-1">Years of Excellence</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Why Herboria
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-6">
              Nature's Best, <br />
              <span className="text-primary">Delivered Pure</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              At Herboria, we bridge the gap between ancient herbal wisdom and modern wellness. 
              Our commitment to authenticity means you receive products exactly as nature intended—
              pure, potent, and powerful.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
