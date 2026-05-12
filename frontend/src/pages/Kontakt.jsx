import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Kontakt() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Bitte füllen Sie alle Felder aus.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setSuccess(true);
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Banner */}
      <div className="page-banner">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#F5A623] font-outfit font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Sprechen Sie uns an
          </span>
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-white mb-4">Kontakt</h1>
          <p className="text-white/60 font-manrope max-w-xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>
      </div>

      <section data-testid="contact-section" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-[#0D1F3C] mb-8">
                So erreichen Sie uns
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-[#0D1F3C] mb-1">Adresse</p>
                    <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                      HOFER Elektrotechnik<br />
                      Marco Hofer – Elektromeister<br />
                      Kornweg 34<br />
                      44805 Bochum (Gerthe)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-[#0D1F3C] mb-1">Telefon & Fax</p>
                    <a
                      href="tel:023461065474"
                      data-testid="contact-phone-link"
                      className="text-slate-600 hover:text-[#F5A623] font-manrope text-sm transition-colors block"
                    >
                      Tel: 0234 / 610 65 474
                    </a>
                    <p className="text-slate-500 font-manrope text-sm">Fax: 0234 / 610 65 484</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-[#0D1F3C] mb-1">E-Mail</p>
                    <a
                      href="mailto:info@hofer-elektrotechnik.de"
                      data-testid="contact-email-link"
                      className="text-slate-600 hover:text-[#F5A623] font-manrope text-sm transition-colors"
                    >
                      info@hofer-elektrotechnik.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-[#0D1F3C] mb-1">Öffnungszeiten</p>
                    <p className="text-slate-600 font-manrope text-sm">Mo – Fr: 07:00 – 17:00 Uhr</p>
                    <p className="text-slate-500 font-manrope text-sm">Sa: nach Vereinbarung</p>
                    <p className="text-[#F5A623] font-manrope font-semibold text-xs mt-2">Notdienst auf Anfrage verfügbar</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-64 bg-slate-100">
                <iframe
                  title="Standort Hofer Elektrotechnik"
                  src="https://maps.google.com/maps?q=Kornweg+34,+44805+Bochum&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  data-testid="google-map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-[#0D1F3C] mb-8">
                Anfrage senden
              </h2>

              {success ? (
                <div
                  data-testid="contact-success"
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-outfit font-bold text-green-800 text-xl mb-2">
                    Anfrage erfolgreich gesendet!
                  </h3>
                  <p className="text-green-600 font-manrope text-sm">
                    Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-green-700 font-outfit font-bold text-sm hover:underline"
                  >
                    Neue Anfrage senden
                  </button>
                </div>
              ) : (
                <form
                  data-testid="contact-form"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block font-outfit font-semibold text-[#0D1F3C] text-sm mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr vollständiger Name"
                      data-testid="contact-name-input"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-outfit font-semibold text-[#0D1F3C] text-sm mb-2">
                      Telefonnummer *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Ihre Telefonnummer"
                      data-testid="contact-phone-input"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-outfit font-semibold text-[#0D1F3C] text-sm mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      data-testid="contact-message-input"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition-all resize-none placeholder-slate-400"
                    />
                  </div>

                  {error && (
                    <div data-testid="contact-error" className="flex items-center gap-2 text-red-600 text-sm font-manrope bg-red-50 border border-red-200 rounded-lg p-3">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="contact-submit-button"
                    className="w-full flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D98E1C] disabled:opacity-60 text-[#0D1F3C] font-outfit font-bold py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#F5A623]/20"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-[#0D1F3C]/30 border-t-[#0D1F3C] rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        Anfrage absenden
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs font-manrope text-center">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
