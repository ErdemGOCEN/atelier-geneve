import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "./ui/button";
import React from "react";

const infos = [
  {
    id: "1",
    value: "14K+",
    title: "Happy Clients",
  },
  {
    id: "2",
    value: "4K+",
    title: "Members Active",
  },
  {
    id: "3",
    value: "3",
    title: "Certified Experts",
  },
  {
    id: "4",
    value: "5+",
    title: "Years Experience",
  },
];

export default function MemberShip() {
  return (
    <section id="member-ship">
      <div className="py-32 bg-[url('/laptop-repair.webp')] bg-cover bg-no-repeat bg-center relative z-10">
        <div className="bg-gradient-to-tr from-sky-blue/80 to-green-400/80 absolute inset-0 -z-1" />

        <div className="px-4 md:px-6 container mx-auto text-secondary">
          <div className="space-y-4 text-center w-full lg:w-1/2 mx-auto">
            <h2 className="text-5xl font-bold text-balance">
              Discount up to 50% for member only.
            </h2>
            <p className="text-sky-100 text-balance">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit, provident numquam molestiae dolor beatae at rerum animi
              enim. Odit veritatis accusamus, repudiandae reiciendis magnam
              officiis non vero quaerat iste repellendus!
            </p>

            <Link
              to="#"
              className={cn(
                buttonVariants({ variant: "green" }),
                "rounded-full"
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto hidden lg:flex items-center justify-center absolute left-0 right-0 -bottom-14 bg-white rounded-lg overflow-hidden shadow-2xl py-2">
          {infos.map((info, index) => {
            return (
              <React.Fragment key={info.id}>
                <div className="flex flex-col items-center justify-center p-4 flex-1">
                  <p className="text-sky-blue text-4xl font-bold">
                    {info.value}
                  </p>
                  <p className="text-muted-foreground text-sm font-semibold">
                    {info.title}
                  </p>
                </div>
                {index + 1 < infos.length && (
                  <div className="bg-border w-px h-16" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
