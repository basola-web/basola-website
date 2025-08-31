import React from 'react';

interface Props {
  url: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  heroImage?: string;
}

export default function UpdateCard({ url, title, date, summary, tags = [], heroImage }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {heroImage && (
        <img
          src={heroImage}
          alt=""
          className="h-40 w-full object-contain p-4 opacity-90 transition group-hover:opacity-100"
          loading="lazy"
        />
      )}
      <div className="p-5">
        <time className="text-xs uppercase tracking-wide text-basola-brown/60">
          {new Date(date).toLocaleDateString()}
        </time>
        <h3 className="mt-1 text-lg font-bold text-basola-brown">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-basola-brown/80">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-basola-yellow/70 px-2 py-0.5 text-[11px] text-basola-brown bg-white/60"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={url}
          className="mt-4 inline-flex items-center gap-2 font-semibold text-basola-brown transition hover:text-basola-yellow"
        >
          Mehr <span aria-hidden>→</span>
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-basola-yellow/40" />
    </article>
  );
}
