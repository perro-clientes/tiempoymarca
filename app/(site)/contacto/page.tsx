import { Instagram, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { CtaLink } from "@/components/site/cta-link";
import { Eyebrow } from "@/components/site/eyebrow";
import { ScheduleGrid } from "@/components/site/schedule";
import { Container } from "@/components/site/section";
import { schedule, trainingLocation } from "@/content/schedule";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";

const intro =
  "Dejanos tus datos y te escribimos para coordinar tu primer entrenamiento o armar tu plan a distancia.";

export const metadata = pageMetadata({ title: "Contacto", description: intro, path: "/contacto" });

const { contact } = siteConfig;

const channels: { icon: LucideIcon; title: string; detail: string; href: string }[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp · Planes a distancia",
    detail: `${contact.whatsapp.display} · ${contact.whatsapp.owner}`,
    href: contact.whatsapp.url,
  },
  { icon: Mail, title: "Email", detail: contact.email, href: `mailto:${contact.email}` },
  {
    icon: Instagram,
    title: "Instagram",
    detail: `${contact.instagram.handle} · ${contact.instagramCursos.handle}`,
    href: contact.instagram.url,
  },
];

export default function ContactoPage() {
  return (
    <Container className="grid gap-10 py-14 md:grid-cols-2 md:gap-14 md:py-[88px]">
      <div className="flex flex-col gap-6">
        <Eyebrow>Contacto</Eyebrow>
        <h1 className="-mt-3 font-display text-display font-black uppercase">Vení a probar una clase</h1>
        <p className="max-w-md text-lead text-muted-foreground">{intro}</p>

        <ul className="flex flex-col gap-3">
          {channels.map(({ icon: Icon, title, detail, href }) => (
            <li key={title}>
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-4 rounded-3xl border border-line bg-white p-5 transition-colors hover:border-bordo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-pink text-bordo">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="font-bold">{title}</span>
                  <span className="text-sm text-muted-foreground">{detail}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="dark flex flex-col gap-5 rounded-[28px] bg-aubergine p-7 text-white">
          <h2 className="font-display text-title font-extrabold">Dónde entrenamos</h2>
          <p className="text-on-dark">
            {trainingLocation.venue} del {trainingLocation.name} · {trainingLocation.address}
          </p>
          <ScheduleGrid slots={schedule} size="sm" />
          <CtaLink href={trainingLocation.mapsUrl} size="default" className="w-full">
            Abrir en Google Maps
          </CtaLink>
        </div>
      </div>

      <div className="relative h-fit rounded-[28px] border border-line bg-white p-7 md:p-10">
        <ContactForm />
      </div>
    </Container>
  );
}
