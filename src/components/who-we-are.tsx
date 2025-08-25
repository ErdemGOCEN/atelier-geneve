import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import Image from "@/components/ui/image-with-fallback";

export default function WhoWeAre() {
  return (
    <section id="who-we-are">
      <div className="px-4 md:px-6 container mx-auto pt-12 pb-12 lg:pb-36 lg:pt-56 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-muted-foreground">Who we are</p>
          <h2 className="text-5xl font-bold text-balance">
            We fix computers & business servers.
          </h2>
          <p className="text-muted-foreground text-balance">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
            provident numquam molestiae dolor beatae at rerum animi enim. Odit
            veritatis accusamus, repudiandae reiciendis magnam officiis non vero
            quaerat iste repellendus!
          </p>

          <Link
            to="#"
            className={cn(buttonVariants({ variant: "green" }), "rounded-full")}
          >
            Discover More
          </Link>
        </div>
        <div className="rounded-md overflow-hidden relative shadow-sm">
          <Image src={"/glad-customer.webp"} alt="glad customer" />

          <div className="absolute top-0 right-0 bg-white flex flex-col items-center justify-center p-4">
            <p className="text-sky-blue text-4xl font-bold">4.7</p>
            <p className="text-muted-foreground text-sm font-semibold">
              Rating Customer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
