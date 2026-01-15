import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles } from "lucide-react";
import { trackPixelEvent } from "@/lib/pixel";

const FinalCTASection = () => {
  const handleCTAClick = () => {
    trackPixelEvent("Contact", { content_name: "Final CTA" });
    document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust badges */}
          <div className="flex justify-center gap-8 mb-10">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground font-body">Respeito</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground font-body">Segurança</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground font-body">Ciência</span>
            </div>
          </div>
          
          {/* Headline */}
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
            Aqui, sua escolha alimentar é respeitada.
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto font-body">
            Agende sua consulta e comece a cuidar da sua saúde sanguínea com quem entende 
            e respeita o seu estilo de vida.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="xl" 
            className="mb-6"
            onClick={handleCTAClick}
          >
            Agende sua consulta online
          </Button>
          
          {/* Reassurance */}
          <p className="text-muted-foreground text-sm font-body">
            Atendimento particular • Online • Com ciência e sem julgamentos
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
