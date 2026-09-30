"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { noticesData, NoticeItem } from "@/data/notices";
import {
  Bell,
  Download,
  Calendar,
  ChevronRight,
  Quote,
  CheckCircle,
  FileText,
  Volume2,
} from "lucide-react";

export const NoticeAndMessage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const filteredNotices = noticesData.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Running urgent ticker */}
      <div className="mb-8 flex items-center bg-emerald-950/60 dark:bg-[#0b1a2d] border border-emerald-500/30 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-emerald-600 text-white font-bold text-xs px-3 sm:px-4 py-2 flex items-center gap-1.5 shrink-0 z-10">
          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
          <span>{lang === "bn" ? "সর্বশেষ সংবাদ:" : "Latest Flash:"}</span>
        </div>
        <div className="overflow-hidden relative w-full py-1.5 px-3">
          <div className="animate-marquee whitespace-nowrap text-xs text-emerald-200 font-medium">
            ★ {noticesData[0].title[lang]} &nbsp;&nbsp;&nbsp;&nbsp; ★ {noticesData[1].title[lang]} &nbsp;&nbsp;&nbsp;&nbsp; ★ {noticesData[2].title[lang]}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Notice Board (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                    {lang === "bn" ? "জরুরী নোটিশ বোর্ড" : "Urgent Notice Board"}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {lang === "bn" ? "প্রশাসনিক ও একাডেমিক বিজ্ঞপ্তি" : "Administrative & Academic Notices"}
                  </span>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {[
                  { id: "all", label: lang === "bn" ? "সকল" : "All" },
                  { id: "urgent", label: lang === "bn" ? "জরুরী" : "Urgent" },
                  { id: "exam", label: lang === "bn" ? "পরীক্ষা" : "Exam" },
                  { id: "academic", label: lang === "bn" ? "একাডেমিক" : "Academic" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all text-[11px] cursor-pointer ${
                      filter === tab.id
                        ? "bg-emerald-500 text-slate-950 font-bold shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Infinite Vertical Scrolling Notice List */}
            <div
              className="relative overflow-hidden"
              style={{ height: "260px" }}
            >
              {/* Top fade */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-[#0c1d2e] to-transparent z-10 pointer-events-none" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-[#0c1d2e] to-transparent z-10 pointer-events-none" />

              <div className="animate-notice-scroll hover:[animation-play-state:paused]">
                {/* Duplicate for seamless loop */}
                {[...noticesData, ...noticesData].map((notice, idx) => (
                  <div
                    key={`${notice.id}-${idx}`}
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#071320] border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all duration-200 mb-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center justify-center w-12 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 text-center">
                        <span className="text-[10px] font-bold uppercase">
                          {notice.date.split("-")[1] === "09" ? "SEP" : "OCT"}
                        </span>
                        <span className="text-base font-extrabold leading-none">
                          {notice.date.split("-")[2]}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {notice.pinned && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-500 border border-rose-500/30">
                              {lang === "bn" ? "গুরুত্বপূর্ণ" : "Pinned"}
                            </span>
                          )}
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{notice.publishDate[lang]}</span>
                          </span>
                        </div>
                        <Link
                          href="/notices"
                          className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2"
                        >
                          {notice.title[lang]}
                        </Link>
                      </div>
                    </div>

                    <a
                      href="#download"
                      title={lang === "bn" ? "নোটিশ ডাউনলোড করুন" : "Download Notice"}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(lang === "bn" ? "ডেমো নোটিশ পিডিএফ ডাউনলোড শুরু হচ্ছে..." : "Demo Notice PDF download started...");
                      }}
                      className="p-2 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors shrink-0"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {lang === "bn" ? `মোট ${noticesData.length}টি সক্রিয় নোটিশ` : `Total ${noticesData.length} active notices`}
            </span>
            <Link
              href="/notices"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group"
            >
              <span>{t("viewAllNotices")}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Message from Headmaster (5 cols) */}
        <div className="lg:col-span-5 relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0b1c2e] to-[#071320] text-white border border-emerald-900/50 shadow-xl overflow-hidden">
          {/* Subtle watermarked quote symbol */}
          <Quote className="absolute -bottom-4 -right-4 w-36 h-36 text-emerald-500/5 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-800/30">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {t("headmasterTitle")}
              </span>
              <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-medium">
                {lang === "bn" ? "স্বাগত বার্তা" : "Welcome Message"}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=300&auto=format&fit=crop"
                alt="Headmaster"
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-lg shadow-emerald-500/10"
              />
              <div>
                <h4 className="font-extrabold text-base sm:text-lg text-white">
                  {t("headmasterName")}
                </h4>
                <p className="text-xs text-emerald-400 font-semibold">
                  {t("headmasterDesignation")}
                </p>
                <p className="text-[11px] text-slate-400">
                  {lang === "bn" ? "এম.এসসি (গণিত), বি.এড (১ম শ্রেণি)" : "M.Sc (Math), B.Ed (1st Class)"}
                </p>
              </div>
            </div>

            <div className="relative text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2.5 font-light">
              <p>
                {lang === "bn"
                  ? "“বিসমিল্লাহির রাহমানির রাহিম। ১৯৭৮ সালে প্রতিষ্ঠিত ঐতিহ্যবাহী ভোজেশ্বর উচ্চ বিদ্যালয় এই অঞ্চলের আলোকবর্তিকা হিসেবে কাজ করছে। সাধারণ শিক্ষার পাশাপাশি আমাদের ভোকেশনাল শাখা শিক্ষার্থীদের সরাসরি দক্ষ জনশক্তিতে রূপান্তর করছে।”"
                  : "“In the name of Allah, the Most Gracious, the Most Merciful. Established in 1978, Bhojeshwar High School stands as a beacon of academic excellence in Shariatpur. Alongside general curriculum, our vocational branch empowers students with hands-on technical proficiencies.”"}
              </p>
              <p>
                {lang === "bn"
                  ? "“ডিজিটাল হাজিরা ব্যবস্থা, আধুনিক বিজ্ঞানাগার এবং অভিজ্ঞ শিক্ষকবৃন্দের আন্তরিক প্রচেষ্টায় প্রতিটি শিক্ষার্থীকে সুনাগরিক হিসেবে গড়ে তোলাই আমাদের প্রধান ব্রত।”"
                  : "“With a digital attendance portal, cutting-edge science labs, and dedicated faculty, our foremost pledge is shaping every learner into an enlightened, responsible citizen.”"}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-800/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-emerald-300">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{lang === "bn" ? "সততা • নিষ্ঠা • আধুনিকতা" : "Integrity • Discipline • Innovation"}</span>
            </div>
            <Link
              href="/about/teachers"
              className="text-white hover:text-emerald-400 font-bold flex items-center gap-1 transition-colors"
            >
              <span>{lang === "bn" ? "বিস্তারিত জানুন" : "Read More"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
