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
import WhatsAppLink from "./whatsapp-link";

const cards = [
  {
    id: "1",
    icon: <MessageSquare className="mx-auto size-10 text-sky-blue" />,
    title: "Consultation Gratuite",
    content:
      "Contactez nos experts pour une évaluation gratuite de votre problème à Genève. Conseils et devis sans engagement.",
  },
  {
    id: "2",
    icon: <FileText className="mx-auto size-10 text-sky-blue" />,
    title: "Support Technique",
    content:
      "Une équipe dédiée pour traiter vos pannes complexes rapidement. Suivi personnalisé à chaque étape de réparation.",
  },
  {
    id: "3",
    icon: <UserPlus className="mx-auto size-10 text-sky-blue" />,
    title: "Assistance Directe",
    content:
      "Besoin d'aide immédiate ? Notre service client à Genève répond à toutes vos questions techniques en direct.",
  },
];

export default function Support() {
  return (
    <section 
      id="contact" 
      className="relative"
      style={{ scrollMarginTop: '2rem' }}
    >
      {/* Üst Banner - Yükseklik korundu, başlık standartlaştırıldı */}
      <div className="py-20 lg:py-32 bg-[url('/notch.jpg')] bg-cover bg-no-repeat bg-center relative overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-sky-blue/70 absolute inset-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-6 text-center lg:text-left">
            {/* BAŞLIK STANDARTLAŞTIRILDI: text-3xl md:text-5xl font-extrabold */}
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Les réparations informatiques <br className="hidden lg:block" />
              <span className="text-sky-300">les moins chères</span> de Genève
            </h1>

            <p className="text-blue-50 text-base md:text-lg lg:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Atelier Genève offre des solutions professionnelles, un diagnostic complet et un support expert pour tous vos appareils.
            </p>
          </div>
        </div>
      </div>

      {/* Kartlar - Genişlik ve Yükseklik Ayarlı */}
      <div className="container mx-auto px-4 -mt-12 lg:-mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {cards.map((card) => (
            <article
              key={card.id}
              className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col w-full max-w-[390px] border border-slate-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="pt-10 pb-4 text-center space-y-4 px-6">
                <div className="bg-sky-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  {card.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                  {card.title}
                </h3>
              </div>
              
              <div className="text-center px-8 pb-8 flex-grow">
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  {card.content}
                </p>
              </div>

              <div className="pb-10 flex justify-center border-t border-slate-50 pt-6 px-6">
                <div className="w-full flex justify-center">
                   <WhatsAppLink />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Alt Boşluk - Kartların sayfada nefes alması için */}
      <div className="h-16 lg:h-24" />
    </section>
  );
}