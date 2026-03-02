// // app/components/ServicesSection.tsx
// import {
//   Briefcase,
//   Stamp,
//   Calculator,
//   FileText,
//   Receipt,
//   Wallet,
// } from "lucide-react";

// const services = [
//   { name: "Incorporation", icon: Briefcase },
//   { name: "Trademark", icon: Stamp },
//   { name: "Accounting", icon: Calculator },
//   { name: "Income Tax", icon: FileText },
//   { name: "GST Services", icon: Receipt },
//   { name: "Payroll", icon: Wallet },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
//           Explore our digital services stack
//         </h3>
//         <p className="text-gray-600 mb-8 text-sm md:text-base">
//           Grow your business and remain compliant by partnering with DoStartup
//           for a range of high-quality, business services from incorporation to
//           payroll delivered through a seamless online platform.
//         </p>

//         <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center text-center cursor-pointer hover:bg-slate-50 p-3 rounded transition"
//             >
//               <service.icon className="h-8 w-8 text-blue-600 mb-2" />
//               <span className="text-sm font-medium text-gray-800">
//                 {service.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import {
//   Briefcase,
//   Stamp,
//   Calculator,
//   FileText,
//   Receipt,
//   Wallet,
// } from "lucide-react";

// const ICON_MAP: any = {
//   Briefcase: Briefcase,
//   Stamp: Stamp,
//   Calculator: Calculator,
//   FileText: FileText,
//   Receipt: Receipt,
//   Wallet: Wallet,
// };

// // Cockpit base URL
// const COCKPIT_BASE = "https://cms.dostartup.in";

// // Cockpit APIs
// const SERVICES_API =
//   `${COCKPIT_BASE}/api/content/items/service`;

// const SECTION_API =
//   `${COCKPIT_BASE}/api/content/item/service_section`;

// // Fetch from Cockpit
// async function getServicesData() {

//   const [sectionRes, servicesRes] = await Promise.all([
//     fetch(SECTION_API, { cache: "no-store" }),
//     fetch(SERVICES_API, { cache: "no-store" }),
//   ]);

//   const section = await sectionRes.json();
//   const services = await servicesRes.json();

//   return { section, services };
// }

// export default async function ServicesSection() {

//   const { section, services } = await getServicesData();

//   return (
//     <section className="bg-white">

//       <div className="max-w-7xl mx-auto px-6 py-12">

//         {/* Section title */}
//         <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
//           {section.title}
//         </h3>

//         {/* Section description */}
//         <p className="text-gray-600 mb-8 text-sm md:text-base">
//           {section.description}
//         </p>

//         {/* Services grid */}
//         <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

//           {services.map((service: any, idx: number) => {

//             const Icon = ICON_MAP[service.icon];

//             return (
//               <div
//                 key={service._id || idx}
//                 className="flex flex-col items-center text-center cursor-pointer hover:bg-slate-50 p-3 rounded transition"
//               >

//                 {Icon && (
//                   <Icon className="h-8 w-8 text-blue-600 mb-2" />
//                 )}

//                 <span className="text-sm font-medium text-gray-800">
//                   {service.name}
//                 </span>

//               </div>
//             );

//           })}

//         </div>

//       </div>

//     </section>
//   );

// }
import {
  Briefcase,
  Stamp,
  Calculator,
  FileText,
  Receipt,
  Wallet,
} from "lucide-react";

/* ---------------- ICON MAP ---------------- */
const ICON_MAP: Record<string, any> = {
  Briefcase,
  Stamp,
  Calculator,
  FileText,
  Receipt,
  Wallet,
};

/* ---------------- INTERFACE ---------------- */
interface ServicesProps {
  initialServices: any[];
}

export default function Services({ initialServices = [] }: ServicesProps) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-8">
          <p className="font-['Sora'] text-[10px] font-semibold tracking-[0.1em] uppercase text-[#B1ADA1] mb-1.5">
            Expert Solutions
          </p>
          <h3 className="font-['Sora'] text-xl md:text-2xl font-semibold text-[#1a1714]">
            Our Services
          </h3>
          <p className="text-[#7a7570] text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
            We provide expert financial and legal solutions tailored to your business needs, 
            ensuring growth and compliance at every step.
          </p>
        </div>

        {/* Services Grid Container */}
        <div className="bg-white border border-[#B1ADA1]/25 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {initialServices.map((service: any) => {
            // Match the string from Cockpit to the Lucide component
            const Icon = ICON_MAP[service.icon] || Briefcase;

            return (
              <div
                key={service._id}
                className="group flex flex-col items-center text-center cursor-pointer p-4 rounded-2xl transition-all duration-300 hover:bg-[#F9F8F4]"
              >
                {/* Icon Container */}
                <div className="p-4 rounded-2xl bg-[#F4F3EE] group-hover:bg-white group-hover:shadow-sm transition-all duration-300 mb-4">
                  <Icon className="h-7 w-7 text-[#C15F3C]" />
                </div>

                <span className="font-['Sora'] text-xs font-semibold text-[#3d3a35] group-hover:text-[#1a1714] transition-colors leading-tight">
                  {service.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-8 text-center md:text-right">
            <button className="text-xs font-['Sora'] font-semibold text-[#C15F3C] hover:text-[#a84e30] flex items-center gap-2 md:ml-auto">
                View All Services <span>→</span>
            </button>
        </div>

      </div>
    </section>
  );
}