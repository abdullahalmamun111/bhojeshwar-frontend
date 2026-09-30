"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { schoolInfo } from "@/data/schoolInfo";
import {
  FileText,
  User,
  Phone,
  MapPin,
  BookOpen,
  CheckCircle2,
  Printer,
  Sparkles,
  Download,
  AlertCircle,
} from "lucide-react";

export default function AdmissionPage() {
  const { lang } = useLanguage();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const [formData, setFormData] = useState({
    studentNameBn: "",
    studentNameEn: "",
    fatherName: "",
    motherName: "",
    dob: "2012-05-15",
    birthReg: "",
    gender: "ছাত্র",
    bloodGroup: "A+",
    applyingClass: "6",
    groupOrTrade: "সাধারণ শাখা",
    guardianMobile: "",
    previousSchool: "",
    village: "মাশুরা",
    union: "ভোজেশ্বর",
    upazila: "নড়িয়া",
    district: "শরীয়তপুর",
  });

  const handleFillDemo = () => {
    setFormData({
      studentNameBn: "মোঃ সাব্বির হোসেন",
      studentNameEn: "Md. Sabbir Hossain",
      fatherName: "মোঃ নজরুল ইসলাম",
      motherName: "মোসাঃ সালমা বেগম",
      dob: "2012-05-15",
      birthReg: "20128216504001234",
      gender: "ছাত্র",
      bloodGroup: "B+",
      applyingClass: "9-voc",
      groupOrTrade: "জেনারেল ইলেকট্রিক্যাল ওয়ার্কস (ভোকেশনাল)",
      guardianMobile: "01753940825",
      previousSchool: "ভোজেশ্বর সরকারি প্রাথমিক বিদ্যালয়",
      village: "মাশুরা",
      union: "ভোজেশ্বর",
      upazila: "নড়িয়া",
      district: "শরীয়তপুর",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `BHS-2026-ADM-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(generatedId);
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "২১. অনলাইন ভর্তি আবেদন" : "21. Online Admission"}
        category={lang === "bn" ? "ভর্তি কার্যক্রম" : "Admission"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "শিক্ষাবর্ষ ২০২৬ এ ভর্তি চলছে" : "Admission Open for Session 2026"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "অনলাইন ভর্তি আবেদন ফরম" : "Online Admission Application"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "৬ষ্ঠ শ্রেণি এবং ৯ম শ্রেণির সাধারণ ও ভোকেশনাল শাখায় ভর্তি সংক্রান্ত ডিজিটাল আবেদন পোর্টাল"
              : "Digital admission application portal for Class 6 and Class 9 General & Vocational Trades"}
          </p>
        </div>

        {submitted ? (
          /* Success Screen with Printable Slip */
          <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0c1d2e] border-2 border-emerald-500 shadow-2xl space-y-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {lang === "bn" ? "ভর্তি আবেদন সফলভাবে গৃহীত হয়েছে!" : "Admission Application Submitted Successfully!"}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === "bn"
                  ? "নিচের আবেদন কপিটি প্রিন্ট করে সংরক্ষণ করুন এবং নির্ধারিত তারিখে প্রয়োজনীয় কাগজপত্র সহ বিদ্যালয়ে যোগাযোগ করুন।"
                  : "Please print this application receipt and bring the required documents on the appointed date."}
              </p>
            </div>

            {/* Generated Official Receipt Box */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div>
                  <span className="font-bold text-slate-400 block">{lang === "bn" ? "আবেদন ট্র্যাকিং নম্বর:" : "Application Tracking ID:"}</span>
                  <span className="font-mono text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                    {applicationId}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                  {lang === "bn" ? "আবেদন গৃহীত" : "Submitted"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-400 block">{lang === "bn" ? "শিক্ষার্থীর নাম:" : "Applicant Name:"}</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {formData.studentNameBn || formData.studentNameEn}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === "bn" ? "আবেদনকৃত শ্রেণি ও শাখা:" : "Class & Trade:"}</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {formData.applyingClass} - {formData.groupOrTrade}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === "bn" ? "পিতা ও মাতার নাম:" : "Father & Mother:"}</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {formData.fatherName} / {formData.motherName}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === "bn" ? "অভিভাবক মোবাইল:" : "Guardian Mobile:"}</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {formData.guardianMobile}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow flex items-center gap-2 cursor-pointer transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>{lang === "bn" ? "আবেদন কপি প্রিন্ট করুন" : "Print Application Receipt"}</span>
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-500 font-bold text-xs cursor-pointer transition-colors"
              >
                {lang === "bn" ? "আরেকটি নতুন আবেদন করুন" : "Submit Another Application"}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Form (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {lang === "bn" ? "ভর্তি আবেদন ফরম (শিক্ষার্থী তথ্য)" : "Admission Form Fields"}
                  </h2>
                  <span className="text-xs text-slate-500">
                    {lang === "bn" ? "সকল তথ্য সঠিকভাবে পূরণ করুন (* চিহ্নিত ঘরগুলো আবশ্যক)" : "Fill all required fields accurately (*)"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === "bn" ? "ডেমো ডাটা বসান" : "Fill Demo Data"}</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Row 1: Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "শিক্ষার্থীর নাম (বাংলায়) *" : "Student Name (Bangla) *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentNameBn}
                      onChange={(e) => setFormData({ ...formData, studentNameBn: e.target.value })}
                      placeholder="যেমন: মোঃ সাব্বির হোসেন"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "শিক্ষার্থীর নাম (ইংরেজিতে - বড় অক্ষরে) *" : "Student Name (English - BLOCK) *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentNameEn}
                      onChange={(e) => setFormData({ ...formData, studentNameEn: e.target.value })}
                      placeholder="e.g. MD. SABBIR HOSSAIN"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs uppercase focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Parents */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "পিতার নাম *" : "Father's Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fatherName}
                      onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                      placeholder="পিতার নাম"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "মাতার নাম *" : "Mother's Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.motherName}
                      onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                      placeholder="মাতার নাম"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 3: Class & Trade selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "ভর্তি হতে ইচ্ছুক শ্রেণি *" : "Applying For Class *"}
                    </label>
                    <select
                      value={formData.applyingClass}
                      onChange={(e) => setFormData({ ...formData, applyingClass: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="6">{lang === "bn" ? "৬ষ্ঠ শ্রেণি (Class 6)" : "Class 6"}</option>
                      <option value="7">{lang === "bn" ? "৭ম শ্রেণি (Class 7)" : "Class 7"}</option>
                      <option value="8">{lang === "bn" ? "৮ম শ্রেণি (Class 8)" : "Class 8"}</option>
                      <option value="9-gen">{lang === "bn" ? "৯ম শ্রেণি (সাধারণ বিজ্ঞান/মানবিক/ব্যবসায়)" : "Class 9 General"}</option>
                      <option value="9-voc">{lang === "bn" ? "৯ম শ্রেণি (এসএসসি ভোকেশনাল শাখা)" : "Class 9 SSC Vocational"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "বিভাগ / ভোকেশনাল ট্রেড" : "Group or Trade"}
                    </label>
                    <select
                      value={formData.groupOrTrade}
                      onChange={(e) => setFormData({ ...formData, groupOrTrade: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="সাধারণ শাখা">{lang === "bn" ? "সাধারণ শাখা (৬ষ্ঠ - ৮ম)" : "General (Class 6-8)"}</option>
                      <option value="বিজ্ঞান বিভাগ">{lang === "bn" ? "বিজ্ঞান বিভাগ" : "Science Group"}</option>
                      <option value="মানবিক বিভাগ">{lang === "bn" ? "মানবিক বিভাগ" : "Humanities Group"}</option>
                      <option value="ব্যবসায় শিক্ষা বিভাগ">{lang === "bn" ? "ব্যবসায় শিক্ষা বিভাগ" : "Business Studies"}</option>
                      <option value="জেনারেল ইলেকট্রিক্যাল">{lang === "bn" ? "ভোকেশনাল: জেনারেল ইলেকট্রিক্যাল ওয়ার্কস" : "Vocational: General Electrical"}</option>
                      <option value="কম্পিউটার ও আইটি">{lang === "bn" ? "ভোকেশনাল: কম্পিউটার ও তথ্য প্রযুক্তি" : "Vocational: Computer & IT"}</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Phone & Birth Reg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "অভিভাবকের সক্রিয় মোবাইল নম্বর *" : "Guardian Mobile Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.guardianMobile}
                      onChange={(e) => setFormData({ ...formData, guardianMobile: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "জন্ম নিবন্ধন সনদ নম্বর (১৭ ডিজিট) *" : "Birth Certificate No (17 Digits) *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.birthReg}
                      onChange={(e) => setFormData({ ...formData, birthReg: e.target.value })}
                      placeholder="2012XXXXXXXXXXXXX"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-mono focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 5: Address */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "গ্রাম / পাড়া" : "Village"}
                    </label>
                    <input
                      type="text"
                      value={formData.village}
                      onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "ইউনিয়ন" : "Union"}
                    </label>
                    <input
                      type="text"
                      value={formData.union}
                      onChange={(e) => setFormData({ ...formData, union: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "উপজেলা" : "Upazila"}
                    </label>
                    <input
                      type="text"
                      value={formData.upazila}
                      onChange={(e) => setFormData({ ...formData, upazila: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === "bn" ? "জেলা" : "District"}
                    </label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{lang === "bn" ? "ভর্তি আবেদন জমা দিন ও ট্র্যাকিং স্লিপ সংগ্রহ করুন" : "Submit Application & Get Slip"}</span>
                </button>
              </form>
            </div>

            {/* Right: Admission Notice & Required Documents (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-4">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>{lang === "bn" ? "প্রয়োজনীয় কাগজপত্র" : "Required Documents"}</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{lang === "bn" ? "অনলাইন জন্ম নিবন্ধন সনদের ফটোকপি (১৭ ডিজিট)" : "Online birth certificate copy (17 digits)"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{lang === "bn" ? "পাসপোর্ট সাইজের রঙিন ছবি (২ কপি)" : "Passport size photographs (2 copies)"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{lang === "bn" ? "পূর্ববর্তী বিদ্যালয়ের ছাড়পত্র (টিসি) বা প্রশংসাপত্র" : "Transfer certificate (TC) or testimonial"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{lang === "bn" ? "পিতা ও মাতার জাতীয় পরিচয়পত্রের ফটোকপি" : "Photocopy of parents' NID card"}</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-2">
                <span className="font-bold text-emerald-400 block">
                  {lang === "bn" ? "ভর্তি হেল্পলাইন ও সহায়তা:" : "Admission Helpline:"}
                </span>
                <p className="text-slate-300">
                  {lang === "bn"
                    ? "আবেদন সংক্রান্ত যেকোনো সমস্যায় অফিস সময়ে যোগাযোগ করুন:"
                    : "For admission assistance, contact the desk during office hours:"}
                </p>
                <div className="font-bold text-white pt-1">
                  📞 {schoolInfo.contacts.mobile} / {schoolInfo.contacts.hotline}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
