import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  const origin = new URL(request.url).origin;

  if (!secretKey || !priceId) {
    return NextResponse.redirect(`${origin}/commencer?paiement=erreur`, 303);
  }

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/merci`,
      cancel_url: `${origin}/commencer?paiement=annule`,
      locale: "fr",
    });

    if (!session.url) {
      throw new Error("Pas d'adresse de paiement");
    }
    return NextResponse.redirect(session.url, 303);
  } catch {
    return NextResponse.redirect(`${origin}/commencer?paiement=erreur`, 303);
  }
}
