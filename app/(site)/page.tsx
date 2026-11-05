import { CtaLink } from "@/components/site/cta-link";
import { Hero } from "@/components/site/hero";

export default function HomePage() {
  return (
    <Hero
      title={
        <>
          Tiempo
          <br />
          &amp; Marca
        </>
      }
      tagline="Club de running"
      image={{
        src: "/others/team-tym.png",
        alt: "Grupo de corredores de Tiempo & Marca con sus medallas después de una carrera",
        position: "center 55%",
      }}
      action={<CtaLink href="/planes">Ver planes</CtaLink>}
    />
  );
}
