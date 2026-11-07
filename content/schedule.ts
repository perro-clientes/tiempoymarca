import type { ScheduleSlot, TrainingLocation } from "./types";

export const trainingLocation: TrainingLocation = {
  name: "Parque Municipal de Lomas de Zamora",
  venue: "Pista de atletismo",
  address: "Av. Molina Arrotea y Las Lilas",
  locality: "Lomas de Zamora",
  region: "Buenos Aires",
  country: "AR",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pista+de+atletismo+Parque+Municipal+Lomas+de+Zamora+Av.+Molina+Arrotea+y+Las+Lilas",
};

export const schedule: ScheduleSlot[] = [
  {
    id: "lun-mie-vie-1830",
    days: ["lunes", "miercoles", "viernes"],
    daysLabel: "Lun · Mié · Vie",
    time: "18:30",
    coachIds: ["marina", "florencia"],
    coachesLabel: "Marina y Florencia",
  },
  {
    id: "mar-jue-0830",
    days: ["martes", "jueves"],
    daysLabel: "Mar · Jue",
    time: "8:30",
    coachIds: ["marina"],
    coachesLabel: "Marina",
  },
  {
    id: "mar-jue-1900",
    days: ["martes", "jueves"],
    daysLabel: "Mar · Jue",
    time: "19:00",
    coachIds: ["marcelo"],
    coachesLabel: "Marcelo",
  },
  {
    id: "sab-0900",
    days: ["sabado"],
    daysLabel: "Sábados",
    time: "9:00",
    coachIds: ["marcelo"],
    coachesLabel: "Marcelo",
  },
];
