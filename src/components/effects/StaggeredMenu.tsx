import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

interface MenuItem {
  label: string;
  href: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
}

const StaggeredMenu = ({ items }: StaggeredMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimating = useRef(false);

  const buildTimeline = useCallback(() => {
    if (tlRef.current) {
      tlRef.current.kill();
    }

    const tl = gsap.timeline({ paused: true });

    // Overlay fade
    tl.set(overlayRef.current, { pointerEvents: "auto" });
    tl.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });

    // Layer slides
    layersRef.current.forEach((layer, i) => {
      if (layer) {
        tl.to(
          layer,
          { x: "0%", duration: 0.55, ease: "power3.out" },
          0.04 * i
        );
      }
    });

    // Menu panel
    if (menuRef.current) {
      tl.to(
        menuRef.current,
        { x: "0%", duration: 0.55, ease: "power3.out" },
        0.08
      );
    }

    // Nav items
    const validItems = itemsRef.current.filter(Boolean);
    validItems.forEach((item, i) => {
      if (item) {
        tl.fromTo(
          item,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          0.18 + 0.07 * i
        );
      }
    });

    tlRef.current = tl;
    return tl;
  }, []);

  // Build on mount
  useEffect(() => {
    // Delay to ensure refs are populated
    const t = setTimeout(() => buildTimeline(), 50);
    return () => {
      clearTimeout(t);
      tlRef.current?.kill();
    };
  }, [buildTimeline]);

  const openMenu = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    document.body.style.overflow = "hidden";
    buildTimeline().play().then(() => {
      isAnimating.current = false;
    });
  }, [buildTimeline]);

  const closeMenu = useCallback(() => {
    if (!tlRef.current) return;
    isAnimating.current = true;
    document.body.style.overflow = "";
    tlRef.current.reverse().then(() => {
      isAnimating.current = false;
      gsap.set(overlayRef.current, { pointerEvents: "none" });
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen, openMenu, closeMenu]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleLinkClick = useCallback(
    (href: string) => {
      setIsOpen(false);
      // Give menu time to start closing before scrolling
      setTimeout(() => {
        document.body.style.overflow = "";
        if (href.startsWith("#")) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
    },
    []
  );

  const layerColors = ["hsl(264 73% 30%)", "hsl(264 73% 20%)"];

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[1100] flex flex-col justify-center gap-[5px] p-2"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        <span
          className="block w-6 h-[2px] transition-all duration-300 origin-center rounded-full"
          style={{
            background: "hsl(20 67% 97%)",
            transform: isOpen ? "rotate(45deg) translate(2px, 3.5px)" : "none",
          }}
        />
        <span
          className="block w-6 h-[2px] transition-all duration-300 rounded-full"
          style={{
            background: "hsl(20 67% 97%)",
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scaleX(0)" : "none",
          }}
        />
        <span
          className="block w-6 h-[2px] transition-all duration-300 origin-center rounded-full"
          style={{
            background: "hsl(20 67% 97%)",
            transform: isOpen
              ? "rotate(-45deg) translate(2px, -3.5px)"
              : "none",
          }}
        />
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[1050]"
        onClick={() => setIsOpen(false)}
        style={{
          opacity: 0,
          pointerEvents: "none",
          background: "hsl(0 0% 0% / 0.55)",
        }}
        aria-hidden="true"
      />

      {/* Decorative color layers */}
      {layerColors.map((color, i) => (
        <div
          key={i}
          ref={(el) => { layersRef.current[i] = el; }}
          className="fixed top-0 right-0 bottom-0 z-[1060] w-[85%] max-w-[420px]"
          style={{
            backgroundColor: color,
            transform: "translateX(100%)",
            opacity: 0.4 + i * 0.25,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Main menu panel */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 bottom-0 z-[1070] w-[85%] max-w-[420px] flex flex-col"
        style={{
          background: "hsl(0 0% 3%)",
          transform: "translateX(100%)",
          borderLeft: "1px solid hsl(269 73% 47% / 0.15)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Panel header */}
        <div
          className="flex items-center justify-between px-8 py-6"
          style={{ borderBottom: "1px solid hsl(269 73% 47% / 0.1)" }}
        >
          <span
            className="font-display text-base font-bold"
            style={{ color: "hsl(20 67% 97%)" }}
          >
            João{" "}
            <span style={{ color: "hsl(269 73% 47%)" }}>D.</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg transition-colors"
            style={{ color: "hsl(20 67% 97% / 0.5)" }}
            aria-label="Fechar menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 flex flex-col justify-center px-8 py-6" role="navigation">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              ref={(el) => { itemsRef.current[i] = el; }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="group flex items-center gap-4 py-4 border-b opacity-0 transition-colors"
              style={{
                borderBottomColor: "hsl(269 73% 47% / 0.08)",
                color: "hsl(20 67% 97% / 0.7)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "hsl(20 67% 97%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "hsl(20 67% 97% / 0.7)")
              }
            >
              <span
                className="font-mono text-xs"
                style={{ color: "hsl(269 73% 47%)" }}
              >
                0{i + 1}
              </span>
              <span className="font-display text-2xl font-bold tracking-tight">
                {item.label}
              </span>
              <svg
                className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ))}
        </nav>

        {/* Panel footer */}
        <div
          className="px-8 py-6"
          style={{ borderTop: "1px solid hsl(269 73% 47% / 0.1)" }}
        >
          <a
            href="/cheatsheet"
            className="font-mono text-xs transition-colors"
            style={{ color: "hsl(269 73% 47% / 0.7)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "hsl(269 73% 47%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "hsl(269 73% 47% / 0.7)")
            }
          >
            → Security Cheatsheet
          </a>
          <p
            className="font-mono text-[11px] mt-2"
            style={{ color: "hsl(20 67% 97% / 0.2)" }}
          >
            Recife, PE · Brasil
          </p>
        </div>
      </div>
    </>
  );
};

export default StaggeredMenu;