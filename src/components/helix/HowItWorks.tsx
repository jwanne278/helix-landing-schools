import micraDoasImage from "@/assets/thought_bubble.png";
import { CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    "Quick installation by one technician in just a few hours",
    "Effortlessly connects to nearly any existing AC rooftop unit (RTU) or DOAS",
    "Pre-dehumidifies supply air before it enters your system",
    "Substantially drops the load on existing units",
    "Reduces power consumption by 50%",
    "Serviceable in minutes on the same schedule as AC maintenance"
  ];

  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: "#D8F0E3" }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Simple Installation, Powerful Results
              </h2>
              <p className="text-xl text-muted-foreground">
                The MICRA™ system integrates seamlessly with your existing HVAC infrastructure without the need for replacement or major modifications.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-[rgba(255,239,170,0.4)] border border-[#F6DA7A]/60">
              <h3 className="text-lg font-bold text-foreground mb-2">
                No Heavy Lifting Required
              </h3>
              <p className="text-muted-foreground">
                There's no need for heavy lifting equipment or additional structural support on rooftops. Installation is quick, clean, and non-disruptive to school operations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={micraDoasImage}
                alt="Helix Earth system concept illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
