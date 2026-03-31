/* Social link icons as SVGs */
const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const IconTwitterX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const IconHackTheBox = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L2 6.5v11L12 23l10-5.5v-11L12 1zm0 2.31l7.5 4.12v8.25L12 19.69l-7.5-4.12V7.44L12 3.31zM9 7v2l3 1.73V15h2v-4.27L17 9V7l-5 2.88L9 7z" />
  </svg>
);

const links = [
  { icon: <IconLinkedIn />, name: "LinkedIn",    handle: "joaodrummond",  href: "https://www.linkedin.com/in/joaodrummond/?locale=en-US" },
  { icon: <IconGitHub />,   name: "GitHub",      handle: "joaodrmmd",     href: "https://github.com/joaodrmmd" },
  { icon: <IconTwitterX />, name: "X / Twitter", handle: "@drmmd_sec",    href: "https://x.com/drmmd_sec" },
  { icon: <IconHackTheBox />, name: "HackTheBox", handle: "ver perfil",   href: "https://app.hackthebox.com/users/2853841" },
];

const ContactSection = () => (
  <section id="contact" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24">
    <div className="max-w-[1200px] mx-auto">
      <header className="mb-16">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Vamos Conectar
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-none mb-5">
          Entre em Contato
        </h2>
        <p className="text-base text-muted-foreground max-w-[520px] leading-relaxed font-light">
          Avaliações de segurança, colaboração em pesquisa ou estratégia — envie uma mensagem.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="flex flex-col gap-8">
          <div className="glass-card p-8 rounded-2xl">
            <p className="font-display text-lg italic text-muted-foreground leading-relaxed">
              "Prediction is very difficult, especially if it's about the future."
            </p>
            <cite className="block mt-4 font-mono text-xs text-primary not-italic tracking-wide">— Niels Bohr</cite>
          </div>

          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 px-6 py-4 rounded-2xl text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all group"
              >
                <span className="text-primary">{l.icon}</span>
                <span className="font-medium">{l.name}</span>
                <span className="font-mono text-xs text-text-dim ml-auto group-hover:text-primary transition-colors">
                  {l.handle}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card-strong rounded-2xl overflow-hidden">
          <div className="px-7 py-4 border-b border-border flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--accent-brand) / 0.6)" }} />
              <span className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="w-3 h-3 rounded-full bg-green/60" />
            </div>
            <span className="font-mono text-xs text-text-dim tracking-wider ml-2">nova-mensagem</span>
          </div>
          <div className="p-8 flex flex-col gap-5">
            {[
              { id: "cname",  label: "Seu Nome",  type: "text",  placeholder: "João Silva" },
              { id: "cemail", label: "Seu Email", type: "email", placeholder: "contato@exemplo.com" },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-2">
                <label htmlFor={f.id} className="font-mono text-xs text-primary tracking-wider uppercase">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  className="bg-background/50 border border-border text-foreground font-mono text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:bg-primary-dim transition-colors placeholder:text-text-dim"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label htmlFor="cmsg" className="font-mono text-xs text-primary tracking-wider uppercase">
                Mensagem
              </label>
              <textarea
                id="cmsg"
                rows={5}
                placeholder="Descreva sua solicitação..."
                className="bg-background/50 border border-border text-foreground font-mono text-sm px-4 py-3 rounded-xl resize-none focus:outline-none focus:border-primary focus:bg-primary-dim transition-colors placeholder:text-text-dim min-h-[130px]"
              />
            </div>
            <button className="btn-primary self-start mt-2">Enviar Mensagem</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;