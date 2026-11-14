// Título y descripción de cada página. Se usan en la página, en los metadatos y en la imagen para compartir.
// "seo" es lo que muestran Google y las redes: título con palabras clave y descripción de hasta ~160 caracteres.

export const pages = {
  home: {
    title: "Inicio",
    seo: {
      title: "Tiempo & Marca | Equipo de running en Lomas de Zamora",
      description:
        "Entrenamiento de running en la pista del Parque Municipal de Lomas de Zamora. Grupos presenciales, planes a distancia y clase de prueba.",
    },
    description:
      "Entrenamiento integral de running en la pista de atletismo del Parque Municipal de Lomas de Zamora. Para correr tu primera carrera, bajar tu marca o simplemente moverte más y mejor.",
  },
  runningTeam: {
    title: "TyM Running Team",
    seo: {
      title: "Running team en Lomas de Zamora",
      description:
        "Grupos de running en el Parque Municipal de Lomas de Zamora y planes a distancia. Precios, horarios y cómo sumarte al equipo.",
    },
    description:
      "Un plan pensado para tu objetivo, profes que te corrigen en la pista y un grupo que te espera cada semana. En el Parque Municipal de Lomas de Zamora o a distancia, desde donde estés.",
  },
  contacto: {
    title: "Contacto",
    seo: {
      title: "Contacto y clase de prueba",
      description:
        "Dejanos tus datos y te escribimos para coordinar tu primer entrenamiento o armar tu plan a distancia.",
    },
    description:
      "Dejanos tus datos y te escribimos para coordinar tu primer entrenamiento o armar tu plan a distancia.",
  },
  herramientas: {
    title: "Herramientas para corredores",
    seo: {
      title: "Herramientas para corredores",
      description:
        "Calculadoras gratuitas para corredores: calculá tu ritmo, tu tiempo o la distancia y planificá tus entrenamientos y carreras.",
    },
    description: "Calculadoras simples para planificar tus entrenamientos y tus carreras.",
  },
} as const;
