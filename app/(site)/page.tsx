import Image from "next/image";
import { FileDown, MonitorPlay, PlayCircle } from "lucide-react";
import { CoachesList } from "@/components/site/coaches-list";
import { CtaBanner } from "@/components/site/cta-banner";
import { CtaLink } from "@/components/site/cta-link";
import { Eyebrow } from "@/components/site/eyebrow";
import { FaqList } from "@/components/site/faq-list";
import { ObjectiveCards } from "@/components/site/objective-cards";
import { LocationCard, ScheduleGrid } from "@/components/site/schedule";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { SplitHero } from "@/components/site/split-hero";
import { StepsList } from "@/components/site/steps";
import { coaches, coachesIntro } from "@/content/coaches";
import { homeFaqs } from "@/content/faqs";
import { objectives } from "@/content/objectives";
import { schedule, trainingLocation } from "@/content/schedule";
import { siteConfig } from "@/lib/site-config";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const heroDescription = pages.home.description;

export const metadata = pageMetadata({ description: heroDescription, path: "/" });

const classSteps = [
  {
    title: "Clase de prueba",
    description: "Venís, entrenás con el grupo y charlamos sobre tu experiencia y lo que querés lograr.",
  },
  {
    title: "Entrada en calor",
    description:
      "Preparamos el cuerpo para el entrenamiento. Combinamos trote, movilidad articular, elongación dinámica, activación de zona media y ejercicios de técnica de carrera.",
  },
  {
    title: "Bloque principal",
    description:
      "El estímulo del día. Pasadas, cambios de ritmo, sprints, trotes o trabajos específicos, siempre adaptados a tu nivel y tus objetivos.",
  },
  {
    title: "Vuelta a la calma",
    description:
      "Terminamos con ejercicios de elongación y un momento para compartir, charlar y conectar con tus compañeros. Porque entrenar también es disfrutar del grupo.",
  },
];

const courseFormat = [
  { icon: MonitorPlay, label: "Curso 100% online" },
  { icon: PlayCircle, label: "6 clases grabadas para que mires cuando quieras" },
  { icon: FileDown, label: "PDF con filminas para descargar" },
];

export default function HomePage() {
  return (
    <>
      <SplitHero
        tone="brand"
        imageStyle="bleed"
        eyebrow={<Eyebrow className="text-white">Equipo de entrenamiento · Lomas de Zamora</Eyebrow>}
        title={
          <>
            Corré mejor.
            <br />
            Corré en equipo.
          </>
        }
        description={heroDescription}
        actions={
          <>
            <CtaLink href="/contacto">Reservá tu clase de prueba</CtaLink>
            <CtaLink href="/running-team" variant="outline">
              Conocé el Running Team
            </CtaLink>
          </>
        }
        footnote={
          <p className="max-w-md text-sm">
            La primera clase es para conocernos: entrenás con el grupo y charlás con los profes sobre tu experiencia y tus objetivos.
          </p>
        }
        image={{
          src: "/images/hero-circuito.jpg",
          alt: "Grupo de Tiempo & Marca entrenando en un circuito de vallas y conos en el pasto, junto a la bandera del equipo",
          width: 2000,
          height: 1500,
        }}
      />

      <Section>
        <SectionHeading
          layout="split"
          eyebrow="¿Para qué entrenás?"
          title="Un plan para cada objetivo"
          description="Adaptamos las rutinas a lo que buscás: competir en calle o en pista, o hacer actividad física para sentirte mejor."
        />
        <div className="mt-12">
          <ObjectiveCards items={objectives} />
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[592/520] overflow-hidden rounded-[28px]">
            <Image
              src="/images/clase-vallas.jpg"
              alt="Corredora haciendo un ejercicio de técnica sobre vallas bajas mientras el grupo observa"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Cómo entrenamos"
              title="¿Cómo es una clase con nosotros?"
              description="Hacemos un entrenamiento integral que trabaja resistencia, fuerza, velocidad y flexibilidad. Cada integrante entrena con su objetivo."
            />
            <StepsList steps={classSteps} />
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          layout="split"
          eyebrow="Grupos presenciales"
          title="Días y horarios"
          description="Nos encontramos dentro de la pista de atletismo del Parque Municipal de Lomas de Zamora. Elegí el grupo que mejor se adapte a tu semana."
        />
        <div className="mt-10 flex flex-col gap-4">
          <ScheduleGrid slots={schedule} />
          <LocationCard location={trainingLocation} />
        </div>
        <div className="mt-8 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-on-dark">
            ¿Querés saber cuánto sale, qué incluye y cómo sumarte? Todo está en la página del Running Team.
          </p>
          <CtaLink href="/running-team" variant="outline" className="shrink-0">
            Ver planes y precios
          </CtaLink>
        </div>
      </Section>

      <Section tone="pink">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Cursos Tiempo & Marca" title="Las bases del entrenamiento de la resistencia" />
            <ul aria-label="Formato del curso" className="flex flex-col gap-3">
              {courseFormat.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4 rounded-2xl bg-white p-4 font-bold">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-pink text-bordo">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 text-lead text-muted-foreground">
              <p>El curso te brinda las herramientas básicas para poder crear tus entrenamientos:</p>
              <p>
                Los principios que te guían en la planificación están en el módulo I, los diferentes métodos para
                entrenar la resistencia en el módulo II y los posibles test para evaluar en el módulo III.
              </p>
              <p>
                En el módulo IV están los contenidos necesarios para generar un plan de entrenamiento integral a
                través de la incorporación de la técnica, la fuerza, la velocidad y la flexibilidad.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <CtaLink href="/contacto">Quiero info del curso</CtaLink>
              <CtaLink href={siteConfig.contact.whatsapp.url} variant="outline">
                Consultar por WhatsApp
              </CtaLink>
              <a
                href={siteConfig.contact.instagramCursos.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-bold text-bordo underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {siteConfig.contact.instagramCursos.handle}
              </a>
            </div>
          </div>
          <div className="relative aspect-[562/680] overflow-hidden rounded-[28px]">
            <Image
              src="/images/tecnica-carrera.jpg"
              alt="Profesora dando una explicación a un grupo sentado en el pasto de la pista"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[642/520] overflow-hidden rounded-[28px]">
            <Image
              src="/images/profes.jpg"
              alt="Marina, Florencia y Marcelo, los profes de Tiempo & Marca, con la remera del equipo en la pista"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Quiénes somos" title="Los profes" description={coachesIntro} />
            <CoachesList coaches={coaches} />
          </div>
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <SectionHeading layout="center" eyebrow="Preguntas frecuentes" title="Lo que más nos preguntan" />
        <div className="mt-10">
          <FaqList items={homeFaqs} />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
