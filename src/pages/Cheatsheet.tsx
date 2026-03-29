import { useState } from "react";
import SpotlightCard from "@/components/effects/SpotlightCard";
import DecryptedText from "@/components/effects/DecryptedText";
import { Link } from "react-router-dom";

interface Resource {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

interface Category {
  id: string;
  icon: string;
  label: string;
  resources: Resource[];
}

const categories: Category[] = [
  {
    id: "tools",
    icon: "⚙️",
    label: "Ferramentas",
    resources: [
      { title: "Burp Suite", url: "https://portswigger.net/burp", description: "Plataforma para testes de segurança web", tags: ["Web", "Proxy"] },
      { title: "Metasploit", url: "https://www.metasploit.com/", description: "Framework de exploração e pentesting", tags: ["Exploit", "Framework"] },
      { title: "Nmap", url: "https://nmap.org/", description: "Scanner de rede e detecção de serviços", tags: ["Network", "Scanner"] },
      { title: "Ghidra", url: "https://ghidra-sre.org/", description: "Framework de engenharia reversa da NSA", tags: ["Reverse Engineering"] },
      { title: "Wireshark", url: "https://www.wireshark.org/", description: "Analisador de protocolos de rede", tags: ["Network", "Forensics"] },
      { title: "Nuclei", url: "https://nuclei.projectdiscovery.io/", description: "Scanner de vulnerabilidades baseado em templates", tags: ["Scanner", "Automation"] },
      { title: "OWASP ZAP", url: "https://www.zaproxy.org/", description: "Scanner de segurança web open-source", tags: ["Web", "Scanner"] },
      { title: "Hashcat", url: "https://hashcat.net/hashcat/", description: "Ferramenta de cracking de hashes avançada", tags: ["Password", "Cracking"] },
      { title: "John the Ripper", url: "https://www.openwall.com/john/", description: "Ferramenta de cracking de senhas", tags: ["Password", "Cracking"] },
      { title: "CyberChef", url: "https://gchq.github.io/CyberChef/", description: "Canivete suíço para operações de dados", tags: ["Encoding", "Crypto"] },
    ],
  },
  {
    id: "courses",
    icon: "🎓",
    label: "Cursos & Plataformas",
    resources: [
      { title: "HackTheBox Academy", url: "https://academy.hackthebox.com/", description: "Treinamento prático em cibersegurança", tags: ["Prático", "Labs"] },
      { title: "TryHackMe", url: "https://tryhackme.com/", description: "Plataforma de aprendizado gamificada", tags: ["Beginner", "Labs"] },
      { title: "PortSwigger Web Academy", url: "https://portswigger.net/web-security", description: "Curso gratuito de segurança web", tags: ["Web", "Gratuito"] },
      { title: "SANS Cyber Aces", url: "https://www.cyberaces.org/", description: "Cursos introdutórios gratuitos do SANS", tags: ["Gratuito", "Fundamentos"] },
      { title: "Offensive Security (OffSec)", url: "https://www.offsec.com/", description: "Certificações OSCP, OSWE, OSED", tags: ["Certificação", "Avançado"] },
      { title: "PentesterLab", url: "https://pentesterlab.com/", description: "Exercícios hands-on de pentesting web", tags: ["Web", "Prático"] },
    ],
  },
  {
    id: "study",
    icon: "📚",
    label: "Materiais de Estudo",
    resources: [
      { title: "MITRE ATT&CK", url: "https://attack.mitre.org/", description: "Base de conhecimento de táticas e técnicas adversárias", tags: ["Framework", "Referência"] },
      { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", description: "Top 10 riscos de segurança em aplicações web", tags: ["Web", "Referência"] },
      { title: "GTFOBins", url: "https://gtfobins.github.io/", description: "Binários Unix para bypass de segurança", tags: ["Linux", "PrivEsc"] },
      { title: "LOLBAS", url: "https://lolbas-project.github.io/", description: "Living Off The Land Binaries - Windows", tags: ["Windows", "PrivEsc"] },
      { title: "PayloadsAllTheThings", url: "https://github.com/swisskyrepo/PayloadsAllTheThings", description: "Lista de payloads e bypass para pentesting", tags: ["Payloads", "Cheatsheet"] },
      { title: "HackTricks", url: "https://book.hacktricks.xyz/", description: "Wiki completa de técnicas de pentesting", tags: ["Wiki", "Referência"] },
      { title: "CyberSec Mindmap", url: "https://github.com/Ignitetechnologies/Mindmap", description: "Mindmaps para certificações de segurança", tags: ["Mindmap", "Estudo"] },
      { title: "Exploit Database", url: "https://www.exploit-db.com/", description: "Arquivo de exploits e shellcodes públicos", tags: ["Exploits", "CVE"] },
    ],
  },
  {
    id: "videos",
    icon: "🎬",
    label: "Vídeos & Canais",
    resources: [
      { title: "IppSec", url: "https://www.youtube.com/@ippsec", description: "Walkthroughs detalhados de máquinas HackTheBox", tags: ["YouTube", "HTB"] },
      { title: "John Hammond", url: "https://www.youtube.com/@_JohnHammond", description: "CTFs, malware analysis e tutoriais", tags: ["YouTube", "CTF"] },
      { title: "LiveOverflow", url: "https://www.youtube.com/@LiveOverflow", description: "Segurança ofensiva e pesquisa", tags: ["YouTube", "Research"] },
      { title: "NetworkChuck", url: "https://www.youtube.com/@NetworkChuck", description: "Networking, hacking e tech", tags: ["YouTube", "Beginner"] },
      { title: "The Cyber Mentor", url: "https://www.youtube.com/@TCMSecurityAcademy", description: "Pentesting e carreira em cybersec", tags: ["YouTube", "Career"] },
      { title: "Computerphile", url: "https://www.youtube.com/@Computerphile", description: "Conceitos de computação e segurança", tags: ["YouTube", "Teoria"] },
    ],
  },
];

const Cheatsheet = () => {
  const [activeCategory, setActiveCategory] = useState("tools");
  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="noise-overlay" aria-hidden="true" />

      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <Link to="/" className="font-display text-lg font-extrabold tracking-tight">
            João <span className="text-primary">Drummond</span>
          </Link>
          <div className="font-mono text-xs text-text-dim tracking-[2px] uppercase">
            // Cheatsheet
          </div>
        </div>
      </header>

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Title */}
        <div className="mb-16">
          <div className="font-mono text-xs tracking-[3px] text-accent-brand uppercase mb-3 flex items-center gap-2.5">
            <span className="text-text-dim">//</span> Recursos Curados
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-none mb-4">
            <DecryptedText
              text="Security Cheatsheet"
              speed={35}
              maxIterations={10}
              sequential
              animateOn="view"
              className="text-foreground"
              encryptedClassName="text-primary/30"
            />
          </h1>
          <p className="text-base text-muted-foreground max-w-[560px] leading-relaxed font-light">
            Coleção pessoal de ferramentas, cursos, materiais de estudo e canais relevantes para segurança ofensiva e pesquisa.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-mono text-sm px-5 py-2.5 rounded-sm border transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCategory.resources.map((resource) => (
            <SpotlightCard
              key={resource.title}
              className="group"
              spotlightColor="rgba(168, 130, 255, 0.1)"
            >
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-7 h-full"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.6em] px-2 py-0.5 border border-border-strong text-text-dim bg-primary-dim rounded-sm tracking-wide uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {resource.description}
                </p>
                <div className="mt-4 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Abrir →
                </div>
              </a>
            </SpotlightCard>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-20 pt-8 border-t border-border">
          <Link
            to="/"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Voltar ao portfólio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cheatsheet;
