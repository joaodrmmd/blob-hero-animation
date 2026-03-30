import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface BorderGlowProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
}

const BorderGlow = ({
  children,
  className = "",
  glowColor = "170 80 55",
  backgroundColor = "transparent",
  borderRadius = 16,
  glowRadius = 40,
  glowIntensity = 0.8,
}: BorderGlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const [h, s, l] = glowColor.split(" ").map(Number);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius }}
    >
      <div
        className="absolute -inset-px transition-opacity duration-300 pointer-events-none"
        style={{
          borderRadius: borderRadius + 1,
          opacity: isHovered ? glowIntensity : 0,
          background: `radial-gradient(${glowRadius * 8}px circle at ${mousePos.x}px ${mousePos.y}px, hsl(${h}, ${s}%, ${l}%), hsl(${h}, ${s}%, ${l}%, 0.3) 40%, transparent 70%)`,
        }}
      />
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius,
          background: backgroundColor,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
