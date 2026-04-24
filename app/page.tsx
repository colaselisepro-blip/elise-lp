import Hero from "@/components/Hero";
import FilterIcp from "@/components/FilterIcp";
import Reframe from "@/components/Reframe";
import Approach from "@/components/Approach";
import Results from "@/components/Results";
import Offers from "@/components/Offers";
import About from "@/components/About";
import Faq from "@/components/Faq";
import CtaCalendly from "@/components/CtaCalendly";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FilterIcp />
        <Reframe />
        <Approach />
        <Results />
        <Offers />
        <About />
        <Faq />
        <CtaCalendly />
      </main>
      <Footer />
    </>
  );
}
