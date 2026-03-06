"use client";

import {
  Rss,
  Users,
  Building,
  MessageCircle,
  UserPlus,
  Map,
  MessageSquare,
  Heart,
  ImageIcon,
  Shield,
  Zap,
  ChevronRight,
} from "lucide-react";

const coreFeatures = [
  {
    icon: Rss,
    title: "Smart Feed",
    desc: "Posts with likes, nested comments, shares, and saves. Your campus, your content.",
    color: "from-gray-700 to-gray-900",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
  {
    icon: Users,
    title: "Communities",
    desc: "Interest-based groups with real-time group chat. Find your tribe on campus.",
    color: "from-gray-600 to-gray-800",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
  {
    icon: Building,
    title: "Clubs & Events",
    desc: "Discover official campus clubs, join events, and stay in the loop.",
    color: "from-gray-500 to-gray-700",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    desc: "Direct messaging with typing indicators powered by Socket.IO.",
    color: "from-gray-700 to-gray-900",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
  {
    icon: UserPlus,
    title: "Friend System",
    desc: "Send friend requests, get smart recommendations based on shared interests.",
    color: "from-gray-600 to-gray-800",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
  {
    icon: Map,
    title: "Campus Maps",
    desc: "In-app navigation with specialized routes. Never get lost on campus again.",
    color: "from-gray-500 to-gray-700",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
];

const newFeatures = [
  { icon: MessageSquare, title: "Nested Comments", desc: "Reply to comments infinitely deep." },
  { icon: Heart, title: "Comment Likes", desc: "Like individual comments, not just posts." },
  { icon: ImageIcon, title: "Image Uploads", desc: "Avatars and post images with compression." },
  { icon: Shield, title: "AI Content Filter", desc: "ML-powered NSFW content moderation." },
  { icon: Zap, title: "Smart Rate Limiting", desc: "Applied only on sensitive endpoints." },
];

export default function Features() {
  return (
    <section id="features" className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4">
          ✨ Everything you need
        </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Built for <span className="gradient-text">student life</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every feature carefully crafted around what university students actually need — not corporate clutter.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreFeatures.map((f) => (
            <div
              key={f.title}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon className={`w-6 h-6 ${f.text}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* New in This Release */}
        <div className="rounded-3xl p-8 sm:p-12" style={{ background: "#0a0a0a" }}>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-3">
              🚀 New in this release
            </span>
            <h3 className="text-3xl font-extrabold text-white">What&apos;s New in 2.0</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {newFeatures.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{f.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
