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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-2 left-2 right-2 z-[1000] transition-all duration-300 rounded-xl ${
        scrolled
          ? "glass-nav shadow-[0_8px_32px_hsl(0_0%_0%/0.5)]"
          : "bg-transparent border border-transparent"
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-5 md:px-7 py-3.5 flex items-center">
        <a href="#" className="font-display text-lg font-bold tracking-tight shrink-0">
          João <span className="text-primary">D.</span>
        </a>
        <ul className="hidden md:flex gap-1 list-none mx-auto">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-glass-highlight transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
          Contato
        </a>
        <div className="ml-auto md:hidden">
          <StaggeredMenu items={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;