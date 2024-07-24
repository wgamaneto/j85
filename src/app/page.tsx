// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Services from "./servicos";
import StudentsFeedback from "./feedback";
import Localization from "./Localization";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <StudentsFeedback />
      <Localization />
      <Footer />
    </>
  );
}
