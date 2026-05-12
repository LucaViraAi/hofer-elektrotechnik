import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";

const LOGO = "https://customer-assets.emergentagent.com/job_meister-hofer/artifacts/zvxugrbj_873.png";

const navLinks = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/jobs", label: "Jobs" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/impressum", label: "Impressum" },
  { to: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#0D1F3C] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src={LOGO}
              alt="HOFER Elektrotechnik"
              className="h-14 w-auto mb-4"
              style={{ mixBlendMode: "lighten" }}
            />
            <p className="text-white font-outfit font-bold text-lg">HOFER Elektrotechnik</p>
            <p className="text-[#F5A623] text-sm font-manrope mt-1">Meisterbetrieb seit 2002</p>
            <p className="text-white/50 text-sm mt-4 leading-relaxed font-manrope">
              Ihr zuverlässiger Elektriker in Bochum und Umgebung. Qualität auf höchstem Niveau.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-outfit font-bold text-xs uppercase tracking-[0.2em] text-[#F5A623] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/60 hover:text-[#F5A623] text-sm transition-colors font-manrope"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-outfit font-bold text-xs uppercase tracking-[0.2em] text-[#F5A623] mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F5A623] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm font-manrope">
                  Kornweg 34<br />44805 Bochum (Gerthe)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F5A623] flex-shrink-0" />
                <a
                  href="tel:023461065474"
                  data-testid="footer-phone-link"
                  className="text-white/60 hover:text-[#F5A623] text-sm transition-colors font-manrope"
                >
                  0234 / 610 65 474
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/30 flex-shrink-0" />
                <span className="text-white/60 text-sm font-manrope">Fax: 0234 / 610 65 484</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F5A623] flex-shrink-0" />
                <a
                  href="mailto:info@hofer-elektrotechnik.de"
                  data-testid="footer-email-link"
                  className="text-white/60 hover:text-[#F5A623] text-sm transition-colors font-manrope"
                >
                  info@hofer-elektrotechnik.de
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-outfit font-bold text-xs uppercase tracking-[0.2em] text-[#F5A623] mb-6">
              Öffnungszeiten
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#F5A623] mt-0.5 flex-shrink-0" />
                <div className="text-sm font-manrope">
                  <p className="text-white/80 font-semibold">Mo – Fr</p>
                  <p className="text-white/60">07:00 – 17:00 Uhr</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-white/30 mt-0.5 flex-shrink-0" />
                <div className="text-sm font-manrope">
                  <p className="text-white/80 font-semibold">Samstag</p>
                  <p className="text-white/60">nach Vereinbarung</p>
                </div>
              </li>
              <li className="mt-2">
                <span className="inline-flex items-center gap-2 bg-[#F5A623]/15 text-[#F5A623] text-xs font-outfit font-bold px-3 py-1.5 rounded-full border border-[#F5A623]/20">
                  <Zap size={12} />
                  Notdienst auf Anfrage
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-manrope">
            © {new Date().getFullYear()} HOFER Elektrotechnik · Marco Hofer · Alle Rechte vorbehalten
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-white/40 hover:text-[#F5A623] text-sm transition-colors font-manrope">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-white/40 hover:text-[#F5A623] text-sm transition-colors font-manrope">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
