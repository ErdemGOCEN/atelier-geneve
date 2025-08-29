import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FileText, MessageSquare, UserPlus } from "lucide-react";

const cards = [
  {
    id: "1",
    icon: <MessageSquare className="mx-auto size-10 text-sky-blue" />,
    title: "Consultation Gratuite",
    content:
      "Contactez-nous pour une évaluation gratuite de votre problème informatique. Notre technicien expert analyse votre besoin et vous propose la meilleure solution à Genève.",
  },
  {
    id: "2",
    icon: <FileText className="mx-auto size-10 text-sky-blue" />,
    title: "Diagnostic & Devis",
    content:
      "Nous réalisons un diagnostic complet de votre appareil et vous fournissons un devis détaillé avec les interventions nécessaires et les délais de réalisation.",
  },
  {
    id: "3",
    icon: <UserPlus className="mx-auto size-10 text-sky-blue" />,
    title: "Intervention & Support",
    content:
      "Notre équipe intervient rapidement pour réparer votre ordinateur, installer vos logiciels ou sécuriser votre système. Support continu disponible à Genève.",
  },
];

export default function HowToOrder() {
  return (
    <section id="contact">
      <div className="bg-muted">
        <div className="py-32 relative px-4 md:px-6 container mx-auto">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-5xl font-bold text-balance w-full lg:w-1/3 mx-auto">
              Comment obtenir nos services informatiques à Genève
            </h2>
          </div>

          {/*  */}
          <div className="container mx-auto flex flex-col lg:flex-row gap-y-4 items-center justify-center">
            {cards.map((card, index) => {
              return (
                <div key={card.id} className="flex items-center justify-start">
                  <Card className="w-72 shrink-0">
                    <CardHeader className="text-center gap-4">
                      {card.icon}
                      <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      {card.content}
                    </CardContent>
                  </Card>
                  {index + 1 < cards.length && <PathOne />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const PathOne = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 222 2"
      fill="none"
      className="w-full hidden lg:block"
    >
      <path id="path_1" d="M0 1H221.5" stroke="#32AFE6" strokeDasharray="3 3" />
    </svg>
  </div>
);