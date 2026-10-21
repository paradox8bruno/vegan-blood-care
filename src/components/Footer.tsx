import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary border-t border-border">
      <div className="section-container py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-semibold text-foreground">
              Dra. Marina Steffli
            </span>
          </div>
          
          {/* Info */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm font-body">
              Médica Hematologista • CRM SC 22884 • RQE 18744
            </p>
            <p className="text-muted-foreground text-sm font-body">
              © 2026 Todos os direitos reservados
            </p>
            <a className="inline-flex min-h-11 items-center text-muted-foreground text-sm font-body underline underline-offset-4" href="https://www.dramarinasteffli.com.br/privacidade">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
