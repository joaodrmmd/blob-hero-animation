import { useRef, useEffect, useCallback } from "react";

interface DitherBackgroundProps {
  className?: string;
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: [number, number, number];
  colorNum?: number;
  pixelSize?: number;
}

const bayerMatrix8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

const DitherBackground = ({
  className = "",
  waveSpeed = 0.03,
  waveFrequency = 2,
  waveAmplitude = 0.3,
  waveColor = [1, 1, 1],
  colorNum = 4,
  pixelSize = 2,
}: DitherBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = Math.ceil(canvas.clientWidth / pixelSize);
    const h = Math.ceil(canvas.clientHeight / pixelSize);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    timeRef.current += waveSpeed;
    const t = timeRef.current;

    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const nx = x / w;
        const ny = y / h;

        // Diagonal streak effect like the reference
        const diagonal = (nx + (1 - ny)) * 0.5;
        const streak = Math.exp(-Math.pow((diagonal - 0.5 + Math.sin(t * 0.3) * 0.05) * 3.5, 2));
        
        const wave = Math.sin(nx * waveFrequency * Math.PI * 2 + t) * waveAmplitude;
        const wave2 = Math.cos(ny * waveFrequency * Math.PI * 1.5 + t * 0.7) * waveAmplitude * 0.5;
        const wave3 = Math.sin((nx + ny) * waveFrequency * Math.PI + t * 1.3) * waveAmplitude * 0.3;
        
        const baseIntensity = (ny + wave + wave2 + wave3) * 0.3 + 0.1;
        const intensity = baseIntensity + streak * 0.7;

        const threshold = bayerMatrix8[y % 8][x % 8] / 64;
        const quantized = Math.floor(intensity * colorNum) / colorNum;
        const dithered = intensity + (threshold - 0.5) / colorNum > quantized + 0.5 / colorNum
          ? Math.min(quantized + 1 / colorNum, 1)
          : quantized;

        const idx = (y * w + x) * 4;
        data[idx] = Math.floor(dithered * waveColor[0] * 255);
        data[idx + 1] = Math.floor(dithered * waveColor[1] * 255);
        data[idx + 2] = Math.floor(dithered * waveColor[2] * 255);
        data[idx + 3] = 255;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    animRef.current = requestAnimationFrame(draw);
  }, [waveSpeed, waveFrequency, waveAmplitude, waveColor, colorNum, pixelSize]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ imageRendering: "pixelated" }}
    />
  );
};

export default DitherBackground;
