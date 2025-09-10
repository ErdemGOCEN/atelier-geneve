// components/why-choose-us/WhyChooseUs.tsx
import Image from "@/components/ui/image-with-fallback";
import { Card, CardContent } from "@/components/ui/card";
import { IdCardLanyard, MessageSquareHeart, Puzzle } from "lucide-react";

const specs = [
  {
    id: "1",
    icon: <IdCardLanyard className="size-8 text-sky-blue" />,
    title: "Techniciens Certifiés",
    description:
      "Nos techniciens sont certifiés et formés aux dernières technologies. Chaque intervention est réalisée par des experts qualifiés avec plus de 5 ans d'expérience.",
  },
  {
    id: "2",
    icon: <Puzzle className="size-8 text-sky-blue" />,
    title: "Pièces d'Origine",
    description:
      "Nous utilisons uniquement des pièces détachées d'origine et de qualité supérieure. Garantie assurée sur tous les composants remplacés.",
  },
  {
    id: "3",
    icon: <MessageSquareHeart className="size-8 text-sky-blue" />,
    title: "Consultation Gratuite",
    description:
      "Bénéficiez d'une consultation gratuite avant toute intervention. Nous évaluons votre problème et vous proposons la meilleure solution adaptée.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="pourquoi-nous-choisir" className="py-12 lg:py-20"> 
      {/* pt-8 veya pt-12 eklendi */}
      <div className="px-4 md:px-6 container mx-auto pt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="space-y-5 text-center lg:text-left">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Pourquoi choisir Atelier Genève ?
            </h2>
            <p className="text-muted-foreground text-balance text-sm sm:text-base">
              Atelier Genève se distingue par son expertise technique, son service client exceptionnel et son engagement envers la qualité. Nous prenons soin de vos appareils comme s'ils étaient les nôtres.
            </p>
          </div>

          <div className="space-y-3">
            {specs.map((spec) => (
              <Card key={spec.id} className="shadow-md">
                <CardContent className="flex flex-col items-center text-center py-4 px-4 space-y-2">
                  <div className="flex-shrink-0">
                    {spec.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-800 leading-tight">
                    {spec.title}
                  </h4>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resmi sadece lg ve üzeri ekranlarda göster, mobilde gizle. Gölge artırıldı. */}
        <div className="rounded-md overflow-hidden shadow-md hidden lg:block"> 
          <Image 
            src={"/why-choose-us.jpg"} 
            alt="Pourquoi choisir Atelier Genève" 
            className="w-full h-full object-cover"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}