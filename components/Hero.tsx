"use client";

import Image from "next/image";
import { ArrowDown, Star } from "lucide-react";
import { PRIMARY_APK_URL, navigateToApkWithFallback } from "../lib/download";

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
              <span className="text-gray-200">Now live on Android</span>
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

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={PRIMARY_APK_URL}
                onClick={async (event) => {
                  event.preventDefault();
                  await navigateToApkWithFallback();
                }}
                className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Android
              </a>
              <div
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white/50 font-bold rounded-2xl cursor-not-allowed"
                title="iOS version coming soon"
              >
                iOS (Coming Soon)
              </div>
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="flex justify-center">
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
