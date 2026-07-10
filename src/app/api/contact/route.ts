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
  const { name, email, phone, destination, program, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nom, email et message sont requis." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const rows = [
    ["Nom", name],
    ["Email", email],
    ["Téléphone", phone || "—"],
    ["Destination souhaitée", destination || "—"],
    ["Programme souhaité", program || "—"],
  ];

  const html = `
    <h2>Nouveau message depuis le formulaire de contact</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:bold">${label}</td><td>${value}</td></tr>`
        )
        .join("")}
    </table>
    <p style="font-weight:bold">Message :</p>
    <p>${String(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nouveau message de contact — ${name}`,
      html,
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
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "L'envoi de l'email a échoué." },
      { status: 500 }
    );
  }
}
