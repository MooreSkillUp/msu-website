import { NextResponse } from "next/server";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const result = contactFormSchema.safeParse({
    firstName: formData.get("firstName") ?? "",
    lastName: formData.get("lastName") ?? "",
    email: formData.get("email") ?? "",
    message: formData.get("message") ?? "",
  });

  if (!result.success) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured. Please try again later." },
      { status: 503 },
    );
  }

  const { firstName, lastName, email, message } = result.data;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "contact@mooreskillup.com";
  const supportEmail = process.env.SUPPORT_EMAIL ?? "contact@mooreskillup.com";

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "MooreSkillUp Contact", email: senderEmail },
        to: [{ email: supportEmail }],
        replyTo: { email },
        subject: `New enquiry from ${firstName} ${lastName}`.trim(),
        htmlContent: `
          <h1>New contact enquiry</h1>
          <p><strong>Name:</strong> ${escapeHtml(`${firstName} ${lastName}`.trim())}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Brevo rejected the contact email:", await response.text());
      return NextResponse.json(
        { error: "Could not send your message. Please try again later." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Could not send the contact email through Brevo:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
