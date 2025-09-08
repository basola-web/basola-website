import { useState } from 'react';

interface Props {
  images: string[];
}

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <img src={images[index]} alt="" className="w-full" loading="lazy" />
      <button
        type="button"
        onClick={prev}
        aria-label="Vorheriges Bild"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Nächstes Bild"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
