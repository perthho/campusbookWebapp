"use client";

import Image from "next/image";
import { ArrowDown, Star, Users, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "#0a0a0a",
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
              <span className="text-gray-200">Now live on iOS & Android</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Campus Life,
              <br />
              <span className="text-gray-300">Amplified.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              CampusBook is the all-in-one social platform built exclusively for
              university students — connect with peers, join communities, discover
              clubs, chat in real-time, and navigate your campus.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              {[
                { icon: Users, value: "50K+", label: "Students" },
                { icon: BookOpen, value: "200+", label: "Universities" },
                { icon: Star, value: "4.9★", label: "App Rating" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-white">
                  <s.icon className="w-5 h-5 text-gray-300" />
                  <div>
                    <div className="text-xl font-bold">{s.value}</div>
                    <div className="text-xs text-white/70">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.38c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#download"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.19.96.08l13.5-7.76-2.94-2.94L3.18 23.76zM.64 1.1C.24 1.52 0 2.15 0 2.98v18.04c0 .83.24 1.46.64 1.88l.1.1 10.11-10.11v-.24L.74 1l-.1.1zM20.54 10.4l-2.88-1.66-3.21 3.21 3.21 3.21 2.9-1.67c.83-.48.83-1.26-.02-1.09z M4.14.32l13.5 7.76-2.94 2.94L4.14.32z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-white/20 blur-2xl scale-110" />
              {/* Phone frame */}
              <div className="relative w-64 sm:w-72 h-[540px] sm:h-[620px] bg-gray-900 rounded-[3rem] border-4 border-white/30 shadow-2xl overflow-hidden">

                {/* App content */}
                <div className="absolute inset-0 pt-10">
                  <Image
                    src="/screenshots/home_feed.jpeg"
                    alt="CampusBook home feed"
                    fill
                    className="object-cover object-top"
                    sizes="288px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-xs">Scroll down</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
