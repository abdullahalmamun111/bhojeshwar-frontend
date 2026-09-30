"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { mockResultsData, StudentResult } from "@/data/results";
import { schoolInfo } from "@/data/schoolInfo";
import {
  Search,
  Award,
  Printer,
  Sparkles,
  CheckCircle2,
  FileText,
  AlertCircle,
  GraduationCap,
} from "lucide-react";

export default function ResultsPage() {
  const { lang } = useLanguage();
  const [selectedClass, setSelectedClass] = useState("10");
  const [selectedExam, setSelectedExam] = useState("Half-Yearly 2026");
  const [roll, setRoll] = useState("101");
  const [regNo, setRegNo] = useState("113587202601");
  const [foundResult, setFoundResult] = useState<StudentResult | null>(mockResultsData[0]);
  const [searched, setSearched] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSearched(true);

    const match = mockResultsData.find(
      (r) => r.roll.trim() === roll.trim()
    );

    if (match) {
      setFoundResult(match);
    } else {
      setFoundResult(null);
      setErrorMsg(
        lang === "bn"
          ? "প্রদত্ত রোল ও রেজিস্ট্রেশন নম্বরের কোনো ফলাফল পাওয়া যায়নি। অনুগ্রহ করে ডেমো বাটন ব্যবহার করে সঠিক রোল (১০১, ১০২ বা ২০১) দিন।"
          : "No result found for the provided credentials. Please use demo buttons (101, 102, or 201)."
      );
    }
  };

  const handleDemoSelect = (demoRoll: string, demoReg: string) => {
    setRoll(demoRoll);
    setRegNo(demoReg);
    const match = mockResultsData.find((r) => r.roll === demoRoll);
    if (match) {
      setFoundResult(match);
      setErrorMsg("");
      setSearched(true);
    }
  };

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "২৩. পরীক্ষার ফলাফল ও মার্কশিট" : "23. Examination Results & Marksheet"}
        category={lang === "bn" ? "ফলাফল" : "Results"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "অনলাইন পরীক্ষা মূল্যায়ন পোর্টাল" : "Online Evaluation Portal"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "ফলাফল অনুসন্ধান ও মার্কশিট" : "Result Search & Official Marksheet"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "রোল ও রেজিস্ট্রেশন নম্বর দিয়ে অর্ধবার্ষিক ও মূল্যায়ন পরীক্ষার ফলাফল ও নম্বরপত্র সংগ্রহ করুন"
              : "Search examination transcripts and subject marks breakdown using roll and registration"}
          </p>
        </div>

        {/* Search Panel */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl mb-10 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Search className="w-4 h-4 text-emerald-500" />
              <span>{lang === "bn" ? "ফলাফল অনুসন্ধান ফরম" : "Search Criteria"}</span>
            </h2>

            {/* Quick Demo Fill Buttons */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold">{lang === "bn" ? "ডেমো ফলাফল:" : "Demo Rolls:"}</span>
              <button
                type="button"
                onClick={() => handleDemoSelect("101", "113587202601")}
                className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer"
              >
                রোল ১০১ (A+)
              </button>
              <button
                type="button"
                onClick={() => handleDemoSelect("102", "113587202602")}
                className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer"
              >
                রোল ১০২
              </button>
              <button
                type="button"
                onClick={() => handleDemoSelect("201", "113587202621")}
                className="px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
              >
                রোল ২০১ (ভোকেশনাল)
              </button>
            </div>
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "bn" ? "পরীক্ষার নাম" : "Examination"}
              </label>
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Half-Yearly 2026">{lang === "bn" ? "অর্ধবার্ষিক মূল্যায়ন ২০২৬" : "Half-Yearly 2026"}</option>
                <option value="Pre-Test 2026">{lang === "bn" ? "প্রাক-নির্বাচনী ২০২৬" : "Pre-Test 2026"}</option>
                <option value="Annual 2025">{lang === "bn" ? "বার্ষিক পরীক্ষা ২০২৫" : "Annual 2025"}</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "bn" ? "শ্রেণি" : "Class"}
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="10">{lang === "bn" ? "১০ম শ্রেণি" : "Class 10"}</option>
                <option value="10-voc">{lang === "bn" ? "১০ম শ্রেণি (ভোকেশনাল)" : "Class 10 Vocational"}</option>
                <option value="9">{lang === "bn" ? "৯ম শ্রেণি" : "Class 9"}</option>
                <option value="8">{lang === "bn" ? "৮ম শ্রেণি" : "Class 8"}</option>
                <option value="7">{lang === "bn" ? "৭ম শ্রেণি" : "Class 7"}</option>
                <option value="6">{lang === "bn" ? "৬ষ্ঠ শ্রেণি" : "Class 6"}</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "bn" ? "রোল নম্বর *" : "Roll Number *"}
              </label>
              <input
                type="text"
                required
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                placeholder="e.g. 101"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "bn" ? "রেজিস্ট্রেশন নম্বর *" : "Registration No *"}
              </label>
              <input
                type="text"
                required
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="113587..."
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-4 flex justify-end pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>{lang === "bn" ? "ফলাফল দেখুন" : "Find Result"}</span>
              </button>
            </div>
          </form>

          {errorMsg && (
            <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Official Marksheet Output */}
        {foundResult && (
          <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0c1d2e] border-2 border-emerald-500/50 shadow-2xl space-y-6">
            {/* Marksheet Institutional Header */}
            <div className="text-center border-b-2 border-emerald-500/30 pb-6 space-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white mx-auto shadow-md mb-2">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {lang === "bn" ? schoolInfo.name.bn : schoolInfo.name.en}
              </h2>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                {lang === "bn"
                  ? "মাশুরা, নড়িয়া, শরীয়তপুর - ৮০২১ | EIIN: ১১৩৫৮৭ | স্থাপিত: ১৯৭৮"
                  : "Mashura, Naria, Shariatpur - 8021 | EIIN: 113587 | Estd: 1978"}
              </p>
              <div className="pt-2">
                <span className="inline-block px-4 py-1 rounded-full bg-slate-900 text-white dark:bg-emerald-950 dark:text-emerald-300 font-extrabold text-xs uppercase tracking-wider border border-emerald-500/40">
                  {foundResult.examName[lang]}
                </span>
              </div>
            </div>

            {/* Student & Result Meta Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block">{lang === "bn" ? "শিক্ষার্থীর নাম:" : "Student Name:"}</span>
                <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                  {foundResult.studentName[lang]}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">{lang === "bn" ? "পিতার নাম:" : "Father's Name:"}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {foundResult.fatherName[lang]}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">{lang === "bn" ? "রোল নম্বর:" : "Roll No:"}</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                  {foundResult.roll}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">{lang === "bn" ? "রেজিস্ট্রেশন নম্বর:" : "Registration:"}</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300 font-mono">
                  {foundResult.regNo}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">{lang === "bn" ? "শ্রেণি ও বিভাগ:" : "Class & Group:"}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {foundResult.group[lang]}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">{lang === "bn" ? "ফলাফল স্ট্যাটাস:" : "Status:"}</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                  {foundResult.resultStatus}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 block">{lang === "bn" ? "অর্জিত জিপিএ (GPA):" : "Grade Point Average:"}</span>
                <span className="text-xl font-black text-emerald-500 font-mono">
                  GPA: {foundResult.gpa.toFixed(2)} / 5.00
                </span>
              </div>
            </div>

            {/* Subject Marks Breakdown Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase font-semibold">
                  <tr>
                    <th className="py-2.5 px-4">{lang === "bn" ? "বিষয়সমূহ" : "Subjects"}</th>
                    <th className="py-2.5 px-4 text-center">{lang === "bn" ? "পূর্ণমান" : "Total Marks"}</th>
                    <th className="py-2.5 px-4 text-center">{lang === "bn" ? "প্রাপ্ত নম্বর" : "Obtained"}</th>
                    <th className="py-2.5 px-4 text-center">{lang === "bn" ? "লেটার গ্রেড" : "Grade"}</th>
                    <th className="py-2.5 px-4 text-right">{lang === "bn" ? "গ্রেড পয়েন্ট" : "GPA"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {foundResult.subjects.map((sub, sIdx) => (
                    <tr key={sIdx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                      <td className="py-2.5 px-4 font-bold text-slate-800 dark:text-slate-200">
                        {sub.subject[lang]}
                      </td>
                      <td className="py-2.5 px-4 text-center text-slate-500 font-mono">
                        {sub.totalMarks}
                      </td>
                      <td className="py-2.5 px-4 text-center font-bold text-slate-900 dark:text-white font-mono">
                        {sub.obtainedMarks}
                      </td>
                      <td className="py-2.5 px-4 text-center">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/15 text-emerald-500">
                          {sub.grade}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        {sub.gradePoint.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Official Stamps & Print Action */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left text-[11px] text-slate-400">
                <span>{lang === "bn" ? "পরীক্ষা নিয়ন্ত্রক কমিটি কর্তৃক অনুমোদিত ও সংরক্ষিত" : "Verified by Examination Controller Committee"}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>{lang === "bn" ? "মার্কশিট প্রিন্ট / সংরক্ষণ" : "Print Official Transcript"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
