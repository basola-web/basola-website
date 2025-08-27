const dict = {
  de: {
    nav: { tech: "Technologie", impact: "Impact", pilot: "Pilot", team: "Team", impressum: "Impressum", contact: "Kontakt" },
    meta: {
      title: "BASOLA – Solar-Kraftstoff aus Plastikmüll",
      description: "Dezentrale Solar-Pyrolyse verwandelt nicht recycelbare Kunststoffe in lokalen Treibstoff – für Küstenorte, die nur per Boot erreichbar sind."
    },
    hero: {
      h1: "Solar-Kraftstoff aus Plastikmüll – dort, wo es niemand abholt.",
      lead: "Dezentrale Solar-Pyrolyse verwandelt nicht recycelbare Kunststoffe in lokalen Treibstoff – für Küstenorte, die nur per Boot erreichbar sind.",
      cta1: "Partner werden",
      cta2: "So funktioniert's",
      badge1: "Off‑Grid",
      badge2: "Dezentral",
      badge3: "Lokal betrieben"
    },
    problem: {
      h2: "Das Problem",
      c1h3: "Nur per Boot erreichbar",
      c1p: "Abgelegene Küstengemeinden ohne regelmäßige Abfuhr.",
      c2h3: "Plastik wird angespült",
      c2p: "Häufig offene Verbrennung direkt am Strand.",
      c3h3: "Teurer Diesel",
      c3p: "Energieversorgung unsicher und kostenintensiv.",
      c4h3: "Umweltbelastung",
      c4p: "Wasser/Erde/ Luft leiden unter Müll & Verbrennung.",
    },
    usp: {
      h2: "Unser USP – Warum BASOLA?",
      b1: "Solar-Energieinput (PV) statt fossilem Brenner",
      b2: "Klein & dezentral für remote boat-only Gemeinden",
      b3: "Verwertet nicht recycelbare Kunststoffe",
      b4: "Robust & sicher (Druckentlastung, Gas-Detektion, Fackel)",
      k1: "~80 kg/Tag",
      k2: "~40 L/Tag",
      k3: "400–550 °C",
      k4: "PV + Speicher"
    },
    tech: {
      h2: "So funktioniert's",
      p: "Plastik wird in einem geschlossenen Reaktor ohne Sauerstoff erhitzt (Pyrolyse). Die Dämpfe kondensieren zu flüssigem Kraftstoff. Nicht‑kondensierbares Gas heizt den Prozess; Strom liefert Solar‑PV mit Speicher.",
      li1: "Multi‑Stage‑Kondensation für Diesel/Gasoline‑Fraktionen",
      li2: "Syngas‑Rückführung, geringer externer Energiebedarf",
      li3: "Sicher: Druckentlastung, Gas‑Detektion, Fackel",
      card: {
        h3: "Systemskizze",
        li1: "Shredder & Feed",
        li2: "Reaktor (400–550 °C)",
        li3: "Kondensation (mehrstufig)",
        li4: "Fuel‑Tank & QC",
        li5: "Syngas → Brenner",
        li6: "Solar‑PV + Batterie"
      }
    },
    model: {
      h2: "Business Model",
      p: "Einnahmen bleiben vor Ort; bis zu 2 Jobs/Unit.",
      c1h3: "Fuel-Sales",
      c1p: "Lokaler Verkauf an Boote und Generatoren.",
      c2h3: "Gate-Fee",
      c2p: "Optionale Gebühr für nicht recycelbare Kunststoffe.",
      c3h3: "Biochar/Carbon",
      c3p: "Potenzial für Kohlenstoffbindung/Finanzierung.",
      c4h3: "Service & Training",
      c4p: "Betrieb, Wartung, Community-Ownership."
    },
    impact: {
      h2: "Wirkung, die man sieht",
      c1h3: "Saubere Küsten",
      c1p: "Plastik wird zum Rohstoff statt zum Risiko. Weniger offenes Verbrennen, weniger Verschmutzung.",
      c2h3: "Energiezugang",
      c2p: "Lokaler Kraftstoff für Boote, Generatoren und kleine Betriebe – unabhängig vom Dieselpreis.",
      c3h3: "Lokale Jobs",
      c3p: "Betrieb, Sammlung, Wartung: Wertschöpfung bleibt vor Ort. Training inklusive."
    },
    pilot: {
      h2: "Pilot: Ladrilleros, Kolumbien",
      p: "Zwischen Mangroven und Meer, eine Stunde Bootsfahrt: Diesel teuer, Plastikmüll am Strand. Wir machen daraus lokalen Kraftstoff.",
      f1h3: "100 kg Plastik/Tag",
      f1p: "inkl. Meeresmüll",
      f2h3: "1.000 Einwohner",
      f2p: "nur per Boot (~1 h)",
      f3h3: "Offene Verbrennung",
      f3p: "Plastik wird verbrannt",
      maplink: "Auf Google Maps ansehen"
    },
    team: {
      h2: "Team",
      p: "Interdisziplinär aus Engineering, Energie & Business. Unterstützt durch lokale Community‑Partner.",
      m1h4: "Basola Team",
      m1s: "Engineering & Ops",
      m2h4: "Advisors",
      m2s: "Tech & Impact",
      m3h4: "Community",
      m3s: "Ladrilleros"
    },
    partners: { h2: "Partner" },
    contact: {
      h2: "Partner werden",
      p: "Ihr wollt unterstützen, investieren oder mit uns pilotieren? Meldet euch.",
      name: "Name",
      email: "E‑Mail",
      message: "Nachricht",
      send: "Senden",
      tip: "Tipp: In Cloudflare Pages kannst du später eine Function als Mail‑Backend anhängen.",
      cardh3: "Kontakt",
      emailLabel: "E‑Mail:",
      linkedInLabel: "LinkedIn:"
    },
    people: {
      back: "← Zurück zur Übersicht",
      team: { title: "Basola Team – BASOLA", h1: "Basola Team" },
      advisors: { title: "Advisors – BASOLA", h1: "Advisors" },
      community: { title: "Community – BASOLA", h1: "Community" }
    },
    impressum: {
      title: "Impressum – BASOLA",
      h1: "Impressum",
      p1: "<strong>BASOLA – Ein Projekt von Enactus Karlsruhe e.V.</strong><br>Enactus Karlsruhe e.V.<br>Ludwig-Wilhelm-Straße 18<br>76131 Karlsruhe<br>Deutschland",
      p2: "<strong>Gesetzlich vertreten durch den Vorstand:</strong><br>Simon Langner, Julia Hilt, Adrian Braess, Marike Kardorff",
      p3: "<strong>Projektleitung:</strong> Lea Bachmann",
      p4: "<strong>Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV:</strong><br>Simon Langner, Anschrift wie oben",
      p5: "<strong>Kontakt:</strong><br>E-Mail: basola@karlsruhe.enactus.team",
      p6: "<strong>Registereintrag:</strong><br>Amtsgericht Mannheim – Vereinsregister VR 701085",
      h2a: "Haftungsausschluss",
      p7: "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
      h2b: "Urheberrecht",
      p8: "Die durch uns erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."
    },
    footer: { copy: "© 2025 Basola", impressum: "Impressum" }
  },
  en: {
    nav: { tech: "Technology", impact: "Impact", pilot: "Pilot", team: "Team", impressum: "Legal notice", contact: "Contact" },
    meta: {
      title: "BASOLA – Solar fuel from plastic waste",
      description: "Decentralized solar pyrolysis turns non-recyclables into local fuel for boat-only coastal communities."
    },
    hero: {
      h1: "Solar fuel from plastic waste — where no truck comes.",
      lead: "Decentralized solar pyrolysis turns non-recyclables into local fuel for boat-only coastal communities.",
      cta1: "Become a partner",
      cta2: "How it works",
      badge1: "Off-grid",
      badge2: "Decentralized",
      badge3: "Locally operated"
    },
    problem: {
      h2: "The Challenge",
      c1h3: "Boat-only access",
      c1p: "Remote coastal communities without regular waste pickup.",
      c2h3: "Plastic washes ashore",
      c2p: "Often openly burned right on the beach.",
      c3h3: "Expensive diesel",
      c3p: "Energy supply is unreliable and costly.",
      c4h3: "Environmental burden",
      c4p: "Water, soil and air suffer from waste and burning.",
    },
    usp: {
      h2: "Our USP – Why BASOLA?",
      b1: "Solar energy input (PV) instead of fossil burner",
      b2: "Small-scale & decentralized for remote boat-only communities",
      b3: "Processes non-recyclable plastic types",
      b4: "Robust & safe (pressure relief, gas detection, flare)",
      k1: "~80 kg/day",
      k2: "~40 L/day",
      k3: "400–550 °C",
      k4: "PV + storage"
    },
    tech: {
      h2: "How it works",
      p: "Plastic is heated in a sealed reactor without oxygen (pyrolysis). The vapors condense into liquid fuel. Non-condensable gas powers the process; solar PV with storage supplies electricity.",
      li1: "Multi-stage condensation for diesel/gasoline fractions",
      li2: "Syngas recirculation, low external energy demand",
      li3: "Safety: pressure relief, gas detection, flare",
      card: {
        h3: "System sketch",
        li1: "Shredder & feed",
        li2: "Reactor (400–550 °C)",
        li3: "Condensation (multi-stage)",
        li4: "Fuel tank & QC",
        li5: "Syngas → burner",
        li6: "Solar PV + battery"
      }
    },
    model: {
      h2: "Business model",
      p: "Revenues stay local; up to 2 jobs per unit.",
      c1h3: "Fuel sales",
      c1p: "Local sales to boats and generators.",
      c2h3: "Gate fee",
      c2p: "Optional charge for taking non-recyclable plastics.",
      c3h3: "Biochar/Carbon",
      c3p: "Potential carbon sequestration/financing – under review.",
      c4h3: "Service & training",
      c4p: "Operation, maintenance, community ownership."
    },
    impact: {
      h2: "Visible Impact",
      c1h3: "Clean coasts",
      c1p: "Plastic becomes a resource instead of a risk. Less open burning, less pollution.",
      c2h3: "Energy access",
      c2p: "Local fuel for boats, generators and small businesses – independent of diesel prices.",
      c3h3: "Local jobs",
      c3p: "Operation, collection, maintenance: value creation stays local. Training included."
    },
    pilot: {
      h2: "Pilot: Ladrilleros, Colombia",
      p: "Between mangroves and sea, one hour by boat: diesel is expensive, plastic litters the beach. We turn it into local fuel.",
      f1h3: "100 kg plastic/day",
      f1p: "incl. marine debris",
      f2h3: "1,000 residents",
      f2p: "boat-only (~1 h)",
      f3h3: "Open burning",
      f3p: "Plastic is burned",
      maplink: "View on Google Maps"
    },
    team: {
      h2: "Team",
      p: "Interdisciplinary mix of engineering, energy and business. Supported by local community partners.",
      m1h4: "Basola Team",
      m1s: "Engineering & Ops",
      m2h4: "Advisors",
      m2s: "Tech & impact",
      m3h4: "Community",
      m3s: "Ladrilleros"
    },
    partners: { h2: "Partners" },
    contact: {
      h2: "Become a partner",
      p: "Want to support, invest or pilot with us? Get in touch.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      tip: "Tip: In Cloudflare Pages you can later attach a Function as mail backend.",
      cardh3: "Contact",
      emailLabel: "Email:",
      linkedInLabel: "LinkedIn:"
    },
    people: {
      back: "← Back to overview",
      team: { title: "Basola Team – BASOLA", h1: "Basola Team" },
      advisors: { title: "Advisors – BASOLA", h1: "Advisors" },
      community: { title: "Community – BASOLA", h1: "Community" }
    },
    impressum: {
      title: "Legal notice – BASOLA",
      h1: "Legal notice",
      p1: "<strong>BASOLA – A project by Enactus Karlsruhe e.V.</strong><br>Enactus Karlsruhe e.V.<br>Ludwig-Wilhelm-Straße 18<br>76131 Karlsruhe<br>Germany",
      p2: "<strong>Represented by the board:</strong><br>Simon Langner, Julia Hilt, Adrian Braess, Marike Kardorff",
      p3: "<strong>Project lead:</strong> Lea Bachmann",
      p4: "<strong>Content responsibility according to § 55 para. 2 RStV:</strong><br>Simon Langner, address as above",
      p5: "<strong>Contact:</strong><br>Email: basola@karlsruhe.enactus.team",
      p6: "<strong>Register entry:</strong><br>Local court Mannheim – Register of associations VR 701085",
      h2a: "Disclaimer",
      p7: "The contents of this website were created with the greatest care. However, we cannot guarantee the accuracy, completeness or timeliness of the contents.",
      h2b: "Copyright",
      p8: "The content and works created by us on these pages are subject to German copyright law. Duplication, editing, distribution and any kind of use outside the limits of copyright require the written consent of the respective author or creator."
    },
    footer: { copy: "© 2025 Basola", impressum: "Legal notice" }
  }
};

// Mobile nav toggle
const hdr = document.querySelector('.header');
document.querySelector('.hamburger')?.addEventListener('click', ()=> hdr.classList.toggle('open'));

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href'); if(!id || id==='#') return;
    const el = document.querySelector(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); hdr.classList.remove('open'); }
  });
});

// Reveal on scroll
const ioReveal = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); ioReveal.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('[data-anim]').forEach(el=> ioReveal.observe(el));

// Scrollspy active link
const sections = Array.from(document.querySelectorAll('section[id]'));
const links = Array.from(document.querySelectorAll('header a[href^="#"]'));
const ioSpy = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const href = '#'+e.target.id;
      links.forEach(l=> l.classList.toggle('active', l.getAttribute('href')===href));
    }
  });
},{rootMargin:'-45% 0px -50% 0px', threshold:.01});
sections.forEach(sec=> ioSpy.observe(sec));

// i18n toggle
function updateI18n(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const path = el.dataset.i18n.split('.'); let v = dict[lang];
    for(const k of path){ if(v) v = v[k]; }
    if(typeof v === 'string'){
      if(el.tagName === 'META') el.setAttribute('content', v);
      else if('placeholder' in el) el.placeholder = v;
      else if(v.includes('<')) el.innerHTML = v;
      else el.textContent = v;
    }
  });
}
const langBtns = document.querySelectorAll('.lang-toggle .lang');
function applyLang(lang){
  localStorage.setItem('basola_lang', lang);
  document.documentElement.lang = lang;
  langBtns.forEach(b=>{const active = b.dataset.lang===lang; b.classList.toggle('active', active); b.setAttribute('aria-selected', active?'true':'false');});
  updateI18n(lang);
}
langBtns.forEach(b=> b.addEventListener('click', ()=> applyLang(b.dataset.lang)));
applyLang(localStorage.getItem('basola_lang') || 'de');

const hv=document.querySelector('.hero-video');
document.addEventListener('visibilitychange',()=>document.hidden?hv?.pause():hv?.play());

