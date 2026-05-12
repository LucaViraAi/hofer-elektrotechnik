export default function Datenschutz() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="page-banner">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-white mb-4">Datenschutz&shy;erklärung</h1>
          <p className="text-white/60 font-manrope">Informationen gemäß DSGVO</p>
        </div>
      </div>

      <section data-testid="datenschutz-content" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-xl p-10 border border-slate-200 shadow-sm space-y-8">
            <div>
              <h2 className="font-outfit font-bold text-[#0D1F3C] text-2xl mb-4">Datenschutzerklärung</h2>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten
                Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
              </p>
            </div>

            <div>
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Verantwortlicher</h3>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                HOFER Elektrotechnik<br />
                Marco Hofer<br />
                Kornweg 34, 44805 Bochum<br />
                E-Mail: <a href="mailto:info@hofer-elektrotechnik.de" className="text-[#F5A623] hover:underline">info@hofer-elektrotechnik.de</a>
              </p>
            </div>

            <div>
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Datenerfassung auf dieser Website</h3>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                Wenn Sie uns über das Kontaktformular eine Anfrage zusenden, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Ihre Rechte</h3>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed mb-3">
                Sie haben jederzeit das Recht auf:
              </p>
              <ul className="space-y-2 text-slate-600 font-manrope text-sm">
                {[
                  "Auskunft über Ihre gespeicherten Daten",
                  "Berichtigung unrichtiger Daten",
                  "Löschung Ihrer Daten",
                  "Einschränkung der Verarbeitung",
                  "Datenübertragbarkeit",
                  "Widerspruch gegen die Verarbeitung",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Cookies</h3>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools von Drittanbietern.
                Es werden ausschließlich technisch notwendige Funktionen eingesetzt.
              </p>
            </div>

            <div>
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Beschwerderecht</h3>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
                Die zuständige Aufsichtsbehörde in NRW ist der Landesbeauftragte für Datenschutz
                und Informationsfreiheit Nordrhein-Westfalen.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 text-slate-400 text-xs font-manrope">
              Diese Datenschutzerklärung stellt einen Platzhalter dar. Bitte ersetzen Sie diese durch
              eine vollständige, rechtlich geprüfte Erklärung eines qualifizierten Rechtsberaters.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
