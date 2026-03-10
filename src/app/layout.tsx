import type { Metadata } from "next";
import { Raleway, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["600", "700", "800"],
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Abogados de Accidentes de Trabajo en Chicago | Consulta Gratis",
    template: "%s | Abogado Chicago",
  },
  description:
    "Abogados de accidentes de trabajo en Chicago. +35 años de experiencia, +$200M recuperados. Consulta gratis. ¡Si no ganas, no pagas!",
  openGraph: {
    siteName: "Abogado Chicago",
    locale: "es_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${raleway.variable} ${robotoFlex.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Abogado Chicago",
              description:
                "Abogados de accidentes de trabajo en Chicago, Illinois",
              url: "https://abogadochicago.com",
              telephone: "773-522-7000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chicago",
                addressRegion: "IL",
                addressCountry: "US",
              },
              priceRange: "Consulta Gratis",
              areaServed: "Illinois",
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
