import Image from "next/image";
import FaIcon from "../components/FaIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FING 2026 — Festival de Inovação e Negócios de Garanhuns",
  description:
    "O maior evento de inovação do Agreste Meridional está chegando. Fique por dentro do FING 2026.",
};

const highlights = [
  {
    icon: "people-group" as const,
    iconColor: "text-teal",
    iconBg: "bg-teal/10",
    label: "Milhares de participantes",
  },
  {
    icon: "sack-dollar" as const,
    iconColor: "text-agreste",
    iconBg: "bg-agreste/10",
    label: "+R$ 118 mil em fomento",
  },
  {
    icon: "handshake" as const,
    iconColor: "text-cyan-soft",
    iconBg: "bg-cyan-soft/10",
    label: "Conexões estratégicas reais",
  },
  {
    icon: "chalkboard-user" as const,
    iconColor: "text-teal",
    iconBg: "bg-teal/10",
    label: "Palestras e imersão",
  },
];


export default function Fing2026() {
  return (
    <div className="flex flex-col min-h-full font-sans">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-navy shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/7col-icon-logo.png"
              alt="Comunidade Sete Colinas"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <span className="text-white font-semibold text-lg leading-tight hidden sm:block">
              Comunidade Sete Colinas
            </span>
          </a>
          <a
            href="https://chat.whatsapp.com/Ekj18WPbhMvIqO0DpPnlVZ"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-agreste hover:bg-[#8fa004] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            QUERO FAZER PARTE
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative bg-navy topo-lines overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
            {/* <span className="inline-flex items-center gap-2 bg-agreste/20 text-agreste text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <FaIcon name="calendar" className="text-agreste" />
              Garanhuns — Agreste Meridional
            </span> */}

            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-4">
              FING <span className="text-agreste">2026</span>
            </h1>

            <p className="text-white/50 text-sm font-bold tracking-[0.3em] uppercase mb-10">
              Festival de Inovação e Negócios de Garanhuns
            </p>

            {/* Em Breve badge */}
            <div className="inline-flex items-center gap-3 border-2 border-cyan-soft/40 text-cyan-soft rounded-2xl px-8 py-4 mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-soft animate-pulse shrink-0" />
              <span className="text-xl md:text-2xl font-bold tracking-widest uppercase">
                Em Breve
              </span>
            </div>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              O maior evento de inovação do Agreste Meridional está se preparando para a sua próxima edição.
              Fique de olho.
            </p>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* ── O QUE É O FING ── */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-teal font-bold text-xs tracking-widest uppercase mb-3">
                O Evento
              </span>
              <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
                O marco anual da Comunidade
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                O FING é a materialização da nossa hélice quádrupla — um espaço onde
                startups, grandes empresas, governo e academia se encontram para fazer
                negócios reais acontecerem e colocar o Agreste Meridional no mapa
                nacional da inovação.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
              {highlights.map((h) => (
                <div key={h.label} className="flex flex-col items-center text-center gap-3">
                  <div className={`w-14 h-14 ${h.iconBg} rounded-2xl flex items-center justify-center`}>
                    <FaIcon name={h.icon} className={`text-2xl ${h.iconColor}`} />
                  </div>
                  <p className="text-navy font-semibold text-sm leading-snug">{h.label}</p>
                </div>
              ))}
            </div>

            {/* Parceiros acadêmicos */}
            {/* <div className="border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-petroleum/10 rounded-xl flex items-center justify-center">
                  <FaIcon name="graduation-cap" className="text-2xl text-petroleum" />
                </div>
              </div>
              <div>
                <p className="text-navy font-bold mb-1">Força acadêmica do Agreste</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Contamos com a participação de instituições como{" "}
                  {partners.map((p, i) => (
                    <span key={p}>
                      <span className="font-semibold text-navy">{p}</span>
                      {i < partners.length - 1 ? ", " : " "}
                    </span>
                  ))}
                  unindo talentos e conhecimento aplicado ao desenvolvimento regional.
                </p>
              </div>
            </div> */}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-navy text-2xl md:text-3xl font-bold mb-4">
              Já pensou como a sua ideia ou empresa pode se conectar com os maiores talentos da região?
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Faça parte da Comunidade Sete Colinas e seja um dos primeiros a saber de tudo sobre o FING 2026.
            </p>
            <a
              href="https://chat.whatsapp.com/Ekj18WPbhMvIqO0DpPnlVZ"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-block bg-agreste hover:bg-[#8fa004] text-white font-bold px-10 py-4 rounded-full text-base transition-colors"
            >
              QUERO FAZER PARTE
            </a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/7col-icon-logo.png"
              alt="Comunidade Sete Colinas"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-semibold text-sm">Comunidade Sete Colinas</span>
          </div>
          <a href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Voltar ao início
          </a>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 text-center text-white/40 text-xs">
            Inteligência local. Negócios Glocais. Feito com orgulho em Garanhuns-PE.
          </div>
        </div>
      </footer>
    </div>
  );
}
