"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { GraduationCap, Users, UserCheck, ShieldCheck, Shirt, CheckCircle2 } from "lucide-react";

export default function StudentsPage() {
  const { lang } = useLanguage();

  const classData = [
    { name: { bn: "৬ষ্ঠ শ্রেণি", en: "Class 6" }, sections: "ক ও খ", boys: 135, girls: 145, total: 280 },
    { name: { bn: "৭ম শ্রেণি", en: "Class 7" }, sections: "ক ও খ", boys: 130, girls: 135, total: 265 },
    { name: { bn: "৮ম শ্রেণি", en: "Class 8" }, sections: "ক ও খ", boys: 120, girls: 130, total: 250 },
    { name: { bn: "৯ম শ্রেণি (সাধারণ)", en: "Class 9 (General)" }, sections: "বিজ্ঞান, মানবিক, ব্যবসায়", boys: 115, girls: 125, total: 240 },
    { name: { bn: "৯ম শ্রেণি (ভোকেশনাল)", en: "Class 9 (Vocational)" }, sections: "ইলেকট্রিক্যাল ও কম্পিউটার", boys: 60, girls: 25, total: 85 },
    { name: { bn: "১০ম শ্রেণি (সাধারণ)", en: "Class 10 (General)" }, sections: "বিজ্ঞান, মানবিক, ব্যবসায়", boys: 110, girls: 120, total: 230 },
    { name: { bn: "১০ম শ্রেণি (ভোকেশনাল)", en: "Class 10 (Vocational)" }, sections: "ইলেকট্রিক্যাল ও কম্পিউটার", boys: 70, girls: 30, total: 100 },
  ];

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "৪. শিক্ষার্থী তথ্য" : "4. Students Information"}
        category={lang === "bn" ? "পরিচিতি" : "About Us"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "শিক্ষার্থী পরিসংখ্যান ও নীতিমালা" : "Students Statistics & Guidelines"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "শিক্ষার্থী তথ্য ও আচরণবিধি" : "Students Information & Conduct"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "ভোজেশ্বর উচ্চ বিদ্যালয়ের ১৪৫০+ শিক্ষার্থীর শ্রেণিভিত্তিক তথ্য, ইউনিফর্ম এবং নিয়মাবলি"
              : "Class-wise distribution, uniform protocol, and code of conduct for 1450+ students"}
          </p>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
            <span className="text-xs text-slate-400 block">{lang === "bn" ? "মোট শিক্ষার্থী" : "Total Students"}</span>
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">১,৪৫০+</div>
            <p className="text-[11px] text-slate-500 mt-1">{lang === "bn" ? "৬ষ্ঠ থেকে ১০ম শ্রেণি" : "Class 6 to Class 10"}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
            <span className="text-xs text-slate-400 block">{lang === "bn" ? "ছাত্র সংখ্যা" : "Male Students"}</span>
            <div className="text-3xl font-extrabold text-slate-800 dark:text-white mt-1">৭৪০</div>
            <p className="text-[11px] text-slate-500 mt-1">{lang === "bn" ? "শতকরা ৫১%" : "51% of Total"}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
            <span className="text-xs text-slate-400 block">{lang === "bn" ? "ছাত্রী সংখ্যা" : "Female Students"}</span>
            <div className="text-3xl font-extrabold text-emerald-500 mt-1">৭১০</div>
            <p className="text-[11px] text-slate-500 mt-1">{lang === "bn" ? "শতকরা ৪৯% (সহশিক্ষা)" : "49% (Co-education)"}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
            <span className="text-xs text-slate-400 block">{lang === "bn" ? "ভোকেশনাল শাখা" : "Vocational Stream"}</span>
            <div className="text-3xl font-extrabold text-emerald-400 mt-1">১৮৫</div>
            <p className="text-[11px] text-slate-500 mt-1">{lang === "bn" ? "কারিগরি কোর্সে অধ্যয়নরত" : "Enrolled in BTEB Trades"}</p>
          </div>
        </div>

        {/* Class-wise Table */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl mb-10 overflow-hidden">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            {lang === "bn" ? "শ্রেণিভিত্তিক শিক্ষার্থী বণ্টন ২০২৬" : "Class-wise Student Enrollment 2026"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 uppercase font-semibold">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">{lang === "bn" ? "শ্রেণি" : "Class"}</th>
                  <th className="py-3 px-4">{lang === "bn" ? "শাখা / বিভাগ" : "Sections / Trade"}</th>
                  <th className="py-3 px-4">{lang === "bn" ? "ছাত্র" : "Boys"}</th>
                  <th className="py-3 px-4">{lang === "bn" ? "ছাত্রী" : "Girls"}</th>
                  <th className="py-3 px-4 rounded-r-lg">{lang === "bn" ? "সর্বমোট" : "Total"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {classData.map((cls, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{cls.name[lang]}</td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{cls.sections}</td>
                    <td className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">{cls.boys}</td>
                    <td className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">{cls.girls}</td>
                    <td className="py-3 px-4 font-extrabold text-emerald-600 dark:text-emerald-400">{cls.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Uniform & Conduct Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Shirt className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "নির্ধারিত স্কুল পোশাক (ইউনিফর্ম)" : "Prescribed School Uniform"}</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "ছাত্র: সাদা শার্ট, নেভি ব্লু ফুল প্যান্ট, কালো জুতো ও বিদ্যালয়ের নির্ধারিত ব্যাজ।" : "Boys: White shirt, Navy blue trousers, black shoes, and official badge."}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "ছাত্রী: নেভি ব্লু ফ্রক/কুর্তি, সাদা পায়জামা, সাদা ওড়না/স্কার্ফ ও সাদা কেডস/জুতো।" : "Girls: Navy blue frock/kurti, white salwar, white dupatta/scarf, and white shoes."}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "শীতকালীন পোশাক: গাঢ় নেভি ব্লু সোয়েটার বা ব্লেজার।" : "Winter: Dark navy blue sweater or blazer."}</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "শৃঙ্খলা ও সাধারণ আচরণবিধি" : "General Conduct & Discipline"}</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "সকাল ৮:৪৫ মিনিটের মধ্যে প্রাত্যহিক সমাবেশে অংশগ্রহণ বাধ্যতামূলক।" : "Mandatory presence in morning assembly by 8:45 AM."}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "ডিজিটাল হাজিরা নিশ্চিত করতে নির্ধারিত সময়ে ডিজিটাল কার্ড পাঞ্চ করতে হবে।" : "Students must scan their digital ID card at the entrance terminal."}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "ক্যাম্পাসে যেকোনো ধরনের মোবাইল ফোন বা ইলেকট্রনিক গেজেট আনা সম্পূর্ণ নিষিদ্ধ।" : "Mobile phones and personal electronic gadgets are strictly prohibited."}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
