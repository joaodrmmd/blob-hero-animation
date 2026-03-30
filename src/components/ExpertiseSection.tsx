import { useReveal } from "@/hooks/useReveal";
import SpotlightCard from "./effects/SpotlightCard";
import DecryptedText from "./effects/DecryptedText";

const cards = [
  { icon: "⚔️", title: "Offensive Security", body: "Pentesting, análise de vulnerabilidades e exploitation. Desenvolvimento de payloads e técnicas de evasão." },
  { icon: "🔍", title: "Threat Intelligence", body: "Coleta e análise de ameaças cibernéticas. Monitoramento de APTs e análise de TTPs via MITRE ATT&CK." },
  { icon: "🧬", title: "Malware Analysis", body: "Engenharia reversa de binários maliciosos. Análise estática e dinâmica com Ghidra e sandboxes." },
  { icon: "🕵️", title: "OSINT & Social Eng.", body: "Coleta de inteligência em fontes abertas e engenharia social para testes de conscientização." },
  { icon: "🛠️", title: "Tool Development", body: "Criação de ferramentas automatizadas em Python, PowerShell e Bash para otimizar workflows." },
  { icon: "📖", title: "Ensino & Pesquisa", body: "Professor auxiliar em pós-graduação de Ciberinteligência. Pesquisador ativo em segurança ofensiva." },
];

const ExpertiseSection = () => {
  const ref = useReveal();

  return (
    <section id="expertise" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <header ref={ref} className="mb-16 opacity-0 translate-y-8 transition-all duration-700 data-[visible]:opacity-100 data-[visible]:translate-y-0">
          <div className="section-label">
            <span className="w-8 h-px bg-primary" />
            O que eu faço
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-none mb-5">
            Áreas de Expertise
          </h2>
          <p className="text-base text-muted-foreground max-w-[520px] leading-relaxed font-light">
            Foco acadêmico e prático em segurança ofensiva — da exploração de sistemas à análise e desenvolvimento de ferramentas especializadas.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <SpotlightCard key={c.title} className="group rounded-2xl" spotlightColor="rgba(45, 212, 191, 0.08)">
              <div className="p-8 md:p-10 relative">
                <div className="text-3xl mb-5">{c.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground tracking-tight mb-3">
                  <DecryptedText
                    text={c.title}
                    speed={30}
                    maxIterations={6}
                    animateOn="hover"
                    className="text-foreground"
                    encryptedClassName="text-primary/40"
                  />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{c.body}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
