// components/hero/Hero.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppWindow, Network, ShieldCheck } from "lucide-react";
import WhatsAppLink from "@/components/whatsapp-link"; // Doğru yolu kontrol edin

const cards = [
  {
    id: "1",
    icon: <Network className="mx-auto size-8 sm:size-10 text-sky-blue" />,
    title: "Matériel Informatique",
    content:
      "Réparation et maintenance de vos ordinateurs, portables et composants. Diagnostic complet et solutions professionnelles à Genève.",
  },
  {
    id: "2",
    icon: <AppWindow className="mx-auto size-8 sm:size-10 text-sky-blue" />,
    title: "Logiciels",
    content:
      "Installation et configuration de systèmes d'exploitation, mises à jour logicielles, et optimisation de vos applications pour un fonctionnement optimal.",
  },
  {
    id: "3",
    icon: <ShieldCheck className="mx-auto size-8 sm:size-10 text-sky-blue" />,
    title: "Antivirus",
    content:
      "Protection complète contre les virus et logiciels malveillants. Installation d'antivirus et nettoyage de vos appareils infectés à Genève.",
  },
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="py-20 sm:py-24 lg:py-36 bg-[url('/repairman.jpg')] bg-cover bg-no-repeat bg-bottom relative z-10">
        {/* Arka plan gradyanı */}
        <div className="bg-gradient-to-b from-sky-blue/70 to-sky-blue/90 absolute inset-0 -z-1"></div>

        {/* İçerik */}
        <div className="p-4 md:p-6 container mx-auto space-y-4">
          {/* Başlık: Mobil orta, masaüstü sol */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance text-center lg:text-left">
            La solution intelligente pour réparer vos ordinateurs
          </h1>

          {/* Açıklama: Mobil orta, masaüstü sol */}
          <p className="text-sky-100 text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold capitalize text-center lg:text-left max-w-3xl lg:w-1/2">
            Atelier Genève : Votre expert en services informatiques pour particuliers et professionnels à Genève
          </p>

          {/* Buton: Mobilde orta, masaüstünde sol */}
          <div className="flex justify-center lg:justify-start mt-4">
            <WhatsAppLink title="Découvrir Nos Services" />
          </div>
        </div>

        {/* Masaüstü: Kartlar altta, absolute */}
        <div className="container mx-auto hidden lg:grid lg:grid-cols-3 gap-4 absolute left-0 right-0 -bottom-[84px]">
          {cards.map((card) => (
            <Card key={card.id} className="shadow-2xl">
              <CardHeader className="text-center gap-3 sm:gap-4">
                {card.icon}
                <CardTitle className="text-base sm:text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-xs sm:text-sm">
                {card.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobil: Kartlar normal akışta */}
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 lg:hidden gap-4 p-4">
        {cards.map((card) => (
          <Card key={card.id} className="shadow-2xl">
            <CardHeader className="text-center gap-3 sm:gap-4">
              {card.icon}
              <CardTitle className="text-base sm:text-lg">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-xs sm:text-sm">
              {card.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}