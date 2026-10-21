import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retour — le rappel qui fait revenir vos clients",
  description:
    "Un client satisfait ne revient pas parce qu’il oublie. Retour le relance pour vous.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
