"use client";


import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-sky-500/10 px-1.5 py-0.5 font-bold text-sky-600 rounded-md mx-0.5 whitespace-nowrap">
      {children}
    </span>
  );
}

const testimonials = [
  { name: "Marie Dubois", role: "Marketing, Eaux-Vives", img: "https://randomuser.me/api/portraits/women/1.jpg", description: <>Atelier Genève a sauvé mon MacBook pro. <Highlight>Le technicien est venu à Eaux-Vives</Highlight> le jour même. Service impeccable!</> },
  { name: "Thomas Martin", role: "Photographe, Carouge", img: "https://randomuser.me/api/portraits/men/2.jpg", description: <>Virus supprimés et système sécurisé. <Highlight>Mon outil de travail est comme neuf.</Highlight> Merci à l'équipe de Carouge!</> },
  { name: "Sophie Lambert", role: "Indépendante, Plainpalais", img: "https://randomuser.me/api/portraits/women/3.jpg", description: <>Installation de mon setup pro à domicile. <Highlight>Configuration parfaite</Highlight> de mes logiciels de gestion.</> },
  { name: "Jean Petit", role: "Gérant, Rue du Rhône", img: "https://randomuser.me/api/portraits/men/4.jpg", description: <>Dépannage d'urgence sur notre système de caisse. <Highlight>Réactivité incroyable</Highlight> avant le service du soir.</> },
  { name: "Claire Moreau", role: "Architecte, Champel", img: "https://randomuser.me/api/portraits/women/5.jpg", description: <>Récupération de données sur un disque dur externe. <Highlight>Ils ont sauvé mes plans</Highlight> d'un projet crucial.</> },
  { name: "David Rousseau", role: "Startup, Plan-les-Ouates", img: "https://randomuser.me/api/portraits/men/6.jpg", description: <>Maintenance mensuelle pour notre parc informatique. <Highlight>Sérieux et compétents,</Highlight> de vrais experts IT à Genève.</> },
  { name: "Lucie Bernard", role: "Enseignante, Meyrin", img: "https://randomuser.me/api/portraits/women/7.jpg", description: <>Mon PC familial ramait énormément. <Highlight>Nettoyage et optimisation</Highlight> faits en un temps record. Bravo!</> },
  { name: "Marc Lévy", role: "Avocat, Vieille-Ville", img: "https://randomuser.me/api/portraits/men/8.jpg", description: <>Soutien technique discret et très efficace. <Highlight>Une adresse précieuse</Highlight> au centre-ville pour les professionnels.</> },
  { name: "Emma Fournier", role: "Étudiante, UNIGE", img: "https://randomuser.me/api/portraits/women/9.jpg", description: <>Écran de laptop changé en 24h. <Highlight>Prix très honnête</Highlight> pour une qualité suisse. Je recommande!</> },
  { name: "Nicolas Roche", role: "Médecin, Florissant", img: "https://randomuser.me/api/portraits/men/10.jpg", description: <>Sécurisation de mon réseau de cabinet. <Highlight>Discrétion et professionnalisme</Highlight> total. Merci beaucoup.</> },
  { name: "Julie Morel", role: "Boutique, Chêne-Bourg", img: "https://randomuser.me/api/portraits/women/11.jpg", description: <>Problème de Wi-Fi résolu rapidement dans mon commerce. <Highlight>Service client au top.</Highlight></> },
  { name: "Antoine Blanc", role: "Freelance, Lancy", img: "https://randomuser.me/api/portraits/men/12.jpg", description: <>Montage de mon PC sur mesure. <Highlight>Conseils d'expert</Highlight> et montage très propre. Une pépite!</> },
  { name: "Isabelle Perrin", role: "Retraitée, Onex", img: "https://randomuser.me/api/portraits/women/13.jpg", description: <>Aide précieuse pour configurer ma tablette et mes emails. <Highlight>Très patients et pédagogues.</Highlight></> },
  { name: "Paul Girard", role: "Chef de cuisine, Pâquis", img: "https://randomuser.me/api/portraits/men/14.jpg", description: <>Ordinateur pro réparé en urgence un samedi. <Highlight>Ils nous ont sauvé la mise!</Highlight></> },
  { name: "Chloé Simon", role: "Designer, Versoix", img: "https://randomuser.me/api/portraits/women/15.jpg", description: <>Mise à jour matérielle de mon iMac. <Highlight>Il a retrouvé une seconde jeunesse.</Highlight> Travail soigné.</> },
  { name: "Julien Faure", role: "Commerçant, Thônex", img: "https://randomuser.me/api/portraits/men/16.jpg", description: <>Backup cloud installé pour ma boutique. <Highlight>Esprit tranquille</Highlight> désormais pour mes données.</> },
];

const TestimonialCard = ({ name, role, img, description }: any) => (
  <div className="mb-6 flex w-full flex-col justify-between gap-5 rounded-[2rem] p-8 border border-slate-100 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="space-y-4">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-sky-500 text-sky-500" />)}
      </div>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">"{description}"</p>
    </div>
    <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
      <img src={img} alt={name} className="size-12 rounded-full object-cover ring-2 ring-sky-50" />
      <div>
        <h4 className="text-slate-900 font-bold text-sm leading-none mb-1">{name}</h4>
        <p className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">{role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center space-y-6 mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Ce que disent <span className="text-sky-blue">nos clients</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Découvrez les expériences de nos clients à travers tout le canton de Genève.
          </p>
        </div>

        <div className="relative flex h-[800px] flex-row items-start justify-center gap-6 overflow-hidden">
          {/* Sütun 1 - Daha Yavaş */}
          <Marquee vertical className="[--duration:80s] flex-1">
            {testimonials.slice(0, 6).map((t, i) => <TestimonialCard key={`col1-${i}`} {...t} />)}
          </Marquee>

          {/* Sütun 2 - Orta Hız */}
          <Marquee vertical className="[--duration:60s] hidden md:flex flex-1">
            {testimonials.slice(6, 11).map((t, i) => <TestimonialCard key={`col2-${i}`} {...t} />)}
          </Marquee>

          {/* Sütun 3 - En Hızlı */}
          <Marquee vertical className="[--duration:70s] hidden lg:flex flex-1">
            {testimonials.slice(11, 16).map((t, i) => <TestimonialCard key={`col3-${i}`} {...t} />)}
          </Marquee>

          {/* Maskeler */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />
        </div>
      </div>
    </section>
  );
}