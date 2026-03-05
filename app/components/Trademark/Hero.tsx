"use client";

import React, { useState } from "react";
import { BadgeCheck, Search, User, Briefcase } from "lucide-react";

/* ================= TYPES ================= */

type Feature = {
  icon: React.ReactNode;
  text: string;
};

type FormField =
  | {
      type: "input";
      name: string;
      placeholder: string;
      inputType?: string;
    }
  | {
      type: "select";
      name: string;
      placeholder: string;
      options: string[];
    };

type TrademarkServiceProps = {
  serviceName: string;
  serviceDescription: string;
  formFields: FormField[];
  buttonText: string;
};

type Props = {
  trademarkService: TrademarkServiceProps;
  onSubmit?: (data: Record<string, string>) => Promise<void> | void;
};

/* ================= COMPONENT ================= */

export default function TrademarkHero({
  trademarkService,
  onSubmit,
}: Props) {
  const {
    serviceName,
    serviceDescription,
    formFields,
    buttonText,
  } = trademarkService;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as Record<string, string>;

    try {
      setLoading(true);
      setSuccess(null);

      if (onSubmit) {
        await onSubmit(formData);
      }

      setSuccess("Form submitted successfully!");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT SECTION ================= */}
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Manage & Track your{" "}
            <span className="text-blue-600 underline decoration-4 underline-offset-8">
              Trademark
            </span>{" "}
            Application
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            AI-powered search and government-backed filings, handled end-to-end
            by India’s most trusted compliance platform.
          </p>

          <ul className="space-y-5 pt-4">
            {STATIC_FEATURES.map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="font-medium text-gray-800">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="bg-white rounded-xl shadow-xl border overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400" />

          <div className="p-8 space-y-6">
            {/* Service Selector */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Trademark Services
              </h3>

              <select className="mt-3 w-full border rounded-lg px-4 py-3 text-sm">
                <option>{serviceName}</option>
              </select>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
              {serviceDescription}
            </p>

            {/* Dynamic Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {formFields.map((field, i) => {
                if (field.type === "input") {
                  return (
                    <input
                      key={i}
                      name={field.name}
                      type={field.inputType || "text"}
                      placeholder={field.placeholder}
                      required
                      className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  );
                }

                if (field.type === "select") {
                  return (
                    <select
                      key={i}
                      name={field.name}
                      required
                      className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  );
                }

                return null;
              })}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {loading ? "Submitting..." : buttonText}
              </button>

              {success && (
                <p className="text-green-600 text-sm font-medium">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STATIC FEATURES ================= */

const STATIC_FEATURES: Feature[] = [
  {
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    text: "100% Legal Validity & Govt. Filing Guarantee",
  },
  {
    icon: <Search className="w-5 h-5 text-blue-600" />,
    text: "AI-Powered Trademark Search & Filing",
  },
  {
    icon: <User className="w-5 h-5 text-blue-600" />,
    text: "Dedicated Experts & Compliance Support",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    text: "MSME Priority Pricing & Global Protection",
  },
];