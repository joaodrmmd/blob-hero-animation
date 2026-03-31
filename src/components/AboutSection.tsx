import DitherBackground from "./effects/DitherBackground";
import BorderGlow from "./effects/BorderGlow";

const AboutSection = () => (
  <section id="about" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
    {/* Dither background — subtle, same purple family as hero */}
    <DitherBackground
      waveColor={[0.32, 0.10, 0.65]}
      waveSpeed={0.008}
      waveFrequency={2.4}
      waveAmplitude={0.38}
      colorNum={3}
      pixelSize={3}
    />
    {/* Fade the dither so it's atmospheric, not overwhelming */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "linear-gradient(180deg, hsl(0 0% 3% / 0.7) 0%, hsl(0 0% 3% / 0.55) 50%, hsl(0 0% 3% / 0.7) 100%)",
      }}
    />

    <div className="relative z-10 max-w-[1200px] mx-auto">
      <header className="mb-16">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Background
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-none">
          Sobre Mim
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-5 text-muted-foreground text-base leading-relaxed font-light">
          <p>
            Apaixonado por Cibersegurança, cursando{" "}
            <span className="text-foreground font-medium">Engenharia de Telecomunicações</span> na UFPE e{" "}
            <span className="text-foreground font-medium">Engenharia de Software</span> na FACINT.
          </p>
          <p>
            Atuo como{" "}
            <span className="text-foreground font-medium">Professor Auxiliar</span> na pós-graduação em
            Ciberinteligência e Segurança Ofensiva, e me envolvo ativamente na organização da Security BSides Recife.
          </p>
          <p>
            Minha trajetória inclui pesquisa em Threat Intelligence, desenvolvimento de antivírus com machine
            learning, e o A1.dev — toolbox multiplataforma com backend em Python.
          </p>
        </div>

        <BorderGlow glowColor="269 73 47" borderRadius={16} glowIntensity={0.45}>
          <div className="glass-card-strong overflow-hidden !rounded-2xl">
            <div className="px-7 py-4 border-b border-border flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--accent-brand) / 0.6)" }} />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="w-3 h-3 rounded-full bg-green/60" />
              </div>
              <span className="font-mono text-xs text-text-dim tracking-wider ml-2">skills.json</span>
            </div>
            {[
              { label: "Linguagens",      val: "Python, C, PowerShell, Bash, Dart, JS, Ruby" },
              { label: "Ferramentas",     val: "Metasploit, Burp Suite, Nmap, Ghidra, Wireshark, Nuclei" },
              { label: "Especializações", val: "Malware Analysis, OSINT, Social Eng., Pentesting" },
              { label: "Certificações",   val: "CRT-ID ✓ · CPTS (Estudando) · Web-RTA (Em progresso)" },
            ].map((s) => (
              <div key={s.label} className="px-7 py-5 border-b border-border last:border-b-0">
                <div className="font-mono text-[0.65rem] tracking-widest uppercase text-primary mb-2">{s.label}</div>
                <div className="font-mono text-sm text-muted-foreground leading-relaxed">{s.val}</div>
              </div>
            ))}
          </div>
        </BorderGlow>
      </div>
    </div>
  </section>
);

export default AboutSection;