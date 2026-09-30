"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { facultyData, FacultyMember } from "@/data/teachers";
import { Phone, Mail, Award, BookOpen, ChevronRight } from "lucide-react";

export const FacultySection: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredFaculty = facultyData.filter((member) => {
    if (activeTab === "all") return true;
    if (activeTab === "headmaster") return member.role === "headmaster" || member.role === "asst_headmaster";
    if (activeTab === "vocational") return member.role === "vocational";
    if (activeTab === "staff") return member.role === "staff";
    if (activeTab === "teachers") return member.role === "senior_teacher" || member.role === "teacher";
    return true;
  });

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          {lang === "bn" ? "প্রজ্ঞাবান শিক্ষকমণ্ডলী" : "Honorable Faculty Members"}
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === "bn" ? "শিক্ষক ও প্রাতিষ্ঠানিক নেতৃত্ব" : "Faculty & Institutional Leadership"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {lang === "bn"
            ? "অভিজ্ঞ, দক্ষ ও নিবেদিতপ্রাণ শিক্ষকদের নির্দেশনায় পরিচালিত"
            : "Guided by knowledgeable, passionate, and certified educators"}
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: "all", label: lang === "bn" ? "সকল শিক্ষক ও স্টাফ" : "All Faculty" },
            { id: "headmaster", label: lang === "bn" ? "প্রধান ও সহকারী প্রধান" : "Leadership" },
            { id: "teachers", label: lang === "bn" ? "সাধারণ শিক্ষকবৃন্দ" : "General Teachers" },
            { id: "vocational", label: lang === "bn" ? "ভোকেশনাল ইন্সট্রাক্টর" : "Vocational Instructors" },
            { id: "staff", label: lang === "bn" ? "কর্মচারীবৃন্দ" : "Staff" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFaculty.map((member) => (
          <div
            key={member.id}
            className="group relative rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 p-5 shadow-lg hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between text-center overflow-hidden"
          >
            <div>
              {/* Photo */}
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name[lang]}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                {member.name[lang]}
              </h3>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                {member.designation[lang]}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                {member.qualification[lang]}
              </p>
              <div className="mt-2 text-[11px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 py-1 px-2 rounded-lg">
                <span className="font-semibold text-slate-400">{lang === "bn" ? "বিষয়: " : "Subject: "}</span>
                {member.subject[lang]}
              </div>
            </div>

            {/* Quick Contact Icons */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center gap-3 text-slate-400">
              <a
                href={`tel:${member.phone}`}
                title={`Call ${member.phone}`}
                className="p-1.5 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${member.email}`}
                title={`Email ${member.email}`}
                className="p-1.5 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/about/teachers"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 text-xs font-bold transition-all shadow-sm group"
        >
          <span>{lang === "bn" ? "সকল শিক্ষক ও কর্মচারীদের তালিকা দেখুন" : "View Full Faculty & Staff Directory"}</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
