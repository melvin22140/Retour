import Link from "next/link";

function Souligne() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className="absolute -bottom-1 left-0 h-2 w-full text-brique"
    >
      <path
        d="M2 8 C 40 2, 90 12, 130 6 S 190 4, 198 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const benefices = [
  {
    titre: "Vous encaissez, Retour s’occupe du reste",
    texte:
      "Au moment du paiement, vous notez l’email du client en dix secondes. C’est tout.",
  },
  {
    titre: "Le rappel part au bon moment",
    texte:
      "Écran changé, batterie remplacée, vitre posée : Retour relance le client quand il est temps d’y repenser.",
  },
  {
    titre: "Vous voyez ce que ça rapporte",
    texte:
      "Un compteur simple : combien de clients sont revenus, et combien d’euros ils ont dépensés.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-32 pt-6 md:pb-16">
      <p className="font-titre text-xl font-bold text-sapin">Retour</p>

      <section className="pt-10">
        <h1 className="font-titre text-4xl font-bold leading-[1.1] text-sapin md:text-5xl">
          Vos clients satisfaits ne reviennent pas.{" "}
          <span className="relative inline-block">
            Ils oublient.
            <Souligne />
          </span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">
          Retour leur envoie un rappel par email au bon moment, avec une offre
          à usage unique. Vous ne tenez aucun fichier et vous ne relancez
          personne.
        </p>
        <Link
          href="/commencer"
          className="mt-8 hidden w-full items-center justify-center rounded-xl bg-brique px-6 py-4 text-lg font-bold text-white md:inline-flex"
        >
          Commencer, c’est gratuit
        </Link>
      </section>

      <section className="mt-14 rounded-2xl border border-sapin/20 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brique">
          Un exemple
        </p>
        <p className="mt-3 text-lg leading-relaxed">
          Une boutique voit passer <strong>100 clients</strong> par mois.
          Aucun n’est relancé. Si seulement <strong>10 de plus</strong>{" "}
          revenaient, à <strong>60 €</strong> chacun :
        </p>
        <p className="mt-4 font-titre text-4xl font-bold text-sapin">
          600 € de plus
        </p>
        <p className="mt-1 text-stone-600">
          chaque mois, sans nouveau client à trouver.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-titre text-2xl font-bold text-sapin">
          Comment ça marche
        </h2>
        <ol className="mt-6 space-y-6">
          {benefices.map((b, i) => (
            <li key={b.titre} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sapin font-titre text-lg font-bold text-creme">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold">{b.titre}</h3>
                <p className="mt-1 leading-relaxed text-stone-700">{b.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="fixed inset-x-0 bottom-0 border-t border-stone-200 bg-creme/95 p-4 md:hidden">
        <Link
          href="/commencer"
          className="flex w-full items-center justify-center rounded-xl bg-brique px-6 py-4 text-lg font-bold text-white"
        >
          Commencer, c’est gratuit
        </Link>
      </div>
    </main>
  );
}
