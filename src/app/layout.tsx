import type { Metadata } from "next";
import { Anton, Caveat, Manrope, Montserrat, Pacifico } from "next/font/google";

import { Preloader } from "@/components/animations/Preloader";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";

import "./globals.css";

const interfaceFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const headingFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const accentFont = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-accent",
});

const cartaFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-carta",
});

const scriptFont = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avra.pe"),

  title: {
    default: `${siteConfig.name} | Activa lo natural`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  alternates: {
    canonical: "https://avra.pe",
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://avra.pe",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Activa lo natural`,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Activa lo natural`,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`h-full antialiased ${interfaceFont.variable} ${headingFont.variable} ${accentFont.variable} ${cartaFont.variable} ${scriptFont.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <Preloader />
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}