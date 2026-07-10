import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "futureaccessmali@gmail.com";
const FROM_EMAIL = "FutureAccess <onboarding@resend.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { email } = body ?? {};

  if (!email) {
    return NextResponse.json({ error: "Email requis." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: "Nouvelle inscription à la newsletter",
      html: `<p>Nouvelle inscription à la newsletter :</p><p style="font-weight:bold">${email}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "L'envoi de l'email a échoué." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter signup send failed:", err);
    return NextResponse.json(
      { error: "L'envoi de l'email a échoué." },
      { status: 500 }
    );
  }
}
