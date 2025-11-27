import { Droplets, Wind, Snowflake, Wallet } from "lucide-react";

const painPoints = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Poor humidity control spoils inventory"
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Poor air quality & odors from improper ventilation"
  },
  {
    icon: <Snowflake className="w-6 h-6" />,
    title: "Overcooling to manage mold and moisture"
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "AC equipment costs have tripled since 2022"
  }
];

export const PainPoints = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary-foreground/70">
              Humidity challenge
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Humidity is very challenging to handle for buildings
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Up to 80% of energy wasted
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              With conventional AC technologies due to humidity loads alone.
            </p>

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-card border border-border shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                    {point.icon}
                  </div>
                  <p className="text-base md:text-lg text-foreground leading-relaxed">
                    {point.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-border bg-card shadow-2xl p-8">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] text-center">
                Energy Breakdown
              </p>
              <div className="mt-6 h-80 rounded-[32px] bg-gradient-to-b from-accent/40 to-secondary/20 p-6 flex flex-col justify-end">
                <div className="bg-[#FAD0D6] rounded-3xl p-6 text-center shadow-lg">
                  <div className="text-5xl font-bold text-[#C21E45]">80%</div>
                  <p className="mt-2 text-lg text-[#C21E45] font-semibold">Humidity Load</p>
                </div>
                <div className="mt-6 bg-[#C7E4FF] rounded-3xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-[#0C65C7]">20%</div>
                  <p className="mt-1 text-base text-[#0C65C7] font-semibold">Cooling Load</p>
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Addressing humidity first eliminates the most expensive part of climate control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

