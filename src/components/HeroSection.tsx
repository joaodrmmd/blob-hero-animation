import DitherBackground from "./effects/DitherBackground";
import DecryptedText from "./effects/DecryptedText";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
    {/* Dither Background with gradient overlay */}
    <DitherBackground
      waveColor={[0.35, 0.15, 0.55]}
      waveSpeed={0.025}
      waveFrequency={2.5}
      waveAmplitude={0.35}
      colorNum={4}
      pixelSize={3}
    />
    {/* Gradient overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-[1]" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-[1]" />

    <div className="relative z-10 max-w-[660px]">
      {/* Eyebrow */}
      <div className="hero-rise inline-flex items-center gap-2.5 mb-8" style={{ animationDelay: "0.2s" }}>
        <span
          className="w-[7px] h-[7px] rounded-full bg-green"
          style={{ animation: "ey-pulse 2.5s ease infinite", boxShadow: "0 0 10px hsl(var(--green))" }}
        />
        <span className="font-mono text-xs tracking-[2.5px] uppercase text-muted-foreground">
          Disponível para consultorias — <strong className="text-accent-brand font-medium">Recife, PE</strong>
        </span>
      </div>

      {/* Heading with DecryptedText */}
      <h1
        className="hero-rise font-display font-extrabold leading-none tracking-[-3px] mb-7"
        style={{ fontSize: "clamp(3em, 6.5vw, 5.6em)", animationDelay: "0.4s" }}
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
        <span className="block font-sans font-normal italic text-muted-foreground mt-2.5 tracking-normal" style={{ fontSize: "0.5em" }}>
          Security Research
        </span>
      </h1>

      {/* Bio */}
      <p className="hero-rise text-base text-muted-foreground leading-relaxed max-w-[500px] mb-12 font-light" style={{ animationDelay: "0.6s" }}>
        Graduando em Eng. de Software e Eng. de Telecom. Professor Auxiliar de Segurança Ofensiva na UFPE e Fundador da Security BSides Recife.
      </p>

      {/* CTAs */}
      <div className="hero-rise flex gap-4 flex-wrap" style={{ animationDelay: "0.8s" }}>
        <a
          href="#contact"
          className="glitch-btn px-9 py-4 bg-primary text-primary-foreground hover:shadow-[0_10px_40px_hsl(var(--primary-glow))]"
        >
          Entre em Contato
        </a>
        <a
          href="#projects"
          className="glitch-btn px-8 py-3.5 border border-border-strong text-muted-foreground font-semibold hover:border-primary hover:text-foreground"
        >
          Ver Projetos
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
