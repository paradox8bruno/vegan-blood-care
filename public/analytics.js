(() => {
  if (!['www.dramarinasteffli.com.br', 'lp.dramarinasteffli.com.br'].includes(location.hostname) || navigator.globalPrivacyControl || navigator.doNotTrack === '1') return;

  const config = window.siteTracking || {};
  const contacts = window.siteContactTargets || {};
  const ga4Ids = [...new Set([config.ga4Id, config.additionalGa4Id].filter((id) => /^G-[A-Z0-9]+$/.test(id || '')))];
  const ga4Id = ga4Ids[0] || '';
  const adsId = /^AW-\d+$/.test(config.googleAdsId || '') ? config.googleAdsId : '';
  const adsLabel = /^[A-Za-z0-9_-]+$/.test(config.googleAdsConversionLabel || '') ? config.googleAdsConversionLabel : '';
  const pixelId = /^\d+$/.test(config.metaPixelId || '') ? config.metaPixelId : '';
  let gtag;
  let fbq;

  if (ga4Id || adsId) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag = window.gtag;
    gtag('js', new Date());
    for (const id of ga4Ids) gtag('config', id, { allow_google_signals: false, allow_ad_personalization_signals: false });
    if (adsId) gtag('config', adsId, { allow_ad_personalization_signals: false });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + (ga4Id || adsId);
    document.head.append(script);
  }

  if (pixelId) {
    fbq = window.fbq = function () {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    fbq('set', 'autoConfig', false, pixelId);
    fbq('init', pixelId);
    fbq('track', 'PageView');
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.append(script);
  }

  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  const vercelScript = document.createElement('script');
  vercelScript.defer = true;
  vercelScript.src = '/_vercel/insights/script.js';
  document.head.append(vercelScript);

  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
  const speedScript = document.createElement('script');
  speedScript.defer = true;
  speedScript.src = '/_vercel/speed-insights/script.js';
  document.head.append(speedScript);

  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href]');
    if (!link || link.dataset.agendamento !== 'true') return;
    const url = new URL(link.href);
    let channel;
    if (url.origin + url.pathname === contacts.doctoralia && !url.hash) channel = 'doctoralia';
    if (url.origin + url.pathname === contacts.viverWhatsapp || link.href === contacts.viverPhone) channel = 'viver';
    if (link.href === contacts.unimedPhone) channel = 'unimed';
    if (!channel) return;
    const position = ['cabecalho', 'rodape', 'hero', 'agendamento', 'artigo', 'atendimento', 'pagina'].includes(link.dataset.posicaoCta) ? link.dataset.posicaoCta : 'pagina';
    const modality = channel === 'doctoralia' ? 'online' : channel === 'viver' ? 'presencial_florianopolis' : 'presencial_sao_jose';
    if (gtag) gtag('event', 'agendamento_click', { canal: channel, posicao_cta: position, modalidade_pretendida: modality });
    if (gtag && adsId && adsLabel) gtag('event', 'conversion', { send_to: adsId + '/' + adsLabel });
    if (fbq) fbq('track', 'Contact', { canal: channel });
  });
})();
