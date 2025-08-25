import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  AppWindow,
  Component,
  DatabaseBackup,
  Laptop,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";
import { buttonVariants } from "./ui/button";

const offers = [
  {
    id: "1",
    icon: <Laptop className="mx-auto size-10 text-sky-blue" />,
    title: "Laptop",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "2",
    icon: <Monitor className="mx-auto size-10 text-sky-blue" />,
    title: "PC Desktop",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "3",
    icon: <AppWindow className="mx-auto size-10 text-sky-blue" />,
    title: "Software",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "4",
    icon: <DatabaseBackup className="mx-auto size-10 text-sky-blue" />,
    title: "Backup Data",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "5",
    icon: <ShieldCheck className="mx-auto size-10 text-sky-blue" />,
    title: "Antivirus",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
  {
    id: "6",
    icon: <Component className="mx-auto size-10 text-sky-blue" />,
    title: "Spareparts",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
  },
];
export default function WhatWeOffer() {
  return (
    <section id="what-we-offer">
      <div className="px-4 md:px-6 container mx-auto py-12 lg:py-36">
        <div className="space-y-4 text-center mb-12">
          <p className="text-muted-foreground">What we offer</p>
          <h2 className="text-5xl font-bold text-balance w-full lg:w-1/2 mx-auto">
            We fix computers & business servers.
          </h2>
        </div>

        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {offers.map((offer) => (
            <Card key={offer.id} className="shadow-lg">
              <CardHeader className="text-center gap-4">
                {offer.icon}
                <CardTitle>{offer.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">{offer.content}</CardContent>
              <CardFooter className="justify-center">
                <Link
                  to="#"
                  className={cn(
                    buttonVariants({ variant: "green" }),
                    "rounded-full"
                  )}
                >
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
