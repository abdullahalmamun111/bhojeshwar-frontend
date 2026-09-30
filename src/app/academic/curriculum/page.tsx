"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { schoolInfo } from "@/data/schoolInfo";
import { Cpu, Zap, Laptop, BookOpen, CheckCircle2, Award, ShieldCheck, Hammer } from "lucide-react";

export default function CurriculumPage() {
  const { lang } = useLanguage();

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "১১. কারিকুলাম ও ভোকেশনাল শাখা" : "11. Curriculum & Vocational Trades"}
        category={lang === "bn" ? "একাডেমিক" : "Academic"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "সাধারণ ও কারিগরি শিক্ষা" : "General & Technical Streams"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "কারিকুলাম ও ভোকেশনাল শাখা" : "Curriculum & Vocational Trades"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "জাতীয় শিক্ষাক্রম ও বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) অনুমোদিত পাঠ্যক্রম"
              : "National general curriculum alongside BTEB vocational technical trades"}
          </p>
        </div>

        {/* Vocational Branch Special Feature Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c1d2e] via-[#091728] to-[#071320] text-white border border-emerald-500/40 shadow-2xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-xs mb-3 shadow">
              {lang === "bn" ? "★ এসএসসি ভোকেশনাল শাখা (স্থাপিত: ১৯৯৮)" : "★ SSC Vocational Branch (Estd: 1998)"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-3">
              {lang === "bn"
                ? "কর্মমুখী ও বাস্তবধর্মী কারিগরি শিক্ষার মাধ্যমে দক্ষ মানবসম্পদ সৃষ্টি"
                : "Building Certified Technical Workforce with Practical Excellence"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
              {lang === "bn"
                ? "আমাদের ভোকেশনাল শাখায় ৯ষ্ঠ ও ১০ম শ্রেণির শিক্ষার্থীরা সাধারণ পাঠ্যবই পড়ার পাশাপাশি সরাসরি ইন্ডাস্ট্রি-স্ট্যান্ডার্ড ইলেকট্রিক্যাল ল্যাব ও কম্পিউটার ল্যাবে প্র্যাকটিক্যাল কাজ শেখে। ফলে এসএসসি পাসের পরই তারা সরাসরি ডিপ্লোমা ইঞ্জিনিয়ারিংয়ে ভর্তির সুযোগ পায় অথবা পেশাগত ক্ষেত্রে যুক্ত হতে পারে।"
                : "In our vocational branch, students receive hands-on instruction in electrical workshops and computer labs alongside general subjects, paving the way directly to polytechnic engineering and job placements."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-700/60 relative z-10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Zap className="w-6 h-6 text-amber-400 mb-2" />
              <h3 className="font-bold text-sm text-white">
                {lang === "bn" ? "জেনারেল ইলেকট্রিক্যাল ওয়ার্কস" : "General Electrical Works"}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === "bn"
                  ? "হাউস ওয়্যারিং, মোটর ওয়াইন্ডিং, সোলার সিস্টেম ও ইলেকট্রনিক সার্কিট ডিজাইন।"
                  : "House wiring, motor winding, solar installations, and electrical safety."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Laptop className="w-6 h-6 text-emerald-400 mb-2" />
              <h3 className="font-bold text-sm text-white">
                {lang === "bn" ? "কম্পিউটার ও তথ্যপ্রযুক্তি" : "Computer & IT Applications"}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === "bn"
                  ? "অফিস অ্যাপ্লিকেশন, ডাটাবেজ, গ্রাফিক্স ডিজাইন বেসিক ও হার্ডওয়্যার ট্রাবলশুটিং।"
                  : "Office productivity, database management, hardware maintenance & networking."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Hammer className="w-6 h-6 text-teal-400 mb-2" />
              <h3 className="font-bold text-sm text-white">
                {lang === "bn" ? "ওয়েল্ডিং ও ফেব্রিকেশন" : "Welding & Fabrication"}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === "bn"
                  ? "ধাতব ফেব্রিকেশন, আর্ক ওয়েল্ডিং ও আধুনিক ওয়ার্কশপ নিরাপত্তা পদ্ধতি।"
                  : "Arc welding, structural metal fabrication, and industrial safety."}
              </p>
            </div>
          </div>
        </div>

        {/* General Curriculum Groups */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-emerald-500 pl-3">
          {lang === "bn" ? "সাধারণ মাধ্যমিক শিক্ষা বিভাগসমূহ (৯ম ও ১০ম শ্রেণি)" : "General Secondary Streams (Class 9 & 10)"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {lang === "bn" ? "বিজ্ঞান বিভাগ (Science)" : "Science Group"}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === "bn"
                ? "পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং উচ্চতর গণিত সহ আধুনিক বিজ্ঞানাগারে নিয়মিত ব্যবহারিক পরীক্ষণ।"
                : "Physics, Chemistry, Biology, and Higher Mathematics supported by laboratory sessions."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {lang === "bn" ? "মানবিক বিভাগ (Humanities)" : "Humanities Group"}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === "bn"
                ? "বাংলাদেশের ইতিহাস ও বিশ্বসভ্যতা, ভূগোল ও পরিবেশ, পৌরনীতি ও নাগরিকতা এবং অর্থনীতি।"
                : "History of Bangladesh, Geography, Civics & Citizenship, and Economics."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {lang === "bn" ? "ব্যবসায় শিক্ষা বিভাগ (Business Studies)" : "Business Studies Group"}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === "bn"
                ? "হিসাববিজ্ঞান, ব্যবসায় উদ্যোগ, ফিন্যান্স ও ব্যাংকিং এবং সাধারণ বিজ্ঞান।"
                : "Accounting, Business Entrepreneurship, Finance & Banking, and General Science."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
