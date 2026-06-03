"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("pending");
    setErrorMessage(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
      return;
    }

    const data = await response.json().catch(() => null);
    setStatus("error");
    setErrorMessage(data?.error ?? "Could not send your message. Please try again.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="first-name" className="text-sm font-medium">
            First name
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            required
            className="w-full rounded-xl border border-input bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Jane"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="text-sm font-medium">
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            className="w-full rounded-xl border border-input bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-input bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="jane@example.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-xl border border-input bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      {status === "success" && (
        <p className="rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
          Your message has been sent successfully.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="rounded-2xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-900">
          {errorMessage}
        </p>
      )}
      <Button type="submit" className="w-full" disabled={status === "pending"}>
        {status === "pending" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
