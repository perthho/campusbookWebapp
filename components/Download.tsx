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
          {/* Android */}
          <a
            href="https://drive.google.com/uc?export=download&id=1yUtQDtbt2R-60IEMnLBSKKNsROKv4Clv"
            className="flex items-center gap-4 px-7 py-4 bg-white text-gray-900 rounded-2xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 min-w-[200px] justify-center sm:justify-start"
          >
            <div className="text-left">
              <div className="text-xs text-gray-500">Download APK</div>
              <div className="text-lg font-bold">Android</div>
            </div>
          </a>

          {/* iOS */}
          <div
            className="flex items-center gap-4 px-7 py-4 bg-white/5 text-white/50 border border-white/10 rounded-2xl cursor-not-allowed min-w-[200px] justify-center sm:justify-start"
            title="iOS app coming soon"
          >
            <div className="text-left">
              <div className="text-xs text-white/40">Coming Soon</div>
              <div className="text-lg font-bold">iOS</div>
            </div>
          </div>
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
          Available on Android 8.0+. Requires valid university email to register.
        </p>
      </div>
    </section>
  );
}
