"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  FileText,
  Search,
  UserCheck,
  Calendar,
  BookOpen,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

export const QuickAccessCards: React.FC = () => {
  const { lang, t } = useLanguage();

  const cards = [
    {
      title: t("quickAdmission"),
      desc: t("quickAdmissionDesc"),
      icon: FileText,
      href: "/admission",
      tag: lang === "bn" ? "ভর্তি চলছে" : "Open",
    },
    {
      title: t("quickResult"),
      desc: t("quickResultDesc"),
      icon: Search,
      href: "/results",
      tag: lang === "bn" ? "অনলাইন" : "Live",
    },
    {
      title: t("quickAttendance"),
      desc: t("quickAttendanceDesc"),
      icon: UserCheck,
      href: "/attendance",
      tag: lang === "bn" ? "দৈনিক" : "Daily",
    },
    {
      title: t("quickRoutine"),
      desc: t("quickRoutineDesc"),
      icon: Calendar,
      href: "/academic/routine",
      tag: lang === "bn" ? "২০২৬" : "2026",
    },
    {
      title: t("quickSyllabus"),
      desc: t("quickSyllabusDesc"),
      icon: BookOpen,
      href: "/academic/syllabus",
      tag: lang === "bn" ? "পিডিএফ" : "PDF",
    },
    {
      title: t("quickForum"),
      desc: t("quickForumDesc"),
      icon: MessageSquare,
      href: "/co-curricular/forum",
      tag: lang === "bn" ? "উন্মুক্ত" : "Public",
    },
  ];

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Link
              key={idx}
              href={card.href}
              className="group relative flex flex-col justify-between p-4 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg dark:shadow-2xl hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top indicator glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/40">
                    {card.tag}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>{lang === "bn" ? "প্রবেশ করুন" : "Access"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
