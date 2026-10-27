import Link from "next/link";

// À REMPLACER avant la mise en ligne réelle par ton adresse email de contact
const EMAIL_CONTACT = "VOTRE-EMAIL@A-COMPLETER";

export const metadata = {
  title: "Commencer — Retour",
  description: "Retour : 39 € par mois, sans engagement, satisfait ou remboursé 30 jours.",
};

export default async function Commencer({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string }>;
}) {
  const { paiement } = await searchParams;

  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-6">
      <Link href="/" className="font-titre text-xl font-bold text-sapin">
        Retour
      </Link>

      {paiement === "annule" && (
        <p className="mt-6 rounded-xl border border-stone-300 bg-white p-4 text-stone-700">
          Paiement annulé. Aucun montant n’a été prélevé. Vous pouvez
          réessayer quand vous voulez.
        </p>
      )}
      {paiement === "erreur" && (
        <p className="mt-6 rounded-xl border border-brique bg-white p-4 text-stone-800">
          Le paiement n’a pas pu démarrer et rien n’a été prélevé. Réessayez
          dans un instant. Si le problème continue, écrivez-nous à{" "}
          {EMAIL_CONTACT}.
        </p>
      )}

      <h1 className="mt-8 font-titre text-3xl font-bold leading-tight text-sapin">
        Un client de plus qui revient paie déjà Retour.
      </h1>

      <section className="mt-8 rounded-2xl border border-sapin/20 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brique">
          Ce que ça peut rapporter
        </p>
        <p className="mt-3 text-lg leading-relaxed">
          Si <strong>10 clients</strong> reviennent grâce aux rappels, à{" "}
          <strong>60 €</strong> chacun, cela fait{" "}
          <strong>600 € dans le mois</strong>. C’est un exemple, pas une
          promesse : le résultat dépend de votre activité.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Retour coûte <strong>39 € par mois</strong>, soit environ{" "}
          <strong>1,30 € par jour</strong>.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border-2 border-sapin bg-white p-6">
        <p className="font-titre text-2xl font-bold text-sapin">
          Retour — 39 € / mois
        </p>
        <ul className="mt-4 space-y-2 text-stone-700">
          <li>Collecte de l’email de vos clients</li>
          <li>Rappel automatique au bon moment</li>
          <li>Offre de retour à usage unique</li>
          <li>Compteur : clients revenus et chiffre généré</li>
        </ul>

        <p className="mt-5 rounded-xl bg-creme p-4 text-stone-800">
          <strong>Satisfait ou remboursé pendant 30 jours.</strong> Si Retour
          ne vous convient pas, écrivez à {EMAIL_CONTACT} dans les 30 jours
          suivant votre paiement. Vous êtes remboursé de l’intégralité,
          sans justification, sous 5 jours ouvrés.
        </p>

        <form action="/api/checkout" method="POST" className="mt-6">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-xl bg-brique px-6 py-4 text-lg font-bold text-white"
          >
            Payer 39 € et démarrer
          </button>
        </form>
        <p className="mt-3 text-center text-sm text-stone-600">
          Sans engagement, résiliable à tout moment. Paiement sécurisé par
          Stripe.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-titre text-2xl font-bold text-sapin">
          Questions fréquentes
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-bold">Est-ce que ça marche pour mon commerce ?</h3>
            <p className="mt-1 text-stone-700">
              Retour convient aux commerces dont les clients reviennent :
              réparation de téléphones, entretien, accessoires. Si vos clients
              ne reviennent jamais, il ne vous servira pas : la garantie
              existe pour ça.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Combien de temps ça me prend ?</h3>
            <p className="mt-1 text-stone-700">
              Environ dix secondes par client, pour noter son email au moment
              du paiement. Le reste est automatique.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Et si je veux arrêter ?</h3>
            <p className="mt-1 text-stone-700">
              Vous résiliez quand vous voulez, sans justification. Dans les
              30 premiers jours, vous êtes en plus remboursé.
            </p>
          </div>
          <div>
            <h3 className="font-bold">À quoi sert ce que je paie ?</h3>
            <p className="mt-1 text-stone-700">
              À l’envoi des rappels à vos clients et au suivi de ce qu’ils
              vous rapportent. Aucun frais caché.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
