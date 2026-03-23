"use client";

import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Student Free",
    price: "Free",
    sub: "Forever, for all students",
    badge: null,
    highlight: false,
    features: [
      "Full social feed with posts & likes",
      "Join unlimited communities",
      "Direct & group messaging",
      "Campus maps & navigation",
      "Friend recommendations",
      "10 MB image uploads",
      "Club discovery & events",
      "Basic notifications",
    ],
    cta: "Download Free",
    ctaHref: "/campusbook.apk",
  },
  {
    name: "Campus Pro",
    price: "$2.99",
    sub: "per month",
    badge: "Most Popular",
    highlight: true,
    features: [
      "Everything in Student Free",
      "100 MB image uploads",
      "HD photo & video posts",
      "Priority chat delivery",
      "Custom community themes",
      "Advanced notifications",
      "Early access to new features",
      "Ad-free experience",
    ],
    cta: "Get Campus Pro",
    ctaHref: "/campusbook.apk",
  },
  {
    name: "Club / Society",
    price: "$9.99",
    sub: "per month",
    badge: "For Organizations",
    highlight: false,
    features: [
      "Everything in Campus Pro",
      "Verified club badge",
      "Unlimited event posts",
      "Member analytics dashboard",
      "Priority listing in search",
      "Bulk messaging to members",
      "Custom club landing page",
      "Dedicated support",
    ],
    cta: "Contact Us",
    ctaHref: "#contact",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            💰 Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, <span className="gradient-text">student-friendly</span> pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            CampusBook is free for all students. Upgrade for extra perks — no tricks, no lock-ins.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                p.highlight
                  ? "bg-gray-900 text-white shadow-2xl shadow-gray-400 scale-105"
                  : "bg-gray-50 border border-gray-200 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Badge */}
              {p.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                    p.highlight
                      ? "bg-white text-gray-900"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {p.badge}
                </div>
              )}

              {/* Plan name */}
              <div className={`flex items-center gap-2 mb-4 ${p.highlight ? "text-white/80" : "text-gray-500"}`}>
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wide">{p.name}</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-5xl font-extrabold ${p.highlight ? "text-white" : "text-gray-900"}`}>
                  {p.price}
                </span>
                <span className={`text-sm ml-2 ${p.highlight ? "text-white/60" : "text-gray-400"}`}>
                  {p.sub}
                </span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        p.highlight ? "bg-white/20" : "bg-gray-100"
                      }`}
                    >
                      <Check className={`w-3 h-3 ${p.highlight ? "text-white" : "text-gray-700"}`} />
                    </div>
                    <span className={`text-sm ${p.highlight ? "text-white/85" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={p.ctaHref}
                className={`w-full py-3 rounded-2xl text-center text-sm font-bold transition-all duration-200 ${
                  p.highlight
                    ? "bg-white text-gray-900 hover:bg-gray-50 hover:shadow-lg"
                    : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-300"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          All paid plans include a 7-day free trial. Cancel anytime. No credit card required for the free plan.
        </p>
      </div>
    </section>
  );
}
