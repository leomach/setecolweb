import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Nosso Propósito", href: "#proposito" },
  { label: "Como Participar", href: "#participar" },
  { label: "Eventos", href: "#eventos" },
  { label: "Parceiros", href: "#parceiros" },
];

const impactNumbers = [
  { value: "8", label: "Anos de história e amadurecimento do ecossistema", suffix: "" },
  { value: "+2.500", label: "Participantes na última edição do FING", suffix: "" },
  { value: "+R$118K", label: "Captados em fomento e patrocínios", suffix: "" },
  { value: "5", label: "Trilhas Ativas operando simultaneamente", suffix: "" },
];

const audiences = [
  {
    icon: "🎓",
    title: "Estudantes e Academia",
    description:
      "Conectando a força jovem de TI do IFPE, UPE e AESGA com o mercado de trabalho real.",
  },
  {
    icon: "🚀",
    title: "Empreendedores e Startups",
    description:
      "Suporte desde a fase de ideação (Centelha) até negócios consolidados que buscam escala.",
  },
  {
    icon: "🔄",
    title: "Profissionais em Transição",
    description:
      "Espaço acolhedor para quem busca se inserir no mercado de inovação e tecnologia.",
  },
];

const deliveries = [
  {
    icon: "🤝",
    title: "Conexão e Networking",
    description:
      "Nosso pilar mais forte, eleito como prioridade número 1 pelos membros com 35 votos em nossa pesquisa interna.",
  },
  {
    icon: "🏆",
    title: "Eventos de Alto Impacto",
    description:
      "Do FING (Festival de Inovação e Negócios de Garanhuns), passando pelo Startup Day, Colinas Tech e Trampolim.",
  },
  {
    icon: "📡",
    title: "Radar de Oportunidades",
    description:
      "Apoio contínuo para aprovação de projetos em editais de fomento: Facepe, Centelha, Banco do Nordeste e mais.",
  },
];

const trails = [
  { name: "Governança", color: "bg-navy", icon: "⚖️" },
  { name: "Comunicação", color: "bg-cyan-soft", icon: "📢" },
  { name: "Relacionamento", color: "bg-teal", icon: "🌐" },
  { name: "Eventos", color: "bg-petroleum", icon: "🎯" },
  { name: "Pessoas", color: "bg-agreste", icon: "👥" },
];

const partnerGroups = [
  {
    category: "Aceleradores & Fomento",
    partners: ["Sebrae", "Sesc", "Porto Digital"],
  },
  {
    category: "Academia",
    partners: ["IFPE", "UPE", "AESGA"],
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
        <section
          id="inicio"
          className="relative bg-navy topo-lines overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-agreste/20 text-agreste text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
                🏔️ Garanhuns — Agreste Meridional
              </span>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up animate-delay-100">
                Transformando o{" "}
                <span className="text-agreste">Agreste Meridional</span> em um
                Polo de Referência em{" "}
                <span className="text-cyan-soft">Inovação e Tecnologia</span>.
              </h1>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-in-up animate-delay-200">
                Conectamos Academia, Empresas, Governo e Startups para
                impulsionar a inteligência local. Aqui, você não precisa sair
                de Garanhuns para prosperar e ter uma carreira de impacto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animate-delay-300">
                <a
                  href="#participar"
                  className="bg-agreste hover:bg-[#8fa004] text-white font-bold px-8 py-4 rounded-full text-base transition-colors text-center"
                >
                  Entrar para a Comunidade
                </a>
                <a
                  href="#eventos"
                  className="border-2 border-cyan-soft text-cyan-soft hover:bg-cyan-soft hover:text-navy font-bold px-8 py-4 rounded-full text-base transition-colors text-center"
                >
                  Conhecer o FING 2026
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 animate-fade-in-up animate-delay-400">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-teal/10 border border-teal/20" />
                <div className="absolute inset-4 rounded-full bg-teal/10 border border-teal/20" />
                <div className="absolute inset-8 rounded-full bg-teal/10 border border-teal/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/MapaGaranhuns.png"
                    alt="Mapa de Garanhuns"
                    width={280}
                    height={280}
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* ── IMPACT NUMBERS ── */}
        <section className="bg-white py-16" id="numeros">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactNumbers.map((item) => (
                <div
                  key={item.label}
                  className="bg-gradient-to-br from-teal to-petroleum rounded-2xl p-6 text-center text-white"
                >
                  <p className="text-4xl md:text-5xl font-bold mb-2">{item.value}</p>
                  <p className="text-white/80 text-sm leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <span className="text-4xl mb-4 block">{a.icon}</span>
                  <h3 className="text-navy text-xl font-bold mb-3">{a.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{a.description}</p>
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

            <div className="grid md:grid-cols-3 gap-8">
              {deliveries.map((d) => (
                <div
                  key={d.title}
                  className="flex flex-col gap-4"
                >
                  <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center text-2xl">
                    {d.icon}
                  </div>
                  <h3 className="text-navy text-xl font-bold">{d.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{d.description}</p>
                </div>
              ))}
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
              {[
                { label: "Integrantes", desc: "Primeiros passos" },
                { label: "Exploradores", desc: "Voluntários em desenvolvimento" },
                { label: "Guias", desc: "Contribuição contínua" },
                { label: "Comitê", desc: "Gestão estratégica" },
                { label: "Conselho", desc: "Governança máxima" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="text-center px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                      {i + 1}
                    </div>
                    <p className="text-white font-semibold text-sm">{step.label}</p>
                    <p className="text-white/50 text-xs">{step.desc}</p>
                  </div>
                  {i < 4 && (
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
                  className={`${t.color} rounded-xl p-4 text-center text-white`}
                >
                  <span className="text-2xl block mb-2">{t.icon}</span>
                  <span className="font-semibold text-sm">{t.name}</span>
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
        <section className="bg-agreste py-16">
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
              <h3 className="text-xl font-bold mb-1">Colina News 📬</h3>
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

          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-cyan-soft transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-cyan-soft transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="text-white/60 hover:text-cyan-soft transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
