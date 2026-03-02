// "use client";

// import { Bell, CalendarDays } from "lucide-react";
// import { useEffect, useState } from "react";

// const UPDATES_API =
//   "https://cms.dostartup.in/api/content/items/update";

// const DUEDATE_API =
//   "https://cms.dostartup.in/api/content/items/duedate";

// export default function UpdatesAndDueDates() {

//   const [updates, setUpdates] = useState<any[]>([]);
//   const [dueDates, setDueDates] = useState<any[]>([]);

//   useEffect(() => {
//     fetchUpdates();
//     fetchDueDates();
//   }, []);

//   async function fetchUpdates() {

//     try {

//       const res = await fetch(UPDATES_API, {
//         cache: "no-store",
//       });

//       const data = await res.json();

//       if (!Array.isArray(data)) return;

//       // Sort by publishedDate (latest first)
//       const sorted = data.sort(
//         (a, b) =>
//           new Date(b.publishedDate).getTime() -
//           new Date(a.publishedDate).getTime()
//       );

//       setUpdates(sorted);

//     } catch (error) {

//       console.error("Updates fetch error:", error);

//     }

//   }

//   async function fetchDueDates() {

//     try {

//       const res = await fetch(DUEDATE_API, {
//         cache: "no-store",
//       });

//       const data = await res.json();

//       if (!Array.isArray(data)) return;

//       // Sort by due-date (earliest first)
//       const sorted = data.sort(
//         (a, b) =>
//           new Date(a["due-date"]).getTime() -
//           new Date(b["due-date"]).getTime()
//       );

//       setDueDates(sorted);

//     } catch (error) {

//       console.error("DueDates fetch error:", error);

//     }

//   }

//   return (

//     <section className="bg-white">

//       <div className="max-w-7xl mx-auto px-6 py-12">

//         <div className="grid md:grid-cols-2 gap-6">

//           {/* Updates & Alerts */}
//           <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">

//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
//               <Bell className="w-5 h-5 text-blue-600" />
//               Updates & Alerts
//             </h3>

//             <div className="space-y-4 max-h-64 overflow-y-auto pr-2">

//               {updates.map((item, idx) => (

//                 <div
//                   key={item._id || idx}
//                   className="relative pl-4 border-l border-gray-200"
//                 >

//                   <div className="absolute -left-[5px] top-2 w-2 h-2 bg-blue-500 rounded-full"></div>

//                   <div className="p-2 hover:bg-blue-50 rounded-lg">

//                     {/* IMPORTANT: field name is titile */}
//                     <p className="text-blue-600 text-sm font-medium">
//                       {item.titile}
//                     </p>

//                     <p className="text-xs text-gray-500 mt-1">
//                       Published on: {item.publishedDate}
//                     </p>

//                     <span className="inline-block text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded mt-1">
//                       {item.tag}
//                     </span>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>


//           {/* Due Dates */}
//           <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">

//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
//               <CalendarDays className="w-5 h-5 text-blue-600" />
//               Due Dates
//             </h3>

//             <div className="space-y-4 max-h-64 overflow-y-auto pr-2">

//               {dueDates.map((item, idx) => (

//                 <div
//                   key={item._id || idx}
//                   className="relative pl-4 border-l border-gray-200"
//                 >

//                   <div className="absolute -left-[5px] top-2 w-2 h-2 bg-blue-500 rounded-full"></div>

//                   <div className="p-2 hover:bg-blue-50 rounded-lg">

//                     <p className="text-gray-800 text-sm font-medium">
//                       {item.title}
//                     </p>

//                     <p className="text-xs text-gray-500 mt-1">
//                       Due Date: {item["due-date"]}
//                     </p>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }"use client";
"use client";

import { Bell, CalendarDays } from "lucide-react";

interface UpdateItem {
  _id: string;
  titile: string; // CMS typo preserved
  publishedDate: string;
  tag?: string;
}

interface DueDateItem {
  _id: string;
  title: string;
  "due-date": string;
}

interface UpdatesProps {
  initialUpdates: UpdateItem[];
  initialDueDates: DueDateItem[];
}

export default function UpdatesAndDueDates({ 
  initialUpdates = [], 
  initialDueDates = [] 
}: UpdatesProps) {
  
  // Sort Updates: Latest first
  const sortedUpdates = [...initialUpdates].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  // Sort Due Dates: Earliest first
  const sortedDueDates = [...initialDueDates].sort(
    (a, b) => new Date(a["due-date"]).getTime() - new Date(b["due-date"]).getTime()
  );

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* 1. Updates & Alerts Panel */}
          <div className="bg-white border border-[#B1ADA1]/25 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 md:p-8">
            <h3 className="font-['Sora'] text-lg md:text-xl font-semibold text-[#1a1714] mb-6 flex items-center gap-3">
              <div className="p-2 bg-[#EFEDE6] rounded-lg">
                <Bell className="w-5 h-5 text-[#C15F3C]" />
              </div>
              Updates & Alerts
            </h3>

            <div className="space-y-2 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
              {sortedUpdates.map((item) => (
                <div key={item._id} className="group relative pl-6 py-3 border-l-2 border-[#EFEDE6] hover:border-[#C15F3C] transition-colors">
                  <div className="absolute -left-[5px] top-5 w-2 h-2 bg-[#B1ADA1] group-hover:bg-[#C15F3C] rounded-full transition-colors"></div>
                  <div className="hover:bg-[#F9F8F4] p-3 rounded-xl transition-all">
                    <p className="font-['Sora'] text-sm font-semibold text-[#3d3a35] group-hover:text-[#1a1714]">
                      {item.titile}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <p className="text-[11px] text-[#7a7570] font-medium uppercase tracking-wider">
                        {item.publishedDate}
                      </p>
                      {item.tag && (
                        <span className="text-[9px] bg-[#EFEDE6] text-[#C15F3C] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Due Dates Panel */}
          <div className="bg-white border border-[#B1ADA1]/25 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 md:p-8">
            <h3 className="font-['Sora'] text-lg md:text-xl font-semibold text-[#1a1714] mb-6 flex items-center gap-3">
              <div className="p-2 bg-[#EFEDE6] rounded-lg">
                <CalendarDays className="w-5 h-5 text-[#C15F3C]" />
              </div>
              Important Due Dates
            </h3>

            <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
              {sortedDueDates.map((item) => (
                <div key={item._id} className="flex items-center justify-between p-4 bg-[#F9F8F4] rounded-2xl border border-transparent hover:border-[#B1ADA1]/30 transition-all group">
                  <div>
                    <p className="font-['Sora'] text-sm font-semibold text-[#3d3a35]">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[#C15F3C] font-bold mt-1 uppercase">
                      Due: {item["due-date"]}
                    </p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[#B1ADA1] group-hover:text-[#C15F3C] transition-colors shadow-sm text-[10px] font-bold">
                    →
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #F4F3EE; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #B1ADA1; border-radius: 10px; }
      `}</style>
    </section>
  );
}