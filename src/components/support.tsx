import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "./ui/button";
import {
  FileText,
  MessageCircleMore,
  MessageSquare,
  Phone,
  Send,
  UserPlus,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  {
    id: "1",
    icon: <MessageSquare className="mx-auto size-10 text-sky-blue" />,
    title: "Consultations",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
    link: (
      <CardFooter className="justify-center">
        <Link
          to="#"
          className={cn(
            buttonVariants({ variant: "green", size: "lg" }),
            "rounded-full"
          )}
        >
          <MessageCircleMore />
          Chat Now
        </Link>
      </CardFooter>
    ),
  },
  {
    id: "2",
    icon: <FileText className="mx-auto size-10 text-sky-blue" />,
    title: "Ticket Support",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
    link: (
      <CardFooter className="justify-center">
        <Link
          to="#"
          className={cn(
            buttonVariants({ variant: "green", size: "lg" }),
            "rounded-full"
          )}
        >
          <Send />
          Send Ticket
        </Link>
      </CardFooter>
    ),
  },
  {
    id: "3",
    icon: <UserPlus className="mx-auto size-10 text-sky-blue" />,
    title: "Customer Support",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perferendis sapiente deserunt.",
    link: (
      <CardFooter className="justify-center">
        <Link
          to="#"
          className={cn(
            buttonVariants({ variant: "green", size: "lg" }),
            "rounded-full"
          )}
        >
          <Phone />
          Call Us
        </Link>
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
            We provide top-notch quality computer repair services
          </h1>

          <p className="text-sky-100 font-semibold capitalize lg:w-1/3 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            sunt amet inventore, at et odio ut quam deleniti commodi laboriosam!
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
              <CardFooter className="justify-center">{card.link}</CardFooter>
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
              <Link
                to="#"
                className={cn(
                  buttonVariants({ variant: "green", size: "lg" }),
                  "rounded-full"
                )}
              >
                Discover More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
