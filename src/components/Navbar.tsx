import { useEffect, useState } from "react";
import StaggeredMenu from "./effects/StaggeredMenu";

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
      className={`fixed top-4 left-4 right-4 z-[1000] transition-all duration-500 rounded-2xl ${
        scrolled ? "glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""
      } ${hidden ? "-translate-y-[calc(100%+2rem)]" : ""}`}
    >
      <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-4 flex items-center">
        <a href="#" className="font-display text-lg font-bold tracking-tight shrink-0">
          João <span className="text-primary">D.</span>
        </a>
        <ul className="hidden md:flex gap-1 list-none mx-auto">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-xl hover:bg-glass-highlight transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-6 text-sm">
          Contato
        </a>

        {/* Mobile menu */}
        <div className="ml-auto md:hidden">
          <StaggeredMenu items={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
