// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Services from "./servicos";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <StudentsFeedback />
      <TrustedCompany />
      <Footer />
    </>
  );
}
