"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Laptop, Cpu, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const { lang } = useLanguage();

  const features = [
    {
      title: {
        bn: "সমৃদ্ধ বিজ্ঞানাগার ও আধুনিক কম্পিউটার ল্যাব",
        en: "Advanced Science & Multimedia IT Labs",
      },
      desc: {
        bn: "ব্যবহারিক বিজ্ঞানের জন্য পৃথক ফিজিক্স, কেমিস্ট্রি, বায়োলজি ল্যাব এবং উচ্চগতির ইন্টারনেট সমৃদ্ধ শেখ রাসেল ডিজিটাল আইসিটি ল্যাব।",
        en: "Dedicated Physics, Chemistry, Biology laboratories alongside high-speed internet-enabled Sheikh Russel Multimedia ICT Lab.",
      },
      icon: Laptop,
      points: {
        bn: ["মাল্টিমিডিয়া প্রজেক্টর সমৃদ্ধ ক্লাসরুম", "ব্যবহারিক পরীক্ষার শতভাগ সুযোগ"],
        en: ["Smart multimedia classrooms", "100% hands-on laboratory experiments"],
      },
    },
    {
      title: {
        bn: "যুগোপযোগী ভোকেশনাল ও কারিগরি শিক্ষা",
        en: "Job-Oriented Technical & Vocational Branch",
      },
      desc: {
        bn: "বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে জেনারেল ইলেকট্রিক্যাল ওয়ার্কস ও তথ্যপ্রযুক্তি ট্রেডে দক্ষতা অর্জন করে সরাসরি কর্মসংস্থানের সুযোগ।",
        en: "BTEB-accredited General Electrical Works and IT trades preparing students directly for technical employment.",
      },
      icon: Cpu,
      points: {
        bn: ["সার্টিফিকেশন ও চাকরির বিশেষ সুযোগ", "দক্ষ ট্রেড ইন্সট্রাক্টরের তত্ত্বাবধান"],
        en: ["National skills certification", "Supervised by certified engineers"],
      },
    },
    {
      title: {
        bn: "সুশৃঙ্খল সহশিক্ষা ও নিরাপদ ক্যাম্পাস",
        en: "Safe Co-Education & Moral Environment",
      },
      desc: {
        bn: "সিসিটিভি ক্যামেরায় সার্বক্ষণিক নিরাপত্তা, নিয়মিত ডিজিটাল হাজিরা এসএমএস অ্যালার্ট এবং ছাত্র-ছাত্রীদের আলাদা কমনরুম ও শৃঙ্খলাপরায়ণ পরিবেশ।",
        en: "24/7 CCTV surveillance, automated digital attendance alerts to parents, and a secure, ethical co-educational atmosphere.",
      },
      icon: ShieldCheck,
      points: {
        bn: ["অভিভাবকদের জন্য এসএমএস নোটিফিকেশন", "স্কাউট ও গার্লস গাইডের সুরক্ষা বলয়"],
        en: ["Instant SMS attendance to guardians", "Active Scout & Guide vigil"],
      },
    },
  ];

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          {lang === "bn" ? "আমাদের অনন্য বৈশিষ্ট্য" : "Our Distinctions"}
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === "bn" ? "কেন ভোজেশ্বর উচ্চ বিদ্যালয় বেছে নেবেন?" : "Why Choose Bhojeshwar High School?"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {lang === "bn"
            ? "আধুনিক শিক্ষা, চরিত্র গঠন ও প্রযুক্তিগত দক্ষতার একটি পূর্ণাঙ্গ মেলবন্ধন"
            : "A harmonious integration of academic excellence, character building, and technical skills"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {item.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.desc[lang]}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                {item.points[lang].map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
