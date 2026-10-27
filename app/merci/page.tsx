import Link from "next/link";

export const metadata = {
  title: "Merci — Retour",
  robots: { index: false },
};

export default function Merci() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5">
      <p className="font-titre text-xl font-bold text-sapin">Retour</p>
      <h1 className="mt-6 font-titre text-3xl font-bold leading-tight text-sapin">
        Merci, votre paiement est bien parti.
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-stone-700">
        Stripe vous envoie un reçu par email dans quelques instants. Votre
        accès à Retour est créé dans la journée, et vous recevrez un message
        pour vous connecter.
      </p>
      <p className="mt-4 leading-relaxed text-stone-700">
        Vous avez 30 jours pour changer d’avis : si Retour ne vous convient
        pas, répondez simplement à cet email et vous êtes remboursé.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-full items-center justify-center rounded-xl border-2 border-sapin px-6 py-4 text-lg font-bold text-sapin"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
