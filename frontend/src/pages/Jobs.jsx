import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, CheckCircle2, Phone, ArrowRight, Zap, Users } from "lucide-react";

const AUSBILDUNG_INHALTE = [
  "Elektroinstallation im Wohn- und Gewerbebau",
  "Planung und Umsetzung von Beleuchtungsanlagen",
  "Installation von Kommunikations- und Netzwerktechnik",
  "Prüfung elektrischer Anlagen und Geräte",
  "Sicherheitstechnik: Alarm- und Brandmeldeanlagen",
  "Arbeit mit modernsten Messtechnik und Werkzeugen",
  "Kundenkommunikation und Beratung",
  "Dokumentation nach VDE-Norm",
];

export default function Jobs() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Banner */}
      <div className="page-banner">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Karriere bei HOFER
          </span>
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-white mb-4">Jobs & Ausbildung</h1>
          <p className="text-white/60 font-manrope max-w-xl mx-auto">
            Werden Sie Teil des Teams von HOFER Elektrotechnik und starten Sie Ihre Karriere
            in einem handwerklichen Meisterbetrieb mit über 20 Jahren Erfahrung.
          </p>
        </div>
      </div>

      {/* Ausbildung */}
      <section data-testid="ausbildung-section" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                Ausbildung
              </span>
              <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0D1F3C] mb-4">
                Elektroniker für Energie- & Gebäudetechnik
              </h2>
              <p className="text-slate-600 font-manrope leading-relaxed mb-6">
                Wir bilden aus! Als Elektromeister-Betrieb bieten wir Ihnen eine fundierte und praxisnahe
                Ausbildung im Beruf des Elektronikers für Energie- und Gebäudetechnik. In 3,5 Jahren
                erlernen Sie alle relevanten Fertigkeiten für eine erfolgreiche Karriere in der Elektrotechnik.
              </p>
              <p className="text-slate-600 font-manrope leading-relaxed mb-8">
                Sie arbeiten von Anfang an aktiv auf unseren Baustellen mit und lernen so praxisnah das
                Handwerk von Grund auf. Unser Meister Marco Hofer begleitet Sie persönlich durch die Ausbildung.
              </p>

              <div className="flex items-center gap-4 mb-8 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-[#F5A623]" />
                </div>
                <div>
                  <p className="font-outfit font-bold text-[#0D1F3C]">Ausbildungsdauer</p>
                  <p className="text-slate-500 text-sm font-manrope">3,5 Jahre (Verkürzung möglich)</p>
                </div>
              </div>

              <Link
                to="/kontakt"
                data-testid="ausbildung-contact-link"
                className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D98E1C] text-[#0D1F3C] font-outfit font-bold px-7 py-4 rounded-md transition-all duration-200 shadow-lg"
              >
                Jetzt bewerben
                <ArrowRight size={18} />
              </Link>
            </div>

            <div>
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-xl mb-6">Was Sie bei uns lernen:</h3>
              <ul className="space-y-3">
                {AUSBILDUNG_INHALTE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                    <CheckCircle2 size={18} className="text-[#F5A623] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm font-manrope leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stellenangebote */}
      <section data-testid="stellenangebote" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
              Offene Stellen
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0D1F3C] mb-4">
              Stellenangebote
            </h2>
            <p className="text-slate-500 font-manrope max-w-xl mx-auto">
              Wir suchen engagierte Mitarbeiter, die unser Team verstärken möchten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Elektriker / Elektroinstallateur (m/w/d)",
                type: "Vollzeit",
                desc: "Wir suchen erfahrene Elektriker für Installations- und Servicearbeiten im Wohn- und Gewerbebau im Raum Bochum und Umgebung.",
                reqs: ["Abgeschlossene Berufsausbildung im Elektrohandwerk", "Selbständige Arbeitsweise", "Führerschein Klasse B", "Teamfähigkeit"],
              },
              {
                title: "Auszubildender Elektroniker (m/w/d)",
                type: "Ausbildung",
                desc: "Starten Sie Ihre Karriere mit einer soliden Ausbildung zum Elektroniker für Energie- und Gebäudetechnik in einem renommierten Meisterbetrieb.",
                reqs: ["Hauptschulabschluss oder höher", "Technisches Interesse", "Handwerkliches Geschick", "Zuverlässigkeit und Pünktlichkeit"],
              },
            ].map(({ title, type, desc, reqs }) => (
              <div
                key={title}
                data-testid={`job-card-${title.substring(0, 10)}`}
                className="bg-[#F8FAFC] rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#0D1F3C]/5 rounded-xl flex items-center justify-center">
                    <Briefcase size={22} className="text-[#0D1F3C]" />
                  </div>
                  <span className="bg-[#F5A623]/15 text-[#0D1F3C] font-outfit font-bold text-xs px-3 py-1 rounded-full border border-[#F5A623]/30">
                    {type}
                  </span>
                </div>
                <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm font-manrope leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {reqs.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-sm font-manrope text-slate-600">
                      <Zap size={14} className="text-[#F5A623] flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 text-[#0D1F3C] font-outfit font-bold hover:text-[#F5A623] transition-colors text-sm"
                >
                  Jetzt bewerben <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Users size={40} className="text-[#F5A623] mx-auto mb-4" />
          <h2 className="text-3xl font-outfit font-bold text-white mb-4">
            Interesse? Melden Sie sich bei uns!
          </h2>
          <p className="text-white/60 font-manrope mb-8 max-w-lg mx-auto">
            Senden Sie uns Ihre Bewerbungsunterlagen per E-Mail oder rufen Sie uns direkt an.
            Wir freuen uns auf Sie!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:023461065474"
              data-testid="jobs-phone-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D98E1C] text-[#0D1F3C] font-outfit font-bold px-8 py-4 rounded-md transition-all duration-200"
            >
              <Phone size={18} />
              0234 / 610 65 474
            </a>
            <a
              href="mailto:info@hofer-elektrotechnik.de"
              data-testid="jobs-email-cta"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:border-[#F5A623] hover:text-[#F5A623] font-outfit font-bold px-8 py-4 rounded-md transition-all duration-200"
            >
              info@hofer-elektrotechnik.de
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
