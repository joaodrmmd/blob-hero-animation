import DitherBackground from "./effects/DitherBackground";
import DecryptedText from "./effects/DecryptedText";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-32 pb-24 overflow-hidden">
    {/* Dither Background — white/silver diagonal streak */}
    <DitherBackground
      waveColor={[0.95, 0.97, 1.0]}
      waveSpeed={0.02}
      waveFrequency={2.5}
      waveAmplitude={0.35}
      colorNum={3}
      pixelSize={2}
    />
    {/* Gradient overlays for readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-[1]" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-[1]" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-[1]" />

    {/* Grid lines */}
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[hsl(0_0%_100%/0.03)]" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[hsl(0_0%_100%/0.03)]" />
      <div className="absolute top-[15%] left-0 right-0 h-px bg-[hsl(0_0%_100%/0.03)]" />
      <div className="absolute bottom-[15%] left-0 right-0 h-px bg-[hsl(0_0%_100%/0.03)]" />
    </div>

    <div className="relative z-10 max-w-[680px]">
      {/* Status badge */}
      <div className="hero-rise mb-8" style={{ animationDelay: "0.15s" }}>
        <div className="glass-card inline-flex items-center gap-3 px-5 py-2.5">
          <span
            className="w-2 h-2 rounded-full bg-green"
            style={{ animation: "ey-pulse 2.5s ease infinite", boxShadow: "0 0 10px hsl(var(--green))" }}
          />
          <span className="font-mono text-xs tracking-wide text-muted-foreground">
            Disponível para consultorias — <strong className="text-primary font-medium">Recife, PE</strong>
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1
        className="hero-rise font-display font-bold leading-[0.95] tracking-tight mb-8"
        style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", animationDelay: "0.35s" }}
      >
        <span className="block text-foreground">
          <DecryptedText
            text="Threat Intel"
            speed={40}
            maxIterations={8}
            sequential
            animateOn="view"
            className="text-foreground"
            encryptedClassName="text-primary/40"
          />
        </span>
        <span className="block text-primary">
          <DecryptedText
            text="& Offensive"
            speed={40}
            maxIterations={8}
            sequential
            animateOn="view"
            className="text-primary"
            encryptedClassName="text-primary/30"
          />
        </span>
        <span className="block text-muted-foreground font-sans font-light italic mt-3 tracking-normal" style={{ fontSize: "0.4em" }}>
          Security Research
        </span>
      </h1>

      {/* Bio */}
      <p className="hero-rise text-base text-muted-foreground leading-relaxed max-w-[480px] mb-10 font-light" style={{ animationDelay: "0.55s" }}>
        Graduando em Eng. de Software e Eng. de Telecom. Professor Auxiliar de Segurança Ofensiva na UFPE e Fundador da Security BSides Recife.
      </p>

      {/* CTAs */}
      <div className="hero-rise flex gap-3 flex-wrap" style={{ animationDelay: "0.75s" }}>
        <a href="#contact" className="btn-primary">
          Entre em Contato
        </a>
        <a href="#projects" className="btn-ghost">
          Ver Projetos
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
