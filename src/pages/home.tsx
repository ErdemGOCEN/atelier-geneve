import Hero from "@/components/hero";
import HowToOrder from "@/components/how-to-order";
import MemberShip from "@/components/member-ship";
import Support from "@/components/support";
import Testimonials from "@/components/testimonials";
import WhatWeOffer from "@/components/what-we-offer";
import WhoWeAre from "@/components/who-we-are";
import WhyChooseUs from "@/components/why-choose-us";
import Tarifs from "@/components/tarifs"; // Yeni bileşen

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <Tarifs /> 
      <WhoWeAre />
      <MemberShip />
      <WhyChooseUs />
      <Support />
      <HowToOrder />
      <Testimonials />
    </>
  );
}