import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Updates from "./components/Updates";
import Footer from "./components/Footer";
import Popularsearches from "./components/PopularSearches";
import Partnerships from "./components/Partnerships";
import OurStory from "./components/OurStory";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Updates />
      <OurStory />
      <Partnerships />
      <Popularsearches />
      <Footer />
    </>
  );
}