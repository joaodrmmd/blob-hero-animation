import { useRef, useState, useEffect } from "react";
import CountUp from "./effects/CountUp";

const stats = [
  { target: 7, label: "Projetos de Segurança" },
  { target: 16, label: "Ferramentas Dominadas" },
  { target: 5, label: "Certificações" },
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
    <div ref={ref} className="border-y border-border bg-card">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="py-12 px-6 md:px-10 border-r border-border last:border-r-0 relative group hover:bg-surface transition-colors"
          >
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-brand scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-display text-5xl font-extrabold text-primary leading-none mb-2 tabular-nums">
              <CountUp to={s.target} duration={1.8} startWhen={visible} separator={s.separator || ""} />
              <span>+</span>
            </div>
            <div className="font-mono text-xs text-text-dim uppercase tracking-[2px]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
