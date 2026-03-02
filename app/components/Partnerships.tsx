
// // app/components/Partnerships.tsx

// export default function Partnerships() {
//   const partners = [
//     { name: "ICICI Bank", logo: "/images/icici.jpeg" },
//     { name: "Axis Bank", logo: "/images/axis.png" },
//     { name: "HDFC Bank", logo: "/images/hdfc.png" },
//     { name: "Kotak", logo: "/images/kotak.png" },
//     { name: "Yes Bank", logo: "/images/yes.png" },
//     { name: "AU Small Finance Bank", logo: "/images/au.jpeg" },
//     { name: "South Indian Bank", logo: "/images/south.png" },
//     { name: "DBS", logo: "/images/dbs.png" },
//     // { name: "Standard Chartered", logo: "/logos/standardchartered.png" },
//     // { name: "IndusInd Bank", logo: "/logos/indusind.png" },
//     // { name: "Shriram Finance", logo: "/logos/shriram.png" },
//     // { name: "Aditya Birla Finance", logo: "/logos/adityabirla.png" },
//   ];

//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Heading */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
//           Industry leading partnerships
//         </h2>
//         <p className="text-gray-600 mt-1 mb-6">
//           We work with top Indian Institutions to further our shared mission of
//           improving ease of doing business and promoting Entrepreneurship in India.
//         </p>

//         {/* Partners Logos */}
//         <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
//           {partners.map((partner, idx) => (
//             <img
//               key={idx}
//               src={partner.logo}
//               alt={partner.name}
//               className="max-h-10 object-contain"
//             />
//           ))}
//         </div>

//         {/* Enterprise Partnership CTA */}
// <div className="mt-10 relative rounded-xl overflow-hidden">
//   <div className="absolute inset-0 bg-black/70"></div>
  
//   <div className="relative flex items-center justify-between gap-8 p-8 md:p-12">
//     {/* Left side content */}
//     <div className="text-white max-w-xl flex-1">
//       <h3 className="text-lg md:text-xl font-semibold mb-3">
//         Enterprise Partnership
//       </h3>
//       <p className="text-sm md:text-base mb-5 leading-relaxed">
//         If you're an independent professional, firm, enterprise client, bank, 
//         or government organization, we invite you to reach out to our Enterprise 
//         Partnership Team. Our dedicated Enterprise Team is committed to collaborating 
//         with a diverse range of clients including professionals, banks, enterprise clients, 
//         and government departments to create customized solutions that meet specific 
//         requirements. Contact us today to explore partnership opportunities to work 
//         together and create value.
//       </p>
//       <button className="px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm rounded-lg shadow transition">
//         Get Started
//       </button>
//     </div>

//     {/* Right side image */}
//     <div className="hidden md:block flex-shrink-0">
//       <img
//         src="/images/hero.webp"
//         alt="Enterprise background"
//         className="w-110 h-auto object-cover rounded-lg shadow-lg"
//       />
//     </div>
//   </div>
// </div>
//       </div>
//     </section>
//   );
// }




// app/components/Partnerships.tsx

// const STRAPI_URL = 'http://localhost:1337';

// async function getPartnershipSection() {
//   const res = await fetch(
//     `${STRAPI_URL}/api/partnership-section?populate=ctaImage`,
//     { cache: "no-store" }
//   );
//   const json = await res.json();
//   return json.data;
// }

// async function getPartners() {
//   const res = await fetch(
//     `${STRAPI_URL}/api/partners?populate=logo`,
//     { cache: "no-store" }
//   );
//   const json = await res.json();
//   return json.data;
// }

// export default async function Partnerships() {
//   const section = await getPartnershipSection();
//   const partners = await getPartners();

//   if (!section) return null;

//   const {
//     title,
//     description,
//     ctaTitle,
//     ctaDescription,
//     ctaButtonText,
//     ctaImage,
//   } = section;

//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">

//         {/* Heading */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
//           {title}
//         </h2>
//         <p className="text-gray-600 mt-1 mb-6">
//           {description}
//         </p>

//         {/* Partners */}
//         <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
//           {partners?.map((partner: any) => (
//             <img
//               key={partner.id}
//               src={`${STRAPI_URL}${partner.logo?.url}`}
//               alt={partner.name}
//               className="max-h-10 object-contain"
//             />
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-10 relative rounded-xl overflow-hidden">
//           <div className="absolute inset-0 bg-black/70"></div>

//           <div className="relative flex items-center justify-between gap-8 p-8 md:p-12">
//             <div className="text-white max-w-xl">
//               <h3 className="text-lg md:text-xl font-semibold mb-3">
//                 {ctaTitle}
//               </h3>
//               <p className="text-sm md:text-base mb-5">
//                 {ctaDescription}
//               </p>
//               <button className="px-5 py-2.5 bg-pink-600 hover:bg-pink-700 rounded-lg">
//                 {ctaButtonText}
//               </button>
//             </div>

//             <div className="hidden md:block">
//               <img
//                 src={`${STRAPI_URL}${ctaImage?.url}`}
//                 alt="Enterprise Partnership"
//                 className="w-110 rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


















// https://cms.dostartup.in/api/content/items/Partner



// "use client";

// import { useEffect, useState } from "react";

// const COCKPIT_BASE = "https://cms.dostartup.in";
// const PARTNER_API = `${COCKPIT_BASE}/api/content/items/Partner`;

// export default function Partnerships() {

//   const [partners, setPartners] = useState<any[]>([]);

//   useEffect(() => {
//     fetchPartners();
//   }, []);

//   async function fetchPartners() {

//     try {

//       const res = await fetch(PARTNER_API, {
//         cache: "no-store"
//       });

//       const data = await res.json();

//       if (Array.isArray(data)) {
//         setPartners(data);
//       }

//     } catch (error) {

//       console.error("Partners fetch error:", error);

//     }

//   }

//   function getLogoUrl(partner: any) {

//     if (!partner.logo) return "";

//     // CASE 1: Asset object (correct Cockpit format)
//     if (typeof partner.logo === "object" && partner.logo.path) {
//       return `${COCKPIT_BASE}/storage/uploads${partner.logo.path}`;
//     }

//     // CASE 2: String URL
//     if (typeof partner.logo === "string") {

//       // localhost fix → replace with production base
//       if (partner.logo.includes("localhost")) {
//         const filename = partner.logo.split("/uploads/")[1];
//         return `${COCKPIT_BASE}/storage/uploads/${filename}`;
//       }

//       return partner.logo;
//     }

//     return "";

//   }

//   return (
//     <section className="bg-white">

//       <div className="max-w-7xl mx-auto px-6 py-12">

//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
//           Industry leading partnerships
//         </h2>

//         <p className="text-gray-600 mt-1 mb-6">
//           We work with top Indian Institutions to further our shared mission of improving ease of doing business and promoting Entrepreneurship in India.
//         </p>

//         <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">

//           {partners.map((partner, idx) => {

//             const logoUrl = getLogoUrl(partner);

//             if (!logoUrl) return null;

//             return (
//               <img
//                 key={partner._id || idx}
//                 src={logoUrl}
//                 alt={partner.Name}
//                 className="max-h-10 object-contain"
//               />
//             );

//           })}

//         </div>

//         <div className="mt-10 relative rounded-xl overflow-hidden">

//           <div className="absolute inset-0 bg-black/70"></div>

//           <div className="relative flex items-center justify-between gap-8 p-8 md:p-12">

//             <div className="text-white max-w-xl">

//               <h3 className="text-lg md:text-xl font-semibold mb-3">
//                 Enterprise Partnership
//               </h3>

//               <p className="text-sm md:text-base mb-5 leading-relaxed">
//                 If you're an independent professional, firm, enterprise client,
//                 bank, or government organization, we invite you to reach out to
//                 our Enterprise Partnership Team.
//               </p>

//               <button className="px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm rounded-lg shadow transition">
//                 Get Started
//               </button>

//             </div>

//             <div className="hidden md:block">

//               <img
//                 src="/images/hero.webp"
//                 alt="Enterprise Partnership"
//                 className="w-110 rounded-lg shadow-lg"
//               />

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );

// }interface PartnershipsProps {
  interface Partner {
  _id: string;
  Name: string;
  logo?: {
    path: string;
  };
}

interface PartnershipsProps {
  partners: Partner[];
}

export default function Partnerships({ partners = [] }: PartnershipsProps) {
  const ASSETS_URL = process.env.NEXT_PUBLIC_COCKPIT_ASSETS_URL;

  return (
    <section className="py-16 bg-[#F9F8F4]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <p className="font-['Sora'] text-[10px] font-semibold tracking-[0.1em] uppercase text-[#B1ADA1] mb-2">
            Trusted Partners
          </p>
          <h2 className="font-['Sora'] text-2xl md:text-3xl font-semibold text-[#1a1714]">
            Our Banking & Ecosystem Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <div
              key={partner._id}
              className="group bg-white border border-[#B1ADA1]/20 p-8 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              {partner.logo?.path ? (
                <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                  <img
                    src={`${ASSETS_URL}${partner.logo.path}`}
                    alt={partner.Name.trim()}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ) : (
                <div className="h-16 w-16 bg-[#F4F3EE] rounded-full mb-4 flex items-center justify-center text-[#B1ADA1]">
                  <span className="text-xs">Logo</span>
                </div>
              )}
              
              <p className="font-['Sora'] text-xs font-semibold text-[#7a7570] group-hover:text-[#C15F3C] transition-colors text-center">
                {partner.Name.trim()}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-12 pt-8 border-t border-[#B1ADA1]/20 flex flex-wrap justify-center gap-x-8 gap-y-4">
           {["Secure Integration", "Authorized Channel", "Priority Support"].map((benefit) => (
             <div key={benefit} className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C]" />
               <span className="text-[11px] font-semibold text-[#B1ADA1] uppercase tracking-wider">{benefit}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}