import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Nombre del acceso directo en iPhone (si no, usa el título de la página guardada).
  appleWebApp: { title: siteConfig.name },
};

const display = Fraunces({
  variable: "--font-display",
  weight: ["800", "900"],
  display: "swap",
  subsets: ["latin"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
