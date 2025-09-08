import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

// GSAP eklentilerini kaydet
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// Menü öğeleri
const navItems = [
  { name: "Accueil", link: "/#hero" },
  { name: "Services", link: "/#what-we-offer" },
  { name: "À propos", link: "/#a-propos" },
  { name: "Projets", link: "/#pourquoi-nous-choisir" },
  { name: "Contact", link: "/#support" },
];

export default function Header() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const menuRef = useRef<HTMLDivElement>(null); // Menü içi
  const animation = useRef<gsap.core.Timeline | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // GSAP Scroll Efekti
  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      const headerHeight = header.offsetHeight;

      if (animation.current) animation.current.kill();
      animation.current = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: `+=${headerHeight}`,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(header, {
              backgroundColor: `rgba(0, 0, 0, ${progress * 0.3})`,
              backdropFilter: `blur(${progress * 10}px)`,
              duration: 0.1,
              ease: "power2.out",
            });
          },
        },
      });
    },
    { scope: headerRef }
  );

  // Boşluğa tıklayınca menüyü kapat (mousedown + touchstart)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      }}
      ref={headerRef}
    >
      {/* Masaüstü Menü (lg ve üzeri) */}
      <div className="hidden lg:block">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
          <a
            href="/"
            className="mr-8 flex items-center space-x-3 text-white"
          >
            <img
              src="/logo.png"
              alt="ATELIER GENÈVE - Design d'intérieur à Genève"
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="font-sans text-lg font-bold">ATELIER GENÈVE</h1>
            </div>
          </a>

          <nav className="ml-auto flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="text-white hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobil Menü (lg altı) */}
      <div className="block lg:hidden">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a
            href="/"
            className="flex items-center space-x-3 text-white"
          >
            <img
              src="/logo.png"
              alt="ATELIER GENÈVE - Design d'intérieur à Genève"
              className="h-9 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="font-sans text-base font-bold">ATELIER GENÈVE</h1>
            </div>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Açılır Menü + Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          >
            <div
              ref={menuRef}
              className="bg-black/50 backdrop-blur-lg 
                        border-t border-white/25 
                        text-white 
                        px-6 py-5 
                        space-y-4 
                        text-center 
                        text-lg 
                        font-medium
                        shadow-xl
                        max-w-5xl 
                        mx-auto"
            >
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="block 
                            hover:bg-white/35 
                            hover:rounded-lg 
                            transition-all 
                            duration-200 
                            py-3 
                            px-5 
                            rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}