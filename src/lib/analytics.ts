declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: any;
  }
}

/**
 * Dispara eventos para Google Analytics (GA4) e Meta Pixel simultaneamente.
 * @param eventName Nome do evento
 * @param params Parâmetros extras (opcional)
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  // Google Analytics Tracking
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  } else {
    console.log(`[GA4 Mock]: Evento ${eventName} disparado`, params);
  }

  // Meta Pixel Tracking
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("track", eventName);
    }
  } else {
    console.log(`[Pixel Mock]: Evento ${eventName} disparado`, params);
  }
};

/**
 * Atalho específico para conversões de contato/lead.
 */
export const trackLead = (source: string) => {
  trackEvent("Lead", { 
    content_name: source,
    event_category: "Engagement",
    event_label: source 
  });
};

export const trackContact = (source: string) => {
  trackEvent("Contact", { 
    content_name: source,
    event_category: "Conversion",
    event_label: source 
  });
};
