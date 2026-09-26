"use client";
import { useState, type FormEvent } from "react";
export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Hi Khalid,\n\n${d.get("message")}\n\nName: ${d.get("name")}\nEmail: ${d.get("email")}\nCompany / project: ${d.get("company") || "Not specified"}\nBudget: ${d.get("budget")}\nTimeline: ${d.get("timeline")}\n`;
    window.location.href = `mailto:khalidsohaibrana@gmail.com?subject=${encodeURIComponent("Project inquiry from " + d.get("name"))}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app should open with the project details. Review the draft and send it there. If it does not open, email me directly using the address on this page.",
    );
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Alex Morgan"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={150}
            placeholder="alex@company.com"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="company">Company or project</label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          maxLength={150}
          placeholder="What are you building?"
        />
      </div>
      <div className="field">
        <label htmlFor="message">How can I help? *</label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2500}
          placeholder="Tell me about your product, the challenge, and what a successful result would look like."
        />
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="budget">Project budget</label>
          <select id="budget" name="budget" defaultValue="Let’s discuss">
            <option>Let’s discuss</option>
            <option>Under $1,000</option>
            <option>$1,000–$3,000</option>
            <option>$3,000–$10,000</option>
            <option>$10,000+</option>
            <option>Ongoing / hourly</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" defaultValue="Flexible">
            <option>Flexible</option>
            <option>As soon as possible</option>
            <option>Within a month</option>
            <option>In 1–3 months</option>
            <option>Ongoing collaboration</option>
          </select>
        </div>
      </div>
      <button className="button primary" type="submit">
        Prepare project email <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        Opens your email app with a draft. Nothing is submitted or stored by
        this website.
      </p>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
