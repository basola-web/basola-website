const dict = {
  de: {
    nav: { tech: "Technologie", impact: "Impact", pilot: "Pilot", team: "Team", contact: "Kontakt" },
    hero: {
      h1: "Solar‑Kraftstoff aus Plastikmüll",
      lead: "Basola verwandelt lokale Plastikabfälle in Kraftstoff – mit Solarenergie und zirkulärer Technologie. Für saubere Küsten, bezahlbare Energie und neue Jobs.",
      cta1: "Partner werden",
      cta2: "So funktioniert's",
      badge1: "Off‑Grid",
      badge2: "Dezentral",
      badge3: "Lokal betrieben",
      card: {
        h3: "Warum Basola?",
        li1: "Plastik ↓, Energie ↑",
        li2: "Solar + Syngas, autark",
        li3: "Robust & wartungsfreundlich"
      }
    },
    problem: {
      h2: "Das Problem",
      p: "Abgelegene Küstengemeinden kämpfen mit angeschwemmtem Plastik und teurem Diesel. Fehlt Infrastruktur, landen Abfälle oft im Feuer – mit Folgen für Klima, Gesundheit und Tourismus.",
      k1: "80 kg",
      k1s: "Plastik/Tag verwertbar (Pilot)",
      k2: "~70‑80%",
      k2s: "Öl‑Ausbeute je nach Feedstock",
      k3: ">40 MJ/kg",
      k3s: "Energiegehalt des Kraftstoffs"
    },
    tech: {
      h2: "Die Technologie",
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
      p: "Start in einer abgelegenen Pazifik‑Gemeinde mit starken Partnern und klaren Zielen: weniger Plastik, bezahlbare Energie, Community‑Ownership.",
      li1: "Partner: lokale NGOs, Hochschulen, Enactus",
      li2: "Setup: Off‑Grid, 1 Batch/Tag ≈ 80 kg Plastics",
      li3: "Outputs: Diesel‑ähnliches Öl, Syngas, Char",
      card: {
        h3: "Roadmap",
        li1: "Prototyp fertigstellen",
        li2: "Test & Optimierung",
        li3: "Pilotbetrieb vor Ort",
        li4: "Replikation & Scale"
      }
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
    footer: { copy: "© 2025 Basola", impressum: "Impressum" }
  },
  en: {
    nav: { tech: "Technology", impact: "Impact", pilot: "Pilot", team: "Team", contact: "Contact" },
    hero: {
      h1: "Solar fuel from plastic waste",
      lead: "Basola turns local plastic waste into fuel using solar energy and circular technology. For clean coasts, affordable energy and new jobs.",
      cta1: "Become a partner",
      cta2: "How it works",
      badge1: "Off-grid",
      badge2: "Decentralized",
      badge3: "Locally operated",
      card: {
        h3: "Why Basola?",
        li1: "Less plastic, more energy",
        li2: "Solar + syngas, autonomous",
        li3: "Robust & easy to maintain"
      }
    },
    problem: {
      h2: "The Problem",
      p: "Remote coastal communities struggle with washed-up plastic and expensive diesel. Without infrastructure, waste often ends up in the fire – harming climate, health and tourism.",
      k1: "80 kg",
      k1s: "Plastic per day processed (pilot)",
      k2: "~70-80%",
      k2s: "Oil yield depending on feedstock",
      k3: ">40 MJ/kg",
      k3s: "Energy content of the fuel"
    },
    tech: {
      h2: "The Technology",
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
      p: "Starting in a remote Pacific community with strong partners and clear goals: less plastic, affordable energy, community ownership.",
      li1: "Partners: local NGOs, universities, Enactus",
      li2: "Setup: off-grid, 1 batch/day ≈ 80 kg plastics",
      li3: "Outputs: diesel-like oil, syngas, char",
      card: {
        h3: "Roadmap",
        li1: "Complete prototype",
        li2: "Test & optimization",
        li3: "Pilot on site",
        li4: "Replication & scale"
      }
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
    footer: { copy: "© 2025 Basola", impressum: "Legal notice" }
  }
};

let currentLang = localStorage.getItem("basola_lang") || "de";
function applyLang(lang){
  currentLang = lang; localStorage.setItem("basola_lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const path = el.getAttribute("data-i18n").split(".");
    let val = dict[lang];
    for(const k of path){ if(val) val = val[k]; }
    if(typeof val === "string"){
      if("placeholder" in el) el.placeholder = val;
      else el.textContent = val;
    }
  });
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang===lang);
  });
}
applyLang(currentLang);
document.querySelectorAll("[data-lang]").forEach(b=> b.addEventListener("click", ()=>applyLang(b.dataset.lang)));

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", e=>{
    const id = a.getAttribute("href");
    if(id && id.length>1){
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:"smooth", block:"start"}); }
    }
  });
});

// Reveal on scroll
const ioReveal = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); ioReveal.unobserve(e.target); } });
},{ threshold: .12 });
document.querySelectorAll("[data-anim]").forEach(el=> ioReveal.observe(el));

// Scrollspy (active nav)
const sections = Array.from(document.querySelectorAll("section[id]"));
const navLinks = Array.from(document.querySelectorAll("header nav a[href^='#']"));
const ioSpy = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id = "#"+e.target.id;
      navLinks.forEach(l=> l.classList.toggle("active", l.getAttribute("href")===id));
    }
  });
},{ rootMargin: "-40% 0px -55% 0px", threshold: .01 });
sections.forEach(sec=> ioSpy.observe(sec));

