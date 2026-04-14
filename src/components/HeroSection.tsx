import DitherBackground from "./effects/DitherBackground";
import DecryptedText from "./effects/DecryptedText";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-32 pb-24 overflow-hidden">
    <DitherBackground
      waveColor={[0.40, 0.12, 0.80]}
      waveSpeed={0.016}
      waveFrequency={3.6}
      waveAmplitude={0.92}
      colorNum={5}
      pixelSize={3}
    />
    <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(90deg, hsl(0 0% 3% / 0.94) 0%, hsl(0 0% 3% / 0.72) 36%, hsl(0 0% 3% / 0.15) 65%, transparent 100%)" }} />
    <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none" style={{ background: "linear-gradient(to top, hsl(0 0% 3%) 0%, transparent 100%)" }} />
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      <div className="absolute left-[3%]   top-0 bottom-0 w-px" style={{ background: "hsl(269 73% 60% / 0.09)" }} />
      <div className="absolute left-[21%]  top-0 bottom-0 w-px" style={{ background: "hsl(269 73% 60% / 0.05)" }} />
      <div className="absolute right-[13%] top-0 bottom-0 w-px" style={{ background: "hsl(269 73% 60% / 0.06)" }} />
      <div className="absolute right-[29%] top-0 bottom-0 w-px" style={{ background: "hsl(269 73% 60% / 0.04)" }} />
      <div className="absolute top-[10%]   left-0 right-0 h-px"     style={{ background: "hsl(269 73% 60% / 0.06)" }} />
      <div className="absolute top-[37%]   left-[21%] right-0 h-px" style={{ background: "hsl(269 73% 60% / 0.04)" }} />
      <div className="absolute bottom-[21%] left-0 right-[13%] h-px" style={{ background: "hsl(269 73% 60% / 0.06)" }} />
      <div className="absolute bottom-[7%] left-0 right-0 h-px"     style={{ background: "hsl(269 73% 60% / 0.05)" }} />
      <div className="absolute top-[10%]    left-[3%]   w-7 h-7 border-t-2 border-l-2" style={{ borderColor: "hsl(269 73% 60% / 0.28)" }} />
      <div className="absolute top-[10%]    right-[13%] w-5 h-5 border-t   border-r"   style={{ borderColor: "hsl(269 73% 60% / 0.18)" }} />
      <div className="absolute top-[37%]    right-[13%] w-4 h-4 border-t   border-r"   style={{ borderColor: "hsl(269 73% 60% / 0.16)" }} />
      <div className="absolute bottom-[21%] left-[21%]  w-5 h-5 border-b   border-l"   style={{ borderColor: "hsl(269 73% 60% / 0.22)" }} />
      <div className="absolute bottom-[7%]  right-[29%] w-3 h-3 border-b   border-r"   style={{ borderColor: "hsl(269 73% 60% / 0.14)" }} />
      <span className="absolute top-[10%] left-[3%] translate-y-2.5 translate-x-2.5 font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: "hsl(269 73% 60% / 0.32)" }}>SYS.INIT</span>
      <span className="absolute top-[37%] right-[13%] translate-y-2 -translate-x-16 font-mono text-[9px] tracking-[0.18em] uppercase" style={{ color: "hsl(269 73% 60% / 0.2)" }}>NODE_01</span>
      <span className="absolute bottom-[21%] right-[13%] -translate-y-5 -translate-x-2 text-right font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "hsl(269 73% 60% / 0.18)" }}>REC/PE</span>
    </div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[65%] h-[90%] z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 78% 48%, hsl(269 73% 47% / 0.2) 0%, transparent 65%)" }} />

    <div className="relative z-10 max-w-[680px]">
      <div className="hero-rise mb-8" style={{ animationDelay: "0.15s" }}>
        <div className="glass-card inline-flex items-center gap-3 px-5 py-2.5">
          <span className="w-2 h-2 rounded-full bg-green" style={{ animation: "ey-pulse 2.5s ease infinite", boxShadow: "0 0 10px hsl(var(--green))" }} />
          <span className="font-mono text-xs tracking-wide text-muted-foreground">
            Disponível para consultorias
          </span>
        </div>
      </div>
      <h1 className="hero-rise font-display font-bold leading-[0.95] tracking-tight mb-8" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", animationDelay: "0.35s" }}>
        <span className="block text-foreground">
          <DecryptedText text="Threat Intel" speed={20} maxIterations={8} sequential animateOn="view" className="text-foreground" encryptedClassName="text-primary/40" />
        </span>
        <span className="block text-primary">
          <DecryptedText text="& Offensive" speed={20} maxIterations={8} sequential animateOn="view" className="text-primary" encryptedClassName="text-primary/30" />
        </span>
        <span className="block text-muted-foreground font-sans font-light italic mt-3 tracking-normal" style={{ fontSize: "0.4em" }}>Security Research</span>
      </h1>
      <p className="hero-rise text-base text-muted-foreground leading-relaxed max-w-[480px] mb-10 font-light" style={{ animationDelay: "0.55s" }}>
        Graduando em Eng. de Software e Eng. de Telecom. Professor Auxiliar de Segurança Ofensiva na UFPE e Fundador da Security BSides Recife.
      </p>
      <div className="hero-rise flex gap-3 flex-wrap" style={{ animationDelay: "0.75s" }}>
        <a href="#contact" className="btn-primary">Entre em Contato</a>
        <a href="#projects" className="btn-ghost">Ver Projetos</a>
      </div>
    </div>
  </section>
);

export default HeroSection;