import Image from "next/image";
import FaIcon from "./components/FaIcon";
import AntasSvg from "./components/AntasSvg";
import ImpactTicker from "./components/ImpactTicker";

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
    image: "/empresarios-conversando.webp",
    imagePosition: "object-top",
  },
  {
    icon: "arrows-rotate" as const,
    iconColor: "text-teal",
    title: "Profissionais em Transição",
    description:
      "Espaço acolhedor para quem busca se inserir no mercado de inovação e tecnologia.",
    image: "/palestrante-mulher.webp",
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

const partnerGroups = [
  {
    category: "Aceleradores & Fomento",
    partners: ["Sebrae", "Sesc", "Porto Digital", "Armazém da Criatividade", "Sala do Empreendedor", "AGEFEPE", "Entre outras organizações de fomento locais e nacionais"],
  },
  {
    category: "Academia",
    partners: ["IFPE", "UPE", "AESGA", "UFAPE", "FIC", "Entre outras faculdades locais"],
  },
  {
    category: "Governo & Editais",
    partners: ["Facepe", "Sudene", "Banco do Nordeste"],
  },
  {
    category: "Iniciativa Privada",
    partners: ["Baterias Moura", "Ferreira Costa", "Solar Coca-Cola"],
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
              src="/Logo (fundo transparente) - Sete Colinas.png"
              alt="Sete Colinas"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <span className="text-white font-semibold text-lg leading-tight hidden sm:block">
              Sete Colinas
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
                Para quem é a Sete Colinas?
              </span>
              <h2 className="text-navy text-3xl md:text-4xl font-bold">
                Um ecossistema feito para você
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {audiences.map((a) => (
                <div
                  key={a.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className={`object-cover ${a.imagePosition || "object-center"} transition-transform duration-500 group-hover:scale-110`}
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <FaIcon name={a.icon} className={`text-lg ${a.iconColor}`} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-navy text-xl font-bold mb-3">{a.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
                Como funciona a Sete Colinas?
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
                Hélice Quádrupla
              </span>
              <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
                Ecossistema Integrado
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A força da Sete Colinas está na conexão entre todos os pilares
                do desenvolvimento regional.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerGroups.map((group) => (
                <div
                  key={group.category}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-teal font-bold text-xs uppercase tracking-widest mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.partners.map((p) => (
                      <li
                        key={p}
                        className="text-navy font-medium text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-agreste inline-block" />
                        {p}
                      </li>
                    ))}
                  </ul>
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
              src="/Logo (fundo transparente) - Sete Colinas.png"
              alt="Sete Colinas"
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
