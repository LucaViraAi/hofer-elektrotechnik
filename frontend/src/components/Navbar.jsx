import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Zap } from "lucide-react";

const LOGO = "https://customer-assets.emergentagent.com/job_meister-hofer/artifacts/zvxugrbj_873.png";
const PHONE = "0234 / 610 65 474";
const PHONE_RAW = "023461065474";

const navLinks = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/jobs", label: "Jobs" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0D1F3C] ${
        scrolled ? "shadow-xl shadow-black/30" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" data-testid="logo-link" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={LOGO}
              alt="HOFER Elektrotechnik Logo"
              className="h-10 md:h-12 w-auto"
              style={{ mixBlendMode: "lighten" }}
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-white font-outfit font-bold text-sm">HOFER Elektrotechnik</p>
              <p className="text-[#F5A623] text-xs font-manrope">Meisterbetrieb seit 2002</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-").replace(/ü/g, "u")}`}
                className={`font-manrope font-semibold text-sm transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-[#F5A623]"
                    : "text-white/80 hover:text-[#F5A623]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_RAW}`}
              data-testid="navbar-phone-link"
              className="flex items-center gap-2 bg-[#F5A623] hover:bg-[#D98E1C] text-[#0D1F3C] font-outfit font-bold px-3 py-2 md:px-4 md:py-2.5 rounded-md text-sm transition-all duration-200 shadow-lg shadow-[#F5A623]/20"
            >
              <Phone size={15} />
              <span className="hidden sm:inline">{PHONE}</span>
              <span className="sm:hidden">Anrufen</span>
            </a>
            <button
              data-testid="mobile-menu-button"
              className="lg:hidden text-white p-2 hover:text-[#F5A623] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu öffnen"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#162B50] border-t border-white/10 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`font-manrope font-semibold py-3 px-4 rounded-lg transition-colors text-sm ${
                location.pathname === link.to
                  ? "text-[#F5A623] bg-white/5"
                  : "text-white hover:text-[#F5A623] hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-2 text-[#F5A623] font-manrope font-bold py-3 px-4 text-sm"
          >
            <Phone size={15} />
            {PHONE}
          </a>
        </div>
      </div>
    </nav>
  );
}
