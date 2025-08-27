const dict = {
  de: {
    nav: {
      challenge: "Die Herausforderung",
      technology: "Technologie",
      mission: "Unsere Mission",
      impact: "Impact",
      team: "Team",
      partners: "Partner",
      get_involved: "Mitmachen",
      contact: "Kontakt"
    },
    hero: {
      tagline: "Plastikmüll wird zu Solarkraftstoff – für Menschen, Planet & Zukunft.",
      cta_primary: "Mehr erfahren",
      cta_secondary: "Unterstützen"
    },
    quick_intro: "BASOLA wandelt lokalen Plastikmüll per solarbetriebener Pyrolyse in Kraftstoff um – dezentral, off-grid, von der Community betrieben.",
    challenge: "Abgelegene Küstengemeinden kämpfen mit angespültem Plastik und teurem Diesel. Ohne Infrastruktur wird Abfall oft verbrannt oder entsorgt.",
    technology: {
      text: "Plastik wird ohne Sauerstoff erhitzt (Pyrolyse). Dämpfe kondensieren zu flüssigem Kraftstoff. Nicht-kondensierbares Gas heizt den Prozess; Strom liefert Solar-PV mit Speicher."
    },
    mission: {
      text: "Als Enactus Projekt wurde Basola 2024 gegründet und verfolgt seit jeher das gemeinnützige Ziel, Plastikmüll aus der Umwelt zu verwerten und eine soziale Wertschöpfungskette auszubauen, die sich mit angepasster Technologie in entlegenen Regionen vor Ort integrieren lässt.",
      quote: "Mit Basola wollen wir eine Möglichkeit schaffen, Plastik vor Ort als Ressource nutzbar zu machen."
    },
    impact: {
      headline: "Plastikabfall wird zur lokalen Ressource.",
      environmental: {
        title: "Umwelt",
        list: [
          "Bis zu 80 kg Plastik/Tag vor Verbrennung oder Deponie bewahrt",
          "Weniger Luft- und Meeresverschmutzung",
          "Vermeidete CO₂-Emissionen: bis zu 26 t/Jahr pro Anlage (2,4 kg CO₂ je kg Plastik)"
        ]
      },
      social: {
        title: "Soziales",
        list: [
          "Lokaler Kraftstoff verringert Importabhängigkeit",
          "Bis zu 2 Jobs pro Einheit (Betrieb, Sammlung, Distribution)",
          "Einnahmen aus Treibstoffverkäufen fließen in die Community zurück",
          "Befähigung durch Training & Ownership"
        ]
      },
      climate: {
        title: "Klima",
        list: [
          "Biochar als Nebenprodukt (Potenzial zur Kohlenstoffspeicherung)"
        ]
      }
    },
    team: {
      text: "Ehrenamtlich Engagierte bei Enactus: Studierende aus Wirtschaftsingenieurwesen, Maschinenbau, Chemieingenieurwesen & Elektrotechnik.",
      founder_name: "Simon (Founder)"
    },
    partners: {
      list: [
        "Enactus Karlsruhe e.V.",
        "Karlsruher Institut für Technologie (tbc)",
        "Universidad del Valle Cali",
        "Karlshochschule Karlsruhe"
      ]
    },
    get_involved: [
      "Spenden",
      "Partnerschaften (Technologie, Funding, NGOs)",
      "Ehrenamt / Expertise einbringen",
      "Warteliste (ähnlich ISAR Pyrolysis)"
    ],
    contact: {
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        submit: "Senden"
      },
      form_hint: "Backend folgt – Spamschutz z.B. Cloudflare Turnstile geplant.",
      waiting_list_btn: "Auf die Warteliste"
    },
    modal: {
      text: "Warteliste folgt in Kürze."
    },
    impressum: "Impressum",
    form_thanks: "Danke! Wir melden uns."
  },
  en: {
    nav: {
      challenge: "The Challenge",
      technology: "Technology",
      mission: "Our Mission",
      impact: "Impact",
      team: "The Team",
      partners: "Partners",
      get_involved: "Get involved",
      contact: "Contact"
    },
    hero: {
      tagline: "Turning plastic waste into solar fuel – for people, planet & the future.",
      cta_primary: "Learn More",
      cta_secondary: "Support Us"
    },
    quick_intro: "BASOLA turns local plastic waste into fuel using solar-powered pyrolysis – decentralized, off-grid, community-operated.",
    challenge: "Remote coastal communities face washed-up plastics and expensive diesel. Without infrastructure, waste is often burned or dumped.",
    technology: {
      text: "Plastic is heated without oxygen (pyrolysis). Vapors condense to liquid fuel. Non-condensable gas fires the process; power comes from solar PV + storage."
    },
    mission: {
      text: "Founded in 2024 within Enactus, Basola’s mission is to valorize plastic waste and build a social value chain that integrates appropriate technology into remote regions.",
      quote: "With Basola, we aim to make plastic a local resource."
    },
    impact: {
      headline: "Plastic Waste Becomes a Local Resource.",
      environmental: {
        title: "Environmental",
        list: [
          "Diverts up to 80 kg plastic/day from burning or dumping",
          "Reduces air and marine pollution",
          "CO₂ avoided: up to 26 tons/year per unit (2.4 kg CO₂ per kg plastic converted)"
        ]
      },
      social: {
        title: "Social",
        list: [
          "Local fuel reduces dependence on imports",
          "Up to 2 jobs per unit (operation, collection, distribution)",
          "Fuel revenues reinvested into community development",
          "Empowerment through training & ownership"
        ]
      },
      climate: {
        title: "Climate",
        list: [
          "Biochar as a secondary product (potential for carbon sequestration)"
        ]
      }
    },
    team: {
      text: "Volunteers at Enactus: students from industrial engineering, mechanical engineering, chemical engineering & electrical engineering.",
      founder_name: "Simon (Founder)"
    },
    partners: {
      list: [
        "Enactus Karlsruhe e.V.",
        "Karlsruhe Institute of Technology (tbc)",
        "Universidad del Valle Cali",
        "Karlshochschule Karlsruhe"
      ]
    },
    get_involved: [
      "Donations",
      "Partnerships (technology, funding, NGOs)",
      "Volunteering / contributing expertise",
      "Waiting List (like ISAR Pyrolysis)"
    ],
    contact: {
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send"
      },
      form_hint: "Backend forthcoming – spam protection (e.g. Cloudflare Turnstile) planned.",
      waiting_list_btn: "Join the waiting list"
    },
    modal: {
      text: "Waiting list coming soon."
    },
    impressum: "Imprint",
    form_thanks: "Thank you! We'll get back to you."
  }
};

let currentLang = 'de';

function translatePage() {
  const langData = dict[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.dataset.i18n.split('.');
    let text = langData;
    keys.forEach(k => text = text[k]);
    if (typeof text === 'string') {
      el.textContent = text;
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-toggle button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
  translatePage();
}

document.getElementById('lang-de').addEventListener('click', () => setLanguage('de'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

translatePage();

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert(dict[currentLang].form_thanks);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const modal = document.getElementById('modal');
document.getElementById('waiting-list').addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('open');
});
document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('open');
}
