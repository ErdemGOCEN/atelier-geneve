"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-blue-500/10 p-1 py-0.5 font-bold text-blue-500",
        className
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        "border-border bg-card/50 border shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-blue-500/20 ring-offset-2"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Directrice Marketing, Genève",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    description: (
      <p>
        Atelier Genève a sauvé mon ordinateur professionnel.
        <Highlight>
          Le technicien est venu le lendemain et a résolu tous mes problèmes.
        </Highlight>{" "}
        Service rapide et professionnel, je recommande vivement !
      </p>
    ),
  },
  {
    name: "Thomas Martin",
    role: "Photographe Freelance, Carouge",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    description: (
      <p>
        Mon MacBook avait des virus après un voyage.
        <Highlight>
          Atelier Genève l'a complètement nettoyé et sécurisé.
        </Highlight>{" "}
        Mon ordinateur fonctionne mieux qu'avant, merci !
      </p>
    ),
  },
  {
    name: "Sophie Lambert",
    role: "Comptable, Vernier",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        Installation complète de mon nouveau PC par Atelier Genève.
        <Highlight>
          Tout a été configuré parfaitement avec mes logiciels de comptabilité.
        </Highlight>{" "}
        Un service sur mesure et très compétent.
      </p>
    ),
  },
  {
    name: "Jean Petit",
    role: "Restaurant Le Jardin, Genève",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    description: (
      <p>
        Notre système de caisse a planté avant le service.
        <Highlight>
          L'équipe d'Atelier Genève est intervenue en urgence et a tout réparé.
        </Highlight>{" "}
        Professionnalisme et réactivité exceptionnels !
      </p>
    ),
  },
  {
    name: "Claire Moreau",
    role: "Architecte d'Intérieur, Eaux-Vives",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    description: (
      <p>
        Mes données importantes étaient bloquées sur un disque dur.
        <Highlight>
          Atelier Genève a récupéré tous mes projets sans aucun problème.
        </Highlight>{" "}
        Un vrai miracle, je suis très reconnaissante !
      </p>
    ),
  },
  {
    name: "David Rousseau",
    role: "Startup Tech, Plan-les-Ouates",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    description: (
      <p>
        Support informatique mensuel pour notre petite entreprise.
        <Highlight>
          Atelier Genève gère toute notre infrastructure informatique.
        </Highlight>{" "}
        Fiabilité totale et tarifs très compétitifs à Genève.
      </p>
    ),
  },
  {
    name: "Isabelle Blanc",
    role: "Professeure, Meyrin",
    img: "https://randomuser.me/api/portraits/women/89.jpg",
    description: (
      <p>
        Mon ordinateur familial ralentissait énormément.
        <Highlight>
          Atelier Genève l'a optimisé complètement en 2 heures.
        </Highlight>{" "}
        Mes enfants peuvent travailler sans problème maintenant !
      </p>
    ),
  },
  {
    name: "Pierre Garnier",
    role: "Médecin, Champel",
    img: "https://randomuser.me/api/portraits/men/92.jpg",
    description: (
      <p>
        Urgence informatique le week-end pour mon cabinet médical.
        <Highlight>
          Atelier Genève a répondu immédiatement et résolu le problème.
        </Highlight>{" "}
        Service d'urgence disponible et très professionnel.
      </p>
    ),
  },
  {
    name: "Nathalie Simon",
    role: "Boutique de Mode, Rue du Rhône",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    description: (
      <p>
        Installation de notre système de point de vente par Atelier Genève.
        <Highlight>
          Configuration parfaite et formation de notre équipe incluse.
        </Highlight>{" "}
        Un partenaire informatique fiable pour notre commerce.
      </p>
    ),
  },
  {
    name: "Marc Bernard",
    role: "Consultant IT, Genève",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        Même en tant que professionnel IT, j'utilise Atelier Genève.
        <Highlight>
          Leur expertise en réparation hardware est impressionnante.
        </Highlight>{" "}
        Des techniciens compétents et honnêtes, rares à Genève !
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="relative container py-32 px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-center">Ce qu'ils disent</p>
          <h2 className="text-foreground mb-4 text-center text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
            Ce que disent nos clients à Genève
          </h2>
        </motion.div>

        <div className="relative mt-6 max-h-[70vh] overflow-hidden">
          <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-3">
            {Array(Math.ceil(testimonials.length / 4))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    "[--duration:60s]": i === 1,
                    "[--duration:30s]": i === 2,
                    "[--duration:70s]": i === 3,
                  })}
                >
                  {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.8,
                        duration: 1.2,
                      }}
                    >
                      <TestimonialCard {...card} />
                    </motion.div>
                  ))}
                </Marquee>
              ))}
          </div>
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
          <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
        </div>
      </div>
    </section>
  );
}