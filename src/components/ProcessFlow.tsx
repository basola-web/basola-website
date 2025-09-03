import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Step {
  title: string;
  icon: string;
  description: string;
}

interface Translations {
  heading: string;
  subheading: string;
  steps: Step[];
}

const content: Record<string, Translations> = {
  de: {
    heading: '♻️ Unsere Lösung: Sauberer Treibstoff aus Plastikmüll',
    subheading:
      'Ein geschlossener Prozess, der Plastikmüll mit Sonnenenergie in nutzbaren synthetischen Kraftstoff verwandelt.',
    steps: [
      {
        title: 'Sammeln',
        icon: '/assets/icons/icon_1.png',
        description:
          'Plastikmüll wird von Dorfbewohnern gesammelt und gegen Entlohnung abgegeben.',
      },
      {
        title: 'Schreddern',
        icon: '/assets/icons/icon_2.png',
        description: 'Das angelieferte Material wird mechanisch zerkleinert.',
      },
      {
        title: 'Pyrolyse',
        icon: '/assets/icons/icon_3.png',
        description:
          'Die Kunststoffe werden in der Anlage ohne Sauerstoff thermisch zersetzt.',
      },
      {
        title: 'Kondensieren',
        icon: '/assets/icons/icon_4.png',
        description:
          'Die Pyrolysegase werden kontrolliert gekühlt und zu flüssigem Kraftstoff kondensiert.',
      },
      {
        title: 'Verwertung',
        icon: '/assets/icons/icon_5.png',
        description:
          'Der Kraftstoff wird lokal verkauft – z. B. an Boote oder Generatoren.',
      },
    ],
  },
  en: {
    heading: '♻️ Our solution: Clean fuel from plastic waste',
    subheading:
      'A closed process that transforms plastic waste into usable synthetic fuel using solar energy.',
    steps: [
      {
        title: 'Collecting',
        icon: '/assets/icons/icon_1.png',
        description:
          'Plastic waste is collected by villagers and handed in for payment.',
      },
      {
        title: 'Shredding',
        icon: '/assets/icons/icon_2.png',
        description: 'The delivered material is mechanically shredded.',
      },
      {
        title: 'Pyrolysis',
        icon: '/assets/icons/icon_3.png',
        description:
          'The plastics are thermally decomposed in the plant without oxygen.',
      },
      {
        title: 'Condensing',
        icon: '/assets/icons/icon_4.png',
        description:
          'The pyrolysis gases are cooled in a controlled manner and condensed into liquid fuel.',
      },
      {
        title: 'Utilization',
        icon: '/assets/icons/icon_5.png',
        description: 'The fuel is sold locally, e.g., to boats or generators.',
      },
    ],
  },
  es: {
    heading:
      '♻️ Nuestra solución: Combustible limpio a partir de residuos plásticos',
    subheading:
      'Un proceso cerrado que convierte residuos plásticos en combustible sintético utilizable mediante energía solar.',
    steps: [
      {
        title: 'Recolección',
        icon: '/assets/icons/icon_1.png',
        description:
          'Los habitantes del pueblo recogen los residuos plásticos y los entregan a cambio de una remuneración.',
      },
      {
        title: 'Triturado',
        icon: '/assets/icons/icon_2.png',
        description: 'El material entregado se tritura mecánicamente.',
      },
      {
        title: 'Pirólisis',
        icon: '/assets/icons/icon_3.png',
        description:
          'Los plásticos se descomponen térmicamente en la planta sin oxígeno.',
      },
      {
        title: 'Condensación',
        icon: '/assets/icons/icon_4.png',
        description:
          'Los gases de la pirólisis se enfrían de forma controlada y se condensan en combustible líquido.',
      },
      {
        title: 'Aprovechamiento',
        icon: '/assets/icons/icon_5.png',
        description:
          'El combustible se vende localmente, p. ej., a barcos o generadores.',
      },
    ],
  },
};

interface Props {
  lang?: 'de' | 'en' | 'es';
}

const ProcessFlow: React.FC<Props> = ({ lang = 'de' }) => {
  const { heading, subheading, steps } = content[lang] ?? content.de;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="loesung" ref={ref} className="font-sans tracking-tight">
      <div className="py-16 mx-auto max-w-6xl px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#723100]">{heading}</h2>
          <p className="mt-4 text-lg text-[#723100]/90 max-w-3xl mx-auto">{subheading}</p>
        </header>

        <div className="relative">
          <div className="absolute top-12 left-0 w-full h-[4px] bg-[#723100]/20 z-0" />
          <motion.div
            className="absolute top-12 left-0 h-[4px] bg-[#ffd600] z-0"
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />

          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="flex flex-col items-center flex-1"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="relative z-10 w-24 h-24 flex items-center justify-center rounded-full border border-[#723100] bg-white p-3 mb-4">
                  <img src={s.icon} alt={s.title} className="w-full h-full" />
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-left w-full min-h-[120px]">
                  <h3 className="font-semibold text-[#723100] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#723100]/80">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
