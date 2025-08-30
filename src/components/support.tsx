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
      "Contactez notre équipe d'experts pour une évaluation gratuite de votre problème informatique. Obtenez des conseils professionnels et un devis sans engagement à Genève.",
    link: (
      <CardFooter className="justify-center">
        
          <WhatsAppLink />
      
        
      </CardFooter>
    ),
  },
  {
    id: "2",
    icon: <FileText className="mx-auto size-10 text-sky-blue" />,
    title: "Support par Ticket",
    content:
      "Envoyez-nous un ticket détaillé pour des problèmes complexes. Notre équipe traite votre demande rapidement et vous tient informé de l'avancement à chaque étape.",
    link: (
      <CardFooter className="justify-center">
       
          <WhatsAppLink />
         
      </CardFooter>
    ),
  },
  {
    id: "3",
    icon: <UserPlus className="mx-auto size-10 text-sky-blue" />,
    title: "Support Client",
    content:
      "Besoin d'une assistance immédiate ? Contactez directement notre service client. Notre équipe est disponible pour répondre à toutes vos questions techniques à Genève.",
    link: (
      <CardFooter className="justify-center">
       
          <WhatsAppLink  />
        
      </CardFooter>
    ),
  },
];

export default function Support() {
  return (
    <section id="support">
      <div className="py-32 lg:py-48 bg-[url('/notch.webp')] bg-cover bg-no-repeat bg-center relative z-10">
        <div className="bg-gradient-to-b from-sky-blue/70 to-sky-blue/90 absolute inset-0 -z-1" />

        <div className="p-4 md:p-6 container mx-auto space-y-4 text-center lg:text-left">
          <h1 className="text-white text-5xl lg:text-7xl font-bold text-balance lg:w-1/2 text-center lg:text-left z-10">
            Des services de réparation informatique de qualité supérieure à Genève
          </h1>

          <p className="text-sky-100 font-semibold lg:w-1/3 text-center lg:text-left">
            Atelier genève vous offre des solutions informatiques professionnelles avec diagnostic complet, réparation rapide et support technique expert pour tous vos appareils à Genève.
          </p>
        </div>

        <div className="container mx-auto hidden lg:grid lg:grid-cols-3 grid-cols-1 gap-4 absolute left-0 right-0 -bottom-[84px]">
          {cards.map((card) => (
            <Card key={card.id} className="shadow-2xl">
              <CardHeader className="text-center gap-4">
                {card.icon}
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">{card.content}</CardContent>
              {card.link}
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 lg:hidden gap-4 p-4">
        {cards.map((card) => (
          <Card key={card.id} className="shadow-2xl">
            <CardHeader className="text-center gap-4">
              {card.icon}
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">{card.content}</CardContent>
            <CardFooter className="justify-center">
             
                <WhatsAppLink />
              
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}