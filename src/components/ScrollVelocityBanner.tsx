import ScrollVelocity from "./effects/ScrollVelocity";

const ScrollVelocityBanner = () => (
  <div className="py-8 overflow-hidden opacity-30">
    <ScrollVelocity
      texts={[
        <span className="mx-10 font-display text-2xl font-bold text-foreground/20 uppercase tracking-[8px]">
          Offensive Security
        </span>,
        <span className="mx-10 font-display text-2xl font-bold text-primary/20 uppercase tracking-[8px]">
          Threat Intelligence
        </span>,
        <span className="mx-10 font-display text-2xl font-bold text-foreground/20 uppercase tracking-[8px]">
          Malware Analysis
        </span>,
        <span className="mx-10 font-display text-2xl font-bold text-accent-brand/20 uppercase tracking-[8px]">
          OSINT Research
        </span>,
      ]}
      velocity={40}
      numCopies={8}
    />
  </div>
);

export default ScrollVelocityBanner;
