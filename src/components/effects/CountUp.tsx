import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

const CountUp = ({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const [hasStarted, setHasStarted] = useState(false);

  const motionValue = useMotionValue(direction === "down" ? to : from);
  const damping = 20 + 40 / duration;
  const stiffness = 100 * (2 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });

  useEffect(() => {
    if (inView && startWhen && !hasStarted) {
      const timeout = setTimeout(() => {
        setHasStarted(true);
        onStart?.();
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView, startWhen, hasStarted, delay, motionValue, direction, from, to, onStart]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const value = Math.round(latest);
        ref.current.textContent = separator
          ? value.toLocaleString("en-US").replace(/,/g, separator)
          : String(value);

        if (
          hasStarted &&
          ((direction === "up" && value >= to) ||
            (direction === "down" && value <= from))
        ) {
          onEnd?.();
        }
      }
    });
    return unsubscribe;
  }, [springValue, separator, direction, from, to, hasStarted, onEnd]);

  return (
    <span ref={ref} className={className}>
      {direction === "down" ? to : from}
    </span>
  );
};

export default CountUp;
