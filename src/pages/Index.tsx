import { SEO } from "@/components/SEO";
import { Header } from "@/components/helix/Header";
import { Hero } from "@/components/helix/Hero";
import { Benefits } from "@/components/helix/Benefits";
import { HowItWorks } from "@/components/helix/HowItWorks";
import { TechnicalSpecs } from "@/components/helix/TechnicalSpecs";
import { SignUpCTA } from "@/components/helix/SignUpCTA";
import { Footer } from "@/components/helix/Footer";
import { PainPoints } from "@/components/helix/PainPoints";
import { SimpleInstall } from "@/components/helix/SimpleInstall";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Helix MICRA Dehumidifier",
    "description": "Revolutionary liquid desiccant dehumidifier retrofit for schools. Save 50% on power costs with easy installation.",
    "brand": {
      "@type": "Brand",
      "name": "Helix Earth Technologies"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Helix Earth Technologies - HVAC Dehumidification for Schools"
        description="Revolutionary liquid desiccant dehumidifier retrofit for schools. Save 50% on power costs with easy installation. Designed for space, destined for Earth."
        keywords="HVAC dehumidifier, school HVAC, liquid desiccant, retrofit, energy efficiency, sustainable HVAC, school facilities"
        url="https://helixearth.com"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <SimpleInstall />
        <Benefits />
        <HowItWorks />
        <TechnicalSpecs />
        <SignUpCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
