declare global {
  interface Window {
    fbq: any;
  }
}

/**
 * Dispara um evento do Meta Pixel de forma segura.
 * @param eventName Nome do evento (padrão ou personalizado)
 * @param params Parâmetros opcionais para o evento
 */
export const trackPixelEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
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
