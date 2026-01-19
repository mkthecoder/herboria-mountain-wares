import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Wellness Coach",
    content: "The quality of Herboria's Shilajit is unmatched. I've tried many brands, but the energy and clarity I get from their product is remarkable. My clients love it too!",
    rating: 5,
    avatar: "SM",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Fitness Enthusiast",
    content: "Finally found a brand I can trust for authentic Himalayan herbs. The sourcing transparency and lab testing gives me complete confidence in what I'm consuming.",
    rating: 5,
    avatar: "DC",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Ayurveda Practitioner",
    content: "Herboria honors the traditional methods of harvesting and preparation. As someone deeply connected to Ayurvedic practices, I appreciate their commitment to authenticity.",
    rating: 5,
    avatar: "PS",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Join thousands who have discovered the power of authentic Himalayan wellness.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/30" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-primary-foreground/10">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-lg font-medium text-gold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
