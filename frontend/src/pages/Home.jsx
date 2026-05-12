import { Link } from "react-router-dom";
import {
  Phone, ArrowRight, Zap, Shield, Network, Video, Gauge, ClipboardCheck,
  Lightbulb, ShieldAlert, MapPin, CheckCircle2, Star, BadgeCheck, Building2, Satellite
} from "lucide-react";

const PHONE = "0234 / 610 65 474";
const PHONE_RAW = "023461065474";

const HERO_IMG = "https://images.unsplash.com/photo-1595856619767-ab739fa7daae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw0fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8fHwxNzc4NjIzOTU0fDA&ixlib=rb-4.1.0&q=85";

const FEATURED_SERVICES = [
  { Icon: Zap, title: "Elektroinstallation", desc: "Steckdosen, Schalter, Leitungen – von der Einzelsteckdose bis zur Komplettsanierung." },
  { Icon: Shield, title: "Sicherheitstechnik", desc: "Alarmanlagen, Rauchmelder, Überspannungsschutz für Ihr Zuhause & Gewerbe." },
  { Icon: Video, title: "Sprechanlagen & Video", desc: "Moderne Türsprechanlagen und Videoüberwachung – auch Umrüstung bestehender Anlagen." },
  { Icon: Network, title: "EDV Netzwerke", desc: "Stabile LAN-Netzwerke für Privat & Gewerbe – zuverlässiger als WLAN." },
  { Icon: Gauge, title: "Zähler & Verteilungen", desc: "Sicherungskästen, FI-Schutzschalter und Unterverteilungen fachgerecht installiert." },
  { Icon: ClipboardCheck, title: "E-Check Prüfungen", desc: "DIN VDE und BGV A3 Prüfungen für Privat und Gewerbe – mit Prüfprotokoll." },
];

const TRUST_BADGES = [
  { Icon: BadgeCheck, label: "Elektro-Meisterbetrieb", sub: "Staatlich anerkannt" },
  { Icon: Star, label: "Seit 2002", sub: "Über 20 Jahre Erfahrung" },
  { Icon: Shield, label: "DIN VDE Zertifiziert", sub: "Höchste Sicherheitsstandards" },
  { Icon: MapPin, label: "Bochum & Umgebung", sub: "Ihr regionaler Partner" },
];

const CITIES = ["Bochum", "Herne", "Essen", "Recklinghausen", "Dortmund", "Witten"];

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0D1F3C]/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5 animate-fade-up">
              <Zap size={18} className="text-[#F5A623]" />
              <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em]">
                Elektro-Meisterbetrieb · Bochum-Gerthe
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold text-white mb-6 leading-tight animate-fade-up animation-delay-100">
              Ihr Elektriker<br />
              <span className="text-[#F5A623]">aus Bochum</span>
            </h1>
            <p className="text-white/75 text-lg font-manrope mb-8 max-w-xl leading-relaxed animate-fade-up animation-delay-200">
              Meisterbetrieb seit 2002 – zuverlässige Elektroinstallation für Privat & Gewerbe.
              Von der Steckdose bis zur Komplettlösung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up animation-delay-300">
              <Link
                to="/kontakt"
                data-testid="hero-cta-button"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D98E1C] text-[#0D1F3C] font-outfit font-bold px-7 py-4 rounded-md transition-all duration-200 shadow-lg shadow-[#F5A623]/20 text-base"
              >
                Jetzt Anfragen
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/leistungen"
                data-testid="hero-services-button"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-[#F5A623] hover:text-[#F5A623] font-outfit font-bold px-7 py-4 rounded-md transition-all duration-200 text-base"
              >
                Unsere Leistungen
              </Link>
            </div>

            <a
              href={`tel:${PHONE_RAW}`}
              data-testid="hero-phone-link"
              className="inline-flex items-center gap-3 text-white hover:text-[#F5A623] transition-colors animate-fade-up animation-delay-400"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-white/50 font-manrope">Jetzt direkt anrufen</p>
                <p className="font-outfit font-bold text-lg">{PHONE}</p>
              </div>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#F5A623] rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section data-testid="trust-badges" className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_BADGES.map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 py-2">
                <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#F5A623]" />
                </div>
                <div>
                  <p className="font-outfit font-bold text-[#0D1F3C] text-sm">{label}</p>
                  <p className="text-slate-500 text-xs font-manrope">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section data-testid="services-section" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
              Was wir für Sie tun
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0D1F3C] mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-slate-500 font-manrope max-w-xl mx-auto">
              Das volle Spektrum der Elektrotechnik – professionell, zuverlässig und auf höchstem Niveau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SERVICES.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                data-testid={`service-card-${i}`}
                className="service-card bg-white rounded-xl p-7 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default group"
              >
                <div className="service-icon w-12 h-12 bg-[#0D1F3C]/5 group-hover:bg-[#F5A623] rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon size={22} className="text-[#0D1F3C] group-hover:text-[#0D1F3C] transition-colors" />
                </div>
                <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm font-manrope leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/leistungen"
              data-testid="all-services-link"
              className="inline-flex items-center gap-2 bg-[#0D1F3C] hover:bg-[#162B50] text-white font-outfit font-bold px-7 py-4 rounded-md transition-all duration-200 shadow-lg"
            >
              Alle Leistungen ansehen
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section data-testid="about-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                Über uns
              </span>
              <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0D1F3C] mb-6 leading-tight">
                30+ Jahre Erfahrung.<br />
                <span className="text-[#F5A623]">Ihr Meister vor Ort.</span>
              </h2>
              <p className="text-slate-600 font-manrope leading-relaxed mb-6">
                HOFER Elektrotechnik, gegründet von Elektromeister Marco Hofer, steht für Elektroarbeiten
                auf höchstem Niveau. Mit über 30 Jahren Berufserfahrung und einem geschulten Blick für
                Details bieten wir Ihnen maßgeschneiderte Lösungen für jeden Bedarf.
              </p>
              <p className="text-slate-600 font-manrope leading-relaxed mb-8">
                Neben der korrekten Ausführung ist uns Termintreue sowie eine sauber hinterlassene
                Baustelle besonders wichtig. Ihr Vertrauen ist unser Antrieb.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Elektro-Meisterbetrieb seit 2002",
                  "Über 30 Jahre Berufserfahrung",
                  "Privat & Gewerbliche Kunden",
                  "Zertifiziert nach DIN VDE",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-manrope text-slate-700">
                    <CheckCircle2 size={18} className="text-[#F5A623] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/ueber-uns"
                data-testid="about-more-link"
                className="inline-flex items-center gap-2 text-[#0D1F3C] font-outfit font-bold hover:text-[#F5A623] transition-colors"
              >
                Mehr über uns
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1660330589693-99889d60181e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8fHwxNzc4NjIzOTU0fDA&ixlib=rb-4.1.0&q=85"
                  alt="Elektriker bei der Arbeit"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#F5A623] text-[#0D1F3C] rounded-xl p-5 shadow-xl">
                <p className="font-outfit font-black text-3xl">30+</p>
                <p className="font-manrope font-bold text-sm">Jahre Erfahrung</p>
              </div>
              <div className="absolute -top-5 -right-5 bg-[#0D1F3C] text-white rounded-xl p-5 shadow-xl">
                <p className="font-outfit font-black text-3xl">2002</p>
                <p className="font-manrope font-bold text-sm">Gründungsjahr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Einzugsgebiet */}
      <section data-testid="service-area-section" className="py-16 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Einzugsgebiet
          </span>
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-white mb-4">
            Wir kommen zu Ihnen
          </h2>
          <p className="text-white/60 font-manrope max-w-2xl mx-auto mb-10">
            Wir sind in Bochum & Herne sowie über die A43 und A40 schnell in Essen, Recklinghausen,
            Dortmund und Witten erreichbar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.map((city) => (
              <span
                key={city}
                data-testid={`city-badge-${city.toLowerCase()}`}
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-outfit font-bold px-5 py-2.5 rounded-full hover:bg-[#F5A623]/20 hover:border-[#F5A623]/40 hover:text-[#F5A623] transition-all duration-200"
              >
                <MapPin size={14} className="text-[#F5A623]" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section data-testid="cta-section" className="py-20 bg-[#F5A623]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0D1F3C] mb-4">
            Projekt geplant? Wir beraten Sie gerne!
          </h2>
          <p className="text-[#0D1F3C]/70 font-manrope mb-8 max-w-xl mx-auto">
            Rufen Sie uns an oder senden Sie uns eine Anfrage – wir melden uns schnell bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${PHONE_RAW}`}
              data-testid="cta-phone-link"
              className="inline-flex items-center justify-center gap-2 bg-[#0D1F3C] hover:bg-[#162B50] text-white font-outfit font-bold px-8 py-4 rounded-md transition-all duration-200 shadow-lg text-base"
            >
              <Phone size={18} />
              {PHONE}
            </a>
            <Link
              to="/kontakt"
              data-testid="cta-contact-link"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#0D1F3C] font-outfit font-bold px-8 py-4 rounded-md transition-all duration-200 shadow-lg text-base"
            >
              Anfrage senden
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
