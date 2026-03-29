import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 7, label: "Projetos de Segurança" },
  { target: 16, label: "Ferramentas Dominadas" },
  { target: 5, label: "Certificações" },
  { target: 1000, label: "Horas de Estudo" },
];

const Counter = ({ target, visible }: { target: number; visible: boolean }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const dur = 1400;
    const t0 = performance.now();
    const frame = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [visible, target]);

  return <>{count}+</>;
};

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
              <Counter target={s.target} visible={visible} />
            </div>
            <div className="font-mono text-xs text-text-dim uppercase tracking-[2px]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
