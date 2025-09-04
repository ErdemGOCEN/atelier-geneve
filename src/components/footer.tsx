import { Link } from "react-router";

const links = [
  {
    name: "Accueil",
    link: "/#hero",
  },
  {
    name: "Services",
    link: "/#what-we-offer",
  },
  {
    name: "Projets",
    link: "/#pourquoi-nous-choisir",
  },
  {
    name: "À propos",
    link: "/#a-propos",
  },
  {
    name: "Contact",
    link: "/#support",
  },
];

export default function Footer() {
  return (
    <footer className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo ve Başlık */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Retour à l'accueil"
          className="mx-auto flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-center"
        >
          <img
            src="/logo.png"
            alt="Logo Atelier Genève"
            className="h-10 w-auto" // Mobilde oran korunur, genişlik otomatik
          />
          <div className="flex flex-col">
            <h1 className="font-sans text-black text-lg font-bold">
              ATELIER GENÈVE
            </h1>
          </div>
        </a>

        {/* Menü Linkleri */}
        <div className="my-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="text-muted-foreground hover:text-primary block px-2 py-1 rounded duration-150"
              aria-label={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Sosyal Medya (Gelecekte açılabilir) */}
        {/* <div className="my-8 flex justify-center gap-6 text-sm">
          <Link to="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-muted-foreground hover:text-primary block p-1">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path></svg>
          </Link>
          [Diğer sosyal medya ikonları buraya]
        </div> */}

        {/* Telif Hakkı */}
        <span className="text-muted-foreground block text-center text-sm mt-6">
          © {new Date().getFullYear()} Atelier Genève, Tous droits réservés
        </span>
      </div>
    </footer>
  );
}