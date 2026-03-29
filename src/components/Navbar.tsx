import { useEffect, useState } from "react";

const navLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Projetos", href: "#projects" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > lastY + 6 && y > 200) setHidden(true);
      else if (y < lastY - 6 || y < 60) setHidden(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 border-b border-transparent ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-border" : ""
      } ${hidden ? "-translate-y-full" : ""}`}
    >
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-5 flex items-center">
        <a href="#" className="font-display text-lg font-extrabold tracking-tight shrink-0">
          João <span className="text-primary">Drummond</span>
        </a>
        <ul className="hidden md:flex gap-9 list-none mx-auto">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="shrink-0" />
      </div>
    </nav>
  );
};

export default Navbar;
