import Image from "@/components/ui/image-with-fallback";
import { IdCardLanyard, MessageSquareHeart, Puzzle } from "lucide-react";

const specs = [
  {
    id: "1",
    icon: <IdCardLanyard className="size-8 text-sky-blue" />,
    title: "Techniciens Certifiés",
    description:
      "Interventions réalisées par des experts qualifiés avec plus de 8 ans d'expérience à Genève.",
  },
  {
    id: "2",
    icon: <Puzzle className="size-8 text-sky-blue" />,
    title: "Pièces d'Origine",
    description:
      "Nous utilisons uniquement des pièces détachées de qualité supérieure avec une garantie complète.",
  },
  {
    id: "3",
    icon: <MessageSquareHeart className="size-8 text-sky-blue" />,
    title: "Consultation Gratuite",
    description:
      "Évaluation précise de votre problème informatique pour vous proposer la solution la plus adaptée.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="pourquoi-nous-choisir" className="py-16 lg:py-32 bg-slate-50/50">
      <div className="px-4 md:px-6 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Sol İçerik Kısmı */}
        <div className="space-y-10 text-center lg:text-left">
          {/* Başlık: Services ve Tarifs bölümleriyle birebir aynı standartta */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight text-balance">
              Pourquoi choisir <span className="text-sky-blue">Atelier Genève</span> ?
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Expertise technique de pointe, service client d'exception et engagement total envers la qualité.
            </p>
          </div>

          {/* Özellikler Listesi */}
          <div className="space-y-8">
            {specs.map((spec) => (
              <div key={spec.id} className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-3 lg:space-y-0 lg:space-x-6">
                <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0">
                  {spec.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    {spec.title}
                  </h4>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Resim Kısmı - Çerçevesiz, Temiz ve Yüksek */}
        <div className="hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[650px] w-full border border-slate-200/50">
            <Image 
              src={"/why-choose-us.jpg"} 
              alt="Pourquoi choisir Atelier Genève" 
              className="w-full h-full object-cover"
              width={800}
              height={1000}
            />
          </div>
        </div>

      </div>
    </section>
  );
}