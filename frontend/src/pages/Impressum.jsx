export default function Impressum() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="page-banner">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-white mb-4">Impressum</h1>
          <p className="text-white/60 font-manrope">Angaben gemäß § 5 TMG</p>
        </div>
      </div>

      <section data-testid="impressum-content" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-xl p-10 border border-slate-200 shadow-sm prose prose-slate max-w-none">
            <h2 className="font-outfit font-bold text-[#0D1F3C] text-2xl mb-6">Angaben gemäß § 5 TMG</h2>

            <div className="mb-8">
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Diensteanbieter</h3>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                HOFER Elektrotechnik<br />
                Marco Hofer – Elektromeister<br />
                Kornweg 34<br />
                44805 Bochum
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Kontakt</h3>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                Telefon: 0234 / 610 65 474<br />
                Fax: 0234 / 610 65 484<br />
                E-Mail: <a href="mailto:info@hofer-elektrotechnik.de" className="text-[#F5A623] hover:underline">info@hofer-elektrotechnik.de</a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Berufsrechtliche Angaben</h3>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                Elektromeister-Betrieb (Elektro-Meisterbetrieb)<br />
                Zertifiziert gemäß DIN VDE<br />
                Zuständige Handwerkskammer: Handwerkskammer Dortmund
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Haftungsausschluss</h3>
              <p className="text-slate-500 font-manrope text-sm leading-relaxed">
                <strong className="text-slate-700">Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p className="text-slate-500 font-manrope text-sm leading-relaxed mt-4">
                <strong className="text-slate-700">Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-outfit font-bold text-[#0D1F3C] text-lg mb-3">Urheberrecht</h3>
              <p className="text-slate-500 font-manrope text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
                des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 text-slate-400 text-xs font-manrope">
              Dieses Impressum stellt einen Platzhalter dar. Bitte ersetzen Sie diese Angaben durch
              rechtlich geprüfte Informationen eines qualifizierten Rechtsberaters.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
