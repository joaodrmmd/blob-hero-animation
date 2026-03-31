import { useReveal } from "@/hooks/useReveal";
import SpotlightCard from "./effects/SpotlightCard";
import DecryptedText from "./effects/DecryptedText";

const IconSword = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary))" }}>
    <path d="M14.5 17.5L3 6V3h3l11.5 11.5" /><path d="M13 19l6-6" /><path d="M16 16l4 4" /><path d="M19 21l2-2" /><path d="M3 11l4-4" />
  </svg>
);
const IconSearch = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary))" }}>
    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
  </svg>
);
const IconDna = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary))" }}>
    <path d="M2 15c6.667-6 13.333 0 20-6" /><path d="M9 22c1.798-3.6 8.267-3.6 10.5-6" /><path d="M2 9c6.667-6 13.333 0 20-6" /><path d="M4.5 12a10 10 0 0 1 2-2" /><path d="M18.5 12a10 10 0 0 0-1.96-1.9" /><path d="M15 9a7.5 7.5 0 0 0-6 0" /><path d="M9 15a7.5 7.5 0 0 0 6 0" />
  </svg>
);
const IconEye = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary))" }}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const IconWrench = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary))" }}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const IconBook = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary))" }}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><path d="M8 7h8M8 11h6" />
  </svg>
);

const cards = [
  { icon: <IconSword />,  title: "Offensive Security",  body: "Pentesting, análise de vulnerabilidades e exploitation. Desenvolvimento de payloads e técnicas de evasão." },
  { icon: <IconSearch />, title: "Threat Intelligence",  body: "Coleta e análise de ameaças cibernéticas. Monitoramento de APTs e análise de TTPs via MITRE ATT&CK." },
  { icon: <IconDna />,    title: "Malware Analysis",     body: "Engenharia reversa de binários maliciosos. Análise estática e dinâmica com Ghidra e sandboxes." },
  { icon: <IconEye />,    title: "OSINT & Social Eng.",  body: "Coleta de inteligência em fontes abertas e engenharia social para testes de conscientização." },
  { icon: <IconWrench />, title: "Tool Development",     body: "Criação de ferramentas automatizadas em Python, PowerShell e Bash para otimizar workflows." },
  { icon: <IconBook />,   title: "Ensino & Pesquisa",    body: "Professor auxiliar em pós-graduação de Ciberinteligência. Pesquisador ativo em segurança ofensiva." },
];

const ExpertiseSection = () => {
  const ref = useReveal();
  return (
    <section id="expertise" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <header ref={ref} className="mb-16 opacity-0 translate-y-8 transition-all duration-700 data-[visible]:opacity-100 data-[visible]:translate-y-0">
          <div className="section-label"><span className="w-8 h-px bg-primary" />O que eu faço</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-none mb-5">Áreas de Expertise</h2>
          <p className="text-base text-muted-foreground max-w-[520px] leading-relaxed font-light">Foco acadêmico e prático em segurança ofensiva — da exploração de sistemas à análise e desenvolvimento de ferramentas especializadas.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <SpotlightCard key={c.title} className="group rounded-2xl" spotlightColor="rgba(105, 35, 209, 0.1)">
              <div className="p-8 md:p-10 relative">
                <div className="mb-5">{c.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground tracking-tight mb-3">
                  {/* 100% faster: was 15 → now 8 */}
                  <DecryptedText text={c.title} speed={8} maxIterations={6} animateOn="hover"
                    className="text-foreground" encryptedClassName="text-accent-brand" />
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