import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "", {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const origin = req.headers.get("origin") || "http://localhost:3000";

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.
  
    
  try {
    const body = await req.json();

    const success_url = !body.email
    ? `${origin}/signup?session_id={CHECKOUT_SESSION_ID}`
    : `${origin}/public?session_id={CHECKOUT_SESSION_ID}`;
    if (!body.email) {
      throw new Error("Missing itinerary_id");
    }

    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "usd",
            recurring: {
              interval: "month",
            },
            unit_amount: Math.round(body.amount * 100),
            product_data: {
              name: body.plan,
              description: `You are about to suscribe to ${body.plan} on a monthly basis`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        email: body.email,
        name: body.plan,
      },
      // success_url: `${origin}/success?itineraryId=${body.itineraryId}`,
      success_url: success_url,
      cancel_url: `${origin}/cancel?session_id={CHECKOUT_SESSION_ID}`,
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    return NextResponse.json({ result: checkoutSession, ok: true });

  } catch (error) {

    console.error(error);
    return NextResponse.json(
      { message: "something went wrong", ok: false },
      { status: 500 }
    );
  }
}