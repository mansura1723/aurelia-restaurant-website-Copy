import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'eager',
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#101C2C] via-[#18283D] to-[#242424] text-[#E8E0D2] p-6 text-center ${className}`}
      >
        <Utensils className="w-7 h-7 text-[#B99A62] mb-2 opacity-80" aria-hidden="true" />
        <span className="font-serif text-base tracking-wide text-[#F8F6F0]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
