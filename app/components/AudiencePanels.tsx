"use client";

import { useState } from "react";
import Image from "next/image";
import FaIcon from "./FaIcon";

type AudienceItem = {
  icon: "graduation-cap" | "rocket" | "arrows-rotate";
  iconColor: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
};

export default function AudiencePanels({ items }: { items: AudienceItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      {/* ── Desktop: expanding panels ── */}
      <div className="hidden md:flex gap-3" style={{ height: 520 }}>
        {items.map((item, i) => (
          <div
            key={item.title}
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            style={{
              flexGrow: active === i ? 3 : 1,
              flexShrink: 1,
              flexBasis: 0,
              minWidth: 0,
              transition: "flex-grow 0.6s cubic-bezier(0.4,0,0.2,1)",
            }}
            onMouseEnter={() => setActive(i)}
          >
            {/* Foto */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={`object-cover ${item.imagePosition ?? "object-center"}`}
              style={{
                transform: active === i ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.7s ease",
              }}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  active === i
                    ? "linear-gradient(to top, rgba(25,53,77,0.92) 0%, rgba(25,53,77,0.4) 55%, transparent 100%)"
                    : "linear-gradient(to bottom, rgba(25,53,77,0.55) 0%, rgba(25,53,77,0.72) 100%)",
                transition: "background 0.5s ease",
              }}
            />

            {/* Painel colapsado: título vertical */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-3"
              style={{
                opacity: active === i ? 0 : 1,
                transition: "opacity 0.25s ease",
                pointerEvents: "none",
              }}
            >
              <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <FaIcon name={item.icon} className={`text-base ${item.iconColor}`} />
              </div>
              <span
                className="text-white font-bold text-sm tracking-wide whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {item.title}
              </span>
            </div>

            {/* Painel expandido: conteúdo no rodapé */}
            <div
              className="absolute bottom-0 left-0 right-0 p-8"
              style={{
                opacity: active === i ? 1 : 0,
                transform: active === i ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.35s ease 0.15s, transform 0.35s ease 0.15s",
                pointerEvents: active === i ? "auto" : "none",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                  <FaIcon name={item.icon} className={`text-lg ${item.iconColor}`} />
                </div>
                <h3 className="text-white font-bold text-2xl leading-tight">{item.title}</h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed max-w-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile: painéis empilhados ── */}
      <div className="md:hidden flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.title} className="relative h-60 rounded-2xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={`object-cover ${item.imagePosition ?? "object-center"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/88 via-navy/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                  <FaIcon name={item.icon} className={`text-sm ${item.iconColor}`} />
                </div>
                <h3 className="text-white font-bold text-base">{item.title}</h3>
              </div>
              <p className="text-white/75 text-xs leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
