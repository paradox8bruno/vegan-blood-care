import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Leaf } from "lucide-react";
import { trackPixelEvent } from "@/lib/pixel";

const HeroSection = () => {
  const handleCTAClick = () => {
    trackPixelEvent("Contact", { content_name: "Hero CTA" });
    document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-20 section-container text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-accent/80 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-8">
          <Leaf className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium font-body">Hematologia para vegetarianos</span>
        </div>
        
        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
          Sua escolha alimentar não é o problema.<br />
          A falta de acompanhamento é.
        </h1>
        
        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Cuidado médico especializado para vegetarianos, com ciência e sem julgamentos.
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-up-delay-3">
          <Button 
            variant="hero" 
            size="xl"
            onClick={handleCTAClick}
          >
            Agendar consulta online
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
