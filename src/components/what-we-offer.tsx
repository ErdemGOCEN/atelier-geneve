import {
  CardFooter,
} from "@/components/ui/card";
import {
  Laptop,
  Monitor,
  ShieldCheck,
  RefreshCw,
  Wifi,
  HardDrive,
} from "lucide-react";
import { Check } from "lucide-react";
import WhatsAppLink from "./whatsapp-link";

const allServices = [
  {
    id: "1",
    icon: <Monitor className="mx-auto size-8 sm:size-10 text-white" />,
    title: "Installation Système d'Exploitation",
    description: "Installation complète de Windows, macOS ou Linux sur votre ordinateur.",
    features: [
      "Installation de Windows 10/11",
      "Installation de macOS (sur Mac compatible)",
      "Installation de distributions Linux (Ubuntu, Fedora, etc.)",
      "Configuration initiale du système"
    ]
  },
  {
    id: "2",
    icon: <ShieldCheck className="mx-auto size-8 sm:size-10 text-white" />,
    title: "Installation et Configuration Antivirus",
    description: "Protection de votre système contre les logiciels malveillants.",
    features: [
      "Installation d'antivirus performant",
      "Configuration des paramètres de sécurité",
      "Mise à jour des bases de données virales",
      "Analyse initiale complète du système"
    ]
  },
  {
    id: "3",
    icon: <RefreshCw className="mx-auto size-8 sm:size-10 text-white" />,
    title: "Mises à Jour Système & Logiciels",
    description: "Gardez votre système et vos logiciels à jour pour plus de sécurité et de performance.",
    features: [
      "Mise à jour du système d'exploitation",
      "Mise à jour des logiciels installés",
      "Installation des derniers correctifs de sécurité",
      "Optimisation post-mise à jour"
    ]
  },
  {
    id: "4",
    icon: <Laptop className="mx-auto size-8 sm:size-10 text-white" />,
    title: "Réparation d'Ordinateurs",
    description: "Diagnostic et réparation de vos ordinateurs (PC & Mac) en cas de panne.",
    features: [
      "Diagnostic matériel et logiciel",
      "Réparation ou remplacement de composants",
      "Récupération de données (si possible)",
      "Tests de performance post-réparation"
    ]
  },
  {
    id: "5",
    icon: <HardDrive className="mx-auto size-8 sm:size-10 text-white" />,
    title: "Récupération de Données",
    description: "Récupération sécurisée de vos données perdues ou supprimées.",
    features: [
      "Récupération à partir de disques durs endommagés",
      "Récupération de fichiers supprimés",
      "Service de sauvegarde de données",
      "Cryptage sécurisé des données"
    ]
  },
  {
    id: "6",
    icon: <Wifi className="mx-auto size-8 sm:size-10 text-white" />,
    title: "Configuration Réseau & Internet",
    description: "Configuration de votre réseau local et connexion internet.",
    features: [
      "Configuration de routeurs et modems",
      "Installation de réseau Wi-Fi sécurisé",
      "Dépannage de connexion internet",
      "Partage de ressources réseau"
    ]
  }
];

export default function WhatWeOffer() {
  return (
    <section 
      id="what-we-offer"
      aria-labelledby="services-heading"
    >
      <div className="px-4 md:px-6 container mx-auto py-8 sm:py-12 lg:pt-24 lg:pb-12">
        {/* Hero Section */}
        <div className="text-center pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
          <div>
            <h2 
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Nos <span className="text-sky-blue">Services Informatiques</span> à Genève
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Des solutions informatiques rapides et fiables pour particuliers et professionnels à Genève
            </p>
          </div>
        </div>

        {/* Tous les Services */}
        <div className="mb-8 sm:mb-12">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                itemScope
                itemType="http://schema.org/Service"
              >
                <div className="bg-gradient-to-r from-sky-blue to-blue-600 p-4 text-white flex-shrink-0 h-32 sm:h-36 flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-2">
                    {service.icon}
                  </div>
                  <h3 
                    className="text-base sm:text-lg font-bold mb-1 text-center leading-tight"
                    itemProp="name"
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="p-4 sm:p-5 flex-grow flex flex-col">
                  <p 
                    className="text-xs sm:text-sm text-gray-600 mb-3 text-center"
                    itemProp="description"
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2 flex-grow mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5 mr-2">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700 text-xs sm:text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <CardFooter className="justify-center p-0">
                    <WhatsAppLink />
                  </CardFooter>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}