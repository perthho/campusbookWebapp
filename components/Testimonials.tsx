"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Computer Science, Year 3",
    university: "IIT Delhi",
    text: "CampusBook completely changed how I connect with my classmates. The communities feature helped me find people with the exact same interests, and the campus map is a lifesaver for new students.",
    avatar: "A",
    color: "bg-gray-800",
    stars: 5,
  },
  {
    name: "Fatima Al-Hassan",
    role: "MBA Student",
    university: "University of Lagos",
    text: "Finally a social app that feels like it was built FOR students, not just adapted for us. The club events integration means I never miss anything important happening on campus.",
    avatar: "F",
    color: "bg-gray-600",
    stars: 5,
  },
  {
    name: "Liam Chen",
    role: "Engineering, Year 2",
    university: "NUS Singapore",
    text: "The real-time chat with typing indicators feels incredibly polished. I moved all my study group conversations here from WhatsApp. The nested comments thread is great for technical discussions.",
    avatar: "L",
    color: "bg-gray-700",
    stars: 5,
  },
  {
    name: "Zara Okafor",
    role: "Psychology, Year 4",
    university: "UCT South Africa",
    text: "The friend recommendation system is surprisingly accurate! It suggested people in my department I'd never met before. The NSFW filter also makes it feel safe and inclusive.",
    avatar: "Z",
    color: "bg-gray-500",
    stars: 5,
  },
  {
    name: "Marcus Reid",
    role: "Business, Year 1",
    university: "Oxford University",
    text: "As a fresher, CampusBook helped me settle in so fast. I found my gym buddies through Communities and discovered three clubs I'm now actively part of. Absolute must-have.",
    avatar: "M",
    color: "bg-gray-800",
    stars: 5,
  },
  {
    name: "Ishaan Patel",
    role: "Medical Student, Year 2",
    university: "AIIMS Mumbai",
    text: "The campus map feature with specialized routes is brilliant for our sprawling hospital campus. Real-time chat keeps our ward teams coordinated between lectures. 10/10.",
    avatar: "I",
    color: "bg-gray-600",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4">
            ⭐ Student Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Loved by <span className="gradient-text">50,000+ students</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Real stories from students across 200+ universities worldwide.
          </p>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gray-900 text-gray-900" />
            ))}
            <span className="text-2xl font-bold text-gray-900 ml-1">4.9</span>
            <span className="text-gray-400 text-sm">(12,400+ reviews)</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gray-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                  <div className="text-xs text-gray-500 font-medium">{t.university}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
