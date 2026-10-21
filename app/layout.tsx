
import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Retour — le rappel qui fait revenir vos clients",
  description:
    "Un client satisfait ne revient pas parce qu’il oublie. Retour le relance à votre place, par email, au bon moment.",
  openGraph: {
    title: "Retour — le rappel qui fait revenir vos clients",
    description:
      "Un client satisfait ne revient pas parce qu’il oublie. Retour le relance à votre place.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
