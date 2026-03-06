"use client";

import { Star, Download as DownloadIcon, Smartphone } from "lucide-react";

export default function Download() {
  return (
    <section
      id="download"
      className="section-pad relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #111 100%)",
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex w-20 h-20 rounded-3xl bg-white/10 items-center justify-center mb-6 shadow-2xl shadow-black/30">
          <Smartphone className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Download CampusBook
        </h2>
        <p className="text-lg text-white/70 mb-4 max-w-xl mx-auto">
          Free for all university students. No ads, no subscriptions — just your campus community.
        </p>

        {/* App rating */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-white text-white" />
          ))}
          <span className="text-white font-semibold ml-1">4.9 / 5.0</span>
          <span className="text-white/50 text-sm">• 12,400+ ratings</span>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-4 px-7 py-4 bg-white text-gray-900 rounded-2xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 min-w-[200px] justify-center sm:justify-start"
          >
            <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.38c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500">Download on the</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-4 px-7 py-4 bg-white text-gray-900 rounded-2xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 min-w-[200px] justify-center sm:justify-start"
          >
            <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.19.96.08l13.5-7.76-2.94-2.94L3.18 23.76zM.64 1.1C.24 1.52 0 2.15 0 2.98v18.04c0 .83.24 1.46.64 1.88l.1.1 10.11-10.11v-.24L.74 1l-.1.1zM20.54 10.4l-2.88-1.66-3.21 3.21 3.21 3.21 2.9-1.67c.83-.48.83-1.26-.02-1.09zM4.14.32l13.5 7.76-2.94 2.94L4.14.32z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500">Get it on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { value: "50K+", label: "Active Students" },
            { value: "200+", label: "Universities" },
            { value: "99.9%", label: "Uptime" },
            { value: "Free", label: "Forever" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-sm text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-white/40 text-sm">
          Available on iOS 14+ and Android 8.0+. Requires valid university email to register.
        </p>
      </div>
    </section>
  );
}
