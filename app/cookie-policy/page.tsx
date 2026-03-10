import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — CampusBook",
  description: "Learn how CampusBook uses cookies and similar tracking technologies on our website and mobile app.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/other/campusbook_logo.png" alt="CampusBook" width={36} height={36} className="rounded-xl" />
            <span className="text-lg font-extrabold text-gray-900">CampusBook</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* ── Page Hero ── */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-500 text-sm">
            Effective Date:{" "}
            <span className="font-semibold text-gray-700">March 10, 2026</span>
            {" · "}Last Updated: March 10, 2026
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed text-base mb-10">
          This Cookie Policy explains how CampusBook ("CampusBook", "we", "us", or "our") uses cookies
          and similar tracking technologies when you visit our website at campusbook.app ("Website")
          and when you use the CampusBook mobile application ("App"). This policy should be read
          alongside our{" "}
          <Link href="/privacy-policy" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-600">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Contents</h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-gray-600">
            {[
              ["#what-are-cookies", "1. What Are Cookies?"],
              ["#scope", "2. Scope of This Policy"],
              ["#website-cookies", "3. Cookies on Our Website"],
              ["#app-technologies", "4. Mobile App Tracking Technologies"],
              ["#third-party", "5. Third-Party Cookies & SDKs"],
              ["#no-advertising", "6. What We Don't Do"],
              ["#your-choices", "7. Your Cookie Choices"],
              ["#changes", "8. Changes to This Policy"],
              ["#contact", "9. Contact Us"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-gray-900 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Section 1 ── */}
        <section id="what-are-cookies" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            1. What Are Cookies?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Cookies are small text files placed on your device (computer, tablet, or phone) when you
            visit a website. They are widely used to make websites work efficiently and to provide
            information to website owners. Cookies can be "session cookies" (deleted when you close
            your browser) or "persistent cookies" (which remain on your device for a set period or
            until manually deleted).
          </p>
          <p className="text-gray-600 leading-relaxed">
            In addition to cookies, we and our partners may use similar technologies such as web
            beacons, pixel tags, and local storage. Mobile apps use analogous technologies (device
            identifiers, SDK tokens) rather than traditional browser cookies, as described in Section 4.
          </p>
        </section>

        {/* ── Section 2 ── */}
        <section id="scope" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            2. Scope of This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">This policy covers two distinct environments:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
              <p className="font-bold text-gray-800 mb-2">🌐 CampusBook Website</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The marketing and informational website at campusbook.app, which is accessed via a
                standard web browser. Traditional browser cookies may be set here.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
              <p className="font-bold text-gray-800 mb-2">📱 CampusBook Mobile App</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The iOS and Android application (built with React Native & Expo). Mobile apps operate
                differently from websites — browser cookies do not apply here. We use device-level
                tracking technologies instead (see Section 4).
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 3 ── */}
        <section id="website-cookies" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            3. Cookies on Our Website
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            The following table describes the categories of cookies we use on the CampusBook website:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-5 py-3 font-semibold">Category</th>
                  <th className="px-5 py-3 font-semibold">Purpose</th>
                  <th className="px-5 py-3 font-semibold">Duration</th>
                  <th className="px-5 py-3 font-semibold">Required?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {[
                  [
                    "Strictly Necessary",
                    "Essential for the website to function correctly. These enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.",
                    "Session",
                    "Yes",
                  ],
                  [
                    "Analytics (Firebase)",
                    "Helps us understand how visitors interact with our website — pages viewed, time on site, traffic sources, and which features generate interest. All data is aggregated and anonymised.",
                    "Up to 2 years",
                    "No",
                  ],
                  [
                    "Functional / Preference",
                    "Remembers choices you make on the website (such as language or display preferences) to provide a more personalised experience on return visits.",
                    "1 year",
                    "No",
                  ],
                ].map(([category, purpose, duration, required]) => (
                  <tr key={category as string} className="hover:bg-gray-50 transition-colors align-top">
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                          required === "Yes"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-600 leading-relaxed">{purpose}</td>
                    <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{duration}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`font-semibold text-xs ${
                          required === "Yes" ? "text-green-700" : "text-gray-500"
                        }`}
                      >
                        {required}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 4 ── */}
        <section id="app-technologies" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            4. Mobile App Tracking Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            The CampusBook mobile app does not use browser cookies. Instead, we use the following
            device-side technologies to operate the app and improve our services:
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Firebase Cloud Messaging (FCM) Token",
                icon: "🔔",
                desc: "A unique device token generated by Google Firebase, used exclusively to send push notifications to your device (e.g., message alerts, community updates). This token is not used for advertising or shared with third parties beyond Google's Firebase infrastructure.",
                optional: false,
              },
              {
                name: "Firebase Analytics SDK",
                icon: "📊",
                desc: "Collects anonymised, aggregated usage events — such as screens visited and features used — to help us understand how students interact with the app and guide product improvements. No personally identifiable data is included in these analytics reports.",
                optional: true,
              },
              {
                name: "Firebase Crashlytics",
                icon: "🐛",
                desc: "Automatically captures crash reports and device state at the time of a crash or error. This helps us identify and fix bugs. Reports include device model, OS version, and app version. They do not include the content of your messages or posts.",
                optional: false,
              },
              {
                name: "Local Device Storage",
                icon: "💾",
                desc: "The app stores user preferences and session data locally on your device (e.g., your login state and app settings) using standard mobile local storage APIs. This data stays on your device and is not transmitted to our servers unless you explicitly sync it.",
                optional: false,
              },
            ].map(({ name, icon, desc, optional }) => (
              <div key={name} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <p className="font-semibold text-gray-800 text-sm">{name}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        optional
                          ? "bg-amber-100 text-amber-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {optional ? "Optional (opt-out available)" : "Required for app function"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 5 ── */}
        <section id="third-party" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            5. Third-Party Cookies & SDKs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some of the cookies and tracking technologies on our website and app are set by third
            parties we work with. We do not control how these third parties collect or use your data.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-5 py-3 font-semibold">Third Party</th>
                  <th className="px-5 py-3 font-semibold">Technology</th>
                  <th className="px-5 py-3 font-semibold">Purpose</th>
                  <th className="px-5 py-3 font-semibold">Privacy Policy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {[
                  ["Google LLC", "Firebase Analytics (cookie + SDK)", "Usage analytics on website and app", "policies.google.com/privacy", "https://policies.google.com/privacy"],
                  ["Google LLC", "Firebase Crashlytics (SDK)", "Crash reporting in the app", "policies.google.com/privacy", "https://policies.google.com/privacy"],
                  ["Google LLC", "Firebase Cloud Messaging (SDK)", "Push notifications", "policies.google.com/privacy", "https://policies.google.com/privacy"],
                  ["Google LLC", "Maps JavaScript API (website) / Maps SDK (app)", "Campus navigation", "policies.google.com/privacy", "https://policies.google.com/privacy"],
                ].map(([provider, tech, purpose, policyLabel, policyUrl]) => (
                  <tr key={tech as string} className="hover:bg-gray-50 transition-colors align-top">
                    <td className="px-5 py-3.5 font-medium text-gray-700">{provider}</td>
                    <td className="px-5 py-3.5">{tech}</td>
                    <td className="px-5 py-3.5 text-gray-500">{purpose}</td>
                    <td className="px-5 py-3.5">
                      <a
                        href={policyUrl as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-700 transition-colors"
                      >
                        {policyLabel}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 6 ── */}
        <section id="no-advertising" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            6. What We Don&apos;t Do
          </h2>
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <p className="text-green-800 font-semibold text-sm mb-4">
              We believe in a clean, student-first experience. That means:
            </p>
            <div className="space-y-2.5">
              {[
                "We do NOT use advertising or retargeting cookies.",
                "We do NOT track you across third-party websites or apps for advertising purposes.",
                "We do NOT sell your data or share it with advertisers.",
                "We do NOT serve targeted ads based on your browsing or in-app behaviour.",
                "We do NOT use fingerprinting or other covert tracking techniques.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-green-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 7 ── */}
        <section id="your-choices" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            7. Your Cookie Choices
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">On the Website</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most web browsers allow you to manage cookies through their settings. You can typically
            choose to:
          </p>
          <ul className="space-y-2 text-gray-600 leading-relaxed mb-5">
            {[
              "Delete all cookies currently stored by your browser.",
              "Block all cookies (note: this may break website functionality).",
              "Block third-party cookies only (this will disable Firebase Analytics on the website without affecting core functionality).",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-2 text-sm font-medium">Browser cookie settings:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {[
              ["Google Chrome", "Settings → Privacy & Security → Cookies"],
              ["Mozilla Firefox", "Settings → Privacy & Security → Cookies and Site Data"],
              ["Apple Safari", "Preferences → Privacy → Manage Website Data"],
              ["Microsoft Edge", "Settings → Cookies and Site Permissions → Cookies"],
            ].map(([browser, path]) => (
              <div key={browser as string} className="bg-gray-50 rounded-xl border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 text-xs mb-1">{browser}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{path}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mb-6">
            You can also opt out of Google Analytics tracking globally using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-3">In the Mobile App</h3>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            {[
              ["Analytics opt-out", "You can disable Firebase Analytics data collection in the CampusBook app under Settings → Privacy → Analytics. When disabled, no usage events will be sent to Firebase."],
              ["Push notifications", "You can disable push notifications at any time through your device's system settings: iOS: Settings → Notifications → CampusBook. Android: Settings → Apps → CampusBook → Notifications."],
              ["Delete your account", "Deleting your account removes your data from our servers in accordance with our Privacy Policy and clears all app-stored data on your device."],
            ].map(([term, desc]) => (
              <li key={term as string} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span><strong className="text-gray-800">{term}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 8 ── */}
        <section id="changes" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Cookie Policy from time to time, for example if we introduce new
            features that use different technologies or if regulations change. We will notify you of
            significant changes via an in-app notification and by updating the effective date at the
            top of this page. We encourage you to review this policy periodically.
          </p>
        </section>

        {/* ── Section 9 ── */}
        <section id="contact" className="mb-4 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            9. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Questions about our use of cookies? Please contact us:
          </p>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 inline-block">
            <p className="font-bold text-gray-900 mb-1">CampusBook</p>
            <p className="text-gray-600 text-sm mb-1">
              Email:{" "}
              <a href="mailto:hello@campusbook.app" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-600">
                hello@campusbook.app
              </a>
            </p>
            <p className="text-gray-500 text-sm">Offices: Lagos · Delhi · Singapore</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
