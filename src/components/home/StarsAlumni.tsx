"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Award, GraduationCap, Star } from "lucide-react";

export const StarsAlumni: React.FC = () => {
  const { lang } = useLanguage();

  const stars = [
    {
      name: { bn: "ড. শরিফুল ইসলাম", en: "Dr. Shariful Islam" },
      batch: "SSC 2004",
      current: {
        bn: "সহযোগী অধ্যাপক ও গবেষক (চিকিৎসা বিজ্ঞান)",
        en: "Associate Professor & Medical Researcher",
      },
      badge: { bn: "চিকিৎসক", en: "Doctor" },
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: { bn: "প্রকৌশলী মাহমুদা জাহান", en: "Engr. Mahmuda Jahan" },
      batch: "SSC 2012 (বিজ্ঞান)",
      current: {
        bn: "সফটওয়্যার আর্কিটেক্ট (বুয়েট গ্র্যাজুয়েট)",
        en: "Software Architect (BUET Graduate)",
      },
      badge: { bn: "প্রকৌশলী", en: "Engineer" },
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: { bn: "মোঃ আশরাফুল আলম", en: "Md. Ashraful Alam" },
      batch: "SSC 2018 (ভোকেশনাল)",
      current: {
        bn: "প্রধান প্রকৌশল টেকনিশিয়ান (পাওয়ার গ্রিড)",
        en: "Lead Engineering Technician (Power Grid)",
      },
      badge: { bn: "কারিগরি তারকা", en: "Tech Star" },
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: { bn: "সাদিয়া নাসরিন", en: "Sadia Nasreen" },
      batch: "SSC 2024",
      current: {
        bn: "বোর্ড বৃত্তিপ্রাপ্ত (জিপিএ ৫.০০, ঢাকা বিশ্ববিদ্যালয়)",
        en: "Board Scholar (GPA 5.00, DU Student)",
      },
      badge: { bn: "জিপিএ ৫.০০", en: "GPA 5.00" },
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-[#071320] border-y border-slate-200 dark:border-emerald-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{lang === "bn" ? "আমাদের গর্ব ও প্রেরণা" : "Our Pride & Inspiration"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "প্রতিষ্ঠানের কৃতি শিক্ষার্থী ও অ্যালামনাই" : "Stars of Our Institution"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {lang === "bn"
              ? "ভোজেশ্বর উচ্চ বিদ্যালয়ের প্রাক্তন শিক্ষার্থীরা দেশ ও প্রবাসে জাতীয় অগ্রগতিতে অবদান রাখছেন"
              : "Our distinguished alumni illuminating national and international horizons with excellence"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stars.map((star, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 text-center flex flex-col justify-between"
            >
              <div>
                <div className="relative w-22 h-22 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow group-hover:scale-105 transition-transform">
                  <img
                    src={star.image}
                    alt={star.name[lang]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-emerald-500 text-slate-950 font-bold text-[9px] py-0.5">
                    {star.batch}
                  </div>
                </div>

                <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-2">
                  {star.badge[lang]}
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {star.name[lang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {star.current[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
