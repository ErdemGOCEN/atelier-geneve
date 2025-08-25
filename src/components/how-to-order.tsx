import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FileText, MessageSquare, UserPlus } from "lucide-react";

const cards = [
  {
    id: "1",
    icon: <MessageSquare className="mx-auto size-10 text-sky-blue" />,
    title: "Consultations",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "2",
    icon: <FileText className="mx-auto size-10 text-sky-blue" />,
    title: "Ticket Support",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "3",
    icon: <UserPlus className="mx-auto size-10 text-sky-blue" />,
    title: "Customer Support",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
];

export default function HowToOrder() {
  return (
    <section id="how-to-order">
      <div className="bg-muted">
        <div className="py-32 relative px-4 md:px-6 container mx-auto">
          <div className="space-y-4 text-center mb-12">
            <p className="text-muted-foreground">How to order</p>
            <h2 className="text-5xl font-bold text-balance w-full lg:w-1/3 mx-auto">
              Easy step for getting the services
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
