import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import House from "@/components/Sec1";
import House2 from "@/components/Sec2";
import Aos from "aos";
import "Aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <>
      <Hero />
      <div data-Aos="fade-right">
        <House />
      </div>
      <div data-Aos="fade-left">
        <House2 />
      </div>
      <Footer />
    </>
  );
}
