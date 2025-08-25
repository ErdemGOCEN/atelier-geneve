import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";

function Layout() {
  useScrollToSection();
  return (
    <main className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
