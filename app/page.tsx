import Image from "next/image";
import FaIcon from "./components/FaIcon";
import AntasSvg from "./components/AntasSvg";
import ImpactTicker from "./components/ImpactTicker";
import AudiencePanels from "./components/AudiencePanels";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Nosso Propósito", href: "#proposito" },
  { label: "Como Participar", href: "#participar" },
  { label: "Eventos", href: "#eventos" },
  { label: "Parceiros", href: "#parceiros" },
];

const audiences = [
  {
    icon: "graduation-cap" as const,
    iconColor: "text-cyan-soft",
    title: "Estudantes e Academia",
    description:
      "Conectando a força estudantil com o mercado de trabalho real.",
    image: "/estudantes-hackaton.webp",
  },
  {
    icon: "rocket" as const,
    iconColor: "text-agreste",
    title: "Empreendedores e Startups",
    description:
      "Suporte desde a fase de ideação até negócios consolidados que buscam escala.",
    image: "/empresarios-conversando1.webp",
    imagePosition: "object-center",
  },
  {
    icon: "arrows-rotate" as const,
    iconColor: "text-teal",
    title: "Profissionais em Transição",
    description:
      "Espaço acolhedor para quem busca se inserir no mercado de inovação e tecnologia.",
    image: "/palestrante-mulher1.webp",
    imagePosition: "object-top",
  },
];

const deliveries = [
  {
    icon: "handshake" as const,
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    title: "Conexão e Networking",
    description:
      "Nosso pilar mais forte, eleito como prioridade número 1 pelos membros com maioria de votos em nossa pesquisa interna.",
    image: "/saguao-fing.webp",
  },
  {
    icon: "trophy" as const,
    iconBg: "bg-agreste/10",
    iconColor: "text-agreste",
    title: "Eventos de Alto Impacto",
    description:
      "Do FING (Festival de Inovação e Negócios de Garanhuns), passando pelo Startup Day, Colinas Tech e Trampolim.",
    image: "/foto-do-publico.webp",
  },
  {
    icon: "satellite-dish" as const,
    iconBg: "bg-cyan-soft/10",
    iconColor: "text-cyan-soft",
    title: "Radar de Oportunidades",
    description:
      "Apoio contínuo para aprovação de projetos em editais de fomento: Facepe, Centelha, Banco do Nordeste e mais.",
    image: "/empresarios-assistindo.webp",
  },
];

const journey = [
  { label: "Integrantes", desc: "Primeiros passos" },
  { label: "Exploradores", desc: "Voluntários em desenvolvimento" },
  { label: "Guias", desc: "Contribuição contínua" },
  { label: "Comitê", desc: "Gestão estratégica" },
  { label: "Conselho", desc: "Governança máxima" },
];

const trails = [
  { name: "Governança", bg: "bg-petroleum", icon: "scale-balanced" as const, iconColor: "text-cyan-soft" },
  { name: "Comunicação", bg: "bg-cyan-soft", icon: "bullhorn" as const, iconColor: "text-navy" },
  { name: "Relacionamento", bg: "bg-teal", icon: "globe" as const, iconColor: "text-white" },
  { name: "Eventos", bg: "bg-petroleum", icon: "bullseye" as const, iconColor: "text-agreste" },
  { name: "Pessoas", bg: "bg-agreste", icon: "people-group" as const, iconColor: "text-navy" },
];

const helixPillars = [
  {
    icon: "flask" as const,
    accentColor: "bg-teal",
    numColor: "text-teal",
    iconColor: "text-teal",
    iconBg: "bg-teal/10",
    title: "Instituições de Ensino & Pesquisa",
    description: "Instituições de ensino e pesquisa que formam talentos e produzem conhecimento aplicado ao desenvolvimento regional.",
  },
  {
    icon: "landmark" as const,
    accentColor: "bg-cyan-soft",
    numColor: "text-cyan-soft",
    iconColor: "text-cyan-soft",
    iconBg: "bg-cyan-soft/10",
    title: "Governo & Editais",
    description: "Poder público e agências de fomento que viabilizam políticas, programas e recursos para impulsionar a inovação.",
  },
  {
    icon: "building" as const,
    accentColor: "bg-agreste",
    numColor: "text-agreste",
    iconColor: "text-agreste",
    iconBg: "bg-agreste/10",
    title: "Iniciativa Privada",
    description: "Empresas e empreendedores que investem no ecossistema local, gerando oportunidades e absorvendo novos talentos.",
  },
  {
    icon: "seedling" as const,
    accentColor: "bg-petroleum",
    numColor: "text-petroleum",
    iconColor: "text-petroleum",
    iconBg: "bg-petroleum/10",
    title: "Aceleradores & Fomento",
    description: "Organizações de suporte que conectam, capacitam e aceleram projetos desde a ideação até a consolidação no mercado.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full font-sans">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-navy shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
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

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#participar"
            className="shrink-0 bg-agreste hover:bg-[#8fa004] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            QUERO FAZER PARTE
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ── HERO ── */}
        <section id="inicio" className="relative bg-navy topo-lines overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-flex items-center gap-2 bg-agreste/20 text-agreste text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 animate-fade-in-up">
                <FaIcon name="mountain" className="text-agreste" />
                Garanhuns — Agreste Meridional
              </span>

              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-5 animate-fade-in-up animate-delay-100">
                Inovação e tecnologia no coração do <span className="text-agreste">Agreste</span>.
              </h1>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-8 animate-fade-in-up animate-delay-200">
                Impulsionando a inteligência local para transformar carreiras e negócios em Garanhuns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animate-delay-300">
                <a
                  href="#participar"
                  className="bg-agreste hover:bg-[#8fa004] text-white font-bold px-8 py-4 rounded-full text-base transition-colors text-center"
                >
                  Fazer Parte
                </a>
                <a
                  href="#eventos"
                  className="border-2 border-cyan-soft text-cyan-soft hover:bg-cyan-soft hover:text-navy font-bold px-8 py-4 rounded-full text-base transition-colors text-center"
                >
                  FING 2026
                </a>
              </div>
            </div>

            {/* Wrapper para fade-in; a animação de respiração fica nos paths internos */}
            <div className="flex-shrink-0 w-full max-w-sm md:max-w-2xl lg:max-w-3xl animate-fade-in-up animate-delay-400">
              <AntasSvg />
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* ── IMPACT TICKER ── */}
        <ImpactTicker />

        {/* ── FOR WHO ── */}
        <section className="bg-gray-50 py-20" id="proposito">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-teal font-bold text-xs tracking-widest uppercase mb-3">
                Para quem é a Comunidade Sete Colinas?
              </span>
              <h2 className="text-navy text-3xl md:text-4xl font-bold">
                Um ecossistema feito para você
              </h2>
            </div>

            <AudiencePanels items={audiences} />
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-teal font-bold text-xs tracking-widest uppercase mb-3">
                Nossas Entregas de Valor
              </span>
              <h2 className="text-navy text-3xl md:text-4xl font-bold">
                O que nós fazemos
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {deliveries.map((d) => (
                <div key={d.title} className="flex flex-col gap-6 group">
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute bottom-4 left-4 w-12 h-12 ${d.iconBg} backdrop-blur-md rounded-xl flex items-center justify-center`}>
                      <FaIcon name={d.icon} className={`text-xl ${d.iconColor}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-navy text-xl font-bold mb-2">{d.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMAGE BANNER ── */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <Image
            src="/fing-todo-o-publico.webp"
            alt="Comunidade Sete Colinas"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/40 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                A força do interior que move o futuro
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-medium">
                Mais do que tecnologia, somos pessoas conectadas pelo propósito de transformar o Agreste Meridional.
              </p>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="bg-navy py-20 topo-lines" id="participar">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-agreste font-bold text-xs tracking-widest uppercase mb-3">
                Governança Circular
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Como funciona a Comunidade Sete Colinas?
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Sem hierarquia rígida. Cada pessoa entra pelo nível que faz
                sentido e evolui pelo seu próprio ritmo.
              </p>
            </div>

            {/* Journey */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0 mb-16 flex-wrap">
              {journey.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="text-center px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                      {i + 1}
                    </div>
                    <p className="text-white font-semibold text-sm">{step.label}</p>
                    <p className="text-white/50 text-xs">{step.desc}</p>
                  </div>
                  {i < journey.length - 1 && (
                    <div className="text-cyan-soft font-bold text-lg mx-1 hidden sm:block">→</div>
                  )}
                </div>
              ))}
            </div>

            {/* Trails */}
            <div className="text-center mb-8">
              <h3 className="text-white text-xl font-bold mb-2">
                As 5 Trilhas de Atuação
              </h3>
              <p className="text-white/60 text-sm">Escolha onde você quer contribuir</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {trails.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bg} rounded-xl p-5 text-center flex justify-center items-center gap-3`}
                >
                  <div>
                    <FaIcon name={t.icon} className={`text-2xl ${t.iconColor} block mx-auto`} />
                  </div>
                  <span className="font-semibold text-sm text-white">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNERS ── */}
        <section className="bg-gray-50 py-20" id="parceiros">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-teal font-bold text-xs tracking-widest uppercase mb-3">
                Quadrupla Hélice
              </span>
              <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
                Ecossistema Integrado
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A força da Comunidade Sete Colinas está na conexão entre todos os pilares
                do desenvolvimento regional.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {helixPillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="flex items-center gap-6 md:gap-10 border-b border-gray-200 py-8 last:border-b-0 group"
                >
                  {/* Número decorativo */}
                  <div className={`relative text-[80px] md:text-[100px] font-black leading-none select-none shrink-0 w-24 md:w-32 text-right ${pillar.numColor}`}>
                    {/* Fill com opacidade + hover */}
                    <span className="opacity-10 group-hover:opacity-20 transition-opacity">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Borda com opacidade suave */}
                    <span
                      className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                      style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1.5px currentColor" }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Linha de acento vertical */}
                  <div className={`w-1 self-stretch rounded-full ${pillar.accentColor} opacity-60 shrink-0`} />

                  {/* Conteúdo */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-2">
                      <div className={`w-9 h-9 ${pillar.iconBg} rounded-lg flex items-center justify-center shrink-0`}>
                        <FaIcon name={pillar.icon} className={`text-base ${pillar.iconColor}`} />
                      </div>
                      <h3 className="text-navy font-bold text-lg">{pillar.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="bg-agreste py-16" id="eventos">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Pronto para fazer parte do movimento?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Junte-se a mais de 2.500 pessoas que estão construindo o futuro do Agreste.
            </p>
            <a
              href="#participar"
              className="inline-block bg-white text-agreste font-bold px-10 py-4 rounded-full text-base hover:bg-gray-100 transition-colors"
            >
              QUERO FAZER PARTE
            </a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-navy text-white">
        {/* Newsletter */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 flex items-center gap-3">
                <FaIcon name="envelope" className="text-cyan-soft" />
                Colina News
              </h3>
              <p className="text-white/60 text-sm">
                Receba notícias quentes sobre editais, vagas e inovação no Agreste.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan-soft w-full sm:w-64"
              />
              <button
                type="submit"
                className="bg-agreste hover:bg-[#8fa004] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
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

          <nav className="flex gap-6 flex-wrap justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-5">
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-cyan-soft transition-colors text-xl">
              <FaIcon name="instagram" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-cyan-soft transition-colors text-xl">
              <FaIcon name="linkedin" />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-white/60 hover:text-cyan-soft transition-colors text-xl">
              <FaIcon name="whatsapp" />
            </a>
          </div>
        </div>

        {/* Slogan */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 text-center text-white/40 text-xs">
            Inteligência local. Negócios Glocais. Feito com orgulho em Garanhuns-PE.
          </div>
        </div>
      </footer>
    </div>
  );
}
