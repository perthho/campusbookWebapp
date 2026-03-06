"use client";

import { useState } from "react";
import Image from "next/image";

const screens = [
  {
    id: 1,
    label: "Feed",
    title: "Your Personalized Feed",
    desc: "See posts, updates, and events from your friends, communities, and clubs — all ranked by what matters to you.",
    accent: "#111827",
    image: "/screenshots/home_feed.jpeg",
  },
  {
    id: 2,
    label: "Explore",
    title: "Discover What's Around You",
    desc: "Browse and join interest-based groups and discover new people, places, and activities on campus.",
    accent: "#374151",
    image: "/screenshots/explore_page.jpeg",
  },
  {
    id: 4,
    label: "Maps",
    title: "Never Get Lost",
    desc: "Integrated campus maps with walking routes, building info, and event location pins.",
    accent: "#4b5563",
    image: "/screenshots/maps_page.jpeg",
  },
  {
    id: 3,
    label: "Events",
    title: "Never Miss an Event",
    desc: "Find and RSVP to campus events, club meetups, and social activities happening near you.",
    accent: "#1f2937",
    image: "/screenshots/events_page.jpeg",
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);
  const s = screens[active];

  return (
    <section id="screenshots" className="section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4">
            📱 App Preview
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            See it in <span className="gradient-text">action</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            A clean, intuitive interface designed to keep students connected without distraction.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 flex-wrap mb-12">
          {screens.map((sc, i) => (
            <button
              key={sc.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? "bg-gray-900 text-white shadow-lg shadow-gray-300"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {sc.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — description */}
          <div className="order-2 lg:order-1">
            <span
              className="inline-block w-12 h-1.5 rounded-full mb-6"
              style={{ backgroundColor: s.accent }}
            />
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              {s.title}
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">{s.desc}</p>
            <ul className="space-y-3">
              {["Smooth & intuitive UI", "Real-time updates", "Dark mode support", "Offline caching"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: s.accent + "20" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.accent }} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Phone */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[3rem] blur-3xl opacity-30 scale-110"
                style={{ backgroundColor: s.accent }}
              />
              <div className="relative w-64 h-[560px] bg-gray-900 rounded-[3rem] border-4 border-white shadow-2xl overflow-hidden">
  
                {/* App content */}
                <div className="absolute inset-0 pt-10">
                  <Image
                    src={s.image}
                    alt={`${s.label} screen`}
                    fill
                    className="object-cover object-top"
                    sizes="256px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
