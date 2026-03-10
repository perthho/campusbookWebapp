import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — CampusBook",
  description: "Read the CampusBook Terms of Service — the rules and conditions governing your use of the platform.",
};

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Terms of Service</h1>
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
          These Terms of Service ("Terms") govern your access to and use of the CampusBook mobile
          application ("App") and website at campusbook.app ("Website") (together, the "Services"),
          operated under the trading name <strong className="text-gray-800">CampusBook</strong>. By
          creating an account or using the Services in any way, you agree to be bound by these Terms.
          If you do not agree, do not use the Services.
        </p>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Contents</h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-gray-600">
            {[
              ["#acceptance", "1. Acceptance of Terms"],
              ["#eligibility", "2. Eligibility"],
              ["#account", "3. Account Registration"],
              ["#acceptable-use", "4. Acceptable Use Policy"],
              ["#user-content", "5. User Content"],
              ["#ip", "6. Intellectual Property"],
              ["#moderation", "7. Content Moderation & Reporting"],
              ["#payments", "8. Subscriptions & Payments"],
              ["#disclaimers", "9. Disclaimers"],
              ["#liability", "10. Limitation of Liability"],
              ["#indemnification", "11. Indemnification"],
              ["#termination", "12. Termination"],
              ["#governing-law", "13. Governing Law & Disputes"],
              ["#changes", "14. Changes to These Terms"],
              ["#contact", "15. Contact Us"],
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
        <section id="acceptance" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By downloading, installing, or otherwise accessing CampusBook, you confirm that you have
            read, understood, and agree to be bound by these Terms and our{" "}
            <Link href="/privacy-policy" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-600">
              Privacy Policy
            </Link>
            , which is incorporated by reference. If you are accepting on behalf of a club or
            organisation, you represent that you have the authority to do so.
          </p>
        </section>

        {/* ── Section 2 ── */}
        <section id="eligibility" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            2. Eligibility
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">To use CampusBook you must:</p>
          <ul className="space-y-2.5 text-gray-600 leading-relaxed mb-5">
            {[
              "Be at least 17 years of age.",
              "Be currently enrolled at a recognised university, college, or other higher education institution.",
              "Possess a valid institutional email address for the verification process.",
              "Not be prohibited from using the Services under the laws of any applicable jurisdiction.",
              "Not have had a previous CampusBook account permanently terminated for a Terms violation.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            By registering, you represent and warrant that all eligibility requirements are met. We
            reserve the right to verify your eligibility at any time and to suspend accounts that do
            not meet these requirements.
          </p>
        </section>

        {/* ── Section 3 ── */}
        <section id="account" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            3. Account Registration
          </h2>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            {[
              ["Accurate information", "You must provide truthful, accurate, and complete information when creating your account and keep it up to date."],
              ["One account per person", "You may maintain only one personal account. Creating duplicate or fake accounts is prohibited."],
              ["Credential security", "You are responsible for maintaining the confidentiality of your login credentials. You must notify us immediately at hello@campusbook.app if you suspect unauthorised access to your account."],
              ["Account responsibility", "You are responsible for all activity that occurs under your account, whether or not authorised by you."],
              ["No account transfers", "You may not sell, transfer, or licence your account to another person."],
            ].map(([term, desc]) => (
              <li key={term as string} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span><strong className="text-gray-800">{term}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 4 ── */}
        <section id="acceptable-use" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            4. Acceptable Use Policy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            CampusBook is a community for students. You agree to use the Services responsibly and in
            compliance with all applicable laws. The following are strictly prohibited:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Posting content that is illegal, hateful, threatening, harassing, defamatory, or discriminatory.",
              "Uploading, sharing, or distributing NSFW, pornographic, or sexually explicit material.",
              "Impersonating any person, university, club, or organisation.",
              "Sending spam, chain messages, or unsolicited bulk communications.",
              "Scraping, crawling, or extracting data from the platform through automated means.",
              "Attempting to hack, reverse-engineer, decompile, or interfere with the Services or our servers.",
              "Using the platform for commercial advertising or solicitation without our prior written consent.",
              "Posting another person's private or personally identifiable information without consent (doxxing).",
              "Facilitating or encouraging academic dishonesty, cheating, or plagiarism.",
              "Violating any applicable local, national, or international law or regulation.",
            ].map((item) => (
              <div key={item} className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-3.5">
                <span className="text-red-400 font-bold text-base leading-snug flex-shrink-0">✕</span>
                <span className="text-gray-700 text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mt-5">
            Violation of this policy may result in immediate content removal, account suspension, or
            permanent termination without prior notice, and may be reported to relevant authorities
            where required by law.
          </p>
        </section>

        {/* ── Section 5 ── */}
        <section id="user-content" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            5. User Content
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            "User Content" means any posts, images, comments, messages, or other material you submit
            through the Services.
          </p>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            {[
              ["Ownership", "You retain full ownership of your User Content."],
              ["Licence to CampusBook", "By submitting User Content, you grant CampusBook a non-exclusive, worldwide, royalty-free, sublicensable, and transferable licence to store, reproduce, display, distribute, and transmit your User Content solely for the purpose of operating and providing the Services. This licence terminates when you delete the content or your account (subject to data retention as described in our Privacy Policy)."],
              ["Your responsibility", "You are solely responsible for your User Content. You represent and warrant that you own it or have the necessary rights to post it, and that it does not infringe any third-party intellectual property, privacy, or other rights."],
              ["No endorsement", "We do not endorse any User Content and expressly disclaim any liability in connection with it."],
            ].map(([term, desc]) => (
              <li key={term as string} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span><strong className="text-gray-800">{term}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 6 ── */}
        <section id="ip" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            6. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            The CampusBook name, logo, app design, interface, and all associated proprietary content
            are the intellectual property of CampusBook. Nothing in these Terms grants you any right
            to use our trademarks, logos, domain names, or other brand features without our prior
            written permission.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Copyright complaints:</strong> We respect intellectual
            property rights. If you believe content on CampusBook infringes your copyright, please
            notify us at{" "}
            <a href="mailto:hello@campusbook.app" className="text-gray-900 font-semibold underline decoration-gray-300">
              hello@campusbook.app
            </a>{" "}
            with details of the original work, the infringing content, and your contact information.
            We will investigate and respond promptly.
          </p>
        </section>

        {/* ── Section 7 ── */}
        <section id="moderation" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            7. Content Moderation & Reporting
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            CampusBook employs automated ML-based content moderation (real-time NSFW detection) and
            human moderation to enforce our Community Guidelines. We reserve the right — but assume no
            obligation — to review, remove, or restrict any User Content at any time without prior
            notice if we determine it violates these Terms.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            <strong className="text-gray-800">Reporting:</strong> Users may report content or accounts
            that violate these Terms directly within the app. Human moderators review reports within 24
            hours.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Appeals:</strong> If you believe your content was removed
            or your account was suspended in error, you may appeal by emailing{" "}
            <a href="mailto:hello@campusbook.app" className="text-gray-900 font-semibold underline decoration-gray-300">
              hello@campusbook.app
            </a>{" "}
            with the subject line "Moderation Appeal." We will review your appeal within 5 business
            days.
          </p>
        </section>

        {/* ── Section 8 ── */}
        <section id="payments" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            8. Subscriptions & Payments
          </h2>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-5">
            <p className="text-amber-800 text-sm font-medium">
              Paid subscription features are currently under development. The terms below will apply
              when payment functionality is made available.
            </p>
          </div>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            {[
              ["Payment processing", "Payments will be processed securely through Razorpay. By subscribing, you agree to Razorpay's Terms of Service and Privacy Policy. CampusBook does not store your full payment card details."],
              ["Billing cycle", "Subscriptions are billed on a recurring monthly basis from the date of purchase."],
              ["Cancellation", "You may cancel your subscription at any time from the app settings. Cancellation takes effect at the end of the current billing period; your access to paid features will continue until then."],
              ["Refunds", "Payments for the current billing period are non-refundable except where required by applicable law (e.g., consumer protection regulations in your jurisdiction)."],
              ["Price changes", "We reserve the right to change subscription pricing. We will provide at least 30 days' advance notice of any price increase via in-app notification, giving you the opportunity to cancel before the new price takes effect."],
              ["Free tier", "The Student Free tier will remain available at no cost regardless of paid tier availability."],
            ].map(([term, desc]) => (
              <li key={term as string} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span><strong className="text-gray-800">{term}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 9 ── */}
        <section id="disclaimers" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            9. Disclaimers
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <p className="text-gray-700 leading-relaxed text-sm uppercase font-semibold tracking-wide mb-3">
              Important — Please Read
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mb-3">
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF
              ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mb-3">
              WE DO NOT WARRANT THAT: (A) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR
              ERROR-FREE; (B) ANY DEFECTS WILL BE CORRECTED; OR (C) THE SERVICES ARE FREE OF VIRUSES
              OR OTHER HARMFUL COMPONENTS.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              WE ARE NOT RESPONSIBLE FOR THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY USER
              CONTENT. ANY RELIANCE YOU PLACE ON SUCH CONTENT IS STRICTLY AT YOUR OWN RISK.
            </p>
          </div>
        </section>

        {/* ── Section 10 ── */}
        <section id="liability" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            10. Limitation of Liability
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <p className="text-gray-600 leading-relaxed text-sm mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CAMPUSBOOK AND ITS OPERATORS SHALL
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE
              LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE
              SERVICES.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS RELATING TO THE
              SERVICES EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT YOU PAID TO CAMPUSBOOK IN THE 3
              MONTHS PRECEDING THE CLAIM; OR (B) INR 1,000 (ONE THOUSAND INDIAN RUPEES), OR THE
              EQUIVALENT IN YOUR LOCAL CURRENCY.
            </p>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Some jurisdictions do not allow the exclusion or limitation of certain types of liability.
            In such cases, the above limitations will apply to the fullest extent permitted by law.
          </p>
        </section>

        {/* ── Section 11 ── */}
        <section id="indemnification" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            11. Indemnification
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You agree to defend, indemnify, and hold harmless CampusBook and its operators, agents,
            and representatives from and against any claims, liabilities, damages, losses, and expenses
            (including reasonable legal fees) arising out of or in any way connected with: (a) your
            access to or use of the Services; (b) your User Content; (c) your violation of these
            Terms; or (d) your violation of any rights of another person or entity.
          </p>
        </section>

        {/* ── Section 12 ── */}
        <section id="termination" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            12. Termination
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            <strong className="text-gray-800">By CampusBook:</strong> We may suspend or permanently
            terminate your account, with or without notice, if we reasonably believe you have violated
            these Terms, engaged in conduct harmful to other users or the platform, or for any other
            reason at our sole discretion. Where possible, we will give you prior notice and an
            opportunity to remedy the issue.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            <strong className="text-gray-800">By you:</strong> You may delete your account at any time
            through the app settings. Upon deletion, your data will be handled in accordance with our{" "}
            <Link href="/privacy-policy" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-600">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Effect of termination:</strong> Upon termination, your
            right to use the Services ceases immediately. Sections that by their nature should survive
            termination (including Sections 5, 6, 9, 10, 11, and 13) shall continue to apply.
          </p>
        </section>

        {/* ── Section 13 ── */}
        <section id="governing-law" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            13. Governing Law & Disputes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            These Terms are governed by and construed in accordance with the laws of{" "}
            <strong className="text-gray-800">India</strong>, without regard to its conflict of law
            provisions. Any dispute arising out of or relating to these Terms or the Services shall be
            subject to the exclusive jurisdiction of the courts located in{" "}
            <strong className="text-gray-800">New Delhi, India</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Before initiating formal legal proceedings, we both agree to attempt resolution through
            good-faith negotiation for a period of 30 days from the date of written notice of a
            dispute. This clause does not affect any statutory rights you may have under the consumer
            protection laws of your country of residence.
          </p>
        </section>

        {/* ── Section 14 ── */}
        <section id="changes" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            14. Changes to These Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may modify these Terms at any time. We will notify you of material changes via an
            in-app notification at least 14 days before the changes take effect, and by updating the
            "Last Updated" date at the top of this page. If you continue to use the Services after
            the effective date of any changes, you are agreeing to the revised Terms. If you do not
            agree, you must stop using the Services and may delete your account.
          </p>
        </section>

        {/* ── Section 15 ── */}
        <section id="contact" className="mb-4 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            15. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Questions about these Terms? Reach us at:
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
