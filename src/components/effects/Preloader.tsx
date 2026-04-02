import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const WORDS = ["4CC3SS1NG...",
    "D3CRYPT1NG...",
    "01001000ACK",
    "C0MP1L1NG...",
    "L04D1NG...",
    "0xD34DB33F",
    "1N1T14T1NG...",
    "S3CUR1NG...",
    "D3BGG1NG...",
    "H4CK1NG...",
    "CYB3RS3CUR1TY...",
    "1NT3LL1G3NC3...",
    "G3TT1NGxRC3...",
    "0xD34DB33F...",
    "1N1T14T1NG...",    
    "L04D1NGxSYST3M..."];
const FINAL_WORD = "C0NN3CT3D";

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<"words" | "zoom" | "exit">("words");
  const [currentWord, setCurrentWord] = useState(WORDS[0]);
  const [isFinalLock, setIsFinalLock] = useState(false);

  useEffect(() => {
    if (phase !== "words") return;

    let tick = 0;
    const maxTicks = 17; // Menos transições já que a velocidade diminuiu
    const speed = 130; // Tempo mais longo (200ms) para permitir a leitura

    const interval = setInterval(() => {
      tick++;
      
      if (tick >= maxTicks) {
        clearInterval(interval);
        setCurrentWord(FINAL_WORD);
        setIsFinalLock(true);

        setTimeout(() => {
          setPhase("zoom");
          setTimeout(() => {
            setPhase("exit");
            sessionStorage.setItem("preloaded", "1");
          }, 900);
        }, 600);
      } else {
        const randomIndex = Math.floor(Math.random() * WORDS.length);
        setCurrentWord(WORDS[randomIndex]);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== "exit" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "hsl(0 0% 2%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeIn" }}
        >
          {/* ── Words phase ── */}
          {phase === "words" && (
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                style={{ fontSize: "clamp(1.6rem, 6.4vw, 4.8rem)" }} // Tamanho reduzido em 20%
              >
                <span
                  className="font-black select-none"
                  style={{
                    color: isFinalLock ? "hsl(20 67% 97%)" : "hsl(269 73% 72%)",
                    textShadow: isFinalLock
                      ? "0 0 60px hsl(20 67% 97% / 0.4)"
                      : "0 0 30px hsl(269 73% 60% / 0.5)",
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {currentWord}
                </span>
              </motion.div>
            </div>
          )}

          {/* ── Final word ZOOM phase ── */}
          {phase === "zoom" && (
            <motion.div
              key="zoom"
              className="flex items-center justify-center"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 22, opacity: 0 }}
              transition={{ duration: 0.85, ease: [0.2, 0, 0.8, 1] }}
              style={{ fontSize: "clamp(1.6rem, 6.4vw, 4.8rem)" }} // Tamanho reduzido em 20%
            >
              <span
                className="font-black select-none"
                style={{
                  color: "hsl(20 67% 97%)",
                  textShadow: "0 0 80px hsl(20 67% 97% / 0.5)",
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: "-0.04em",
                }}
              >
                {FINAL_WORD}
              </span>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;