import Image from "@/components/ui/image-with-fallback";
import { Card, CardContent } from "@/components/ui/card";
import { IdCardLanyard, MessageSquareHeart, Puzzle } from "lucide-react";

const specs = [
  {
    id: "1",
    icon: <IdCardLanyard className="size-10 text-sky-blue" />,
    title: "Certified Technician",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab in quos maxime et quis vero? Fuga sapiente modi deserunt.",
  },
  {
    id: "2",
    icon: <Puzzle className="size-10 text-sky-blue" />,
    title: "Original Spareparts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab in quos maxime et quis vero? Fuga sapiente modi deserunt.",
  },
  {
    id: "3",
    icon: <MessageSquareHeart className="size-10 text-sky-blue" />,
    title: "Free Consultations",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab in quos maxime et quis vero? Fuga sapiente modi deserunt.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us">
      <div className="px-4 md:px-6 container mx-auto py-12 lg:y-36 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12 text-center lg:text-left">
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-muted-foreground">Why choose us</p>
            <h2 className="text-5xl font-bold text-balance">
              We repair laptops and desktops for all major brands.
            </h2>
            <p className="text-muted-foreground text-balance">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit, provident numquam molestiae dolor beatae at rerum animi
              enim.
            </p>
          </div>

          {/*  */}
          <div className="space-y-4">
            {specs.map((spec) => (
              <Card key={spec.id} className="shadow-lg">
                <CardContent>
                  <div className="flex gap-2">
                    {spec.icon}
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">{spec.title}</h4>
                      <p className="text-muted-foreground">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="rounded-md overflow-hidden shadow-sm">
          <Image src={"/why-choose-us.webp"} alt="why choose us" />
        </div>
      </div>
    </section>
  );
}
