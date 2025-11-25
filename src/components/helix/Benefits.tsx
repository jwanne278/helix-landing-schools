import { DollarSign, Leaf, CheckCircle2, Wrench, TrendingDown } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Easy Retrofit",
      description: "One technician, few hours, no heavy equipment. Connects to nearly any existing RTU or DOAS system."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Low Cost",
      description: "No need to replace existing units or add structural support. Minimal installation costs and disruption."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "50% Power Reduction",
      description: "Pre-dehumidifies supply air, substantially dropping the load on existing units and lowering power needs."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable",
      description: "Liquid desiccant technology designed for space applications, now helping schools reduce their carbon footprint."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Fully Compliant",
      description: "Meets all school facility requirements while improving indoor air quality for students and staff."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why School Boards Choose MICRA™
          </h2>
          <p className="text-xl text-muted-foreground">
            Retrofit, low-cost, valuable, sustainable, and compliant solutions for modern school facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
