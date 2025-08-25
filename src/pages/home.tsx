import Hero from "@/components/hero";
import HowToOrder from "@/components/how-to-order";
import MemberShip from "@/components/member-ship";
import Pricing from "@/components/pricing";
import Support from "@/components/support";
import Testimonials from "@/components/testimonials";
import WhatWeOffer from "@/components/what-we-offer";
import WhoWeAre from "@/components/who-we-are";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MemberShip />
      <WhatWeOffer />
      <WhyChooseUs />
      <Support />
      <Pricing />
      <HowToOrder />
      <Testimonials />
    </>
  );
}
