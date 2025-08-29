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
      <div className="px-4 md:px-6 container mx-auto py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6 text-center">
          <div className="space-y-4 text-center">
            <h2 className="text-5xl font-bold text-balance">
              Nous réparons tous les modèles de portables et ordinateurs
            </h2>
            <p className="text-muted-foreground text-balance">
              Atelier Genève se distingue par son expertise technique, son service client exceptionnel et son engagement envers la qualité. Nous prenons soin de vos appareils comme s'ils étaient les nôtres.
            </p>
          </div>

          <div className="space-y-4">
            {specs.map((spec) => (
              <Card key={spec.id} className="shadow-lg">
                <CardContent>
                  <div className="flex gap-2">
                    {spec.icon}
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">{spec.title}</h4>
                      <p className="text-muted-foreground">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="rounded-md overflow-hidden shadow-sm">
          <Image 
            src={"/why-choose-us.jpg"} 
            alt="pourquoi choisir Atelier Genève" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}