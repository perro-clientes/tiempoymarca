import Image from "next/image";
import { Calendar, Clock, MapPin, MessageCircle, PersonStanding, Target, Users, Zap } from "lucide-react";
import { Instagram } from "lucide-react";
import { BeforeAfterCards } from "@/components/site/before-after-cards";
import { CtaBanner } from "@/components/site/cta-banner";
import { CtaLink } from "@/components/site/cta-link";
import { Eyebrow } from "@/components/site/eyebrow";
import { FaqList } from "@/components/site/faq-list";
import { FeatureGrid } from "@/components/site/feature-grid";
import { PlanCard } from "@/components/site/plan-card";
import { ScheduleGrid } from "@/components/site/schedule";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { SplitHero } from "@/components/site/split-hero";
import { StepsRow } from "@/components/site/steps";
import { teamFaqs } from "@/content/faqs";
import { plans } from "@/content/plans";
import { schedule } from "@/content/schedule";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

const heroDescription =
  "Un plan pensado para tu objetivo, profes que te corrigen en la pista y un grupo que te espera cada semana. En el Parque Municipal de Lomas de Zamora o a distancia, desde donde estés.";

export const metadata = pageMetadata({
  title: "TyM Running Team",
  description: heroDescription,
  path: "/running-team",
});

const beforeAfter = [
  { before: "Planes genéricos de internet", after: "Rutinas según tu objetivo y tu nivel" },
  { before: "Postergar el entrenamiento", after: "Un grupo que te espera en la pista" },
  { before: "Vicios de técnica sin corregir", after: "Profes que te miran y te corrigen" },
  { before: "Llegar sola o solo a la meta", after: "Carreras compartidas con el equipo" },
];

const benefits = [
  { icon: Zap, title: "Entrenamiento integral", description: "Resistencia, fuerza, velocidad y flexibilidad en cada semana." },
  { icon: PersonStanding, title: "Técnica de carrera", description: "ABC de carrera y correcciones en cada clase." },
  { icon: Target, title: "Tu objetivo, tu plan", description: "Calle, pista o actividad recreativa: adaptamos las rutinas a lo que buscás." },
  { icon: Users, title: "Comunidad", description: "Carreras, medallas y un grupo que se acompaña dentro y fuera de la pista." },
  { icon: MessageCircle, title: "Seguimiento cercano", description: "A distancia, devoluciones por WhatsApp, Garmin Connect o Runkeeper." },
  { icon: Calendar, title: "Empezás cuando quieras", description: "Clase de prueba para conocernos y bloques que arrancan el día que vos arrancás." },
];

const joinSteps = [
  { title: "Escribinos", description: "Completá el formulario o mandanos un WhatsApp." },
  { title: "Vení a la clase de prueba", description: "Entrenás con el grupo y charlás con los profes sobre tus objetivos." },
  { title: "Elegí tu grupo o plan", description: "Presencial en la pista o personalizado a distancia." },
  { title: "Pagás y arrancás", description: "Con Mercado Pago o transferencia." },
];

const gallery = [
  { src: "/images/galeria-expo.jpg", alt: "El equipo de Tiempo & Marca reunido con sus medallas en la Expo de una carrera" },
  { src: "/images/hero-circuito.jpg", alt: "Grupo entrenando en un circuito de vallas en el pasto junto a la bandera del equipo" },
  { src: "/images/galeria-profes.jpg", alt: "Los tres profes de Tiempo & Marca con la campera del equipo en la pista de atletismo" },
];

export default function RunningTeamPage() {
  return (
    <>
      <SplitHero
        tone="dark"
        eyebrow={<Eyebrow variant="pill">TyM Running Team</Eyebrow>}
        title={
          <>
            No entrenes solo.
            <br />
            Corré en equipo.
          </>
        }
        description={heroDescription}
        actions={
          <>
            <CtaLink href="/contacto">Quiero sumarme</CtaLink>
            <CtaLink href="#planes" variant="outline">
              Ver planes y precios
            </CtaLink>
          </>
        }
        footnote={
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-dark">
            <li className="flex items-center gap-2">
              <MapPin aria-hidden className="size-4" />
              Pista del Parque Municipal, Lomas de Zamora
            </li>
            <li className="flex items-center gap-2">
              <Clock aria-hidden className="size-4" />4 grupos, de lunes a sábado
            </li>
          </ul>
        }
        image={{
          src: "/images/team-hero.jpg",
          alt: "Integrantes de Tiempo & Marca posando con la bandera del equipo y sus medallas en el parque",
          width: 1028,
          height: 877,
        }}
      />

      <Section>
        <SectionHeading eyebrow="Por qué en equipo" title={<>Correr solo cuesta. En equipo, se sostiene.</>} />
        <div className="mt-12">
          <BeforeAfterCards items={beforeAfter} />
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[592/700] overflow-hidden rounded-[28px]">
            <Image
              src="/images/team-incluye.jpg"
              alt="Profe de espaldas con la remera del equipo mientras el grupo aplaude en la pista"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="Qué incluye" title="Ser parte del team" />
            <FeatureGrid items={benefits} />
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          layout="split"
          eyebrow="Grupos presenciales"
          title="Días y horarios"
          description="Pista de atletismo del Parque Municipal de Lomas de Zamora · Av. Molina Arrotea y Las Lilas."
        />
        <div className="mt-10">
          <ScheduleGrid slots={schedule} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Cómo sumarte" title="En cuatro pasos estás corriendo" />
        <StepsRow steps={joinSteps} className="mt-12" />
      </Section>

      <Section id="planes" className="pt-0 md:pt-0">
        <SectionHeading
          layout="center"
          eyebrow="Planes"
          title="Entrená en pista o desde donde estés"
          description="Pagás con Mercado Pago o transferencia."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading layout="split" eyebrow="La comunidad" title="Más que un grupo de running">
          <CtaLink href={siteConfig.contact.instagram.url} variant="outline" size="default" className="w-fit shrink-0">
            <Instagram aria-hidden />
            Seguinos en {siteConfig.contact.instagram.handle}
          </CtaLink>
        </SectionHeading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {gallery.map((photo) => (
            <li key={photo.src} className="relative aspect-[402/340] overflow-hidden rounded-3xl">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </li>
          ))}
        </ul>
        <blockquote className="mx-auto mt-16 max-w-3xl text-center font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] font-extrabold leading-tight">
          <p>“El éxito es la suma de pequeñas decisiones diarias que se convierten en resultados extraordinarios.”</p>
        </blockquote>
      </Section>

      <Section>
        <SectionHeading layout="center" eyebrow="Planes y pagos" title="Preguntas sobre el team" />
        <div className="mt-10">
          <FaqList items={teamFaqs} />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
