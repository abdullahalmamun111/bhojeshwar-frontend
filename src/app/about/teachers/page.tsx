"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { facultyData } from "@/data/teachers";
import { Search, Phone, Mail, Award, BookOpen, Calendar, UserCheck } from "lucide-react";

export default function TeachersPage() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const filteredTeachers = facultyData
    .filter((f) => f.role !== "staff") // staff has its own dedicated page
    .filter((member) => {
      const matchSearch =
        member.name[lang].toLowerCase().includes(search.toLowerCase()) ||
        member.subject[lang].toLowerCase().includes(search.toLowerCase()) ||
        member.designation[lang].toLowerCase().includes(search.toLowerCase());

      if (filterRole === "all") return matchSearch;
      if (filterRole === "vocational") return matchSearch && member.role === "vocational";
      if (filterRole === "senior") return matchSearch && (member.role === "senior_teacher" || member.role === "headmaster" || member.role === "asst_headmaster");
      return matchSearch;
    });

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "৩. শিক্ষক তথ্য" : "3. Teachers Information"}
        category={lang === "bn" ? "পরিচিতি" : "About Us"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "প্রজ্ঞাবান শিক্ষকমণ্ডলী" : "Academic Faculty Members"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "শিক্ষক পরিচিতি ও প্রোফাইল" : "Teachers Directory & Profile"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "ভোজেশ্বর উচ্চ বিদ্যালয়ের সম্মানিত প্রধান শিক্ষক, সহকারী প্রধান শিক্ষক এবং সকল বিষয়ভিত্তিক শিক্ষকবৃন্দ"
              : "Honorable Headmaster, Assistant Headmaster, and subject-specialist educators"}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={lang === "bn" ? "শিক্ষকের নাম বা বিষয়ে খুঁজুন..." : "Search by name or subject..."}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs w-full sm:w-auto">
            {[
              { id: "all", label: lang === "bn" ? "সকল শিক্ষক" : "All Teachers" },
              { id: "senior", label: lang === "bn" ? "সিনিয়র শিক্ষক ও প্রশাসন" : "Senior Faculty" },
              { id: "vocational", label: lang === "bn" ? "ভোকেশনাল ইন্সট্রাক্টর" : "Vocational Instructors" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterRole(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  filterRole === tab.id
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeachers.map((member) => (
            <div
              key={member.id}
              className="group p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between text-center overflow-hidden"
            >
              <div>
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name[lang]}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {member.name[lang]}
                </h3>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {member.designation[lang]}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  {member.qualification[lang]}
                </p>

                <div className="mt-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                  <div>
                    <span className="font-bold text-slate-400">{lang === "bn" ? "পাঠদান বিষয়: " : "Subject: "}</span>
                    <span>{member.subject[lang]}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-400">{lang === "bn" ? "যোগদান: " : "Joined: "}</span>
                    <span>{member.joined}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center gap-3 text-slate-400">
                <a
                  href={`tel:${member.phone}`}
                  className="p-1.5 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-500 transition-colors"
                  title={member.phone}
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="p-1.5 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-500 transition-colors"
                  title={member.email}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
