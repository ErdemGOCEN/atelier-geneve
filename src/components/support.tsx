import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  FileText,
 
  MessageSquare,
  
  UserPlus,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// WhatsApp logo SVG
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4 mr-2"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.966c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const cards = [
  {
    id: "1",
    icon: <MessageSquare className="mx-auto size-10 text-sky-blue" />,
    title: "Consultation Gratuite",
    content:
      "Contactez notre équipe d'experts pour une évaluation gratuite de votre problème informatique. Obtenez des conseils professionnels et un devis sans engagement à Genève.",
    link: (
      <CardFooter className="justify-center">
        <a
          href="https://wa.me/41772094090"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "green", size: "lg" }),
            "rounded-full flex items-center"
          )}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </CardFooter>
    ),
  },
  {
    id: "2",
    icon: <FileText className="mx-auto size-10 text-sky-blue" />,
    title: "Support par Ticket",
    content:
      "Envoyez-nous un ticket détaillé pour des problèmes complexes. Notre équipe traite votre demande rapidement et vous tient informé de l'avancement à chaque étape.",
    link: (
      <CardFooter className="justify-center">
        <a
          href="https://wa.me/41772094090"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "green", size: "lg" }),
            "rounded-full flex items-center"
          )}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </CardFooter>
    ),
  },
  {
    id: "3",
    icon: <UserPlus className="mx-auto size-10 text-sky-blue" />,
    title: "Support Client",
    content:
      "Besoin d'une assistance immédiate ? Contactez directement notre service client. Notre équipe est disponible pour répondre à toutes vos questions techniques à Genève.",
    link: (
      <CardFooter className="justify-center">
        <a
          href="https://wa.me/41772094090"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "green", size: "lg" }),
            "rounded-full flex items-center"
          )}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </CardFooter>
    ),
  },
];

export default function Support() {
  return (
    <section id="support">
      <div className="py-32 lg:py-48 bg-[url('/notch.webp')] bg-cover bg-no-repeat bg-center relative z-10">
        <div className="bg-gradient-to-b from-sky-blue/70 to-sky-blue/90 absolute inset-0 -z-1" />

        <div className="p-4 md:p-6 container mx-auto space-y-4 text-center lg:text-left">
          <h1 className="text-white text-5xl lg:text-7xl font-bold text-balance lg:w-1/2 text-center lg:text-left z-10">
            Des services de réparation informatique de qualité supérieure à Genève
          </h1>

          <p className="text-sky-100 font-semibold lg:w-1/3 text-center lg:text-left">
            Atelier genève vous offre des solutions informatiques professionnelles avec diagnostic complet, réparation rapide et support technique expert pour tous vos appareils à Genève.
          </p>
        </div>

        <div className="container mx-auto hidden lg:grid lg:grid-cols-3 grid-cols-1 gap-4 absolute left-0 right-0 -bottom-[84px]">
          {cards.map((card) => (
            <Card key={card.id} className="shadow-2xl">
              <CardHeader className="text-center gap-4">
                {card.icon}
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">{card.content}</CardContent>
              {card.link}
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 lg:hidden gap-4 p-4">
        {cards.map((card) => (
          <Card key={card.id} className="shadow-2xl">
            <CardHeader className="text-center gap-4">
              {card.icon}
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">{card.content}</CardContent>
            <CardFooter className="justify-center">
              <a
                href="https://wa.me/41772094090"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "green", size: "lg" }),
                  "rounded-full flex items-center"
                )}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}