import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">
            404
          </h1>

          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
            Page non trouvée
          </p>

          <p className="mb-4 text-lg font-light text-balance">
            Désolé, la page que vous recherchez n'existe pas. Veuillez vérifier l'URL ou retourner à la page d'accueil.
          </p>

          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </section>
  );
}