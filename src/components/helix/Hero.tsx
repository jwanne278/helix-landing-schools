import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import micraImage from "@/assets/micra-rtu-unit.png";

export const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  DESIGNED FOR SPACE • DESTINED FOR EARTH
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Revolutionary HVAC Dehumidification for Schools
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Helix MICRA™ liquid desiccant dehumidifier retrofits seamlessly onto existing AC units, cutting power consumption by 50% while improving air quality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToSignup} className="text-lg px-8 py-6">
                Stay Informed
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToSignup} className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Power Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Few Hours</div>
                <div className="text-sm text-muted-foreground">Installation Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Zero</div>
                <div className="text-sm text-muted-foreground">Equipment Replacement</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={micraImage} 
                alt="Helix Earth MICRA dehumidifier unit installed on RTU"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
