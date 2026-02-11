import { Link } from "react-router";

const links = [
  { name: "Accueil", link: "/#accueil" },
  { name: "Services", link: "/#services" },
  { name: "Tarifs", link: "/#tarifs" },
  { name: "À propos", link: "/#a-propos" },
  { name: "Pourquoi nous", link: "/#pourquoi-nous-choisir" },
  { name: "Contact", link: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-50 border-t">
      <div className="mx-auto max-w-5xl px-6">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mx-auto flex items-center justify-center gap-3"
        >
          <img src="/logo.png" alt="Logo Atelier Genève" className="h-9 w-auto" />
          <h1 className="font-sans text-black text-lg font-bold">
            ATELIER GENÈVE
          </h1>
        </a>

        {/* Adresse + téléphone */}
        <div className="mt-4 text-center space-y-1">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bd+du+Pont-d'Arve+40,+1205+Genève"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition"
          >
            📍 Bd du Pont-d'Arve 40, 1205 Genève
          </a>

          <div>
            <a
              href="tel:+41772094090"
              className="text-primary font-bold hover:scale-105 transition"
            >
              📞 077 209 40 90
            </a>
          </div>
        </div>

        {/* Menü */}
        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="text-muted-foreground hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Atelier Genève
        </div>

      </div>
    </footer>
  );
}
