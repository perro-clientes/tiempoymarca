import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";
import { Container } from "./section";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "WhatsApp", href: siteConfig.social.whatsapp, icon: MessageCircle },
];

export function SiteFooter() {
  return (
    <footer className="dark bg-background py-16 text-foreground">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <Logo size={80} />
          <div className="flex gap-16">
            <nav aria-label="Pie de página" className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ul className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:underline"
                  >
                    <Icon aria-hidden className="size-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">© {siteConfig.name}</p>
      </Container>
    </footer>
  );
}
