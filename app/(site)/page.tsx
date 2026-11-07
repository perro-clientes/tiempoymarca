import Image from "next/image";
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
import { pageMetadata } from "@/lib/metadata";

const heroDescription =
  "Entrenamiento integral de running en la pista de atletismo del Parque Municipal de Lomas de Zamora. Para correr tu primera carrera, bajar tu marca o simplemente moverte más y mejor.";

export const metadata = pageMetadata({ description: heroDescription, path: "/" });

const classSteps = [
  {
    title: "Clase de prueba",
    description: "Venís, entrenás con el grupo y charlamos sobre tu experiencia y lo que querés lograr.",
  },
  {
    title: "Entrada en calor y técnica",
    description: "ABC de carrera: skipping, talones a la cola, tijeras y sus variantes, con y sin elementos.",
  },
  {
    title: "Bloque principal",
    description: "El estímulo del día: pasadas, fondos o cambios de ritmo, progresivos y adaptados a tu nivel.",
  },
  {
    title: "Fuerza y flexibilidad",
    description: "Trabajo complementario para rendir más y reducir el riesgo de lesiones.",
  },
];

const techniqueBenefits = [
  { title: "Zancada más eficiente", description: "Aprovechás todos tus recursos físicos." },
  { title: "Más velocidad", description: "Biomecánica bien aplicada." },
  { title: "Economía de movimiento", description: "Menos gasto de energía, menos fatiga." },
  { title: "Menos lesiones", description: "Corregís vicios de técnica a tiempo." },
];

const techniqueDrills = ["Skipping", "Talones a la cola", "Tijeras", "Tándem", "Braceo", "Técnica circular y pendular"];

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
            <SectionHeading
              eyebrow="Cursos Tiempo & Marca"
              title="Técnica de carrera"
              description="Un curso de Marina Fernández y Florencia Acosta para entender cómo corrés y corregirlo: de las fases de la zancada al ABC de carrera, con estrategias de corrección para corredores y entrenadores."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {techniqueBenefits.map((item) => (
                <li key={item.title} className="rounded-2xl bg-white p-5">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
            <ul aria-label="Contenidos del ABC de carrera" className="flex flex-wrap gap-2">
              {techniqueDrills.map((drill) => (
                <li key={drill} className="rounded-full border-[1.5px] border-bordo px-4 py-2 text-sm font-medium text-bordo">
                  {drill}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-5">
              <CtaLink href="/contacto">Quiero info del curso</CtaLink>
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
              alt="Profesora explicando técnica de carrera a un grupo sentado en el pasto de la pista"
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
