import BlueprintSection from "./layout/BlueprintSection";

const links = [
  { icon: "in", name: "LinkedIn", handle: "joaodrummond", href: "https://www.linkedin.com/in/joaodrummond/?locale=en-US" },
  { icon: "gh", name: "GitHub", handle: "joaodrmmd", href: "https://github.com/joaodrmmd" },
  { icon: "x", name: "X / Twitter", handle: "@drmmd_sec", href: "https://x.com/drmmd_sec" },
  { icon: "htb", name: "HackTheBox", handle: "ver perfil →", href: "https://app.hackthebox.com/users/2853841" },
];

const ContactSection = () => (
  <BlueprintSection id="contact" label="sec::contact" className="bg-background">
    <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <header className="mb-16">
        <div className="font-mono text-xs tracking-[3px] text-accent-brand uppercase mb-3 flex items-center gap-2.5">
          <span className="text-text-dim">//</span> Vamos Conectar
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-none mb-4">
          Entre em Contato
        </h2>
        <p className="text-base text-muted-foreground max-w-[560px] leading-relaxed font-light">
          Avaliações de segurança, colaboração em pesquisa ou estratégia — envie uma mensagem.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div className="flex flex-col gap-9">
          <div className="p-8 bg-surface border-l-[3px] border-primary rounded-r">
            <p className="font-display text-lg italic text-muted-foreground leading-relaxed">
              "Prediction is very difficult, especially if it's about the future."
            </p>
            <cite className="block mt-3 font-mono text-xs text-accent-brand not-italic tracking-wide">— Niels Bohr</cite>
          </div>

          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-5 py-4 bg-card border border-border rounded-sm text-sm text-muted-foreground hover:border-border-strong hover:text-foreground hover:bg-surface transition-all"
              >
                <span className="text-primary font-mono text-sm min-w-[28px]">{l.icon}</span>
                <span className="font-medium">{l.name}</span>
                <span className="font-mono text-xs text-text-dim ml-auto">{l.handle}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded overflow-hidden">
          <div className="px-7 py-4 bg-surface-2 border-b border-border flex items-center gap-2.5">
            <span className="w-[9px] h-[9px] rounded-full bg-destructive" />
            <span className="w-[9px] h-[9px] rounded-full bg-accent-brand" />
            <span className="w-[9px] h-[9px] rounded-full bg-green" />
            <span className="font-mono text-xs text-text-dim tracking-[2px] ml-1">nova-mensagem.send</span>
          </div>
          <div className="p-8 flex flex-col gap-5">
            {[
              { id: "cname", label: "Seu Nome", type: "text", placeholder: "João Silva" },
              { id: "cemail", label: "Seu Email", type: "email", placeholder: "contato@exemplo.com" },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-2">
                <label htmlFor={f.id} className="font-mono text-xs text-accent-brand tracking-[1.5px] uppercase">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  className="bg-background border border-border text-foreground font-mono text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-primary focus:bg-primary-dim transition-colors placeholder:text-text-dim"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label htmlFor="cmsg" className="font-mono text-xs text-accent-brand tracking-[1.5px] uppercase">
                Mensagem
              </label>
              <textarea
                id="cmsg"
                rows={5}
                placeholder="Descreva sua solicitação..."
                className="bg-background border border-border text-foreground font-mono text-sm px-4 py-3 rounded-sm resize-none focus:outline-none focus:border-primary focus:bg-primary-dim transition-colors placeholder:text-text-dim min-h-[130px]"
              />
            </div>
            <button className="glitch-btn self-start px-9 py-4 bg-primary text-primary-foreground hover:shadow-[0_10px_40px_hsl(var(--primary-glow))]">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  </BlueprintSection>
);

export default ContactSection;
