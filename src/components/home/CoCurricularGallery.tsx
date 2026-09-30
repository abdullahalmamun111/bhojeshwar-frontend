"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { clubsAndActivities } from "@/data/coCurricular";
import { ArrowUpRight, Trophy, Sparkles } from "lucide-react";

export const CoCurricularGallery: React.FC = () => {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const displayClubs = clubsAndActivities.filter((club) => {
    if (filter === "all") return true;
    if (filter === "scout" && (club.id === "scout" || club.id === "girls-guide")) return true;
    if (filter === "sports" && club.id === "sports-club") return true;
    if (filter === "creative" && (club.id === "magazine" || club.id === "deyalika" || club.id === "cultural-club")) return true;
    if (filter === "academic" && (club.id === "debating-club" || club.id === "forum" || club.id === "study-tour")) return true;
    return true;
  });

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-[#071320] border-y border-slate-200 dark:border-emerald-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              {lang === "bn" ? "সহ-শিক্ষা ও সৃজনশীল প্রতিভা" : "Co-Curricular & Creative Talents"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {lang === "bn" ? "ইভেন্ট, ক্লাব ও সহ-শিক্ষা গ্যালারি" : "Events, Sports & Co-Curricular Gallery"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {lang === "bn"
                ? "পড়াশোনার পাশাপাশি শারীরিক, মানসিক ও নেতৃত্বের পরিপূর্ণ বিকাশ"
                : "Holistic development encompassing sports, intellectual debates, and creative expression"}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: "all", label: lang === "bn" ? "সকল ক্লাব ও কার্যক্রম" : "All Activities" },
              { id: "scout", label: lang === "bn" ? "স্কাউট ও গাইড" : "Scouts & Guide" },
              { id: "sports", label: lang === "bn" ? "খেলাধুলা ও স্পোর্টস" : "Sports" },
              { id: "creative", label: lang === "bn" ? "ম্যাগাজিন ও সংস্কৃতি" : "Creative & Cultural" },
              { id: "academic", label: lang === "bn" ? "বিতর্ক ও শিক্ষা সফর" : "Debate & Tour" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayClubs.slice(0, 6).map((club) => (
            <Link
              key={club.id}
              href={`/co-curricular/${club.slug}`}
              className="group relative rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 shadow">
                      {club.badge[lang]}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-emerald-300">
                      {club.membersCount} {lang === "bn" ? "সক্রিয় সদস্য" : "Members"}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {lang === "bn" ? `প্রতিষ্ঠা: ${club.established}` : `Estd: ${club.established}`}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {club.name[lang]}
                  </h3>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                    {club.tagline[lang]}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {club.description[lang]}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-4 pt-1 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 border-t border-slate-100 dark:border-slate-800/80">
                <span>{lang === "bn" ? "ক্লাবের বিস্তারিত ও ইভেন্ট" : "Club Details & Events"}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
