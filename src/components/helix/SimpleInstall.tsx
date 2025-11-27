import simpleImage from "@/assets/simple.png";

export const SimpleInstall = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-border/60 bg-card">
          <img
            src={simpleImage}
            alt="Quick installation overview for MICRA system"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

