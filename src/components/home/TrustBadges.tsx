import { Leaf, Mountain, FlaskConical, ShieldCheck } from "lucide-react";

const badges = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure, organic ingredients with no artificial additives",
  },
  {
    icon: Mountain,
    title: "Mountain Sourced",
    description: "Ethically harvested from Himalayan highlands",
  },
  {
    icon: FlaskConical,
    title: "Lab Tested",
    description: "Third-party verified for purity and potency",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Traditional methods meet modern standards",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-background shadow-soft hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
