import { JsonLd } from "@/components/site/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { schedule, trainingLocation } from "@/content/schedule";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/site-url";

const schemaDays: Record<string, string> = {
  lunes: "Monday",
  martes: "Tuesday",
  miercoles: "Wednesday",
  jueves: "Thursday",
  viernes: "Friday",
  sabado: "Saturday",
  domingo: "Sunday",
};

const sportsLocation = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: absoluteUrl("/"),
  image: absoluteUrl("/images/og.jpg"),
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.whatsapp.e164,
  sameAs: [siteConfig.contact.instagram.url, siteConfig.contact.instagramCursos.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${trainingLocation.venue}, ${trainingLocation.name}, ${trainingLocation.address}`,
    addressLocality: trainingLocation.locality,
    addressRegion: trainingLocation.region,
    addressCountry: trainingLocation.country,
  },
  openingHoursSpecification: schedule.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days.map((day) => `https://schema.org/${schemaDays[day]}`),
    opens: slot.time.padStart(5, "0"),
  })),
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-bordo px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <JsonLd data={sportsLocation} />
    </div>
  );
}
