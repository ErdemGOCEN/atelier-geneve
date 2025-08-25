import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          // Biraz gecikme ekleyerek sayfanın yüklenmesini bekle
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    scrollToSection();
  }, [location]);
}
