import BorderGlow from "./effects/BorderGlow";

const AboutSection = () => (
  <section id="about" className="bg-card border-t border-border">
    <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <header className="mb-16">
        <div className="font-mono text-xs tracking-[3px] text-accent-brand uppercase mb-3 flex items-center gap-2.5">
          <span className="text-text-dim">//</span> Background
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-none">
          Sobre Mim
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div className="space-y-5 text-muted-foreground text-base leading-relaxed font-light">
          <p>
            Apaixonado por Cibersegurança, cursando <span className="text-foreground font-medium">Engenharia de Telecomunicações</span> na UFPE e{" "}
            <span className="text-foreground font-medium">Engenharia de Software</span> na FACINT. Atuo como{" "}
            <span className="text-foreground font-medium">Professor Auxiliar</span> na pós-graduação em Ciberinteligência e Segurança Ofensiva, e me envolvo ativamente na organização da Security BSides Recife.
          </p>
          <p>
            Minha trajetória inclui pesquisa em Threat Intelligence analisando a "Operation Aurora", desenvolvimento de um antivírus para detecção de scripts maliciosos via machine learning, e o A1.dev — toolbox multiplataforma com backend em Python e frontend em Flutter.
          </p>
          <p>
            Familiaridade com <span className="text-foreground font-medium">Python, C</span> e com frameworks como NIST,{" "}
            <span className="text-foreground font-medium">MITRE ATT&CK</span>, Git e Docker.
          </p>
        </div>

        <BorderGlow glowColor="262 90 73" borderRadius={4} glowIntensity={0.5}>
          <div className="bg-surface border border-border rounded overflow-hidden">
            <div className="px-7 py-4 bg-surface-2 border-b border-border font-mono text-xs text-text-dim tracking-[2px] flex items-center gap-2">
              <span className="text-primary">$</span> cat skills.json
            </div>
            {[
              { label: "Linguagens", val: "Python, C, PowerShell, Bash, Dart, JavaScript, Ruby", hi: ["Python"] },
              { label: "Ferramentas", val: "Metasploit, Burp Suite, Nmap, Ghidra, Wireshark, nuclei, Nessus, OWASP ZAP, Docker" },
              { label: "Especializações", val: "Análise de Malware, Confecção de Antivirus, OSINT, Engenharia Social, Pentesting" },
              { label: "Certificações", val: "CRT-ID ✓  CPTS (Estudando)  Web-RTA (Em progresso)", hi: ["CRT-ID ✓"] },
            ].map((s) => (
              <div key={s.label} className="px-7 py-5 border-b border-border last:border-b-0 flex flex-col gap-2">
                <div className="font-mono text-[0.68em] tracking-[2px] uppercase text-accent-brand">{s.label}</div>
                <div className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {s.hi
                    ? s.val.split(new RegExp(`(${s.hi.join("|")})`, "g")).map((part, i) =>
                        s.hi!.includes(part) ? (
                          <span key={i} className="text-primary">{part}</span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )
                    : s.val}
                </div>
              </div>
            ))}
          </div>
        </BorderGlow>
      </div>
    </div>
  </section>
);

export default AboutSection;
