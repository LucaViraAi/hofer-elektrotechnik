import { Link } from "react-router-dom";
import {
  Zap, Satellite, Phone, ClipboardCheck, Gauge, Video, ShieldAlert,
  Network, ChevronUp, Lightbulb, Hammer, Building2, Thermometer,
  Flame, BadgeCheck, Wind, Bell, Shield, ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    Icon: Zap,
    title: "Elektroinstallation",
    description: "Wir installieren Steckdosen, Lichtschalter sowie alles weitere aus dem Bereich Elektro. Sei es die nachträgliche Installation von Steckdosen oder eine komplette Neuinstallation Ihrer Hauselektrik. Aufgrund unserer langjährigen Erfahrung geben wir Ihnen die richtige Beratung zur Modernisierung oder Erneuerung Ihrer Elektroinstallation.",
  },
  {
    Icon: Satellite,
    title: "Sat-Anlagen",
    description: "Der Empfang des TV-Signals sollte zuverlässig und stabil sein. Von der Dachmontage bis zu speziellen Lösungen bei Wand- oder Flachdach-Montagen stellen wir den Empfang sicher. Auch Komplettlösungen für Mehrfamilienhäuser oder die Umrüstung von Kabelsignal auf SAT-Signal gehören zu unserem Portfolio.",
  },
  {
    Icon: Phone,
    title: "Telefonanlagen",
    description: "Installation von Telefonanlagen – analog, ISDN und DSL. Von der klassischen Einzelleitung bis zur modernen VoIP-Anlage für Ihr Zuhause oder Ihr Büro. Fachgerecht verlegt und konfiguriert.",
  },
  {
    Icon: ClipboardCheck,
    title: "E-Check Prüfungen",
    description: "Durchführung von Sicherheits-E-Check-Prüfungen für Privat & Gewerbe. Wir prüfen Ihre Elektroanlage auf Sicherheit und stellen Ihnen ein detailliertes Prüfprotokoll aus.",
  },
  {
    Icon: Gauge,
    title: "Zähler & Verteilungen",
    description: "Der sogenannte \"Sicherungskasten\" bildet das Herzstück einer elektrischen Anlage. Hier sollten die Leitungen entsprechend ihren Querschnitten und Leistungsaufnahmen richtig abgesichert werden. Auch der Personenschutz mit FI-Schutzschaltern ist maßgeblich für die Sicherheit der Anlage.",
  },
  {
    Icon: Video,
    title: "Sprechanlagen & Videoanlagen",
    description: "Die Klingelplatte ist wie eine Visitenkarte des Hauses. Wir modernisieren Altanlagen und rüsten bestehende Klingelanlagen zu Sprechanlagen um – in den meisten Fällen sogar ohne Neuverlegung von Leitungen. Für zusätzliche Sicherheit bieten wir auch Komplettlösungen mit Kamera an.",
  },
  {
    Icon: ShieldAlert,
    title: "Alarmanlagen",
    description: "Professionelle Installation von Alarmanlagen für Privathäuser und Gewerbeobjekte. Einbruchmeldesysteme, Bewegungsmelder und Rauchmelder – wir sorgen für Ihre Sicherheit.",
  },
  {
    Icon: Network,
    title: "EDV Netzwerke",
    description: "Computer-Netzwerke sind nicht nur in gewerblichen Objekten von größerer Wichtigkeit. Im privaten Bereich gewinnt die Installation von Netzwerkverbindungen immer mehr an Bedeutung. Das größere Datenaufkommen durch Streaming-Dienste erfordert eine sichere und stabile Verbindung – wir bieten umfangreiche Beratung und fachgerechte Installation.",
  },
  {
    Icon: ChevronUp,
    title: "Elektrische Rolladen & Garagentore",
    description: "Installation und Wartung von elektrischen Rollladenantrieben und Garagentorantrieben. Nachrüstung bestehender Anlagen sowie Neuinstallation mit modernen Steuerungen und Zeitschaltuhren.",
  },
  {
    Icon: Lightbulb,
    title: "Beleuchtung",
    description: "Planung und Installation von Beleuchtungssystemen für Innen- und Außenbereiche. Von der einfachen LED-Nachrüstung bis zur intelligenten Lichtsteuerung mit Präsenzmeldern – wir beraten Sie umfassend.",
  },
  {
    Icon: Hammer,
    title: "Altbau-Sanierung",
    description: "Komplette Sanierung und Neuinstallation der Elektroanlage in Wohnung und Haus. Wir modernisieren veraltete Elektroanlagen fachgerecht und bringen sie auf den aktuellen Stand der Technik.",
  },
  {
    Icon: Building2,
    title: "Neubau",
    description: "Komplette Elektroinstallation für Neubauten – von der Planung bis zur Abnahme. Wir arbeiten eng mit Architekten und Bauträgern zusammen und sorgen für eine fachgerechte Ausführung.",
  },
  {
    Icon: Thermometer,
    title: "Nachtspeicher & Entsorgung",
    description: "Anschluss und Installation von Nachtspeicherheizungen sowie fachgerechte Entsorgung alter Geräte. Wir kümmern uns um die komplette elektrische Einbindung in Ihr Heizsystem.",
  },
  {
    Icon: Flame,
    title: "Durchlauferhitzer",
    description: "Elektrischer Anschluss und Installation von Durchlauferhitzern aller Hersteller. Ob Küche, Bad oder Keller – wir verlegen die nötige Elektrik und schließen Ihr Gerät fachgerecht an.",
  },
  {
    Icon: BadgeCheck,
    title: "DIN VDE & BGV A3 Prüfungen",
    description: "Durchführung von Wiederholungsprüfungen nach DIN VDE 0701/0702/0751-1 und BGV A3 für elektrische Betriebsmittel und Anlagen. Wir erstellen Ihnen die erforderlichen Prüfprotokolle.",
  },
  {
    Icon: Wind,
    title: "Wärmepumpen",
    description: "Elektrischer Anschluss und Installation von Wärmepumpen. Wir kümmern uns um die fachgerechte elektrische Einbindung Ihrer Wärmepumpe inklusive aller Steuerungen.",
  },
  {
    Icon: Bell,
    title: "Brandmeldeanlagen",
    description: "Installation und Wartung von Brandmeldeanlagen für Wohn- und Geschäftsgebäude. Rauchwarnmelder, Hitzemelder und vernetzte Systeme – normgerecht installiert.",
  },
  {
    Icon: Shield,
    title: "Sicherheitstechnik",
    description: "Bewegungsmelder, Rauchmelder, Alarmanlagen, Videoüberwachung und Zugangskontrollsysteme (klassisch/biometrisch). Überspannungsschutz vom Hausanschluss bis zur letzten Steckdose.",
  },
];

export default function Leistungen() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Banner */}
      <div className="page-banner relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?crop=entropy&cs=srgb&fm=jpg&q=85)` }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Das volle Spektrum
          </span>
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-white mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-white/60 font-manrope max-w-xl mx-auto">
            Von der einfachen Steckdose bis zur komplexen Gebäudetechnik – wir sind Ihr kompetenter
            Ansprechpartner für alle Elektroarbeiten.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section data-testid="services-grid" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ Icon, title, description }, i) => (
              <div
                key={title}
                data-testid={`leistung-card-${i}`}
                className="bg-white rounded-xl p-7 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#0D1F3C]/5 group-hover:bg-[#F5A623] rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon size={22} className="text-[#0D1F3C] group-hover:text-[#0D1F3C]" />
                </div>
                <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm font-manrope leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-outfit font-bold text-white mb-4">
            Ihre Leistung ist nicht dabei?
          </h2>
          <p className="text-white/60 font-manrope mb-8 max-w-xl mx-auto">
            Sollte hier etwas fehlen, so sprechen Sie uns bitte an – wir helfen Ihnen gerne weiter!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:023461065474"
              data-testid="leistungen-phone-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D98E1C] text-[#0D1F3C] font-outfit font-bold px-8 py-4 rounded-md transition-all duration-200"
            >
              <Phone size={18} />
              0234 / 610 65 474
            </a>
            <Link
              to="/kontakt"
              data-testid="leistungen-contact-cta"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:border-[#F5A623] hover:text-[#F5A623] font-outfit font-bold px-8 py-4 rounded-md transition-all duration-200"
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
