import { useReveal } from "@/hooks/useReveal";
import SpotlightCard from "./effects/SpotlightCard";
import DecryptedText from "./effects/DecryptedText";
import BlueprintSection from "./layout/BlueprintSection";

const cards = [
  { num: "01", title: "Offensive Security", body: "Pentesting, análise de vulnerabilidades e exploitation. Desenvolvimento de payloads e técnicas de evasão." },
  { num: "02", title: "Threat Intelligence", body: "Coleta e análise de ameaças cibernéticas. Monitoramento de APTs e análise de TTPs via MITRE ATT&CK." },
  { num: "03", title: "Malware Analysis", body: "Engenharia reversa de binários maliciosos. Análise estática e dinâmica com ferramentas como Ghidra e sandboxes." },
  { num: "04", title: "OSINT & Social Eng.", body: "Coleta de inteligência em fontes abertas e engenharia social para testes de conscientização e segurança." },
  { num: "05", title: "Tool Development", body: "Criação de ferramentas de segurança automatizadas em Python, PowerShell e Bash para otimizar workflows." },
  { num: "06", title: "Ensino & Pesquisa", body: "Professor auxiliar em pós-graduação de Ciberinteligência. Pesquisador ativo em temas de segurança ofensiva." },
];

const ExpertiseSection = () => {
  const ref = useReveal();

  return (
    <BlueprintSection id="expertise" label="sec::expertise" className="bg-card">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <header ref={ref} className="mb-16 opacity-0 translate-y-8 transition-all duration-700 data-[visible]:opacity-100 data-[visible]:translate-y-0">
          <div className="font-mono text-xs tracking-[3px] text-accent-brand uppercase mb-3 flex items-center gap-2.5">
            <span className="text-text-dim">//</span> O que eu faço
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-none mb-4">
            Áreas de Expertise
          </h2>
          <p className="text-base text-muted-foreground max-w-[560px] leading-relaxed font-light">
            Foco acadêmico e prático em segurança ofensiva — da exploração de sistemas à análise e desenvolvimento de ferramentas especializadas.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c) => (
            <SpotlightCard key={c.num} className="group" spotlightColor="rgba(168, 130, 255, 0.12)">
              <div className="p-10 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-brand scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                <div className="font-mono text-xs text-text-dim tracking-[2px] mb-6">
                  <strong className="text-primary">{c.num}</strong>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground tracking-tight mb-3">
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
    </BlueprintSection>
  );
};

export default ExpertiseSection;
