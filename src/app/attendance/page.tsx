"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { dailyAttendanceSummary, sampleStudentsAttendance } from "@/data/attendance";
import {
  UserCheck,
  Calendar,
  Users,
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  Printer,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export default function AttendancePage() {
  const { lang } = useLanguage();
  const [selectedDate, setSelectedDate] = useState("2026-09-30");
  const [searchRoll, setSearchRoll] = useState("");
  const [selectedClassFilter, setSelectedClassFilter] = useState("all");

  const totalEnrolled = dailyAttendanceSummary.reduce((acc, curr) => acc + curr.totalStudents, 0);
  const totalPresent = dailyAttendanceSummary.reduce((acc, curr) => acc + curr.present, 0);
  const totalAbsent = dailyAttendanceSummary.reduce((acc, curr) => acc + curr.absent, 0);
  const averagePercentage = ((totalPresent / totalEnrolled) * 100).toFixed(1);

  const filteredStudents = sampleStudentsAttendance.filter((st) => {
    if (!searchRoll) return true;
    return (
      st.roll.toString().includes(searchRoll) ||
      st.name[lang].toLowerCase().includes(searchRoll.toLowerCase())
    );
  });

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "২২ ও ২৪. শিক্ষার্থীর ডিজিটাল হাজিরা ও সার্বিক রিপোর্ট" : "22 & 24. Digital Attendance Portal"}
        category={lang === "bn" ? "সেবা ও ট্র্যাকিং" : "Services"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "স্মার্ট ডিজিটাল ক্যাম্পাস হাজিরা ট্র্যাকিং" : "Smart RFID & Biometric Attendance"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "শিক্ষার্থীর ডিজিটাল হাজিরা ও সারসংক্ষেপ" : "Digital Attendance & Daily Report"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "দৈনিক স্বয়ংক্রিয় ডিজিটাল হাজিরা, শ্রেণিভিত্তিক উপস্থিতি বিশ্লেষণ ও অভিভাবক এসএমএস ট্র্যাকিং"
              : "Live digital attendance monitoring across all classes with instant daily metrics"}
          </p>
        </div>

        {/* Date Selector & Overall Stats Bar */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                {lang === "bn" ? "হাজিরা তারিখ:" : "Attendance Date:"}
              </span>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent font-bold text-sm text-slate-900 dark:text-white focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-500 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === "bn" ? "হাজিরা শিট প্রিন্ট" : "Print Sheet"}</span>
            </button>
          </div>
        </div>

        {/* Top 4 Attendance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
            <span className="text-xs text-slate-400 block">{lang === "bn" ? "মোট নথিভুক্ত শিক্ষার্থী" : "Total Enrolled"}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {totalEnrolled}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">{lang === "bn" ? "সকল শ্রেণি মিলিয়ে" : "Across all classes"}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
            <span className="text-xs text-emerald-500 font-semibold block">{lang === "bn" ? "আজকের মোট উপস্থিত" : "Total Present Today"}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
              {totalPresent}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">{lang === "bn" ? "সময়ে প্রবেশ করেছে" : "Punched in on time"}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
            <span className="text-xs text-rose-500 font-semibold block">{lang === "bn" ? "আজকের মোট অনুপস্থিত" : "Total Absent Today"}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-500 mt-1">
              {totalAbsent}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">{lang === "bn" ? "এসএমএস প্রেরিত" : "Guardians notified"}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
            <span className="text-xs text-emerald-500 font-semibold block">{lang === "bn" ? "গড় উপস্থিতির হার" : "Attendance Rate"}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500 mt-1">
              {averagePercentage}%
            </div>
            <p className="text-[11px] text-slate-500 mt-1">{lang === "bn" ? "সন্তোষজনক উপস্থিতি" : "Optimal attendance"}</p>
          </div>
        </div>

        {/* Section 24: সব শ্রেণির সার্বিক হাজিরা সামারি টেবিল */}
        <div id="summary" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl mb-12 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
                <BarChart3 className="w-5 h-5 text-emerald-500" />
                <span>{lang === "bn" ? "২৪. সকল শ্রেণির হাজিরা সারাংশ (দৈনিক রিপোর্ট)" : "24. All Classes Attendance Summary"}</span>
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400 pl-4 block mt-0.5">
                {lang === "bn" ? "৬ষ্ঠ শ্রেণি থেকে ১০ম শ্রেণি এবং কারিগরি শাখার পূর্ণাঙ্গ বিবরণ" : "Detailed breakdown of Class 6 to 10 and Vocational branch"}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-semibold uppercase">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">{lang === "bn" ? "শ্রেণি ও শাখা" : "Class & Section"}</th>
                  <th className="py-3 px-4">{lang === "bn" ? "মোট ছাত্র" : "Boys"}</th>
                  <th className="py-3 px-4">{lang === "bn" ? "মোট ছাত্রী" : "Girls"}</th>
                  <th className="py-3 px-4">{lang === "bn" ? "মোট শিক্ষার্থী" : "Total"}</th>
                  <th className="py-3 px-4 text-emerald-600 dark:text-emerald-400">{lang === "bn" ? "উপস্থিত" : "Present"}</th>
                  <th className="py-3 px-4 text-rose-500">{lang === "bn" ? "অনুপস্থিত" : "Absent"}</th>
                  <th className="py-3 px-4 rounded-r-lg">{lang === "bn" ? "উপস্থিতির শতকরা হার" : "Attendance %"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {dailyAttendanceSummary.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">{item.className[lang]}</td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{item.boys}</td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{item.girls}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-200">{item.totalStudents}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">{item.present}</td>
                    <td className="py-3.5 px-4 font-bold text-rose-500">{item.absent}</td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-emerald-500 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="font-extrabold text-slate-900 dark:text-white font-mono">
                          {item.percentage}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 22: একক শিক্ষার্থীর ডিজিটাল উপস্থিতি অনুসন্ধান */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
                <UserCheck className="w-5 h-5 text-emerald-500" />
                <span>{lang === "bn" ? "২২. শিক্ষার্থীর ডিজিটাল হাজিরা অনুসন্ধান" : "22. Individual Student Attendance Search"}</span>
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400 pl-4 block mt-0.5">
                {lang === "bn" ? "রোল নম্বর দিয়ে শিক্ষার্থীর দৈনিক ইন-টাইম ও উপস্থিতি যাচাই করুন" : "Lookup daily in-time and punch record by roll number"}
              </span>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchRoll}
                onChange={(e) => setSearchRoll(e.target.value)}
                placeholder={lang === "bn" ? "রোল বা নাম দিয়ে খুঁজুন..." : "Filter roll or name..."}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredStudents.map((st) => (
              <div
                key={st.roll}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    {lang === "bn" ? `রোল: ${st.roll}` : `Roll: ${st.roll}`}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      st.status === "Present"
                        ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/30"
                        : st.status === "Late"
                        ? "bg-amber-500/15 text-amber-500 border border-amber-500/30"
                        : "bg-rose-500/15 text-rose-500 border border-rose-500/30"
                    }`}
                  >
                    {st.status === "Present" && (lang === "bn" ? "উপস্থিত" : "Present")}
                    {st.status === "Late" && (lang === "bn" ? "দেরিতে" : "Late")}
                    {st.status === "Absent" && (lang === "bn" ? "অনুপস্থিত" : "Absent")}
                  </span>
                </div>

                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {st.name[lang]}
                </div>
                <div className="text-[11px] text-slate-500">
                  {lang === "bn" ? `শ্রেণি: ১০ম (${st.section})` : `Class 10 (${st.section})`}
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{st.inTime}</span>
                  </span>
                  <span className="text-emerald-500 font-mono text-[10px]">RFID VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
