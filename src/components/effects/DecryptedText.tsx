import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "view",
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [hasDecrypted, setHasDecrypted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const availableChars = useOriginalCharsOnly
    ? [...new Set(text.split(""))].filter((c) => c !== " ")
    : chars.split("");

  const getRandomChar = useCallback(
    () => availableChars[Math.floor(Math.random() * availableChars.length)],
    [availableChars]
  );

  const decrypt = useCallback(() => {
    if (isDecrypting) return;
    setIsDecrypting(true);

    if (sequential) {
      let currentIndex = revealDirection === "end" ? text.length - 1 : 0;
      const step = revealDirection === "end" ? -1 : 1;
      let revealed = new Array(text.length).fill(false);

      intervalRef.current = setInterval(() => {
        if (
          (revealDirection === "end" && currentIndex < 0) ||
          (revealDirection !== "end" && currentIndex >= text.length)
        ) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsDecrypting(false);
          setHasDecrypted(true);
          return;
        }

        revealed[currentIndex] = true;
        currentIndex += step;

        setDisplayText(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (revealed[i]) return char;
              return getRandomChar();
            })
            .join("")
        );
      }, speed);
    } else {
      let iteration = 0;
      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return char;
              return getRandomChar();
            })
            .join("")
        );

        iteration += 1 / maxIterations;
        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsDecrypting(false);
          setHasDecrypted(true);
        }
      }, speed);
    }
  }, [text, speed, maxIterations, sequential, revealDirection, getRandomChar, isDecrypting]);

  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasDecrypted) decrypt();
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn, decrypt, hasDecrypted]);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <motion.span
      ref={containerRef}
      className={parentClassName}
      onMouseEnter={animateOn === "hover" ? decrypt : undefined}
    >
      {displayText.split("").map((char, i) => {
        const isRevealed = char === text[i];
        return (
          <span
            key={i}
            className={isRevealed ? className : encryptedClassName}
          >
            {char}
          </span>
        );
      })}
    </motion.span>
  );
};

export default DecryptedText;
