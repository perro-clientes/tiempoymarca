import { siteConfig } from "@/lib/site-config";
import type { Plan } from "./types";

export const paymentMethods = ["Mercado Pago", "transferencia"] as const;

// Los precios solo se muestran en /running-team.
export const plans: Plan[] = [
  {
    id: "grupos-presenciales",
    name: "Grupos presenciales",
    description: "Entrená en la pista con el equipo y los profes.",
    status: "disponible",
    price: 50000,
    priceLabel: "$50.000",
    period: "/ mes",
    features: [
      "Entrenamiento integral en grupo",
      "Técnica de carrera en cada clase",
      "Rutinas según tu objetivo",
      "Clase de prueba para conocernos",
    ],
    cta: { label: "Reservá tu clase de prueba", href: "/contacto", variant: "outline" },
    style: "default",
  },
  {
    id: "plan-personalizado",
    name: "Plan personalizado",
    badge: "A distancia",
    description: "Una planificación pensada para vos, tus objetivos y tu día a día.",
    status: "disponible",
    price: 60000,
    priceLabel: "$60.000",
    period: "/ bloque de 4 semanas",
    features: [
      "Adaptado a tus días, lugares (pista, calle, subidas, plaza) y experiencia",
      "Bloques de 4 semanas con guía clara de cada entrenamiento",
      "Seguimiento por WhatsApp, Garmin Connect, Runkeeper u otras apps",
      "Empezás cuando quieras, sin esperar al inicio de mes",
    ],
    // WhatsApp de Flor (Florencia Acosta).
    cta: { label: "Consultar por WhatsApp", href: siteConfig.contact.whatsapp.url, variant: "default" },
    style: "featured",
  },
  {
    id: "plan-autoguiado",
    name: "Plan autoguiado",
    badge: "Próximamente",
    description: "Una planificación prediseñada para entrenar de forma autónoma.",
    status: "proximamente",
    price: null,
    priceLabel: "[PRECIO]",
    period: "/ 4 semanas",
    features: [
      "Planes de 4 semanas para 5K y 10K",
      "Entrenás a tu tiempo, desde donde estés",
      "Sin seguimiento individual",
    ],
    cta: { label: "Avisame cuando salga", href: "/contacto", variant: "outline" },
    style: "soon",
  },
];
