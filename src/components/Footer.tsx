const socials = [
  { name: "Instagram", href: "https://www.instagram.com/drmmd.sec/" },
  { name: "GitHub", href: "https://github.com/joaodrmmd" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/joaodrummond/?locale=en-US" },
  { name: "X / Twitter", href: "https://x.com/drmmd_sec" },
  { name: "HackTheBox", href: "https://app.hackthebox.com/users/2853841" },
];

const Footer = () => (
  <>
    {/* Social Bar */}
    <div className="border-t border-border bg-card">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-12 flex items-center gap-8 md:gap-12 flex-wrap">
        <span className="font-mono text-xs text-text-dim tracking-[3px] uppercase shrink-0">Redes</span>
        <div className="w-10 h-px bg-border shrink-0" />
        <div className="flex gap-2 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground px-4 py-2 border border-transparent rounded-sm hover:border-border-strong hover:text-primary hover:bg-primary-dim transition-all"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="font-mono text-xs text-text-dim">© 2025 João D. — Todos os direitos reservados.</span>
        <div className="font-mono text-xs text-text-dim flex gap-5">
          <span className="text-primary">Hacking Ético</span>
          <span>·</span>
          <span className="text-primary">Threat Intelligence</span>
          <span>·</span>
          <span className="text-primary">Aprendizado Contínuo</span>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
