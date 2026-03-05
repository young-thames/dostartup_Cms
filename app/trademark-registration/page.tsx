import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Trademark/Hero2";
import DynamicTabContent from "../components/DynamicTabContent";
import Faq from "../components/Faq";

export default function TrademarkPage() {
  const serviceCategory = "trademark";

  const heroProps = {
    heading: "Protect Your Brand. File Your Trademark.",
    headingHighlight: "Brand",
    description:
      "AI-powered brand monitoring software trusted by India's top brands.",
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ✅ DO NOT pass undefined props */}
      <Hero {...heroProps} />

      {/* Fetches long-form content from Cockpit */}
      <DynamicTabContent category={serviceCategory} />

      {/* Fetches FAQs from Cockpit */}
      <Faq category={serviceCategory} />

      <Footer />
    </main>
  );
}