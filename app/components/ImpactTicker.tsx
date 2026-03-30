"use client";

const impactData = [
  { value: "8", label: "Anos de História" },
  { value: "800", label: "Integrantes" },
  { value: "14", label: "Exploradores" },
  { value: "30", label: "Guias" },
  { value: "5", label: "Trilhas de Atuação" },
  { value: "2500", label: "Inscritos no FING" },
];

// Duplicamos a lista para criar o efeito de loop infinito suave (3 conjuntos)
const tickerItems = [...impactData, ...impactData, ...impactData];

export default function ImpactTicker() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="relative flex">
        <div
          className="flex gap-6 whitespace-nowrap animate-ticker"
          style={{ width: "max-content" }}
        >
          {tickerItems.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col items-center justify-center min-w-[240px] px-8 py-6 rounded-2xl bg-gradient-to-br from-teal to-petroleum text-white shadow-sm"
            >
              <span className="text-3xl md:text-4xl font-black mb-1">
                {item.value}
              </span>
              <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
