import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Step {
  title: string;
  icon: string;
  description: string;
}

const steps: Step[] = [
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
];

const ProcessFlow: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="loesung" ref={ref} className="font-sans tracking-tight">
      <div className="py-16 mx-auto max-w-6xl px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#723100]">
            ♻️ Unsere Lösung: Sauberer Treibstoff aus Plastikmüll
          </h2>
          <p className="mt-4 text-lg text-[#723100]/90 max-w-3xl mx-auto">
            Ein geschlossener Prozess, der Plastikmüll mit Sonnenenergie in nutzbaren synthetischen Kraftstoff verwandelt.
          </p>
        </header>

        <div className="relative">
          <div className="absolute top-12 left-0 w-full h-[4px] bg-[#723100]/20" />
          <motion.div
            className="absolute top-12 left-0 h-[4px] bg-[#ffd600]"
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
                <div className="w-24 h-24 flex items-center justify-center rounded-full border border-[#723100] bg-white p-3 mb-4">
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
