import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site-url";

// Imágenes para compartir (Open Graph): planas, con el isologo y la descripción de la página.

export const OG_SIZE = { width: 1200, height: 630 };

const COLORS = {
  bordo: "#861F52",
  aubergine: "#2B0F1F",
  pink: "#F6DCE7",
  pinkStrong: "#F2A9C8",
  onDark: "#E7CFDA",
  white: "#FFFFFF",
};

async function assets() {
  const [logo, fraunces, dmSans500, dmSans700] = await Promise.all([
    // Rutas literales: así el build sabe exactamente qué archivos incluir.
    readFile(join(process.cwd(), "public/images/logo-white.png")),
    readFile(join(process.cwd(), "node_modules/@fontsource/fraunces/files/fraunces-latin-900-normal.woff")),
    readFile(join(process.cwd(), "node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff")),
    readFile(join(process.cwd(), "node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff")),
  ]);
  return {
    logoSrc: `data:image/png;base64,${logo.toString("base64")}`,
    fonts: [
      { name: "Fraunces", data: fraunces, weight: 900 as const, style: "normal" as const },
      { name: "DM Sans", data: dmSans500, weight: 500 as const, style: "normal" as const },
      { name: "DM Sans", data: dmSans700, weight: 700 as const, style: "normal" as const },
    ],
  };
}

const domain = new URL(siteUrl).host.replace(/^www\./, "");

type OgOptions = {
  /** site: bordó, para el sitio en general. tools: aubergine, para Herramientas. */
  variant: "site" | "tools";
  /** Nombre de la página que se comparte. */
  title: string;
  description: string;
};

export async function ogImage({ variant, title, description }: OgOptions) {
  const { logoSrc, fonts } = await assets();
  const tools = variant === "tools";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: tools ? COLORS.aubergine : COLORS.bordo,
          color: COLORS.white,
          fontFamily: "DM Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse no usa next/image */}
          <img src={logoSrc} width={228} height={96} alt="" />
          {tools && (
            <div
              style={{
                display: "flex",
                backgroundColor: COLORS.bordo,
                borderRadius: 999,
                padding: "12px 24px",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Herramientas
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontWeight: 900,
              fontSize: tools ? 72 : 64,
              lineHeight: 1,
              textTransform: "uppercase",
              color: tools ? COLORS.white : COLORS.pink,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 500,
              lineHeight: 1.35,
              maxWidth: 1000,
              color: tools ? COLORS.onDark : COLORS.white,
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            fontWeight: 700,
            color: tools ? COLORS.pinkStrong : COLORS.pink,
          }}
        >
          <span>Equipo de entrenamiento · Lomas de Zamora</span>
          <span>{domain}</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
