import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const WORDS = ["EXPLOIT", "BREACH", "INFILTRATE", "OVERRIDE", "EXECUTE"];
const FINAL_WORD = "EXECUTE";

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<"words" | "zoom" | "exit">("words");
  const [currentWord, setCurrentWord] = useState(WORDS[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [isFinalLock, setIsFinalLock] = useState(false);

  useEffect(() => {
    if (phase !== "words") return;

    let tick = 0;
    const maxTicks = 15; // Quantidade de vezes que as palavras vão piscar/embaralhar
    const speed = 100; // Velocidade da troca em milissegundos

    const interval = setInterval(() => {
      tick++;
      
      if (tick >= maxTicks) {
        clearInterval(interval);
        setCurrentWord(FINAL_WORD);
        setWordIdx(WORDS.length - 1);
        setIsFinalLock(true);

        // Pausa na palavra final antes de dar o zoom
        setTimeout(() => {
          setPhase("zoom");

          // Aguarda a animação de zoom terminar antes de iniciar o exit
          setTimeout(() => {
            setPhase("exit");
            sessionStorage.setItem("preloaded", "1");
          }, 900);
        }, 600);
      } else {
        // Escolhe uma palavra aleatória para criar o efeito de embaralhamento rápido
        const randomIndex = Math.floor(Math.random() * WORDS.length);
        setCurrentWord(WORDS[randomIndex]);
        setWordIdx(randomIndex);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {/* AQUI ESTÁ A CORREÇÃO DO BUG: O componente precisa sumir para o exit ser ativado */}
      {phase !== "exit" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "hsl(0 0% 2%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeIn" }}
        >
          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none z-20 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 0%) 2px, hsl(0 0% 0%) 4px)",
            }}
          />

          {/* Corner blueprint marks */}
          <div
            className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 pointer-events-none"
            style={{ borderColor: "hsl(269 73% 47% / 0.3)" }}
          />
          <div
            className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 pointer-events-none"
            style={{ borderColor: "hsl(269 73% 47% / 0.3)" }}
          />
          <div
            className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 pointer-events-none"
            style={{ borderColor: "hsl(269 73% 47% / 0.3)" }}
          />
          <div
            className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 pointer-events-none"
            style={{ borderColor: "hsl(269 73% 47% / 0.3)" }}
          />

          {/* Logo top-left */}
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 font-display font-bold text-sm tracking-tight z-10"
            style={{ color: "hsl(20 67% 97% / 0.5)" }}
          >
            João <span style={{ color: "hsl(269 73% 47%)" }}>D.</span>
          </div>

          {/* ── Words phase ── */}
          {phase === "words" && (
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)" }}
              >
                <span
                  className="font-display font-black tracking-[-0.04em] select-none"
                  style={{
                    color: isFinalLock ? "hsl(20 67% 97%)" : "hsl(269 73% 72%)",
                    textShadow: isFinalLock
                      ? "0 0 60px hsl(20 67% 97% / 0.4)"
                      : "0 0 30px hsl(269 73% 60% / 0.5)",
                    fontFamily: "'Space Grotesk', sans-serif",
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
              style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)" }}
            >
              <span
                className="font-display font-black tracking-[-0.04em] select-none"
                style={{
                  color: "hsl(20 67% 97%)",
                  textShadow: "0 0 80px hsl(20 67% 97% / 0.5)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                {FINAL_WORD}
              </span>
            </motion.div>
          )}

          {/* Status bar bottom */}
          <div
            className="absolute bottom-8 left-8 right-8 flex items-center justify-between"
            style={{ opacity: phase === "zoom" ? 0 : 1, transition: "opacity 0.2s" }}
          >
            <span
              className="font-mono text-[10px] tracking-[0.25em] uppercase"
              style={{ color: "hsl(269 73% 47% / 0.5)" }}
            >
              {wordIdx + 1} / {WORDS.length}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "hsl(20 67% 97% / 0.2)" }}
            >
              Security · Intelligence · Research
            </span>
            <span className="font-mono text-[10px]" style={{ color: "hsl(20 67% 97% / 0.2)" }}>
              {new Date().getFullYear()}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;