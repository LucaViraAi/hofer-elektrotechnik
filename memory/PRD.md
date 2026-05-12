# PRD – HOFER Elektrotechnik Website

**Erstellt:** 2026-02-01  
**Status:** MVP abgeschlossen

---

## Geschäftliche Anforderungen

**Kunde:** Hofer Elektrotechnik, Bochum-Gerthe  
**Inhaber:** Marco Hofer, Elektromeister  
**Adresse:** Kornweg 34, 44805 Bochum  
**Telefon:** 0234 / 610 65 474 | Fax: 0234 / 610 65 484  
**E-Mail:** info@hofer-elektrotechnik.de  

---

## Technische Architektur

- **Frontend:** React 19 + React Router 7 + Tailwind CSS + lucide-react
- **Backend:** FastAPI + Motor (async MongoDB)
- **Datenbank:** MongoDB (collection: contact_inquiries)
- **Fonts:** Outfit (Überschriften) + Manrope (Fließtext) – Google Fonts
- **Farben:** #0D1F3C (Navy) + #F5A623 (Amber/Gelb)

---

## Implementierte Features (Stand: 2026-02-01)

### Seiten
- [x] **Home** – Hero-Sektion, Trust-Badges, 6 Leistungs-Teaser, Über-uns-Teaser, Einzugsgebiet, CTA-Banner
- [x] **Leistungen** – Alle 18 Leistungen als Grid mit Icons und Beschreibungen
- [x] **Über uns** – Marco Hofer Biografie, Arbeitsbereiche, Unternehmenswerte, Einzugsgebiet
- [x] **Jobs** – Ausbildung (Elektroniker EGT), Stellenangebote, Bewerbungs-CTA
- [x] **Kontakt** – Formular (Name, Telefon, Nachricht), Adressblock, Google Maps Embed
- [x] **Impressum** – Platzhalter mit korrekten Angaben
- [x] **Datenschutz** – Platzhalter nach DSGVO

### Komponenten
- [x] **Navbar** – Sticky, Dark Navy, Logo (mix-blend-mode), Mobile Hamburger
- [x] **Footer** – Adresse, Telefon, E-Mail, Öffnungszeiten, alle Links

### Backend
- [x] `POST /api/contact` – Anfrage in MongoDB speichern
- [x] `GET /api/contact` – Alle Anfragen abrufen

---

## Benutzer-Persona

- Privathaushalte in Bochum, Herne und Umgebung die einen Elektriker suchen
- Gewerbliche Kunden (kleine Betriebe)
- Arbeitssuchende / Auszubildende

---

## Priorisierter Backlog

### P0 (Kritisch – bereits implementiert)
- [x] Alle 7 Seiten mit deutschem Content
- [x] Kontaktformular mit DB-Speicherung
- [x] Mobile-responsive Design
- [x] Click-to-call Telefonnummer

### P1 (Empfohlen – noch ausstehend)
- [ ] E-Mail-Benachrichtigung bei neuer Kontaktanfrage (SendGrid/SMTP)
- [ ] Admin-Dashboard zum Einsehen der Anfragen
- [ ] Cookie-Consent Banner (DSGVO)
- [ ] Impressum/Datenschutz rechtlich prüfen lassen und vervollständigen

### P2 (Nice-to-have)
- [ ] Kundenbewertungen / Testimonials
- [ ] Galerie mit Projektfotos
- [ ] WhatsApp-Button (CTA)
- [ ] Blog / Neuigkeiten Sektion
- [ ] Sitemap.xml für SEO

---

## Nächste Schritte

1. Impressum & Datenschutz durch Rechtsanwalt prüfen lassen
2. Echte Projektfotos einbinden (statt Stock-Fotos)
3. E-Mail-Benachrichtigung für Kontaktformular einrichten
4. Cookie-Banner für DSGVO-Konformität hinzufügen
