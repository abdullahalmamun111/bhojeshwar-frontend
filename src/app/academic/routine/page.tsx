"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { sampleClassRoutines } from "@/data/routine";
import { Calendar, Download, Clock, BookOpen, User, Building, Printer } from "lucide-react";

export default function RoutinePage() {
  const { lang } = useLanguage();
  const [selectedClass, setSelectedClass] = useState("10");

  const currentRoutine = sampleClassRoutines[selectedClass] || sampleClassRoutines["10"];

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "৬. ক্লাস রুটিন" : "6. Class Routine"}
        category={lang === "bn" ? "একাডেমিক" : "Academic"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "দৈনিক সময়সূচি" : "Daily Academic Schedule"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "শ্রেণিভিত্তিক ক্লাস রুটিন ২০২৬" : "Class Routine Schedule 2026"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "সাধারণ ও ভোকেশনাল শাখার পিরিয়ডভিত্তিক ক্লাস সময়সূচি ও শিক্ষক বণ্টন"
              : "Period-wise daily timetable and assigned educators for general & vocational streams"}
          </p>
        </div>

        {/* Class Selection & Action Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 mr-2">
              {lang === "bn" ? "শ্রেণি নির্বাচন করুন:" : "Select Class:"}
            </span>
            {[
              { id: "10", label: lang === "bn" ? "১০ম শ্রেণি (বিজ্ঞান)" : "Class 10 (Sci)" },
              { id: "10-voc", label: lang === "bn" ? "১০ম শ্রেণি (ভোকেশনাল)" : "Class 10 (Voc)" },
              { id: "9", label: lang === "bn" ? "৯ম শ্রেণি" : "Class 9" },
              { id: "8", label: lang === "bn" ? "৮ম শ্রেণি" : "Class 8" },
              { id: "7", label: lang === "bn" ? "৭ম শ্রেণি" : "Class 7" },
              { id: "6", label: lang === "bn" ? "৬ষ্ঠ শ্রেণি" : "Class 6" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedClass(btn.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedClass === btn.id
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-500 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === "bn" ? "প্রিন্ট" : "Print"}</span>
            </button>

            <button
              onClick={() => alert(lang === "bn" ? "অফিসিয়াল রুটিন পিডিএফ ডাউনলোড হচ্ছে..." : "Downloading routine PDF...")}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === "bn" ? "পিডিএফ ডাউনলোড" : "Download PDF"}</span>
            </button>
          </div>
        </div>

        {/* Current Class Header */}
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block">{lang === "bn" ? "নির্বাচিত শ্রেণি:" : "Selected Class:"}</span>
            <span className="font-extrabold text-base text-emerald-800 dark:text-emerald-300">
              {currentRoutine.className} (শাখা {currentRoutine.section})
            </span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400 block">{lang === "bn" ? "সময় ব্যাপ্তি:" : "Shift & Timing:"}</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {currentRoutine.shift[lang]}
            </span>
          </div>
        </div>

        {/* Routine Day Cards */}
        <div className="space-y-6">
          {currentRoutine.days.map((dayItem, dIdx) => (
            <div
              key={dIdx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {dayItem.day[lang]}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-semibold uppercase">
                    <tr>
                      <th className="py-2.5 px-3 rounded-l-lg">{lang === "bn" ? "পিরিয়ড" : "Period"}</th>
                      <th className="py-2.5 px-3">{lang === "bn" ? "সময়সূচি" : "Time"}</th>
                      <th className="py-2.5 px-3">{lang === "bn" ? "বিষয়" : "Subject"}</th>
                      <th className="py-2.5 px-3">{lang === "bn" ? "শিক্ষক" : "Teacher"}</th>
                      <th className="py-2.5 px-3 rounded-r-lg">{lang === "bn" ? "কক্ষ" : "Room"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {dayItem.periods.map((period, pIdx) => (
                      <tr key={pIdx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="py-3 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                          {lang === "bn" ? `${period.period}ম পিরিয়ড` : `Period ${period.period}`}
                        </td>
                        <td className="py-3 px-3 font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{period.time}</span>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                          {period.subject[lang]}
                        </td>
                        <td className="py-3 px-3 text-slate-700 dark:text-slate-300">
                          {period.teacher[lang]}
                        </td>
                        <td className="py-3 px-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                          {period.room}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
