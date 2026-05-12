import { Link } from "react-router-dom";
import {
  CheckCircle2, MapPin, Zap, Phone, ArrowRight, Shield, Star,
  Users, Clock, Award
} from "lucide-react";

const TEAM_IMG = "https://images.unsplash.com/photo-1660330589693-99889d60181e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8fHwxNzc4NjIzOTU0fDA&ixlib=rb-4.1.0&q=85";
const BOCHUM_IMG = "https://images.unsplash.com/photo-1667375340341-55def15ba15b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxib2NodW0lMjBnZXJtYW55JTIwY2l0eXxlbnwwfHx8fDE3Nzg2MjM5NTR8MA&ixlib=rb-4.1.0&q=85";

const WORK_AREAS = [
  "Elektroinstallation von Schaltern, Steckdosen, Leuchten und Lichtsystemen, Präsenzmeldern, Rolladensteuerungen, Unterverteilungen u.v.m.",
  "Sicherheitstechnik: Bewegungsmelder, Rauchmelder, Alarmanlagen, Videoüberwachung, Zugangskontrollsysteme (klassisch/biometrisch)",
  "Kommunikationstechnik: von der klassischen Klingelanlage bis zur Türsprechanlage mit Video sowie Telefonanlagen (analog, ISDN, DSL)",
  "Netzwerkinstallation für PCs im privaten & gewerblichen Bereich",
  "Installation von Zähleranlagen in Zusammenarbeit mit den Stromversorgern",
  "Satelliten-Anlagen: von der Einzellösung bis zur kompletten Kanalaufbereitungsanlage sowie Kabelfernsehanschlüsse",
  "Elektroservice: Notdienst, Fehlersuche und Reparaturen",
  "Überspannungsschutz (Blitzschutz) – vom Hausanschluss bis zur letzten Steckdose",
  "Komplette Sanierung und Neuinstallation der Elektroanlage in Wohnung und Haus",
  "Durchführung von Sicherheits-E-Check-Prüfungen für Privat & Gewerbe",
  "EIBus-Installationen, Powernet und SPS-Steuerungen",
];

const VALUES = [
  { Icon: CheckCircle2, title: "Termintreue", desc: "Wir halten vereinbarte Termine zuverlässig ein." },
  { Icon: Shield, title: "Sauberkeit", desc: "Sauber hinterlassene Baustelle – das ist uns wichtig." },
  { Icon: Star, title: "Qualität", desc: "Elektroarbeiten auf höchstem Niveau – kein Kompromiss." },
  { Icon: Users, title: "Beratung", desc: "Ehrliche, kompetente Beratung ohne versteckte Kosten." },
];

export default function UeberUns() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Banner */}
      <div className="page-banner relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${BOCHUM_IMG})` }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Wer wir sind
          </span>
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-white mb-4">Über uns</h1>
          <p className="text-white/60 font-manrope max-w-xl mx-auto">
            Lernen Sie Hofer Elektrotechnik kennen – Ihr verlässlicher Partner für Elektroarbeiten in Bochum seit 2002.
          </p>
        </div>
      </div>

      {/* Marco Hofer */}
      <section data-testid="about-marco" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={TEAM_IMG} alt="Marco Hofer – Elektromeister" className="w-full h-[460px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/60 to-transparent rounded-2xl" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#F5A623] text-[#0D1F3C] rounded-xl p-5 shadow-xl">
                <p className="font-outfit font-black text-3xl">30+</p>
                <p className="font-manrope font-bold text-sm">Jahre Erfahrung</p>
              </div>
            </div>

            <div>
              <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                Elektromeister
              </span>
              <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0D1F3C] mb-4">
                Marco Hofer
              </h2>
              <p className="text-slate-600 font-manrope leading-relaxed mb-4">
                HOFER Elektrotechnik, gegründet vom Elektromeister Marco Hofer, steht für Elektroarbeiten
                auf höchstem Niveau. Mit über 30 Jahren Berufserfahrung und fundiertem Fachwissen bieten
                wir Ihnen maßgeschneiderte Lösungen für jeden Bedarf.
              </p>
              <p className="text-slate-600 font-manrope leading-relaxed mb-8">
                Neben der korrekten Ausführung ist uns die Termintreue sowie eine sauber hinterlassene
                Baustelle sehr wichtig. Ihr Vertrauen ist unser höchstes Gut.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { Icon: Award, label: "Meisterbetrieb", sub: "staatl. anerkannt" },
                  { Icon: Clock, label: "Seit 2002", sub: "im Betrieb" },
                  { Icon: MapPin, label: "Bochum", sub: "& Umgebung" },
                ].map(({ Icon, label, sub }) => (
                  <div key={label} className="bg-[#F8FAFC] rounded-xl p-4 text-center border border-slate-200">
                    <Icon size={22} className="text-[#F5A623] mx-auto mb-2" />
                    <p className="font-outfit font-bold text-[#0D1F3C] text-sm">{label}</p>
                    <p className="text-slate-400 text-xs font-manrope">{sub}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/kontakt"
                data-testid="ueber-uns-contact-link"
                className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D98E1C] text-[#0D1F3C] font-outfit font-bold px-7 py-4 rounded-md transition-all duration-200 shadow-lg"
              >
                Kontakt aufnehmen
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section data-testid="work-areas" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
              Arbeitsbereiche
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0D1F3C] mb-4">
              Schwerpunkte unserer Arbeit
            </h2>
            <p className="text-slate-500 font-manrope max-w-xl mx-auto">
              Und wenn hier etwas fehlen sollte – sprechen Sie uns bitte an!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {WORK_AREAS.map((area, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <Zap size={18} className="text-[#F5A623] mt-0.5 flex-shrink-0" />
                <p className="text-slate-600 text-sm font-manrope leading-relaxed">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section data-testid="values-section" className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
              Unsere Werte
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-white mb-4">
              Warum Hofer Elektrotechnik?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-[#162B50] rounded-xl p-7 border border-white/10 text-center hover:border-[#F5A623]/30 transition-all">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#F5A623]" />
                </div>
                <h3 className="font-outfit font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm font-manrope leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section data-testid="einzugsgebiet" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                Einzugsgebiet
              </span>
              <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0D1F3C] mb-6">
                Wir kommen zu Ihnen
              </h2>
              <p className="text-slate-600 font-manrope leading-relaxed mb-6">
                Unser Hauptgebiet umfasst Bochum & Herne. Über die A43 und A40 sind wir außerdem
                schnell in Essen, Recklinghausen, Dortmund und Witten erreichbar.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Bochum", "Herne", "Essen", "Recklinghausen", "Dortmund", "Witten"].map((city) => (
                  <span key={city} className="flex items-center gap-2 bg-[#F8FAFC] border border-slate-200 text-[#0D1F3C] font-outfit font-bold px-4 py-2 rounded-full text-sm">
                    <MapPin size={13} className="text-[#F5A623]" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={BOCHUM_IMG} alt="Bochum" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
