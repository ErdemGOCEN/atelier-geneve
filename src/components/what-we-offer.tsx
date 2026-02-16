import { CardFooter } from "@/components/ui/card";
import {
  Laptop, Monitor, ShieldCheck, RefreshCw, Wifi, HardDrive, Check,
} from "lucide-react";
import WhatsAppLink from "./whatsapp-link";

const allServices = [
  {
    id: "1",
    icon: <Monitor className="mx-auto size-8 text-white" aria-hidden="true" />,
    title: "Système OS",
    description: "Installation complète de Windows, macOS ou Linux.",
    features: ["Windows 10/11", "macOS Apple", "Distros Linux", "Config initiale"]
  },
  {
    id: "2",
    icon: <ShieldCheck className="mx-auto size-8 text-white" aria-hidden="true" />,
    title: "Sécurité & Antivirus",
    description: "Protection complète contre les logiciels malveillants.",
    features: ["Antivirus", "Config sécurité", "Mises à jour", "Analyse système"]
  },
  {
    id: "3",
    icon: <RefreshCw className="mx-auto size-8 text-white" aria-hidden="true" />,
    title: "Maintenance",
    description: "Optimisation et mises à jour logicielles complètes.",
    features: ["Mise à jour OS", "Logiciels tiers", "Patchs", "Performance"]
  },
  {
    id: "4",
    icon: <Laptop className="mx-auto size-8 text-white" aria-hidden="true" />,
    title: "Réparation PC/Mac",
    description: "Diagnostic et réparation matérielle rapide à Genève.",
    features: ["Hardware", "SSD/RAM Upgrade", "Récupération", "Tests"]
  },
  {
    id: "5",
    icon: <HardDrive className="mx-auto size-8 text-white" aria-hidden="true" />,
    title: "Données",
    description: "Récupération de fichiers supprimés ou perdus.",
    features: ["Disques durs", "Suppression", "Sauvegarde", "Cryptage"]
  },
  {
    id: "6",
    icon: <Wifi className="mx-auto size-8 text-white" aria-hidden="true" />,
    title: "Réseau & Wi-Fi",
    description: "Configuration réseau et internet haute performance.",
    features: ["Routeurs & Box", "Wi-Fi sécurisé", "Dépannage", "Ressources"]
  }
];

export default function WhatWeOffer() {
  return (
    <section id="services" className="bg-slate-50/50 pt-20 pb-16 lg:pt-28 lg:pb-20">
      <div className="px-4 container mx-auto">
        
        {/* Header - Üst boşluk pt-20/28 ile artırıldı */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Nos <span className="text-sky-blue">Services</span> à Genève
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Expertise informatique rapide, certifiée et garantie pour tous vos appareils.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {allServices.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full w-full max-w-[390px] border border-slate-100 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-sky-blue via-blue-600 to-blue-700 p-4 text-white flex-shrink-0 h-24 flex flex-col justify-center items-center">
                <div className="mb-1.5 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-center leading-tight uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>

              <div className="p-5 flex-grow flex flex-col">
                <p className="text-[13px] text-slate-500 mb-4 text-center italic leading-tight h-[1.2rem] line-clamp-1">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-5 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[13px] text-slate-700">
                      <div className="bg-green-100 rounded-full p-0.5 mr-2.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-green-600" strokeWidth={3} />
                      </div>
                      <span className="font-medium truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CardFooter className="p-0 pt-4 border-t border-slate-50 flex justify-center">
                   <div className="w-full flex justify-center transform group-hover:scale-105 transition-transform">
                      <WhatsAppLink />
                   </div>
                </CardFooter>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}