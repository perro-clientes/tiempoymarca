import type { Faq } from "./types";

const startAnytime =
  "¡Sí! Podés sumarte cuando quieras. El abono es mensual y comienza a contar desde tu fecha de inicio, no desde el primer día del mes.";

export const homeFaqs: Faq[] = [
  {
    question: "¿Necesito experiencia para sumarme?",
    answer:
      "¡Para nada! Tenemos corredores de todos los niveles. Adaptamos cada entrenamiento a tu experiencia y objetivos, incluso si estás dando tus primeros pasos.",
  },
  {
    question: "¿Puedo probar?",
    answer:
      "Obvio. Podés venir a una clase de prueba, entrenar con el grupo y conocer nuestra forma de trabajar antes de decidir sumarte.",
  },
  {
    question: "¿Dónde entrenan?",
    answer:
      "En el parque de Lomas. Nos encontramos dentro de la pista de atletismo, en el sector de las mesas.",
  },
  {
    question: "¿Cómo empiezo un plan a distancia?",
    answer:
      "Contactate con nosotros para conversar sobre tus objetivos y comenzar con una planificación personalizada.",
  },
  { question: "¿Puedo empezar en cualquier momento del mes?", answer: startAnytime },
];
