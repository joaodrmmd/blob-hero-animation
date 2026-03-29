const projects = [
  {
    cat: "Conferência",
    tags: ["Organização", "Comunidade", "Networking"],
    title: "Security BSides Recife",
    desc: "Organização da conferência Security BSides Recife — conferência de Segurança da Informação e Cultura Hacker que fomenta a cena de hacking na região Nordeste.",
    link: "https://bsidesrecife.com.br",
    linkText: "Ver site →",
  },
  {
    cat: "Ferramenta",
    tags: ["PowerShell", "Bash", "Linux", "Windows", "MacOS"],
    title: "<A1.dev> Toolbox Multi-Plataforma",
    desc: "Multi Tool para facilitar setup de ambientes de teste. Solução cross-platform presente em GNU Linux, Windows e MacOS com foco em automação e praticidade.",
    link: "#",
    linkText: "Ver no GitHub →",
  },
  {
    cat: "Threat Intelligence",
    tags: ["Python", "C", "LLMs", "ELMs"],
    title: "Antivirus com Inteligência Artificial",
    desc: "Antivirus desenvolvido para detectar agentes maliciosos via análise de características, padrões e hashes — detecção proativa antes da execução do agente.",
    link: "#",
    linkText: "Ver no GitHub →",
  },
  {
    cat: "Pesquisa",
    tags: ["Análise de APTs", "Reverse Engineering", "CVEs"],
    title: "White Paper: Operation Aurora",
    desc: "Pesquisa, coleta, análise e documentação do Modus Operandi da Operação Aurora. Paper desenvolvido em grupo com aspirantes da LSEC — UFPE.",
    link: "https://drive.google.com/file/d/1Px4aM_647j7tfIzJ2aFz6BBhnTWdtx9d/view",
    linkText: "Ler Write-up →",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="bg-background">
    <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <header className="mb-16">
        <div className="font-mono text-xs tracking-[3px] text-accent-brand uppercase mb-3 flex items-center gap-2.5">
          <span className="text-text-dim">//</span> Trabalho em Destaque
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-none">
          Projetos Recentes
        </h2>
      </header>

      <div className="flex flex-col border border-border overflow-hidden">
        {projects.map((p, i) => (
          <article
            key={i}
            className="grid grid-cols-1 md:grid-cols-[300px_1fr] border-b border-border last:border-b-0 bg-card hover:bg-surface transition-colors relative group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-accent-brand scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-400" />
            <div className="p-7 md:p-10 border-b md:border-b-0 md:border-r border-border flex flex-col gap-4">
              <div className="font-mono text-xs tracking-[2.5px] uppercase text-accent-brand">{p.cat}</div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.68em] px-2.5 py-1 border border-border-strong text-text-dim bg-primary-dim rounded-sm tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-7 md:p-10 md:pl-12">
              <h3 className="font-display text-xl font-bold text-foreground tracking-tight mb-3 leading-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-primary border-b border-primary pb-0.5 hover:text-accent-brand hover:border-accent-brand transition-colors"
              >
                {p.linkText}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
