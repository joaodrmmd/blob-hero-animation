import { Link } from "react-router-dom";

const socials = [
  { name: "Instagram",   href: "https://www.instagram.com/drmmd.sec/" },
  { name: "GitHub",      href: "https://github.com/joaodrmmd" },
  { name: "LinkedIn",    href: "https://www.linkedin.com/in/joaodrummond/?locale=en-US" },
  { name: "X / Twitter", href: "https://x.com/drmmd_sec" },
  { name: "HackTheBox",  href: "https://app.hackthebox.com/users/2853841" },
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
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground px-4 py-2 rounded-full border border-border hover:border-primary/30 hover:text-primary hover:bg-primary-dim transition-all">
              {s.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
        <span className="font-mono text-xs text-text-dim">© 2025 João D. — Todos os direitos reservados.</span>

        <div className="flex items-center gap-5">
          <div className="font-mono text-xs text-text-dim flex gap-4">
            <span className="text-primary/60">Hacking Ético</span>
            <span>·</span>
            <span className="text-primary/60">Threat Intelligence</span>
          </div>

          {/* Cheatsheet — racing red, deep shadow */}
          <Link
            to="/cheatsheet"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full transition-all"
            style={{
              color: "hsl(2 93% 62%)",
              border: "1px solid hsl(2 93% 55% / 0.35)",
              background: "hsl(2 93% 55% / 0.08)",
              boxShadow: "0 4px 18px hsl(0 0% 0% / 0.7), 0 0 10px hsl(2 93% 55% / 0.15)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "hsl(2 93% 75%)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px hsl(0 0% 0% / 0.8), 0 0 16px hsl(2 93% 55% / 0.3)";
              (e.currentTarget as HTMLElement).style.background = "hsl(2 93% 55% / 0.14)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "hsl(2 93% 62%)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px hsl(0 0% 0% / 0.7), 0 0 10px hsl(2 93% 55% / 0.15)";
              (e.currentTarget as HTMLElement).style.background = "hsl(2 93% 55% / 0.08)";
            }}
          >
            <svg width="7" height="7" viewBox="0 0 7 7" fill="currentColor">
              <circle cx="3.5" cy="3.5" r="3.5" />
            </svg>
            cheatsheet
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;