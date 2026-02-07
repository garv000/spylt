import Navbar from "@/components/Navbar";
import Benefit from "@/sections/Benefit";
import Flavour from "@/sections/Flavour";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Message from "@/sections/Message";
import Nutrition from "@/sections/Nutrition";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Message />
      <Flavour />
      <Nutrition />
      <Benefit />
      <Testimonials />
      <Footer />
    </>
  );
}
