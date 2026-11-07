export const siteConfig = {
  name: "Tiempo & Marca",
  tagline: "Equipo de entrenamiento · Lomas de Zamora",
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Running Team", href: "/running-team" },
    { label: "Contacto", href: "/contacto" },
  ],
  footerNav: [
    { label: "Inicio", href: "/" },
    { label: "Running Team y planes", href: "/running-team" },
    { label: "Contacto", href: "/contacto" },
  ],
  legalNav: [
    { label: "Términos y condiciones", href: "/terminos" },
    { label: "Política de privacidad", href: "/privacidad" },
  ],
  trialCta: { label: "Probá una clase", href: "/contacto" },
  contact: {
    email: "equipotiempoymarca@gmail.com",
    whatsapp: {
      display: "11 3123-5523",
      e164: "+5491131235523",
      url: "https://wa.me/5491131235523",
      // Florencia Acosta atiende los planes a distancia por este número.
      owner: "Florencia Acosta",
    },
    instagram: { handle: "@tiempoymarca", url: "https://www.instagram.com/tiempoymarca/" },
    instagramCursos: {
      handle: "@cursostiempoymarca",
      url: "https://www.instagram.com/cursostiempoymarca/",
    },
  },
  credits: {
    prefix: "Diseñado y mantenido por",
    name: "PERRO Agency",
    url: "https://www.perroagency.com",
  },
} as const;

export type NavItem = { label: string; href: string };
