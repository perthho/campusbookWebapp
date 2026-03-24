"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a university email to sign up?",
    a: "Yes, CampusBook requires a valid university email address (@paruluniversity.ac.in) to ensure the platform remains exclusively for students. This keeps the community safe and relevant.",
  },
  {
    q: "How does the NSFW content moderation work?",
    a: "CampusBook uses an ML-powered content moderation system (built with Python & FastAPI) that automatically detects and filters inappropriate content before it appears on the platform. It operates in real-time and is fully transparent.",
  },
  {
    q: "Is my data private and safe?",
    a: "Absolutely. CampusBook uses JWT authentication, bcryptjs password hashing, and never sells your data. Your conversations are private, and you can delete your account and all associated data at any time.",
  },
  {
    q: "Which platforms is CampusBook available on?",
    a: "CampusBook is available on iOS (14+) and Android (8.0+). It's built with React Native & Expo for a smooth, native experience on both platforms.",
  },
  {
    q: "How does the campus map feature work?",
    a: "Campus maps use the Google Directions API integrated into the app. It provides walking and cycling routes across your campus, pinpoints building locations, and shows event venues in real time.",
  },
  {
    q: "Can I create my own community or club page?",
    a: "Currently, any student can create a community around any interest. For official club/society pages with a verified badge and analytics dashboard, you'll need the Club/Society plan. Contact us to get started.",
  },
  {
    q: "How do I report a problem or abusive content?",
    a: "Every post, comment, and profile has a report button. Reports are reviewed by our automated ML system first, then by a human moderation team within 24 hours. You can also contact us directly through the Contact section.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4">
            ❓ FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about CampusBook.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? "border-gray-300 shadow-md" : "border-gray-100 shadow-sm hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Still have questions?{" "}
          <a href="#contact" className="text-gray-900 hover:underline font-medium">
            Contact us →
          </a>
        </p>
      </div>
    </section>
  );
}
