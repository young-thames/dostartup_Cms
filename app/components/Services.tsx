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


import {
  Briefcase,
  Stamp,
  Calculator,
  FileText,
  Receipt,
  Wallet,
} from "lucide-react";

const ICON_MAP: any = {
  Briefcase: Briefcase,
  Stamp: Stamp,
  Calculator: Calculator,
  FileText: FileText,
  Receipt: Receipt,
  Wallet: Wallet,
};

// Cockpit base URL
const COCKPIT_BASE = "https://cms.dostartup.in";

// Cockpit APIs
const SERVICES_API =
  `${COCKPIT_BASE}/api/content/items/service`;

const SECTION_API =
  `${COCKPIT_BASE}/api/content/item/service_section`;

// Fetch from Cockpit
async function getServicesData() {

  const [sectionRes, servicesRes] = await Promise.all([
    fetch(SECTION_API, { cache: "no-store" }),
    fetch(SERVICES_API, { cache: "no-store" }),
  ]);

  const section = await sectionRes.json();
  const services = await servicesRes.json();

  return { section, services };
}

export default async function ServicesSection() {

  const { section, services } = await getServicesData();

  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Section title */}
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
          {section.title}
        </h3>

        {/* Section description */}
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          {section.description}
        </p>

        {/* Services grid */}
        <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {services.map((service: any, idx: number) => {

            const Icon = ICON_MAP[service.icon];

            return (
              <div
                key={service._id || idx}
                className="flex flex-col items-center text-center cursor-pointer hover:bg-slate-50 p-3 rounded transition"
              >

                {Icon && (
                  <Icon className="h-8 w-8 text-blue-600 mb-2" />
                )}

                <span className="text-sm font-medium text-gray-800">
                  {service.name}
                </span>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );

}