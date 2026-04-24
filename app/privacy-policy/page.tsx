import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CampusBook",
  description: "Learn how CampusBook collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
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
          Welcome to CampusBook ("CampusBook", "we", "us", or "our"). This Privacy Policy explains
          how we collect, use, share, and safeguard information about you when you use the CampusBook
          mobile application ("App") and our website at campusbook.app ("Website") (together, the
          "Services"). By accessing or using the Services you agree to this policy. If you do not
          agree, please discontinue use.
        </p>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Contents</h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-gray-600">
            {[
              ["#who-we-are", "1. Who We Are"],
              ["#information-we-collect", "2. Information We Collect"],
              ["#how-we-use", "3. How We Use Your Information"],
              ["#university-email", "4. University Email Verification"],
              ["#third-parties", "5. Third-Party Services"],
              ["#data-sharing", "6. Data Sharing"],
              ["#moderation", "7. Content Moderation"],
              ["#retention", "8. Data Retention"],
              ["#security", "9. Security"],
              ["#children", "10. Age Requirements"],
              ["#your-rights", "11. Your Rights"],
              ["#transfers", "12. International Data Transfers"],
              ["#changes", "13. Changes to This Policy"],
              ["#contact", "14. Contact Us"],
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
        <section id="who-we-are" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            1. Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CampusBook is an independent social platform built exclusively for university students.
            We currently operate under the trading name <strong className="text-gray-800">CampusBook</strong> and
            are in the process of formal company registration. For all privacy-related matters, you can reach us at{" "}
            <a href="mailto:hello@campusbook.app" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-600">
              hello@campusbook.app
            </a>.
          </p>
        </section>

        {/* ── Section 2 ── */}
        <section id="information-we-collect" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            2. Information We Collect
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">a. Information You Provide Directly</h3>
          <ul className="space-y-2 text-gray-600 leading-relaxed list-none">
            {[
              ["Registration data", "username, display name, and university email address (used only to verify university affiliation — see Section 4). Your password is stored as a one-way bcrypt hash; we never have access to your plaintext password."],
              ["Profile information", "profile photo, bio, field of study, year of study, and interests you choose to share."],
              ["User-generated content", "posts, comments, reactions, and images you upload to your feed or communities."],
              ["Messages", "direct messages and group chat content. These are private and not accessed by our team except where required for moderation following a report."],
              ["Support communications", "any emails or messages you send to our support team."],
            ].map(([term, desc]) => (
              <li key={term as string} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span><strong className="text-gray-800">{term}:</strong> {desc}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">b. Information Collected Automatically</h3>
          <ul className="space-y-2 text-gray-600 leading-relaxed list-none">
            {[
              ["Device information", "device model, operating system version, app version, and unique device identifiers."],
              ["Usage data", "features you interact with, screens visited, time spent in the app, and actions taken (e.g., posts created, messages sent)."],
              ["Log data", "IP address, request timestamps, and error/crash reports collected via Firebase Crashlytics."],
              ["Push notification token", "a Firebase Cloud Messaging (FCM) device token used solely to deliver push notifications to your device."],
            ].map(([term, desc]) => (
              <li key={term as string} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span><strong className="text-gray-800">{term}:</strong> {desc}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">c. Information from Third Parties</h3>
          <p className="text-gray-600 leading-relaxed">
            We do not purchase personal data from third-party data brokers, and we do not currently
            offer social sign-in (e.g., Google or Facebook login). All data we hold is provided by you
            or collected through your direct use of the Services.
          </p>
        </section>

        {/* ── Section 3 ── */}
        <section id="how-we-use" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            3. How We Use Your Information
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-5 py-3 font-semibold">Purpose</th>
                  <th className="px-5 py-3 font-semibold">Legal Basis (GDPR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {[
                  ["Creating and managing your account", "Performance of a contract"],
                  ["Providing core app features (feed, chat, campus maps, communities)", "Performance of a contract"],
                  ["Delivering push notifications via Firebase FCM", "Performance of a contract / Legitimate interest"],
                  ["Running automated ML content moderation for safety", "Legitimate interest (platform safety)"],
                  ["Analysing app usage to improve the Services (Firebase Analytics)", "Legitimate interest"],
                  ["Generating crash reports to diagnose bugs (Firebase Crashlytics)", "Legitimate interest"],
                  ["Responding to your support requests", "Legitimate interest"],
                  ["Enforcing our Terms of Service and Community Guidelines", "Legitimate interest"],
                  ["Complying with applicable laws and legal obligations", "Legal obligation"],
                ].map(([purpose, basis]) => (
                  <tr key={purpose as string} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">{purpose}</td>
                    <td className="px-5 py-3.5 text-gray-500">{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 4 ── */}
        <section id="university-email" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            4. University Email Verification
          </h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="text-blue-800 text-sm font-medium">
              We collect your university email address solely to verify your student status. It is not
              used for marketing and is not shared with third parties for any purpose.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            At registration, you provide a valid university or institutional email address. We use this
            to confirm that you are currently enrolled at a recognised higher education institution.
            Once verification is complete, your university email is retained in our system only in
            hashed form for account security and identity-recovery purposes. We do not store or process
            your university email in plaintext beyond the verification step.
          </p>
        </section>

        {/* ── Section 5 ── */}
        <section id="third-parties" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            5. Third-Party Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            We work with the following third-party service providers. Each processes data according to
            their own privacy policies, which we encourage you to review.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-5 py-3 font-semibold">Service</th>
                  <th className="px-5 py-3 font-semibold">Provider</th>
                  <th className="px-5 py-3 font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {[
                  ["Firebase Cloud Messaging", "Google LLC", "Push notifications"],
                  ["Firebase Analytics", "Google LLC", "App usage analytics"],
                  ["Firebase Crashlytics", "Google LLC", "Crash reporting and debugging"],
                  ["Google Maps / Directions API", "Google LLC", "Campus navigation and maps"],
                  ["Razorpay (planned)", "Razorpay Software Pvt Ltd (India)", "Payment processing for subscriptions — not yet active"],
                ].map(([service, provider, purpose]) => (
                  <tr key={service as string} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-gray-700">{service}</td>
                    <td className="px-5 py-3.5">{provider}</td>
                    <td className="px-5 py-3.5 text-gray-500">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Google LLC processes data under its{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
              Privacy Policy
            </a>
            . Razorpay processes data under its{" "}
            <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* ── Section 6 ── */}
        <section id="data-sharing" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            6. Data Sharing
          </h2>
          <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mb-5">
            <p className="text-green-800 text-sm font-medium">
              We do not sell, rent, or trade your personal data to any third party for their own commercial purposes — ever.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">We may share your information only in the following limited circumstances:</p>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            {[
              ["Service providers", "The third-party services listed in Section 5, strictly for operating and improving the Services under appropriate data processing agreements."],
              ["Legal requirements", "Where required by applicable law, court order, or government authority — including to protect the rights, safety, or property of CampusBook, our users, or the public."],
              ["Business transfers", "In connection with a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity. We will notify you via the app before your data is subject to a different privacy policy."],
              ["With your consent", "In any other circumstance, only with your explicit consent."],
            ].map(([term, desc]) => (
              <li key={term as string} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span><strong className="text-gray-800">{term}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 7 ── */}
        <section id="moderation" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            7. Content Moderation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            To maintain a safe campus environment, CampusBook uses an automated machine-learning
            system (built with Python and FastAPI) to scan text and images in real time for NSFW,
            abusive, or prohibited content. This processing is automated and occurs at the point of
            upload or post.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Content flagged by the automated system is queued for human moderator review within 24
            hours of a report. Access by human moderators to private messages only occurs when a
            message has been explicitly reported by a recipient. We process this content under our
            legitimate interest in maintaining platform safety.
          </p>
        </section>

        {/* ── Section 8 ── */}
        <section id="retention" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            8. Data Retention
          </h2>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            {[
              ["Active account data", "Retained for as long as your account remains active and the Services are in operation."],
              ["Account deletion", "When you delete your account, your profile, posts, and associated content are permanently deleted within 30 days of the deletion request."],
              ["Log and security data", "IP addresses and security logs are retained for up to 90 days after collection for fraud prevention and security monitoring."],
              ["Encrypted backups", "Encrypted system backups may retain copies of your data for up to 60 days following a deletion request, after which they are permanently purged."],
              ["Anonymised data", "Aggregate, anonymised usage statistics that cannot be linked back to you may be retained indefinitely for research and service improvement."],
            ].map(([term, desc]) => (
              <li key={term as string} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span><strong className="text-gray-800">{term}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 9 ── */}
        <section id="security" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            9. Security
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We implement a range of technical and organisational measures to protect your data,
            including:
          </p>
          <ul className="space-y-2 text-gray-600 leading-relaxed">
            {[
              "JSON Web Token (JWT) authentication for all API requests.",
              "bcryptjs one-way password hashing — plaintext passwords are never stored.",
              "TLS encryption for all data in transit between your device and our servers.",
              "Smart rate limiting applied to sensitive endpoints to prevent brute-force attacks.",
              "Automated content scanning to prevent malicious uploads.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            No system is completely secure. We encourage you to use a strong, unique password and to
            keep your device secure. If you believe your account has been compromised, contact us
            immediately at{" "}
            <a href="mailto:hello@campusbook.app" className="text-gray-900 font-semibold underline decoration-gray-300">
              hello@campusbook.app
            </a>.
          </p>
        </section>

        {/* ── Section 10 ── */}
        <section id="children" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            10. Age Requirements
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CampusBook is intended for users who are{" "}
            <strong className="text-gray-800">17 years of age or older</strong>. We do not knowingly
            collect personal information from individuals under 17. If we become aware that a user
            under 17 has created an account without parental consent where required, we will
            immediately suspend the account and delete all associated data. If you believe a minor has
            registered, please notify us at{" "}
            <a href="mailto:hello@campusbook.app" className="text-gray-900 font-semibold underline decoration-gray-300">
              hello@campusbook.app
            </a>.
          </p>
        </section>

        {/* ── Section 11 ── */}
        <section id="your-rights" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            11. Your Rights
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Depending on your country or region, you may have the following rights regarding your
            personal data. To exercise any of these rights, email{" "}
            <a href="mailto:hello@campusbook.app" className="text-gray-900 font-semibold underline decoration-gray-300">
              hello@campusbook.app
            </a>
            . We will respond within <strong className="text-gray-800">30 days</strong>.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Access", "Request a copy of the personal data we hold about you."],
              ["Correction", "Ask us to correct inaccurate or incomplete information."],
              ["Deletion", "Request that we delete your personal data (right to be forgotten). You can also delete your account directly in the app."],
              ["Restriction", "Ask us to restrict processing of your data in certain circumstances."],
              ["Objection", "Object to processing based on legitimate interests."],
              ["Portability", "Receive your data in a structured, machine-readable format."],
            ].map(([right, desc]) => (
              <div key={right as string} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-800 text-sm mb-1">{right}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mt-5">
            <strong className="text-gray-800">EEA / UK users (GDPR):</strong> You also have the right
            to lodge a complaint with your local data protection supervisory authority if you believe
            we have not handled your data lawfully.
          </p>
        </section>

        {/* ── Section 12 ── */}
        <section id="transfers" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            12. International Data Transfers
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your personal data may be processed in countries outside your own, including India and the
            United States (Google Firebase infrastructure may be hosted on servers globally). Where we
            transfer data internationally — particularly from the European Economic Area or the United
            Kingdom — we rely on appropriate safeguards, such as Standard Contractual Clauses approved
            by the European Commission, to ensure your data receives an adequate level of protection.
          </p>
        </section>

        {/* ── Section 13 ── */}
        <section id="changes" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            13. Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. When we make material changes, we
            will notify you via an in-app notification and update the "Last Updated" date at the top of
            this page. Your continued use of the Services after any changes become effective constitutes
            your acceptance of the revised policy. We encourage you to review this policy periodically.
          </p>
        </section>

        {/* ── Section 14 ── */}
        <section id="contact" className="mb-4 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            14. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            If you have any questions, concerns, or requests relating to this Privacy Policy or our
            data practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 inline-block">
            <p className="font-bold text-gray-900 mb-1">CampusBook</p>
            <p className="text-gray-600 text-sm mb-1">
              Email:{" "}
              <a href="mailto:hello.campusbook@gmail.com" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-600">
                hello.campusbook@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
