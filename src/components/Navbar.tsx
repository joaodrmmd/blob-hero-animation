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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300 rounded-full w-[95%] md:w-max ${
        scrolled
          ? "glass-nav shadow-[0_8px_32px_hsl(0_0%_0%/0.5)] border border-white/10 bg-black/50 backdrop-blur-md"
          : "bg-transparent border border-transparent"
      }`}
    >
      <div className="px-6 md:px-8 py-3 flex items-center justify-between gap-6 md:gap-12 w-full">
        <a href="#" className="font-display text-lg font-bold tracking-tight shrink-0">
          João <span className="text-primary">D.</span>
        </a>
        <ul className="hidden md:flex gap-2 list-none m-0 p-0">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-6 text-sm rounded-full">
          Contato
        </a>
        <div className="md:hidden">
          <StaggeredMenu items={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;