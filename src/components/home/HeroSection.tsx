"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { schoolInfo } from "@/data/schoolInfo";
import {
  Sparkles,
  ArrowRight,
  Search,
  UserCheck,
  CheckCircle2,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  Calendar,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[580px] sm:min-h-[650px] lg:min-h-[700px] flex items-center justify-center text-white border-b border-emerald-950/60 transition-colors">
      {/* 1. Stunning Responsive Campus Banner Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-banner.jpg"
          alt="Bhojeshwar High School Campus"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[8000ms] ease-out"
        />

        {/* Balanced Dark Gradient Overlay — visible image, readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040e1a]/70 via-[#06182a]/50 to-[#040e1a]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d18]/90 via-[#071528]/20 to-[#040e1a]/40" />

        {/* Emerald Ambient Glow Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 py-16 sm:py-20">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/50 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>{t("heroBadge")}</span>
        </div>

        {/* Big Bold School Title */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-serif sm:font-sans leading-tight drop-shadow-md">
            {lang === "bn" ? schoolInfo.name.bn : schoolInfo.name.en}
          </h1>

          {/* Subtitle with High-Visibility EIIN & Location */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-emerald-200">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === "bn" ? "মাশুরা, ভোজেশ্বর, নড়িয়া, শরীয়তপুর - ৮০২১" : "Mashura, Bhojeshwar, Naria, Shariatpur - 8021"}</span>
            </span>

            <span>•</span>

            {/* Glowing High-Contrast EIIN Pill */}
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-black font-mono px-2.5 py-0.5 rounded-full text-xs shadow-md">
              <Award className="w-3.5 h-3.5" />
              <span>EIIN: {schoolInfo.eiin}</span>
            </span>

            <span>•</span>

            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === "bn" ? "স্থাপিত: ১৯৭৮" : "Estd: 1978"}</span>
            </span>
          </div>
        </div>

        {/* Mission Statement */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal drop-shadow">
          {t("heroDesc")}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link
            href="/admission"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span>{t("heroApplyBtn")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/results"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-emerald-500/40 hover:border-emerald-400 font-bold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <Search className="w-4 h-4 text-emerald-400" />
            <span>{t("heroResultBtn")}</span>
          </Link>

          <Link
            href="/attendance"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 font-bold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>{t("heroAttendanceBtn")}</span>
          </Link>
        </div>

        {/* Stats Pill Bar */}
        <div className="pt-4 max-w-xl mx-auto">
          <div className="grid grid-cols-3 divide-x divide-emerald-900/60 bg-[#091727]/90 border border-emerald-500/30 rounded-2xl py-3.5 px-2 shadow-2xl backdrop-blur-md">
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {schoolInfo.statistics.passRate}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium">
                {lang === "bn" ? "পাসের গড় হার" : "Average Pass Rate"}
              </div>
            </div>

            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-black text-white">
                {schoolInfo.statistics.totalTeachers}+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium">
                {lang === "bn" ? "শিক্ষক ও কর্মচারী" : "Faculty & Staff"}
              </div>
            </div>

            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {schoolInfo.statistics.totalStudents}+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium">
                {lang === "bn" ? "বর্তমান শিক্ষার্থী" : "Active Students"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
