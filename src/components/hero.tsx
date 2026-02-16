import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppWindow, Network, ShieldCheck } from "lucide-react";
import WhatsAppLink from "@/components/whatsapp-link";

const cards = [
  {
    id: "1",
    icon: <Network className="mx-auto size-8 sm:size-10 text-sky-blue" aria-hidden="true" />,
    title: "Matériel Informatique",
    content: "Réparation PC, Mac et portables. Diagnostic complet et remplacement de composants à Genève.",
  },
  {
    id: "2",
    icon: <AppWindow className="mx-auto size-8 sm:size-10 text-sky-blue" aria-hidden="true" />,
    title: "Logiciels & OS",
    content: "Installation Windows/Mac, optimisation système ve mise à jour logicielle sécurisée.",
  },
  {
    id: "3",
    icon: <ShieldCheck className="mx-auto size-8 sm:size-10 text-sky-blue" aria-hidden="true" />,
    title: "Sécurité & Antivirus",
    content: "Suppression de virus et protection complète de vos données personnelles à Genève.",
  },
];

export default function Hero() {
  return (
    <section id="accueil" className="relative">
      {/* Üst Kısım: Görsel ve Ana Başlık */}
      <div className="relative py-20 sm:py-24 lg:py-40 bg-[url('/repairman.jpg')] bg-cover bg-no-repeat bg-bottom z-10">
        {/* Daha derin bir gradyan: Metin okunabilirliği için */}
        <div className="bg-gradient-to-b from-black/50 via-sky-blue/70 to-sky-blue/90 absolute inset-0 -z-1"></div>

        <div className="container mx-auto px-6 space-y-6">
          {/* SEO DÜZELTMESİ: Anahtar kelime odaklı H1 */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-balance text-center lg:text-left leading-tight">
            Dépannage Informatique <br className="hidden lg:block" />
            <span className="text-sky-100">à Genève & Environs</span>
          </h1>

          <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium text-center lg:text-left max-w-3xl lg:w-2/3 leading-relaxed">
            Atelier Genève : Votre expert en réparation PC/Mac pour particuliers et professionnels. 
            <span className="block mt-2 font-bold text-sky-200 text-sm uppercase tracking-wider">
              Service à domicile ou en atelier (Bd du Pont-d'Arve 40)
            </span>
          </p>

          <div className="flex justify-center lg:justify-start mt-8">
            <WhatsAppLink title="Demander un devis gratuit" />
          </div>
        </div>
      </div>

      {/* Kartlar Bölümü: Hem mobil hem masaüstü için tek bir yapı, responsive tasarım */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10 lg:-mt-20">
          {cards.map((card) => (
            <Card key={card.id} className="shadow-2xl border-none hover:translate-y-[-5px] transition-transform duration-300 bg-white/95 backdrop-blur">
              <CardHeader className="text-center pb-2">
                <div className="mb-2">{card.icon}</div>
                <CardTitle className="text-xl font-bold text-slate-800">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600 leading-relaxed italic md:not-italic">
                {card.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}