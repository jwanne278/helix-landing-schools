
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Statistics } from "@/components/Statistics";
import { Features } from "@/components/Features";
import { ReviewsCollage } from "@/components/ReviewsCollage";
import { CallToAction } from "@/components/CallToAction";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", name: "home" },
        { id: "features", name: "how-it-works" },
        { id: "overview", name: "overview" },
        { id: "statistics", name: "statistics" },
        { id: "testimonials", name: "testimonials" }
      ];

      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Social Limits",
    "description": "Empowering you to reduce your screen time in a hyperconnected world. Block social media apps and unlock them by taking steps.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15000"
    },
    "downloadUrl": "https://apps.apple.com/au/app/social-limits/id6471964510"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Social Limits - Move More, Scroll Less"
        description="Empowering you to reduce your screen time in a hyperconnected world. Block social media apps and unlock them by taking steps. Join 15K+ users with 4.8★ rating."
        keywords="social media blocker, screen time control, digital detox, step counter app, phone addiction solution, productivity app, morning routine, healthy habits, iOS app, social media limit"
        structuredData={structuredData}
      />
      <Header activeSection={activeSection} />
      <div id="hero">
        <Hero />
      </div>
      <div id="overview">
        <Overview />
      </div>
      <div id="statistics">
        <Statistics />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <ReviewsCollage />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
