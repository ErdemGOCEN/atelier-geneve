import Image from "@/components/ui/image-with-fallback";
import { Card, CardContent } from "@/components/ui/card";
import { IdCardLanyard, MessageSquareHeart, Puzzle } from "lucide-react";

const specs = [
  {
    id: "1",
    icon: <IdCardLanyard className="size-10 text-sky-blue" />,
    title: "Techniciens Certifiés",
    description:
      "Nos techniciens sont certifiés et formés aux dernières technologies. Chaque intervention est réalisée par des experts qualifiés avec plus de 5 ans d'expérience à Genève.",
  },
  {
    id: "2",
    icon: <Puzzle className="size-10 text-sky-blue" />,
    title: "Pièces d'Origine",
    description:
      "Nous utilisons uniquement des pièces détachées d'origine et de qualité supérieure. Garantie assurée sur tous les composants remplacés à Genève.",
  },
  {
    id: "3",
    icon: <MessageSquareHeart className="size-10 text-sky-blue" />,
    title: "Consultation Gratuite",
    description:
      "Bénéficiez d'une consultation gratuite avant toute intervention. Nous évaluons votre problème et vous proposons la meilleure solution adaptée à Genève.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us">
      <div className="px-4 md:px-6 container mx-auto py-12 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12 text-center lg:text-left">
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-muted-foreground">Pourquoi nous choisir</p>
            <h2 className="text-5xl font-bold text-balance">
              Nous réparons tous les modèles de portables et ordinateurs à Genève
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
          <Image src={"/why-choose-us.webp"} alt="pourquoi choisir Atelier Genève" />
        </div>
      </div>
    </section>
  );
}