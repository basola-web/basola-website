import { useState } from 'react';
import { Blurhash } from 'react-blurhash';

interface Props {
  src: string;
  hash: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  id?: string;
  style?: React.CSSProperties;
}

export default function BlurImage({ src, hash, alt, width, height, className, imgClassName, id, style }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      id={id}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      {!loaded && (
        <Blurhash
          hash={hash}
          width={32}
          height={32}
          punch={1}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={imgClassName}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
      />
    </div>
  );
}

