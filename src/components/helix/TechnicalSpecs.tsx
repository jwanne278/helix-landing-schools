import { Gauge, Droplets, Wind, Zap } from "lucide-react";

export const TechnicalSpecs = () => {
  const specs = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Liquid Desiccant Technology",
      description: "Advanced dehumidification using proven space-grade desiccant systems"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Compatible Systems",
      description: "Works with AC rooftop units (RTU) and dedicated outdoor air systems (DOAS)"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power Efficiency",
      description: "50% reduction in power consumption through pre-dehumidification"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Available Capacities",
      description: "5-ton and 10-ton units to match your school's needs"
    }
  ];

  return (
    <section id="specs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-muted-foreground">
            Engineered for performance, designed for seamless integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                {spec.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {spec.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5 & 10</div>
              <div className="text-sm text-muted-foreground">Ton Options Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Minutes</div>
              <div className="text-sm text-muted-foreground">Maintenance Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Downtime Required</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
