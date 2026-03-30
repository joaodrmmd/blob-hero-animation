const links = [
  { icon: "in", name: "LinkedIn", handle: "joaodrummond", href: "https://www.linkedin.com/in/joaodrummond/?locale=en-US" },
  { icon: "gh", name: "GitHub", handle: "joaodrmmd", href: "https://github.com/joaodrmmd" },
  { icon: "x", name: "X / Twitter", handle: "@drmmd_sec", href: "https://x.com/drmmd_sec" },
  { icon: "htb", name: "HackTheBox", handle: "ver perfil", href: "https://app.hackthebox.com/users/2853841" },
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
                <span className="text-primary font-mono text-sm font-semibold min-w-[28px]">{l.icon}</span>
                <span className="font-medium">{l.name}</span>
                <span className="font-mono text-xs text-text-dim ml-auto group-hover:text-primary transition-colors">{l.handle}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card-strong rounded-2xl overflow-hidden">
          <div className="px-7 py-4 border-b border-border flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-accent-brand/60" />
              <span className="w-3 h-3 rounded-full bg-green/60" />
            </div>
            <span className="font-mono text-xs text-text-dim tracking-wider ml-2">nova-mensagem</span>
          </div>
          <div className="p-8 flex flex-col gap-5">
            {[
              { id: "cname", label: "Seu Nome", type: "text", placeholder: "João Silva" },
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
            <button className="btn-primary self-start mt-2">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
