import Link from "next/link";
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
import { Logo } from "./logo";
import { Container } from "./section";

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="pointer-events-auto rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Logo />
        </Link>

        <nav
          aria-label="Principal"
          className="pointer-events-auto hidden items-center gap-1 rounded-lg bg-white p-1 text-black md:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="default"
              className="pointer-events-auto bg-white text-black hover:bg-secondary md:hidden"
            >
              Menú
              <Menu aria-hidden />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Menú</SheetTitle>
            <nav aria-label="Principal" className="mt-10 flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link href={item.href} className="py-2 text-title">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
