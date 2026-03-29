import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

interface ScrollVelocityProps {
  texts?: ReactNode[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
}

function ScrollVelocityInner({
  texts = ["React Bits"],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
}: ScrollVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);
  const prevT = useRef(0);

  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;
    const timeFactor = (t - prevT.current) / 1000;
    prevT.current = t;

    let moveBy = directionFactor.current * velocity * timeFactor;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const [wrapWidth, setWrapWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const child = containerRef.current.children[0] as HTMLElement;
        if (child) setWrapWidth(child.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [texts, numCopies]);

  const x = useTransform(baseX, (v) => {
    if (!wrapWidth) return "0px";
    return `${((v % wrapWidth) + wrapWidth) % wrapWidth - wrapWidth}px`;
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div ref={containerRef} className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {Array.from({ length: numCopies }).map((_, copyIdx) => (
          <div key={copyIdx} className="flex-shrink-0 flex items-center">
            {texts.map((text, i) => (
              <span key={`${copyIdx}-${i}`} className={className}>
                {text}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const ScrollVelocity = (props: ScrollVelocityProps) => <ScrollVelocityInner {...props} />;

export default ScrollVelocity;
