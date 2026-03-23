import Image from "next/image";

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Download", href: "https://drive.google.com/uc?export=download&id=1yUtQDtbt2R-60IEMnLBSKKNsROKv4Clv" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Status", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "GDPR", href: "/privacy-policy#your-rights" },
  ],
};

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top */}
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/other/campusbook_logo.png"
                alt="CampusBook"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="text-xl font-extrabold">CampusBook</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              The social platform built exclusively for university students. Connect, collaborate, and thrive on campus.
            </p>
            {/* App badges */}
            <div className="flex flex-col gap-2">
              <a href="https://drive.google.com/uc?export=download&id=1yUtQDtbt2R-60IEMnLBSKKNsROKv4Clv" className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors">
                Android
              </a>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 text-white/50 border border-white/5 rounded-xl text-sm font-medium cursor-not-allowed">
                iOS (Coming Soon)
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CampusBook. All rights reserved. Made with ❤️ for students.
          </p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "LinkedIn", "Discord"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
