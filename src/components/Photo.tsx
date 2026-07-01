"use client";

import { useState } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  label: string;
  icon: string;
  className?: string;
};

export default function Photo({ src, alt, label, icon, className = "" }: PhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 bg-gradient-to-br from-slate-50 to-white text-slate-500 ${className}`}
      >
        <span className="text-3xl">{icon}</span>
        <span className="px-4 text-center font-head text-xs font-semibold">{label}</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
