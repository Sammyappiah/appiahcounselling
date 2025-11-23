import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20" as any,
});

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return new Response(JSON.stringify({ error: "Stripe key missing" }), { status: 500 });
    }

    const { sessionType, amount, date, time } = await req.json();

    const isCouples = sessionType === "couples";
    const name = `${isCouples ? "Couples" : "Individual"} Therapy Session`;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
      new URL(baseUrl!);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid NEXT_PUBLIC_BASE_URL" }), { status: 500 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "gbp",
      success_url: `${baseUrl}/confirmation?success=1`,
      cancel_url: `${baseUrl}/booking?canceled=1`,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            unit_amount: amount, // 5000 or 6500
            product_data: { name },
          },
          quantity: 1,
        },
      ],
      metadata: {
        sessionType: isCouples ? "couples" : "individual",
        date,      // YYYY-MM-DD
        time,      // HH:mm (GMT)
      },
      customer_creation: "always",
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return new Response(JSON.stringify({ error: err.message || "Stripe error" }), { status: 500 });
  }
}
