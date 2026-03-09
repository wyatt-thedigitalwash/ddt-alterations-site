"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name"),
      phone: fd.get("phone"),
      garmentType: fd.get("garmentType"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <h3 className="form-success-title">Thank you!</h3>
        <p className="form-success-text">
          We&apos;ve received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="cf-name" className="form-label">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="form-input"
          placeholder="Your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cf-phone" className="form-label">Phone</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="form-input"
          placeholder="(555) 555-5555"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cf-garment" className="form-label">Garment Type</label>
        <select
          id="cf-garment"
          name="garmentType"
          required
          className="form-select"
          defaultValue=""
        >
          <option value="" disabled>Select garment type</option>
          <option value="Dress">Dress</option>
          <option value="Pants">Pants</option>
          <option value="Suit">Suit</option>
          <option value="Wedding Dress">Wedding Dress</option>
          <option value="Shirt">Shirt</option>
          <option value="Denim">Denim</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cf-message" className="form-label">Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          className="form-textarea"
          placeholder="Describe the alteration or repair you need..."
        />
      </div>

      {status === "error" && (
        <p className="form-error">Something went wrong. Please try again.</p>
      )}

      <button type="submit" className="btn-p" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
