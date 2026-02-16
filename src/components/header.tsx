import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const navItems = [
  { name: "Accueil", link: "/#accueil" },
  { name: "Services", link: "/#services" },
  { name: "Tarifs", link: "/#tarifs" },
  { name: "À propos", link: "/#a-propos" },
  { name: "Pourquoi nous", link: "/#pourquoi-nous-choisir" },
  { name: "Contact", link: "/#contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null); // Tip düzeltildi: HTMLElement
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // GSAP Scroll Efekti - Daha akıcı hale getirildi
  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.to(header, {
      scrollTrigger: {
        trigger: "body",
        start: "top -50", // Biraz kaydırınca başlasın
        end: "top -200",
        scrub: true,
      },
      backgroundColor: "rgba(0, 0, 0, 0.7)", // 0.3 çok şeffaf kalabilir, okunurluk için artırıldı
      backdropFilter: "blur(12px)",
      height: "60px", // Scroll olunca biraz daralması modern bir dokunuştur
      duration: 0.3
    });
  }, { scope: headerRef });

  // Dışarı tıklayınca kapatma
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
      className="fixed top-0 z-50 w-full transition-all duration-300 flex items-center"
      ref={headerRef}
      style={{ height: "72px" }} // İlk yükseklik
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        
        {/* LOGO ALANI */}
        <Link to="/" className="flex items-center space-x-3 text-white group">
          <img
            src="/logo.png"
            // SEO DÜZELTMESİ: İç mimarlık değil, Bilgisayar Tamiri olmalı!
            alt="Atelier Genève - Dépannage Informatique et Réparation PC/Mac"
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            {/* SEO: Footer'da span yapmıştık, burada h1 durabilir ama sayfada başka h1 yoksa! */}
            <span className="font-sans text-xl font-black tracking-tight">ATELIER GENÈVE</span>
          </div>
        </Link>

        {/* MASAÜSTÜ NAVİGASYON */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="text-white/90 hover:text-white transition-colors text-sm font-bold uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="tel:+41772094090"
            className="ml-4 flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
          >
            <Phone size={16} />
            077 209 40 90
          </a>
        </nav>

        {/* MOBİL TETİKLEYİCİ */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBİL MENÜ MODAL */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
          <nav
            ref={menuRef}
            className="absolute top-0 right-0 h-screen w-[80%] max-w-sm bg-zinc-900 p-8 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <span className="font-bold text-white">MENU</span>
              <X className="text-white cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            </div>

            <a
              href="tel:+41772094090"
              className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20"
            >
              <Phone size={20} />
              APPELER
            </a>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="text-white text-xl font-medium py-3 border-b border-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}