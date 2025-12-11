import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { footerContent } from "@/siteContent";
import logo from "@assets/hawkstone-logo.png";
import hawkSilhouette from "@assets/hawkstone-hawk.png";

const services = [
  { name: "Contract Staffing", href: "/services" },
  { name: "Leadership Hiring", href: "/services" },
  { name: "Candidate Sourcing", href: "/services" },
  { name: "Specialty Recruitment", href: "/services" },
  { name: "Training Support", href: "/services" },
];

const company = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const other = [
  { name: "Why Choose Us?", href: "/why-choose-us" },
  { name: "Contact Sales", href: "/contact" },
  { name: "Career Opportunities", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#041018" }} data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img src={logo} alt="Hawkstone Global" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {footerContent.tagline}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-[#FFB000] transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-[#FFB000] transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-gray-600 text-xs mt-4">
              {footerContent.legal.copyright}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-400 hover:text-[#FFB000] transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-400 hover:text-[#FFB000] transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Other</h4>
            <ul className="space-y-3">
              {other.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-400 hover:text-[#FFB000] transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <p className="text-sm text-gray-400 mb-6">
              Follow us on social platforms for updates on staffing insights and company news.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/hawkstone-global-solutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0F1A21] flex items-center justify-center text-gray-400 hover:text-[#FFB000] hover:bg-[#142229] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hawkstoneglobal?igsh=c2p6dG01dzNqMGRj&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0F1A21] flex items-center justify-center text-gray-400 hover:text-[#FFB000] hover:bg-[#142229] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute bottom-0 left-0 right-0 text-[12vw] font-bold text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(255, 176, 0, 0.15)",
            lineHeight: "0.8",
            transform: "translateY(30%)"
          }}
        >
          Hawkstone
        </div>
      </div>
    </footer>
  );
}
