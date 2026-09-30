"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { syllabusData } from "@/data/routine";
import { BookOpen, Download, FileText, HelpCircle, CheckCircle, Search } from "lucide-react";

export default function SyllabusPage() {
  const { lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const questionBanks = [
    { title: { bn: "১০ম শ্রেণি বিজ্ঞান নির্বাচনী প্রশ্ন ব্যাংক ২০২৫-২০২৬", en: "Class 10 Science Test Question Bank" }, size: "3.2 MB", year: "2026" },
    { title: { bn: "এসএসসি ভোকেশনাল ইলেকট্রিক্যাল ট্রেড বোর্ড প্রশ্ন সমাধান", en: "SSC Vocational Electrical Board Questions" }, size: "4.5 MB", year: "2025" },
    { title: { bn: "৯ম শ্রেণি অর্ধবার্ষিক বাংলা ও ইংরেজি মডেল টেস্ট প্রশ্ন", en: "Class 9 Mid-Term Bangla & English Model Test" }, size: "2.1 MB", year: "2026" },
    { title: { bn: "৮ম শ্রেণি গণিত ও বিজ্ঞান অধ্যায়ভিত্তিক প্রশ্ন ও সমাধান", en: "Class 8 Math & Science Chapter-wise Q&A" }, size: "2.8 MB", year: "2026" },
  ];

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "৭ ও ৯. সিলেবাস ও প্রশ্ন ব্যাংক" : "7 & 9. Syllabus & Question Bank"}
        category={lang === "bn" ? "একাডেমিক" : "Academic"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "পাঠ্যসূচি ও পরীক্ষা প্রস্তুতি" : "Curriculum & Exam Preparation"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "একাডেমিক সিলেবাস ও প্রশ্ন ব্যাংক" : "Academic Syllabus & Question Bank"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "৬ষ্ঠ থেকে ১০ম শ্রেণি এবং এসএসসি ভোকেশনাল শাখার পূর্ণাঙ্গ সিলেবাস ও পূর্ববর্তী পরীক্ষার প্রশ্ন ব্যাংক"
              : "Download full subject syllabus, lesson blueprints, and previous board examination questions"}
          </p>
        </div>

        {/* Section 1: Academic Syllabus */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
              <BookOpen className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "৭. বার্ষিক ও অর্ধবার্ষিক সিলেবাস ডাউনলোড" : "7. Syllabus Downloads"}</span>
            </h2>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === "bn" ? "শ্রেণি বা বিষয় লিখুন..." : "Filter by class or subject..."}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {syllabusData
              .filter((item) =>
                item.className[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.subject[lang].toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg hover:border-emerald-500 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                        {item.className[lang]}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">{item.fileSize}</span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">
                      {item.subject[lang]}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {lang === "bn" ? `মূল্যায়ন সেশন: ${item.term[lang]}` : `Session: ${item.term[lang]}`}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {lang === "bn" ? `শিক্ষাবর্ষ: ${item.academicYear}` : `Year: ${item.academicYear}`}
                    </span>
                    <button
                      onClick={() => alert(lang === "bn" ? "সিলেবাস পিডিএফ ডাউনলোড হচ্ছে..." : "Downloading syllabus PDF...")}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{lang === "bn" ? "ডাউনলোড" : "Download"}</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Section 2: Question Bank */}
        <div id="question-bank" className="p-8 rounded-3xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
              <HelpCircle className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "৯. বিগত বছরের প্রশ্ন ব্যাংক ও মডেল টেস্ট" : "9. Question Bank & Model Tests"}</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-4">
              {lang === "bn"
                ? "বোর্ড পরীক্ষা ও অভ্যন্তরীণ পরীক্ষার প্রস্তুতির জন্য শিক্ষার্থীদের সহায়ক প্রশ্ন সংকলন"
                : "Comprehensive archive of past examination question papers and model answer guides"}
            </p>
          </div>

          <div className="space-y-3">
            {questionBanks.map((qb, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {qb.title[lang]}
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      {lang === "bn" ? `বছর: ${qb.year} • সাইজ: ${qb.size}` : `Year: ${qb.year} • Size: ${qb.size}`}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => alert(lang === "bn" ? "প্রশ্ন ব্যাংক পিডিএফ ডাউনলোড হচ্ছে..." : "Downloading Question Bank PDF...")}
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-800 dark:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer self-start sm:self-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === "bn" ? "প্রশ্ন ব্যাংক সংগ্রহ" : "Get Question Bank"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
