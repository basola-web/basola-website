import { useState } from 'react';

interface Item {
  url: string;
  title: string;
  date: string;
  summary: string;
  heroImage?: string;
}

interface Props {
  items: Item[];
  t: { prev: string; next: string };
  lang: string;
}

export default function NewsCarousel({ items, t, lang }: Props) {
  const [index, setIndex] = useState(0);
  const visibleCount = Math.min(3, items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);
  const visible = Array.from({ length: visibleCount }, (_, i) => items[(index + i) % items.length]);

  return (
    <div className="relative w-full">
      <div className="flex gap-6">
        {visible.map((item, i) => (
          <a key={i} href={item.url} className="block group flex-1">
            {item.heroImage && (
              <img
                src={item.heroImage}
                alt=""
                className="h-40 w-full object-contain p-4 opacity-90 group-hover:opacity-100 transition bg-white rounded-t-2xl"
              />
            )}
            <div className="p-5 bg-white rounded-b-2xl ring-1 ring-black/5 shadow-sm group-hover:shadow-lg transition">
              <time className="text-xs uppercase tracking-wide text-basola-brown/60">
                {new Date(item.date).toLocaleDateString(lang)}
              </time>
              <h3 className="mt-1 text-lg font-bold text-basola-brown">{item.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-basola-brown/80">{item.summary}</p>
            </div>
          </a>
        ))}
      </div>
      {items.length > visibleCount && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label={t.prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t.next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
