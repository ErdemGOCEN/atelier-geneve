import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import Image from "@/components/ui/image-with-fallback";

export default function WhoWeAre() {
  return (
    <section id="who-we-are">
      <div className="px-4 md:px-6 container mx-auto pt-12 pb-12 lg:pb-36 lg:pt-56 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4 text-center lg:text-left">
      
          <h2 className="text-5xl font-bold text-balance">
            Votre expert en réparation informatique à Genève
          </h2>
          <p className="text-muted-foreground text-balance">
            Atelier Genève est votre partenaire de confiance pour tous vos besoins informatiques. Nos techniciens certifiés interviennent rapidement pour réparer vos ordinateurs, installer vos systèmes d'exploitation, protéger vos données et assurer la maintenance de vos équipements. Avec plus de 8 ans d'expérience à Genève, nous garantissons un service professionnel et fiable pour particuliers et professionnels.
          </p>

          <Link
            to="#"
            className={cn(buttonVariants({ variant: "green" }), "rounded-full")}
          >
            En Savoir Plus
          </Link>
        </div>
        <div className="rounded-md overflow-hidden relative shadow-sm">
          <Image src={"/glad-customer.webp"} alt="client satisfait Atelier Genève" />

          <div className="absolute top-0 right-0 bg-white flex flex-col items-center justify-center p-4">
            <p className="text-sky-blue text-4xl font-bold">4.8</p>
            <p className="text-muted-foreground text-sm font-semibold">
              Note Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}