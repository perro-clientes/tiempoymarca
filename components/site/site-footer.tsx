import Link from "next/link";
import { trainingLocation } from "@/content/schedule";
import { siteConfig } from "@/lib/site-config";
import { CurrentYear } from "./current-year";
import { Logo } from "./logo";
import { Container } from "./section";

const linkClass =
  "rounded-sm text-on-dark transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-white">{title}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

export function SiteFooter() {
  const { contact } = siteConfig;
  return (
    <footer className="dark bg-aubergine text-white">
      <Container className="flex flex-col gap-10 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-fit rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Logo color="white" width={136} />
            </Link>
            <p className="max-w-[16rem] text-on-dark">{siteConfig.tagline}</p>
          </div>

          <FooterColumn title="Sitio">
            {siteConfig.footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contacto">
            <li>
              <a href={`mailto:${contact.email}`} className={linkClass}>
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.whatsapp.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp {contact.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram {contact.instagram.handle}
              </a>
            </li>
            <li className="text-on-dark">
              {trainingLocation.address}, {trainingLocation.locality}
            </li>
          </FooterColumn>

          <FooterColumn title="Legal">
            {siteConfig.legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-sm text-on-dark sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>
            {siteConfig.credits.prefix}{" "}
            <a
              href={siteConfig.credits.url}
              target="_blank"
              rel="noopener"
              className="rounded-sm text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {siteConfig.credits.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
