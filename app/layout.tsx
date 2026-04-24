import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elise Colas — Head of Sales pour infopreneurs | Audit gratuit",
  description:
    "Je structure les pôles de vente des coachs et experts francophones à 30K+/mois. Audit gratuit 45 min. 2 places par trimestre.",
  openGraph: {
    title: "Elise Colas — Head of Sales",
    description: "Ta sales team laisse du cash sur la table. On la structure pour toi.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elise Colas — Head of Sales",
    description: "Ta sales team laisse du cash sur la table. On la structure pour toi.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        {/* Plausible Analytics — remplace "elisecolas.com" par ton domaine une fois déployé */}
        <Script
          defer
          data-domain="elisecolas.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
