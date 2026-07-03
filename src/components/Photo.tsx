"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

type PhotoProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  fit?: "cover" | "contain";
};

export default function Photo({
  src,
  alt,
  label,
  className = "",
  fit = "cover",
}: PhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 bg-gradient-to-br from-slate-50 to-white text-slate-400 ${className}`}
      >
        <Icon name="image" className="h-8 w-8" strokeWidth={1.5} />
        <span className="px-4 text-center font-head text-xs font-semibold">{label}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}
