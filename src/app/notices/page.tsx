"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { noticesData, NoticeItem } from "@/data/notices";
import { Bell, Search, Download, Calendar, Filter, FileText, X } from "lucide-react";

export default function NoticesPage() {
  const { lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalNotice, setActiveModalNotice] = useState<NoticeItem | null>(null);

  const filtered = noticesData.filter((item) => {
    const matchCat = selectedCategory === "all" || item.category === selectedCategory;
    const matchSearch =
      item.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content[lang].toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "১০. নোটিশ বোর্ড" : "10. Notice Board"}
        category={lang === "bn" ? "তথ্য ও বিজ্ঞপ্তি" : "Information"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "অফিসিয়াল বিজ্ঞপ্তি" : "Official Circulars"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "নোটিশ বোর্ড ও জরুরি পরিপত্র" : "Notice Board & Announcements"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "বিদ্যালয়ের একাডেমিক, প্রশাসনিক, ভর্তি ও পরীক্ষার সকল নোটিশ এক নজরে"
              : "All academic, administrative, admission, and examination notices in one centralized portal"}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === "bn" ? "নোটিশ খুঁজুন..." : "Search notices..."}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs w-full md:w-auto">
            {[
              { id: "all", label: lang === "bn" ? "সকল নোটিশ" : "All" },
              { id: "urgent", label: lang === "bn" ? "জরুরী" : "Urgent" },
              { id: "exam", label: lang === "bn" ? "পরীক্ষা" : "Exam" },
              { id: "academic", label: lang === "bn" ? "একাডেমিক" : "Academic" },
              { id: "general", label: lang === "bn" ? "সাধারণ" : "General" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Table & List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-slate-400 bg-white dark:bg-[#0c1d2e] rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
              <Bell className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p>{lang === "bn" ? "কোনো নোটিশ খুঁজে পাওয়া যায়নি।" : "No notices found matching your criteria."}</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md hover:shadow-xl hover:border-emerald-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center justify-center w-14 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {item.date.split("-")[1] === "09" ? "SEP" : "OCT"}
                    </span>
                    <span className="text-xl font-black leading-none">
                      {item.date.split("-")[2]}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      {item.pinned && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-500 border border-rose-500/30">
                          {lang === "bn" ? "বিশেষ নোটিশ" : "Urgent"}
                        </span>
                      )}
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.publishDate[lang]}</span>
                      </span>
                    </div>

                    <h3
                      onClick={() => setActiveModalNotice(item)}
                      className="font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-emerald-500 cursor-pointer transition-colors"
                    >
                      {item.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {item.content[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => setActiveModalNotice(item)}
                    className="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-500 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {lang === "bn" ? "বিস্তারিত" : "Read More"}
                  </button>

                  <button
                    onClick={() => alert(lang === "bn" ? "নোটিশ পিডিএফ ডাউনলোড শুরু হচ্ছে..." : "Downloading notice PDF...")}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{item.fileSize || "PDF"}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal for full Notice view */}
        {activeModalNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c1d2e] rounded-2xl shadow-2xl border border-slate-200 dark:border-emerald-800/40 p-6 sm:p-8 space-y-4">
              <button
                onClick={() => setActiveModalNotice(null)}
                className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <Calendar className="w-4 h-4" />
                <span>{activeModalNotice.publishDate[lang]}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {activeModalNotice.title[lang]}
              </h2>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {activeModalNotice.content[lang]}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs text-slate-400">
                  {lang === "bn" ? "স্বাক্ষরিত: প্রধান শিক্ষক, ভোজেশ্বর উচ্চ বিদ্যালয়" : "Signed: Headmaster, Bhojeshwar High School"}
                </span>

                <button
                  onClick={() => alert(lang === "bn" ? "নোটিশ পিডিএফ ডাউনলোড শুরু হচ্ছে..." : "Downloading notice PDF...")}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === "bn" ? "পিডিএফ কপি সংরক্ষণ করুন" : "Download PDF Copy"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
