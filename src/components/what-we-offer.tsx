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
  RefreshCw,
  Wifi,
  HardDrive,
} from "lucide-react";
import { Link } from "react-router";
import { buttonVariants } from "./ui/button";
import { Check } from "lucide-react";

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

const allServices = [
  {
    id: "1",
    icon: <Monitor className="mx-auto size-10 text-white" />,
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
    icon: <ShieldCheck className="mx-auto size-10 text-white" />,
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
    icon: <RefreshCw className="mx-auto size-10 text-white" />,
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
    icon: <Laptop className="mx-auto size-10 text-white" />,
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
    icon: <HardDrive className="mx-auto size-10 text-white" />,
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
    icon: <Wifi className="mx-auto size-10 text-white" />,
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
    <section id="what-we-offer">
      <div className="px-4 md:px-6 container mx-auto py-12 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos <span className="text-sky-blue">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions informatiques rapides et fiables pour particuliers et professionnels à Genève
            </p>
          </div>
        </div>

        {/* Tous les Services */}
        <div className="mb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                <div className="bg-gradient-to-r from-sky-blue to-blue-600 p-6 text-white flex-shrink-0 h-48 flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                  <p className="text-sm opacity-90 text-center">{service.description}</p>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <ul className="space-y-2 flex-grow mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5 mr-2">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <CardFooter className="justify-center p-0">
                    <a
                      href="https://wa.me/41772094090"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "green" }),
                        "w-full rounded-lg text-sm flex items-center justify-center"
                      )}
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </a>
                  </CardFooter>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}