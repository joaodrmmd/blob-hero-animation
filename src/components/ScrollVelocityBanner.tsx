import ScrollVelocity from "./effects/ScrollVelocity";

const ScrollVelocityBanner = () => (
  <div className="border-y border-border bg-card/50 py-6 overflow-hidden">
    <ScrollVelocity
      texts={[
        <span className="mx-8 font-display text-xl font-bold text-foreground/10 uppercase tracking-[6px]">
          Offensive Security
        </span>,
        <span className="mx-8 font-display text-xl font-bold text-primary/15 uppercase tracking-[6px]">
          Threat Intelligence
        </span>,
        <span className="mx-8 font-display text-xl font-bold text-foreground/10 uppercase tracking-[6px]">
          Malware Analysis
        </span>,
        <span className="mx-8 font-display text-xl font-bold text-accent-brand/15 uppercase tracking-[6px]">
          OSINT Research
        </span>,
      ]}
      velocity={40}
      numCopies={8}
    />
  </div>
);

export default ScrollVelocityBanner;
