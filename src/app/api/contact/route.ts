import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const supportEmail = process.env.SUPPORT_EMAIL ?? "mooreskillup@gmail.com";

let resend: Resend | null = null;

if (resendApiKey) {
  resend = new Resend(resendApiKey);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const firstName = formData.get("firstName")?.toString().trim() ?? "";
  const lastName = formData.get("lastName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!resend) {
    return NextResponse.json(
      { error: "Email service not configured. Please try again later." },
      { status: 503 },
    );
  }

  await resend.emails.send({
    from: "MooreSkillUp Contact <onboarding@resend.dev>",
    to: supportEmail,
    replyTo: email,
    subject: `New enquiry from ${firstName} ${lastName}`,
    html: `
      <h1>New contact enquiry</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}