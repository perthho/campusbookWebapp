"use client";

import { useState } from "react";
import { Send, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would POST to an API
    setSubmitted(true);
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
                value: "hello@campusbook.app",
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
                {["Twitter", "Instagram", "LinkedIn", "Discord"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium hover:bg-gray-200 hover:text-gray-900 transition-colors"
                  >
                    {s}
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gray-900 text-white font-bold hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
