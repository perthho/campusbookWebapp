"use client";

import { useState } from "react";
import { Send, Mail, MessageCircle, MapPin, Linkedin } from "lucide-react";

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.694-5.867 6.694h-3.31l7.738-8.835L2.25 2.25h6.632l4.6 6.088L17.45 2.25h.794zm-1.06 17.938h1.414L5.971 3.75H4.5z" />
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 127 96" fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A99.41,99.41,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0A105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96a77.7,77.7,0,0,0,6.46-13.52A68.42,68.42,0,0,1,28,81.85c5.31,3.92,11,6.86,16.88,8.55a77,77,0,0,0,64.12,0c5.87-1.69,11.56-4.63,16.87-8.55a68.68,68.68,0,0,1-11.22,13.54A77.63,77.63,0,0,0,121,80.21h0c2.33-23.65-1.31-47.5-13.3-71.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.05-12.74,11.44-12.74S96.19,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4">
            📬 Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            We&apos;d love to <span className="gradient-text">hear from you</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Bug report, feature request, partnership, or just a hello — we respond to every message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              {
                icon: Mail,
                title: "Email Us",
                value: "hello.campusbook@gmail.com",
                sub: "We reply within 24 hours",
                color: "bg-gray-100",
                icolor: "text-gray-700",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                value: "Available in the app",
                sub: "Monday–Friday, 9am–6pm",
                color: "bg-gray-100",
                icolor: "text-gray-700",
              },
              {
                icon: MapPin,
                title: "Offices",
                value: "Delhi",
                sub: "Distributed team, global mission",
                color: "bg-gray-100",
                icolor: "text-gray-700",
              },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}>
                  <c.icon className={`w-6 h-6 ${c.icolor}`} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{c.title}</div>
                  <div className="text-gray-800 text-sm font-medium mt-0.5">{c.value}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Follow us</p>
              <div className="flex gap-3">
                {[
                  { label: "X", url: "https://x.com/HelloCampusook", icon: XIcon },
                  { label: "LinkedIn", url: "https://www.linkedin.com/company/campusbookin/", icon: Linkedin },
                  { label: "Discord", url: "https://discord.gg/etnnYvZGMw", icon: DiscordIcon },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors group"
                    title={`Follow us on ${social.label}`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {submitted ? (
            <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message sent!</h3>
                <p className="text-gray-500">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@university.edu"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition text-gray-700"
                  >
                    <option value="">Select a subject...</option>
                    <option>General Inquiry</option>
                    <option>Bug Report</option>
                    <option>Feature Request</option>
                    <option>Partnership / Collaboration</option>
                    <option>Media / Press</option>
                    <option>Club / Society Account</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gray-900 text-white font-bold hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {errorMessage && (
                  <p className="text-sm text-red-600">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
