import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppWindow, Network, ShieldCheck } from "lucide-react";

const cards = [
  {
    id: "1",
    icon: <Network className="mx-auto size-10 text-sky-blue" />,
    title: "Hardware",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "2",
    icon: <AppWindow className="mx-auto size-10 text-sky-blue" />,
    title: "Software",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "3",
    icon: <ShieldCheck className="mx-auto size-10 text-sky-blue" />,
    title: "Antivirus",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="py-32 lg:py-48 bg-[url('/repairman.webp')] bg-cover bg-no-repeat bg-center relative z-10">
        <div className="bg-gradient-to-b from-sky-blue/70 to-sky-blue/90 absolute inset-0 -z-1" />

        <div className="p-4 md:p-6 container mx-auto space-y-4 text-center lg:text-left">
          <h1 className="text-white text-5xl lg:text-7xl font-bold text-balance lg:w-1/2 text-center lg:text-left z-10">
            The smart way to fix computers
          </h1>

          <p className="text-sky-100 text-base lg:text-2xl font-semibold capitalize lg:w-1/3 text-center lg:text-left">
            Computer services is here to help support your business!
          </p>

          <Link
            to="#"
            className={cn(
              buttonVariants({ variant: "green", size: "lg" }),
              "rounded-full"
            )}
          >
            Discover More
          </Link>
        </div>

        <div className="container mx-auto hidden lg:grid lg:grid-cols-3 grid-cols-1 gap-4 absolute left-0 right-0 -bottom-[84px]">
          {cards.map((card) => (
            <Card key={card.id} className="shadow-2xl">
              <CardHeader className="text-center gap-4">
                {card.icon}
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">{card.content}</CardContent>
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
          </Card>
        ))}
      </div>
    </section>
  );
}
