import { useEffect } from "react";
import { trackPixelEvent } from "@/lib/pixel";

const DoctoraliaWidget = () => {
  useEffect(() => {
    // Load the Doctoralia widget script
    if (!document.getElementById("zl-widget-s")) {
      const script = document.createElement("script");
      script.id = "zl-widget-s";
      script.src = "//platform.docplanner.com/js/widget.js";
      document.body.appendChild(script);
    }
  }, []);

  const handleLeadClick = () => {
    trackPixelEvent("Lead", { content_name: "Doctoralia Widget" });
  };

  return (
    <section id="agendar" className="py-16 md:py-24 bg-accent/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-2xl md:text-3xl mb-8">
            Agende sua consulta
          </h2>
          <div className="flex justify-center" onClick={handleLeadClick}>
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
        </div>
      </div>
    </section>
  );
};

export default DoctoraliaWidget;
