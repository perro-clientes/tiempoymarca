import type { Faq } from "./types";

// Las respuestas no figuran en el diseño aprobado: quedan pendientes (ver TODO.md).
const pending = "[RESPUESTA]";

export const homeFaqs: Faq[] = [
  { question: "¿Necesito experiencia para sumarme?", answer: pending },
  { question: "¿Puedo probar antes de inscribirme?", answer: pending },
  { question: "¿Dónde entrenan?", answer: pending },
  { question: "¿Cuándo empiezo un plan a distancia?", answer: pending },
  { question: "¿Cómo es el seguimiento a distancia?", answer: pending },
  { question: "¿Cuánto cuesta y cómo se paga?", answer: pending },
  { question: "¿Necesito apto médico?", answer: pending },
];

export const teamFaqs: Faq[] = [
  { question: "¿Qué incluye la cuota presencial?", answer: pending },
  { question: "¿Cómo y cuándo se paga?", answer: pending },
  { question: "¿Puedo empezar a mitad de mes?", answer: pending },
  { question: "¿La clase de prueba tiene costo?", answer: pending },
];
