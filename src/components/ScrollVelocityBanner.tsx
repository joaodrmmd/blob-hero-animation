import { useRef, useEffect } from "react";

/* ── Two crossing diagonal marquee bands ─────────────────────────────────── */

const WORDS_TOP = ["EXPLOIT", "ZERO-DAY", "PENTEST", "EXFILTRATE", "BYPASS", "INFILTRATE", "LATERAL MOVE", "C2 SERVER"];
const WORDS_BOT = ["THREAT INTEL", "OSINT", "MALWARE", "ROOTKIT", "PAYLOAD", "APT", "RED TEAM", "HUNTING", "TAKEDOWN"];

function MarqueeTrack({
  words,
  speed,
  direction,
  primaryColor,
}: {
  words: string[];
  speed: number;
  direction: "left" | "right";
  primaryColor: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    // Como agora estamos repetindo o array 4 vezes, a largura de "um ciclo" é scrollWidth / 4
    const totalW = track.scrollWidth / 4;

    const tick = () => {
      posRef.current += direction === "left" ? -speed : speed;
      if (Math.abs(posRef.current) >= totalW) posRef.current = 0;
      if (track) track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, direction]);

  // Repetindo 4 vezes para cobrir a nova largura extrema de 200vw sem faltar palavra
  const multiplied = [...words, ...words, ...words, ...words];

  return (
    <div ref={trackRef} className="flex items-center whitespace-nowrap will-change-transform">
      {multiplied.map((w, i) => (
        <span key={i} className="flex items-center gap-0">
          <span
            className="font-display font-bold text-xl uppercase tracking-[6px] px-8"
            style={{ color: primaryColor }}
          >
            {w}
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full mx-2 shrink-0"
            style={{ background: i % 2 === 0 ? "hsl(2 93% 55%)" : primaryColor, opacity: 0.6 }}
          />
        </span>
      ))}
    </div>
  );
}

const ScrollVelocityBanner = () => (
  <div
    className="relative overflow-hidden w-full flex items-center justify-center pointer-events-none"
    style={{ 
      height: "280px", 
      marginTop: "-60px", 
      marginBottom: "-60px", 
      zIndex: 0 
    }}
    aria-hidden="true"
  >
    {/* ── Top band: tilted -6deg, scrolls left ── */}
    <div
      className="absolute"
      style={{
        left: "-50vw", // Puxa agressivamente pra esquerda
        width: "200vw", // Força o dobro da largura da tela
        transform: "translateY(-60%) rotate(-6deg)", 
        background: "hsl(269 73% 47% / 0.08)",
        borderTop: "1px solid hsl(269 73% 60% / 0.2)",
        borderBottom: "1px solid hsl(269 73% 60% / 0.2)",
        padding: "12px 0",
      }}
    >
      <MarqueeTrack words={WORDS_TOP} speed={0.7} direction="left" primaryColor="hsl(269 73% 75%)" />
    </div>

    {/* ── Bottom band: tilted +6deg, scrolls right ── */}
    <div
      className="absolute"
      style={{
        left: "-50vw", // Puxa agressivamente pra esquerda
        width: "200vw", // Força o dobro da largura da tela
        transform: "translateY(60%) rotate(6deg)", 
        background: "hsl(2 93% 55% / 0.07)",
        borderTop: "1px solid hsl(2 93% 55% / 0.25)",
        borderBottom: "1px solid hsl(2 93% 55% / 0.25)",
        padding: "12px 0",
      }}
    >
      <MarqueeTrack words={WORDS_BOT} speed={0.55} direction="right" primaryColor="hsl(2 93% 70%)" />
    </div>
  </div>
);

export default ScrollVelocityBanner;