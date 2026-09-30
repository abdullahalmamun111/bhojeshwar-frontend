"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { schoolInfo } from "@/data/schoolInfo";
import { Users, GraduationCap, Award, Building, BookCheck } from "lucide-react";

export const StatsBanner: React.FC = () => {
  const { lang, t } = useLanguage();

  const stats = [
    {
      value: "৫০+",
      label: { bn: "শিক্ষক ও কর্মচারী", en: "Teachers & Staff" },
      icon: Users,
    },
    {
      value: "১৪৫০+",
      label: { bn: "বর্তমান শিক্ষার্থী", en: "Enrolled Students" },
      icon: GraduationCap,
    },
    {
      value: "৩২+",
      label: { bn: "শ্রেণিকক্ষ ও আধুনিক ল্যাব", en: "Classrooms & Tech Labs" },
      icon: Building,
    },
    {
      value: "৯৮.৭%",
      label: { bn: "এসএসসি পাসের গড় হার", en: "SSC Pass Rate" },
      icon: Award,
    },
    {
      value: "২৫,০৪০+",
      label: { bn: "সফল প্রাক্তন শিক্ষার্থী", en: "Proud Alumni" },
      icon: BookCheck,
    },
  ];

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 text-white p-8 sm:p-10 shadow-2xl overflow-hidden border border-emerald-400/30">
        {/* Subtle decorative circles */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative text-center mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-200">
            {lang === "bn" ? "আমাদের সাফল্য ও সামর্থ্য" : "Our Institutional Strength"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {lang === "bn" ? "সংখ্যার প্রতিচ্ছবিতে ভোজেশ্বর উচ্চ বিদ্যালয়" : "Our Strength in Numbers"}
          </h2>
        </div>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all hover:scale-105 duration-200 text-center"
              >
                <div className="p-2 rounded-xl bg-white/10 text-emerald-200 mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs text-emerald-100 font-medium mt-1">
                  {item.label[lang]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
