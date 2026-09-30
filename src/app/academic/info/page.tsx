"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Calendar, Award, BookOpen, Clock, CheckCircle2 } from "lucide-react";

export default function AcademicInfoPage() {
  const { lang } = useLanguage();

  const examTerms = [
    {
      term: { bn: "অর্ধবার্ষিক / সামষ্টিক মূল্যায়ন ১", en: "Half-Yearly Evaluation 1" },
      date: { bn: "জুন ১৫ - জুন ৩০, ২০২৬", en: "June 15 - June 30, 2026" },
      classes: "৬ষ্ঠ থেকে ১০ম শ্রেণি (সকল শাখা)",
      status: { bn: "সম্পন্ন", en: "Completed" },
    },
    {
      term: { bn: "প্রাক-নির্বাচনী পরীক্ষা (১০ম শ্রেণি ও ভোকেশনাল)", en: "Pre-Test Examination" },
      date: { bn: "আগস্ট ২০ - সেপ্টেম্বর ০৫, ২০২৬", en: "August 20 - September 05, 2026" },
      classes: "১০ম শ্রেণি (বিজ্ঞান, মানবিক, ব্যবসায় ও ভোকেশনাল)",
      status: { bn: "ফলাফল প্রকাশিত", en: "Result Published" },
    },
    {
      term: { bn: "নির্বাচনী (টেস্ট) পরীক্ষা ২০২৬", en: "Test Examination 2026" },
      date: { bn: "অক্টোবর ২৫ - নভেম্বর ১০, ২০২৬", en: "October 25 - November 10, 2026" },
      classes: "এসএসসি ও এসএসসি ভোকেশনাল পরীক্ষার্থী",
      status: { bn: "আসন্ন", en: "Upcoming" },
    },
    {
      term: { bn: "বার্ষিক পরীক্ষা ও চূড়ান্ত মূল্যায়ন", en: "Annual Examination & Final Evaluation" },
      date: { bn: "নভেম্বর ২০ - ডিসেম্বর ১০, ২০২৬", en: "November 20 - December 10, 2026" },
      classes: "৬ষ্ঠ থেকে ৯ম শ্রেণি",
      status: { bn: "আসন্ন", en: "Upcoming" },
    },
  ];

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "৮. একাডেমিক তথ্য ও বর্ষপঞ্জি" : "8. Academic Info & Calendar"}
        category={lang === "bn" ? "একাডেমিক" : "Academic"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "শিক্ষাবর্ষ ২০২৬" : "Academic Session 2026"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "একাডেমিক তথ্য ও বর্ষপঞ্জি" : "Academic Calendar & Guidelines"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "পরীক্ষার সময়সূচি, ফলাফল প্রকাশের তারিখ ও জাতীয় শিক্ষাক্রম মূল্যায়ন নির্দেশিকা"
              : "Academic calendar, term examinations, and national evaluation criteria"}
          </p>
        </div>

        {/* Exam Schedule Table */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl mb-10 overflow-hidden">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-500" />
            <span>{lang === "bn" ? "২০২৬ শিক্ষাবর্ষের প্রধান পরীক্ষা ও মূল্যায়নের সময়সূচি" : "Examination & Evaluation Schedule 2026"}</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 uppercase font-semibold">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">{lang === "bn" ? "মূল্যায়ন / পরীক্ষার নাম" : "Exam Name"}</th>
                  <th className="py-3 px-4">{lang === "bn" ? "অনুষ্ঠানের সম্ভাব্য তারিখ" : "Expected Dates"}</th>
                  <th className="py-3 px-4">{lang === "bn" ? "প্রযোজ্য শ্রেণি" : "Applicable Classes"}</th>
                  <th className="py-3 px-4 rounded-r-lg">{lang === "bn" ? "বর্তমান অবস্থা" : "Status"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {examTerms.map((term, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">{term.term[lang]}</td>
                    <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-medium">{term.date[lang]}</td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{term.classes}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        {term.status[lang]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Grading System Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "জাতীয় গ্রেডিং স্কেল (এসএসসি ও সাধারণ)" : "National Grading Scale (SSC & General)"}</span>
            </h3>
            <div className="grid grid-cols-3 gap-2 text-xs text-center">
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 font-semibold">
                <div className="text-emerald-600 font-bold">৮০ - ১০০%</div>
                <div>A+ (জিপিএ ৫.০০)</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 font-semibold">
                <div className="text-emerald-600 font-bold">৭০ - ৭৯%</div>
                <div>A (জিপিএ ৪.০০)</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 font-semibold">
                <div className="text-emerald-600 font-bold">৬০ - ৬৯%</div>
                <div>A- (জিপিএ ৩.৫০)</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 font-semibold">
                <div className="text-emerald-600 font-bold">৫০ - ৫৯%</div>
                <div>B (জিপিএ ৩.০০)</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 font-semibold">
                <div className="text-emerald-600 font-bold">৪০ - ৪৯%</div>
                <div>C (জিপিএ ২.০০)</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 font-semibold">
                <div className="text-emerald-600 font-bold">৩৩ - ৩৯%</div>
                <div>D (জিপিএ ১.০০)</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "দৈনিক কার্যঘণ্টা ও উপস্থিতি নীতি" : "Daily Hours & Attendance Policy"}</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "বিদ্যালয়ের সময়সূচি: সকাল ৯:০০ টা থেকে বিকাল ৩:৩০ টা পর্যন্ত।" : "School hours: 9:00 AM to 3:30 PM (Sunday to Thursday)."}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "বার্ষিক পরীক্ষায় অংশগ্রহণের জন্য ন্যূনতম ৭৫% ডিজিটাল উপস্থিতি বাধ্যতামূলক।" : "Minimum 75% digital attendance is required to sit for final exams."}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? "অনুপস্থিতির ক্ষেত্রে অভিভাবকের স্বাক্ষরযুক্ত আবেদনপত্র গ্রহণযোগ্য।" : "Absence requires written consent from registered parents."}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
