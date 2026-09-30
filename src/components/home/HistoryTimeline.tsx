"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { schoolInfo } from "@/data/schoolInfo";
import { Calendar, Award, CheckCircle2, ChevronRight, Landmark } from "lucide-react";

export const HistoryTimeline: React.FC = () => {
  const { lang } = useLanguage();

  const milestones = [
    {
      year: "১৯৭৮ / 1978",
      title: {
        bn: "বিদ্যালয় প্রতিষ্ঠা ও নিম্ন মাধ্যমিক অনুমোদন",
        en: "Founding & Junior Secondary Approval",
      },
      desc: {
        bn: "১লা জানুয়ারি ১৯৭৮ সালে শরীয়তপুর জেলার নড়িয়া উপজেলার মাশুরা গ্রামে শিক্ষার আলো ছড়িয়ে দিতে স্থানীয় শিক্ষানুরাগী ও বিশিষ্ট ব্যক্তিবর্গের উদ্যোগে প্রতিষ্ঠিত হয়।",
        en: "Established on January 1, 1978 in Mashura village, Naria, Shariatpur by local philanthropists to illuminate rural education.",
      },
      tag: { bn: "ঐতিহাসিক সূচনা", en: "Historic Inception" },
    },
    {
      year: "১৯৮৫ / 1985",
      title: {
        bn: "মাধ্যমিক পর্যায় স্বীকৃতি ও বিজ্ঞান বিভাগ চালু",
        en: "Secondary Recognition & Science Stream",
      },
      desc: {
        bn: "ঢাকা শিক্ষা বোর্ড কর্তৃক পূর্ণাঙ্গ মাধ্যমিক বিদ্যালয় হিসেবে স্বীকৃতি লাভ এবং বিজ্ঞান ও মানবিক বিভাগের শুভ সূচনা।",
        en: "Full secondary accreditation from Dhaka Board and introduction of Science and Humanities disciplines.",
      },
      tag: { bn: "শিক্ষা সম্প্রসারণ", en: "Expansion" },
    },
    {
      year: "১৯৯৮ / 1998",
      title: {
        bn: "কারিগরি শিক্ষা বোর্ডের অধীনে এসএসসি ভোকেশনাল শাখা সংযোজন",
        en: "SSC Vocational Technical Branch Addition",
      },
      desc: {
        bn: "বাংলাদেশ কারিগরি শিক্ষা বোর্ডের (BTEB) অধীনে জেনারেল ইলেকট্রিক্যাল ওয়ার্কস ও কারিগরি শিক্ষা চালু হয়, যা এলাকার শিক্ষার্থীদের কর্মসংস্থানের পথ উন্মোচন করে।",
        en: "Affiliated with BTEB to deliver General Electrical Works and vocational skills training for young professionals.",
      },
      tag: { bn: "যুগান্তকারী অর্জন", en: "Milestone Trade" },
    },
    {
      year: "২০২৬ / 2026",
      title: {
        bn: "স্মার্ট ক্যাম্পাস, ডিজিটাল হাজিরা ও অনলাইন ফলাফল",
        en: "Smart Campus, Digital Attendance & Web Portal",
      },
      desc: {
        bn: "আধুনিক ডিজিটাল হাজিরা ট্র্যাকিং, অনলাইন পরীক্ষার মার্কশিট, কম্পিউটার ল্যাব ও সুসজ্জিত ক্লাসরুম সমৃদ্ধ স্মার্ট একাডেমিয়া।",
        en: "State-of-the-art digital attendance tracking, live result search, and upgraded multimedia classrooms.",
      },
      tag: { bn: "স্মার্ট রূপান্তর", en: "Smart Academia" },
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-[#071320] border-y border-slate-200 dark:border-emerald-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "আমাদের গৌরবময় ইতিহাস" : "Our Glorious History"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "ইতিহাস ও ৪৭ বছরের পথচলা" : "History & 47-Year Journey"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {lang === "bn"
              ? "১৯৭৮ সাল থেকে মাশুরা, নড়িয়া ও শরীয়তপুরের প্রজন্মকে আলোকিত করার অবিরাম পদযাত্রা"
              : "Illuminating generations in Mashura, Naria, and Shariatpur since 1978"}
          </p>
        </div>

        {/* Content Grid: Left Photo + Right Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Campus Photo & Fast Facts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-emerald-800/40 group">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop"
                alt="School Campus"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 px-2 py-0.5 rounded w-fit mb-2">
                  {lang === "bn" ? "মূল ভবন ও ক্যাম্পাস" : "Main Building & Campus"}
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {lang === "bn" ? "ভোজেশ্বর উচ্চ বিদ্যালয় (মাশুরা, নড়িয়া)" : "Bhojeshwar High School (Mashura, Naria)"}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {lang === "bn" ? "সুবিশাল খেলার মাঠ ও মনোরম গ্রামীণ পরিবেশ" : "Expansive playground with picturesque lush greenery"}
                </p>
              </div>
            </div>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-sm">
                <div className="text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400">১৯৭৮</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  {lang === "bn" ? "প্রতিষ্ঠা" : "Founded"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-sm">
                <div className="text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400">১১৩৫৮৭</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">EIIN</div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-sm">
                <div className="text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400">৪৭+ বছর</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  {lang === "bn" ? "ঐতিহ্য" : "Legacy"}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline items (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 hover:border-emerald-500/60 shadow-md hover:shadow-xl transition-all duration-200"
              >
                {/* Year Marker */}
                <div className="flex flex-col items-center justify-center min-w-[70px] sm:min-w-[80px] py-2 px-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0 text-center">
                  <Calendar className="w-4 h-4 mb-1" />
                  <span className="text-xs sm:text-sm font-extrabold tracking-tight">
                    {item.year.split(" / ")[0]}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title[lang]}
                    </h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      {item.tag[lang]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2 text-right">
              <Link
                href="/about/history"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group"
              >
                <span>{lang === "bn" ? "পূর্ণাঙ্গ ইতিহাস ও পটভূমি পড়ুন" : "Read Full Comprehensive History"}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
