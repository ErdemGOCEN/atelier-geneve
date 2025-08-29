import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  AppWindow,
  Component,
  DatabaseBackup,
  Laptop,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";
import { buttonVariants } from "./ui/button";

const offers = [
  {
    id: "1",
    icon: <Laptop className="mx-auto size-10 text-sky-blue" />,
    title: "Réparation Portables",
    content:
      "Diagnostic complet et réparation de vos ordinateurs portables. Remplacement d'écrans, claviers, batteries et composants défectueux.",
  },
  {
    id: "2",
    icon: <Monitor className="mx-auto size-10 text-sky-blue" />,
    title: "PC de Bureau",
    content:
      "Assemblage, optimisation et réparation de vos ordinateurs de bureau. Mise à jour matérielle et nettoyage professionnel.",
  },
  {
    id: "3",
    icon: <AppWindow className="mx-auto size-10 text-sky-blue" />,
    title: "Logiciels",
    content:
      "Installation et configuration de systèmes d'exploitation, logiciels professionnels, et optimisation des performances.",
  },
  {
    id: "4",
    icon: <DatabaseBackup className="mx-auto size-10 text-sky-blue" />,
    title: "Sauvegarde Données",
    content:
      "Récupération et sauvegarde de vos données importantes. Protection contre les pertes de fichiers et récupération d'urgence.",
  },
  {
    id: "5",
    icon: <ShieldCheck className="mx-auto size-10 text-sky-blue" />,
    title: "Antivirus",
    content:
      "Installation d'antivirus professionnels, nettoyage de virus et protection contre les logiciels malveillants.",
  },
  {
    id: "6",
    icon: <Component className="mx-auto size-10 text-sky-blue" />,
    title: "Pièces Détachées",
    content:
      "Fourniture et remplacement de pièces détachées d'origine. Écran, disque dur, RAM et autres composants disponibles.",
  },
];

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

export default function WhatWeOffer() {
  return (
    <section id="what-we-offer">
      <div className="px-4 md:px-6 container mx-auto py-12 lg:py-36">
        <div className="space-y-4 text-center mb-12">
          <p className="text-muted-foreground">Nos services</p>
          <h2 className="text-5xl font-bold text-balance w-full lg:w-1/2 mx-auto">
            Nous réparons ordinateurs & serveurs professionnels
          </h2>
        </div>

        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {offers.map((offer) => (
            <Card key={offer.id} className="shadow-lg">
              <CardHeader className="text-center gap-4">
                {offer.icon}
                <CardTitle>{offer.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">{offer.content}</CardContent>
              <CardFooter className="justify-center">
                <a
                  href="https://wa.me/41772094090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "green" }),
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
      </div>
    </section>
  );
}