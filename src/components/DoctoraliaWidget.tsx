import { useEffect } from "react";

const DoctoraliaWidget = () => {
  useEffect(() => {
    // Load the Doctoralia widget script
    if (!document.getElementById("zl-widget-s")) {
      const script = document.createElement("script");
      script.id = "zl-widget-s";
      script.src = "https://platform.docplanner.com/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="agendar" className="py-16 md:py-24 bg-accent/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-2xl md:text-3xl mb-8">
            Agende sua consulta
          </h2>
          <div className="flex justify-center">
            <a
              id="zl-url"
              className="zl-url"
              href="https://www.doctoralia.com.br/marina-steffli-machado/hematologista/sao-jose"
              rel="nofollow"
              data-zlw-doctor="marina-steffli-machado"
              data-zlw-type="big_with_calendar"
              data-zlw-opinion="false"
              data-zlw-hide-branding="true"
              data-zlw-saas-only="true"
              data-zlw-a11y-title="Widget de marcação de consultas médicas"
            >
              Marina Steffli Machado - Doctoralia.com.br
            </a>
          </div>
          <a
            className="inline-flex min-h-11 items-center justify-center mt-6 text-primary underline underline-offset-4 font-body"
            href="https://www.doctoralia.com.br/marina-steffli-machado/hematologista/sao-jose"
            target="_blank"
            rel="noopener noreferrer"
            data-agendamento="true"
            data-posicao-cta="agendamento"
            data-modalidade-pretendida="online"
          >
            Abrir agenda no Doctoralia
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctoraliaWidget;
