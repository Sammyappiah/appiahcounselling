import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  try {
    const { sessionType, amountGBP, calendlyEventUri } = await req.json();

    if (!amountGBP || !sessionType) {
      return new NextResponse("Missing payload", { status: 400 });
    }

    const priceInPence = Math.round(Number(amountGBP) * 100);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "gbp",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: priceInPence,
            product_data: {
              name:
                sessionType === "couples"
                  ? "Couples Therapy (50 mins)"
                  : "Individual Therapy (50 mins)",
            },
          },
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/confirmation?status=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking?status=cancelled`,
      metadata: {
        sessionType,
        calendlyEventUri: calendlyEventUri || "",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error(err);
    return new NextResponse(err?.message || "Stripe error", { status: 500 });
  }
}
