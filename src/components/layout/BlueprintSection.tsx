import type { ReactNode } from "react";

interface BlueprintSectionProps {
  children: ReactNode;
  className?: string;
  label?: string;
  id?: string;
}

const BlueprintSection = ({ children, className = "", label, id }: BlueprintSectionProps) => (
  <section id={id} className={`relative ${className}`}>
    {/* Blueprint corner marks */}
    <div className="absolute top-0 left-[5%] w-5 h-5 border-t border-l border-primary/20" />
    <div className="absolute top-0 right-[5%] w-5 h-5 border-t border-r border-primary/20" />
    <div className="absolute bottom-0 left-[5%] w-5 h-5 border-b border-l border-primary/20" />
    <div className="absolute bottom-0 right-[5%] w-5 h-5 border-b border-r border-primary/20" />
    
    {/* Top border line */}
    <div className="absolute top-0 left-[5%] right-[5%] h-px bg-border" />
    
    {/* Section label */}
    {label && (
      <div className="absolute top-0 left-[5%] -translate-y-1/2 bg-background px-3">
        <span className="font-mono text-[10px] tracking-[3px] text-primary/40 uppercase">{label}</span>
      </div>
    )}
    
    {children}
  </section>
);

export default BlueprintSection;
