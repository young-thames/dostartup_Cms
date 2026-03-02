
// // app/components/OurStory.tsx

// export default function OurStory() {
//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
          
//           {/* Left Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="/images/our-story.jpg"
//               alt="DoStartup Our Story"
//               className="w-full h-auto rounded-lg shadow-sm object-cover"
//             />
//           </div>

//           {/* Right Text */}
//           <div className="w-full md:w-1/2">
//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
//               Our Story!
//             </h3>
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//               At <span className="font-semibold text-gray-900">DoStartup</span>, 
//               we are on a mission to make entrepreneurship easier and more 
//               affordable for millions of aspiring business owners. 
//               Our platform is built to simplify the process of starting a business 
//               and managing compliance, empowering entrepreneurs to focus on growth 
//               while we handle the complexities.  
//             </p>
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
//               Founded with the vision of supporting startups at every stage, 
//               DoStartup is committed to providing accessible, transparent, 
//               and reliable solutions that help turn ideas into thriving businesses.  
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// async function getOurStory() {
//   const res = await fetch(
//     "https://cms.dostartup.in/api/content/item/ourstory",
//     { cache: "no-store" }
//   );
//   const json = await res.json();
//   return json;
// }

// function renderRichText(text: string) {
//   if (!text) return null;

//   return (
//     <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2">
//       {text}
//     </p>
//   );
// }

// export default async function OurStory() {
//   const data = await getOurStory();

//   if (!data) return null;

//   // Cockpit uses path not url
//   const imageUrl = data.image?.path;

//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">

//           {/* Left Image */}
//           <div className="w-full md:w-1/2">
//             {imageUrl && (
//               <img
//                 src={`https://cms.dostartup.in/storage/uploads${imageUrl}`}
//                 alt="Our Story"
//                 className="w-full h-auto rounded-lg shadow-sm object-cover"
//               />
//             )}
//           </div>

//           {/* Right Text */}
//           <div className="w-full md:w-1/2">
//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
//               {data.title}
//             </h3>

//             {renderRichText(data.para1)}
//             {renderRichText(data.para2)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
interface OurStoryProps {
  data: {
    title?: string;
    para1?: string;
    para2?: string;
    image?: {
      path: string;
    };
  } | null;
}

export default function OurStory({ data }: OurStoryProps) {
  // Use the Assets URL from your .env.local
  const ASSETS_URL = process.env.NEXT_PUBLIC_COCKPIT_ASSETS_URL;

  // Graceful handling if the CMS data is missing
  if (!data) return null;

  const imagePath = data.image?.path;

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Card Container */}
        <div className="bg-white border rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center border-[#B1ADA1]/25">
          
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            {imagePath ? (
              <img
                src={`${ASSETS_URL}${imagePath}`}
                alt="Our Story"
                className="w-full h-auto rounded-2xl shadow-sm object-cover aspect-[4/3]"
              />
            ) : (
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2">
            <p className="font-['Sora'] text-[10px] font-semibold tracking-[0.1em] uppercase text-[#B1ADA1] mb-2">
              Our Story
            </p>
            
            <h3 className="font-['Sora'] text-2xl md:text-3xl font-semibold text-[#1a1714] mb-5 leading-tight">
              {data.title || "The Journey of DoStartup"}
            </h3>

            <div className="space-y-4">
              <p className="text-sm md:text-base text-[#7a7570] leading-relaxed">
                {data.para1}
              </p>
              <p className="text-sm md:text-base text-[#7a7570] leading-relaxed">
                {data.para2}
              </p>
            </div>
            
            <button className="mt-8 inline-flex items-center gap-1.5 font-['Sora'] text-xs font-semibold px-6 py-3 rounded-lg bg-[#C15F3C] text-white hover:bg-[#a84e30] transition-all hover:-translate-y-0.5 shadow-sm">
              Read Full Story
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}