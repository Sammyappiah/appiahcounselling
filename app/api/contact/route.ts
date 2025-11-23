import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let message = "";

    if (contentType.includes("application/json")) {
      // Handle JSON body
      const data = await req.json();
      name = (data.name ?? "").toString();
      email = (data.email ?? "").toString();
      message = (data.message ?? "").toString();
    } else if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      // Handle regular form submission
      const form = await req.formData();
      name = form.get("name")?.toString() || "";
      email = form.get("email")?.toString() || "";
      message = form.get("message")?.toString() || "";
    } else {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Unsupported content type",
        }),
        { status: 400 }
      );
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Appiah Counselling <no-reply@appiahcounselling.com>",
      to: "sammy@appiahcounselling.com",
      subject: `New message from ${name}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Failed to send message",
      }),
      { status: 500 }
    );
  }
}
