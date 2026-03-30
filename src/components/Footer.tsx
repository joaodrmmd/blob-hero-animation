const socials = [
  { name: "Instagram", href: "https://www.instagram.com/drmmd.sec/" },
  { name: "GitHub", href: "https://github.com/joaodrmmd" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/joaodrummond/?locale=en-US" },
  { name: "X / Twitter", href: "https://x.com/drmmd_sec" },
  { name: "HackTheBox", href: "https://app.hackthebox.com/users/2853841" },
];

const Footer = () => (
  <footer className="relative px-6 md:px-16 lg:px-24 py-16 border-t border-border">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
        <div>
          <div className="font-display text-lg font-bold tracking-tight mb-2">
            João <span className="text-primary">D.</span>
          </div>
          <p className="text-sm text-muted-foreground font-light">Security Researcher & Offensive Engineer</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground px-4 py-2 rounded-full border border-border hover:border-primary/30 hover:text-primary hover:bg-primary-dim transition-all"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 border-t border-border">
        <span className="font-mono text-xs text-text-dim">© 2025 João D. — Todos os direitos reservados.</span>
        <div className="font-mono text-xs text-text-dim flex gap-4">
          <span className="text-primary/60">Hacking Ético</span>
          <span>·</span>
          <span className="text-primary/60">Threat Intelligence</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
