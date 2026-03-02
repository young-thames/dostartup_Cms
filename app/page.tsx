import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import UpdatesAndDueDates from "./components/Updates"; // Ensure this filename matches
import OurStory from "./components/Ourstory";
import Partnerships from "./components/Partnerships";
import PopularSearches from "./components/PopularSearches";
import Footer from "./components/Footer";

async function getCockpitData(endpoint: string, isSingleton: boolean = false) {
  const type = isSingleton ? "item" : "items";
  const url = `${process.env.NEXT_PUBLIC_COCKPIT_API_URL}/api/content/${type}/${endpoint}?api-key=${process.env.NEXT_PUBLIC_COCKPIT_API_KEY}`;
  
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error(`Fetch error for ${endpoint}:`, error);
    return null;
  }
}

export default async function Home() {
  // 1. Fetch all data in parallel for maximum speed
  const [
    heroData, 
    servicesData, 
    updatesData, 
    dueDatesData, 
    ourStoryData, 
    partnersData
  ] = await Promise.all([
    getCockpitData("heroslide", true),
    getCockpitData("service"),
    getCockpitData("update"),
    getCockpitData("duedate"), // Added this to the parallel fetch
    getCockpitData("ourstory", true),
    getCockpitData("Partner"),
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 2. Hero Section - Pulls from heroslide singleton */}
      <Hero initialImages={heroData?.images || []} />
      
      {/* 3. Services Grid - Icons and names */}
      <Services initialServices={servicesData || []} />
      
      {/* 4. Updates & Due Dates - Dual panel dashboard */}
      <UpdatesAndDueDates 
        initialUpdates={updatesData || []} 
        initialDueDates={dueDatesData || []} 
      />
      
      {/* 5. Our Story - About section with image */}
      <OurStory data={ourStoryData || null} />
      
      {/* 6. Partnerships - Banking logo grid */}
      <Partnerships partners={partnersData || []} />
      
      <PopularSearches />
      <Footer />
    </main>
  );
}