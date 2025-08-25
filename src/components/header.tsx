import { Menu } from "lucide-react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/#who-we-are",
  },
  {
    name: "Services",
    link: "/#what-we-offer",
  },
  {
    name: "Projects",
    link: "/#why-choose-us",
  },
  {
    name: "Contact Us",
    link: "/#support",
  },
];

export default function Header() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const animation = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      const headerHeight = header.offsetHeight;

      if (animation.current) animation.current.kill();
      animation.current = gsap.timeline();

      animation.current = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: `+=${headerHeight}`,
          scrub: 1, // Smooth scroll ile senkronize
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(header, {
              backgroundColor: `rgba(0, 0, 0, ${progress * 0.25})`,
              backdropFilter: `blur(${progress * 10}px)`,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        },
      });
    },
    { scope: headerRef }
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300`}
      style={{
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      }}
      ref={headerRef}
    >
      <div className="hidden lg:block">
        <div className="mx-auto flex h-16 container items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex">
            <a
              className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600"
              href="/"
            >
              <div className="relative h-6 w-6 bg-secondary border text-white flex items-center justify-center rounded-md text-sm antialiased" />
              <div className="flex flex-col">
                <h1 className="text-white font-sans">REPAIRMAN</h1>
              </div>
            </a>
          </div>

          <nav className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end text-white">
            {navItems.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="transition-colors text-sm font-medium mr-3"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="flex container mx-auto h-16 items-center justify-between rounded-md px-4 md:px-6">
          <a
            className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-neutral-600"
            href="/"
          >
            <div className="relative h-6 w-6 bg-secondary border flex items-center justify-center rounded-md text-sm antialiased" />
            <div className="flex flex-col">
              <h1 className="text-secondary font-sans">REPAIRMAN</h1>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <Menu className="text-secondary" />
          </div>
        </div>
      </div>
    </header>
  );
}
