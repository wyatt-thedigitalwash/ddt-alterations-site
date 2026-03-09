import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DDT Alterations — Tailoring & Repairs | Harbour Island, Tampa FL",
  description:
    "Professional alterations, tailoring, and garment repairs on Harbour Island in Tampa, FL. Hemming, resizing, zipper replacement, dress alterations, and same-week turnaround. Walk-ins welcome.",
  openGraph: {
    title: "DDT Alterations — Tailoring & Repairs | Harbour Island, Tampa FL",
    description:
      "Professional alterations, tailoring, and garment repairs on Harbour Island in Tampa, FL. Same-week turnaround. Walk-ins welcome.",
    url: "https://ddt-alterations-site.vercel.app",
    siteName: "DDT Alterations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DDT Alterations — Harbour Island, Tampa FL",
    description:
      "Professional alterations, tailoring, and garment repairs. Same-week turnaround. Walk-ins welcome.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DDT Alterations",
  description:
    "Professional alterations, tailoring, and garment repairs on Harbour Island in Tampa, FL.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "704 Harbour Post Dr",
    addressLocality: "Tampa",
    addressRegion: "FL",
    postalCode: "33602",
    addressCountry: "US",
  },
  telephone: "+18135550000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  url: "https://ddt-alterations-site.vercel.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
