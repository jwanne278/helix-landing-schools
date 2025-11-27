import { Building2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <div className="text-primary-foreground font-bold text-xl">H</div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Helix Earth</h1>
            <p className="text-xs text-muted-foreground">MICRA™ Dehumidification Systems</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Benefits
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#specs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Specifications
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <a href="#Our Story" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Our Story
          </a>
        </nav>
      </div>
    </header>
  );
};
