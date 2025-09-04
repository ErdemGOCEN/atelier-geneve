import Image from "@/components/ui/image-with-fallback";
import { Card, CardContent } from "@/components/ui/card";
import { IdCardLanyard, MessageSquareHeart, Puzzle } from "lucide-react";

const specs = [
  {
    id: "1",
    icon: <IdCardLanyard className="size-10 text-sky-blue" />,
    title: "Techniciens Certifiés",
    description:
      "Nos techniciens sont certifiés et formés aux dernières technologies. Chaque intervention est réalisée par des experts qualifiés avec plus de 5 ans d'expérience.",
  },
  {
    id: "2",
    icon: <Puzzle className="size-10 text-sky-blue" />,
    title: "Pièces d'Origine",
    description:
      "Nous utilisons uniquement des pièces détachées d'origine et de qualité supérieure. Garantie assurée sur tous les composants remplacés.",
  },
  {
    id: "3",
    icon: <MessageSquareHeart className="size-10 text-sky-blue" />,
    title: "Consultation Gratuite",
    description:
      "Bénéficiez d'une consultation gratuite avant toute intervention. Nous évaluons votre problème et vous proposons la meilleure solution adaptée.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="pourquoi-nous-choisir">
      <div className="px-4 md:px-6 container mx-auto py-8 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Nous réparons tous les modèles de portables et ordinateurs
            </h2>
            <p className="text-muted-foreground text-balance">
              Atelier Genève se distingue par son expertise technique, son service client exceptionnel et son engagement envers la qualité. Nous prenons soin de vos appareils comme s'ils étaient les nôtres.
            </p>
          </div>

          <div className="space-y-4">
            {specs.map((spec) => (
              <Card key={spec.id} className="shadow-lg">
                <CardContent className="flex flex-col items-center text-center pt-6 pb-4 px-5 space-y-3">
                  {/* İkon: Üstte, büyük değil ama net */}
                  <div className="flex-shrink-0">
                    {spec.icon}
                  </div>

                  {/* Başlık: Ortalanmış */}
                  <h4 className="text-xl font-semibold text-gray-800 leading-tight">
                    {spec.title}
                  </h4>

                  {/* Açıklama: Ortalanmış, okunaklı */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Görsel */}
        <div className="rounded-md overflow-hidden shadow-sm">
          <Image 
            src={"/why-choose-us.jpg"} 
            alt="Pourquoi choisir Atelier Genève" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}