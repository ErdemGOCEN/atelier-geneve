import { Link } from "react-router";

const links = [
  { name: "Accueil", link: "/#accueil" },
  { name: "Services", link: "/#services" },
  { name: "Tarifs", link: "/#tarifs" },
  { name: "À propos", link: "/#a-propos" },
  { name: "Contact", link: "/#contact" },
];

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // py-12'den py-8'e düşürerek yüksekliği dengeledik
    <footer className="py-8 bg-slate-50 border-t mt-auto">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Üç sütunlu yapı korunuyor ama gap ve marginler azaltıldı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center md:text-left">
          
          {/* 1. Bölüm: Marka */}
          <div className="space-y-2">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition"
              aria-label="Retour en haut"
            >
              <img src="/logo.png" alt="Atelier Genève" className="h-8 w-auto" />
              <span className="font-sans text-black text-lg font-bold tracking-tight">
                ATELIER GENÈVE
              </span>
            </button>
            <p className="text-xs text-muted-foreground leading-snug max-w-xs mx-auto md:mx-0">
              Expertise informatique de proximité à Genève. Réparation rapide et durable.
            </p>
          </div>

          {/* 2. Bölüm: İletişim */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest">Contact</h3>
            <address className="not-italic space-y-1">
              <a
                href="https://maps.google.com/?q=Bd+du+Pont-d'Arve+40,+1205+Genève"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-primary flex items-center justify-center md:justify-start gap-2 transition"
              >
                📍 Bd du Pont-d'Arve 40, Genève
              </a>
              <a
                href="tel:+41772094090"
                className="text-primary font-bold text-base hover:underline flex items-center justify-center md:justify-start gap-2 transition"
              >
                📞 077 209 40 90
              </a>
            </address>
          </div>

          {/* 3. Bölüm: Menü */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest">Navigation</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="text-muted-foreground hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Alt Kısım - mt-12'den mt-8'e çekildi */}
        <div className="mt-8 pt-4 border-t border-slate-200 text-center">
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Atelier Genève. Service professionnel de dépannage informatique.
          </p>
        </div>

      </div>
    </footer>
  );
}