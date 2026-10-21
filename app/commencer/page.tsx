import Link from "next/link";

export const metadata = {
  title: "Commencer — Retour",
};

export default function Commencer() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5">
      <p className="font-titre text-xl font-bold text-sapin">Retour</p>
      <h1 className="mt-6 font-titre text-3xl font-bold leading-tight text-sapin">
        On prépare votre accès.
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-stone-700">
        Cette page sera bientôt ouverte. Revenez dans quelques jours.
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
