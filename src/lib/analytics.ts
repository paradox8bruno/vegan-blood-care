declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Estes botões navegam até a agenda; ainda não houve contato ou reserva.
export const trackBookingStart = (position: "hero" | "agendamento") => {
  window.gtag?.("event", "agendamento_inicio", {
    canal: "doctoralia",
    posicao_cta: position,
    modalidade_pretendida: "online",
  });
};
