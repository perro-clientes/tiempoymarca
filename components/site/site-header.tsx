"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { CtaLink } from "./cta-link";
import { Logo } from "./logo";
import { Container } from "./section";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <Container className="flex h-[74px] items-center justify-between gap-6">
        <Link
          href="/"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Logo width={112} priority />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md py-2 font-medium transition-colors hover:text-bordo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active ? "font-bold text-bordo" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <CtaLink href={siteConfig.trialCta.href} size="default" className="hidden md:inline-flex">
          {siteConfig.trialCta.label}
        </CtaLink>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
              <Menu aria-hidden className="!size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-8 bg-cream">
            <SheetTitle className="sr-only">Menú</SheetTitle>
            <nav aria-label="Principal" className="mt-10">
              <ul className="flex flex-col gap-2">
                {siteConfig.nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block rounded-md py-2 font-display text-2xl font-extrabold uppercase",
                            active ? "text-bordo" : "text-ink",
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <SheetClose asChild>
              <CtaLink href={siteConfig.trialCta.href}>{siteConfig.trialCta.label}</CtaLink>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
