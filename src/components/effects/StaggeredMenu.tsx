import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

interface MenuItem {
  label: string;
  href: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
  colors?: string[];
  menuButtonColor?: string;
  accentColor?: string;
  position?: "left" | "right";
}

const StaggeredMenu = ({
  items,
  colors = ["hsl(262, 90%, 73%)", "hsl(256, 76%, 60%)"],
  menuButtonColor = "hsl(258, 60%, 95%)",
  accentColor = "hsl(262, 90%, 73%)",
  position = "right",
}: StaggeredMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const layersRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline>();

  const buildTimeline = useCallback(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(overlayRef.current, {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });

    layersRef.current.forEach((layer, i) => {
      tl.to(
        layer,
        {
          [position === "right" ? "x" : "x"]: "0%",
          duration: 0.5,
          ease: "power3.out",
        },
        0.05 * i
      );
    });

    tl.to(
      menuRef.current,
      {
        [position === "right" ? "x" : "x"]: "0%",
        duration: 0.5,
        ease: "power3.out",
      },
      0.1
    );

    itemsRef.current.forEach((item, i) => {
      tl.fromTo(
        item,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        0.2 + 0.06 * i
      );
    });

    return tl;
  }, [position]);

  useEffect(() => {
    tlRef.current = buildTimeline();
    return () => {
      tlRef.current?.kill();
    };
  }, [buildTimeline]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      tlRef.current?.play();
    } else {
      tlRef.current?.reverse();
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 600);
    }
  }, [isOpen]);

  const translateStart = position === "right" ? "100%" : "-100%";

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[1100] flex flex-col gap-1.5 p-2 md:hidden"
        aria-label="Menu"
      >
        <span
          className="block w-6 h-0.5 transition-all duration-300 origin-center"
          style={{
            backgroundColor: menuButtonColor,
            transform: isOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
          }}
        />
        <span
          className="block w-6 h-0.5 transition-all duration-300"
          style={{
            backgroundColor: menuButtonColor,
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-0.5 transition-all duration-300 origin-center"
          style={{
            backgroundColor: menuButtonColor,
            transform: isOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
          }}
        />
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[1050] opacity-0 pointer-events-none"
        onClick={() => setIsOpen(false)}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />

      {/* Color layers */}
      {colors.map((color, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) layersRef.current[i] = el;
          }}
          className="fixed top-0 bottom-0 z-[1060] w-[85%] max-w-[420px]"
          style={{
            [position]: 0,
            backgroundColor: color,
            transform: `translateX(${translateStart})`,
            opacity: 0.3 + i * 0.2,
          }}
        />
      ))}

      {/* Menu panel */}
      <div
        ref={menuRef}
        className="fixed top-0 bottom-0 z-[1070] w-[85%] max-w-[420px] flex flex-col justify-center px-10"
        style={{
          [position]: 0,
          backgroundColor: "hsl(260, 33%, 8%)",
          transform: `translateX(${translateStart})`,
        }}
      >
        <nav className="flex flex-col gap-2">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              onClick={() => setIsOpen(false)}
              className="block text-3xl font-display font-bold tracking-tight py-3 transition-colors opacity-0"
              style={{ color: "hsl(258, 60%, 95%)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "hsl(258, 60%, 95%)")
              }
            >
              <span className="font-mono text-xs text-muted-foreground mr-3">
                0{i + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default StaggeredMenu;
