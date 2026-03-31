import BorderGlow from "./effects/BorderGlow";

const projects = [
  {
    cat: "Conferência",
    tags: ["Organização", "Comunidade", "Networking"],
    title: "Security BSides Recife",
    desc: "Conferência de Segurança da Informação e Cultura Hacker que fomenta a cena de hacking na região Nordeste.",
    link: "https://bsidesrecife.com.br",
    linkText: "Ver site",
  },
  {
    cat: "Ferramenta",
    tags: ["PowerShell", "Bash", "Cross-Platform"],
    title: "<A1.dev> Toolbox",
    desc: "Multi Tool para setup de ambientes de teste. Solução cross-platform presente em Linux, Windows e MacOS.",
    link: "#",
    linkText: "Ver no GitHub",
  },
  {
    cat: "Threat Intel",
    tags: ["Python", "C", "LLMs"],
    title: "Antivirus com IA",
    desc: "Antivírus para detectar agentes maliciosos via análise de características, padrões e hashes — detecção proativa.",
    link: "#",
    linkText: "Ver no GitHub",
  },
  {
    cat: "Pesquisa",
    tags: ["APTs", "Reverse Eng.", "CVEs"],
    title: "White Paper: Operation Aurora",
    desc: "Pesquisa e análise do Modus Operandi da Operação Aurora. Paper desenvolvido com a LSEC — UFPE.",
    link: "https://drive.google.com/file/d/1Px4aM_647j7tfIzJ2aFz6BBhnTWdtx9d/view",
    linkText: "Ler Write-up",
  },
];

const IconArrow = () => (
  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ProjectsSection = () => (
  <section id="projects" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24">
    <div className="max-w-[1200px] mx-auto">
      <header className="mb-16">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Trabalho em Destaque
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-none">
          Projetos Recentes
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <BorderGlow key={i} glowColor="269 73 47" borderRadius={16} glowRadius={30} glowIntensity={0.5}>
            <article className="glass-card-strong p-8 md:p-10 h-full flex flex-col group !rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs tracking-wider uppercase text-primary bg-primary-dim px-3 py-1 rounded-full">
                  {p.cat}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground tracking-tight mb-3 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.65rem] px-3 py-1 rounded-full border border-border-strong text-muted-foreground bg-glass">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-foreground transition-colors"
              >
                {p.linkText}
                <IconArrow />
              </a>
            </article>
          </BorderGlow>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;