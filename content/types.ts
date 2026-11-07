// Tipos del contenido del sitio. El micro CRM va a leer estos mismos datos.

export type Weekday = "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado" | "domingo";

export type CoachId = "marina" | "florencia" | "marcelo";

export type Coach = {
  id: CoachId;
  name: string;
  bio: string;
};

export type TrainingLocation = {
  name: string;
  venue: string;
  address: string;
  locality: string;
  region: string;
  country: string;
  mapsUrl: string;
};

export type ScheduleSlot = {
  id: string;
  days: Weekday[];
  daysLabel: string;
  time: string;
  coachIds: CoachId[];
  coachesLabel: string;
};

export type PlanId = "grupos-presenciales" | "plan-personalizado" | "plan-autoguiado";

export type Plan = {
  id: PlanId;
  name: string;
  description: string;
  badge?: string;
  status: "disponible" | "proximamente";
  /** Precio en pesos. null mientras el precio esté pendiente. */
  price: number | null;
  priceLabel: string;
  period: string;
  features: string[];
  cta: { label: string; href: string; variant: "default" | "outline" };
  style: "default" | "featured" | "soon";
};

export type ObjectiveIcon = "calle" | "pista" | "trail" | "salud";

export type Objective = {
  id: string;
  icon: ObjectiveIcon;
  title: string;
  description: string;
};

export type Faq = { question: string; answer: string };
