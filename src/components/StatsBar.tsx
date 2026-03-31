import { useRef, useState, useEffect } from "react";
import CountUp from "./effects/CountUp";

const stats = [
  { target: 7,    label: "Projetos" },
  { target: 16,   label: "Ferramentas" },
  { target: 5,    label: "Certificações" },
  { target: 1000, label: "Horas de Estudo", separator: "." },
];

const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative py-16 px-6 md:px-16 lg:px-24">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto glass-card rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-border"
      >
        {stats.map((s, i) => (
          <div key={i} className="py-10 px-6 md:px-10 text-center group">
            <div className="font-display text-4xl md:text-5xl font-bold text-primary leading-none mb-2 tabular-nums">
              <CountUp to={s.target} duration={1.8} startWhen={visible} separator={s.separator || ""} />
              {/* Racing red "+" with glow shadow */}
              <span
                style={{
                  color: "hsl(var(--accent-brand))",
                  textShadow: "0 0 18px hsl(var(--accent-brand) / 0.6), 0 0 6px hsl(var(--accent-brand) / 0.4)",
                }}
              >
                +
              </span>
            </div>
            <div className="font-mono text-xs text-text-dim uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;