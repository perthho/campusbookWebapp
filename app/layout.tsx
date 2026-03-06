import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampusBook — The Social Platform for University Students",
  description:
    "Connect, collaborate, and campus-navigate with CampusBook. Real-time messaging, interest communities, club events, smart feeds, and campus maps — all in one app.",
  keywords: ["CampusBook", "university social app", "campus app", "student communities", "college chat"],
  openGraph: {
    title: "CampusBook — Campus Life, Amplified",
    description: "The all-in-one social platform built exclusively for university students.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
