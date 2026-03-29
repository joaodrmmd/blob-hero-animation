interface GradualBlurProps {
  position?: "top" | "bottom";
  strength?: number;
  height?: string;
  divCount?: number;
  className?: string;
}

const GradualBlur = ({
  position = "bottom",
  strength = 2,
  height = "6rem",
  divCount = 5,
  className = "",
}: GradualBlurProps) => {
  const layers = Array.from({ length: divCount }, (_, i) => {
    const progress = (i + 1) / divCount;
    const blur = progress * progress * strength * 4;
    const layerOpacity = progress;

    return (
      <div
        key={i}
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          [position]: 0,
          height,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          opacity: layerOpacity,
          maskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, transparent, black)`
              : `linear-gradient(to top, transparent, black)`,
          WebkitMaskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, transparent, black)`
              : `linear-gradient(to top, transparent, black)`,
          zIndex: 1000 + i,
        }}
      />
    );
  });

  return (
    <div className={`fixed left-0 right-0 pointer-events-none ${className}`} style={{ [position]: 0, height, zIndex: 1000 }}>
      {layers}
    </div>
  );
};

export default GradualBlur;
