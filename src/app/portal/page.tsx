"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { schoolInfo } from "@/data/schoolInfo";
import {
  User,
  UserCheck,
  GraduationCap,
  Shield,
  Heart,
  CheckCircle2,
  Calendar,
  Award,
  BookOpen,
  Bell,
  Clock,
  ArrowRight,
  LogOut,
  Send,
  Download,
  DollarSign,
  Smartphone,
  Sparkles,
} from "lucide-react";

function PortalContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") || "student";
  const [activeRole, setActiveRole] = useState(initialRole);

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam) setActiveRole(roleParam);
  }, [searchParams]);

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "ডিজিটাল স্কুল ম্যানেজমেন্ট পোর্টাল" : "School Management Portal"}
        category={lang === "bn" ? "লগইন ড্যাশবোর্ড" : "Portals"}
      />

      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Role Switcher Navigation Bar */}
        <div className="p-3 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 pl-2">
              {lang === "bn" ? "পোর্টাল ভূমিকা নির্বাচন:" : "Select Role Dashboard:"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full sm:w-auto">
            {[
              { id: "student", label: lang === "bn" ? "শিক্ষার্থী (Student)" : "Student", icon: GraduationCap, color: "text-blue-500" },
              { id: "teacher", label: lang === "bn" ? "শিক্ষক (Teacher)" : "Teacher", icon: User, color: "text-emerald-500" },
              { id: "parent", label: lang === "bn" ? "অভিভাবক (Parents)" : "Parents", icon: Heart, color: "text-amber-500" },
              { id: "admin", label: lang === "bn" ? "প্রশাসন (Admin)" : "Admin", icon: Shield, color: "text-purple-500" },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeRole === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveRole(tab.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-emerald-500 text-slate-950 shadow-md font-extrabold"
                      : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-emerald-500"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Student Portal Dashboard View */}
        {activeRole === "student" && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-[#0c1d2e] text-white border border-blue-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
                  alt="Student Profile"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-400 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-extrabold text-white">তানভীর আহমেদ (Tanvir Ahmed)</h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500 text-slate-950">
                      নিয়মিত শিক্ষার্থী
                    </span>
                  </div>
                  <p className="text-xs text-blue-200 mt-0.5">
                    ১০ম শ্রেণি (বিজ্ঞান বিভাগ) • রোল: ১০১ • রেজি: ১১৩৫৮৭২০২৬০১
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert("লগআউট সফল হয়েছে")}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{lang === "bn" ? "লগআউট" : "Logout"}</span>
                </button>
              </div>
            </div>

            {/* Quick KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
                <span className="text-xs text-slate-400 block">{lang === "bn" ? "উপস্থিতির শতকরা হার" : "Attendance Rate"}</span>
                <div className="text-2xl font-extrabold text-emerald-500 mt-1">৯৬.৪%</div>
                <p className="text-[11px] text-slate-500 mt-0.5">{lang === "bn" ? "১৪৮ দিন উপস্থিত / ১৫৪ দিন" : "148 Days Present"}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
                <span className="text-xs text-slate-400 block">{lang === "bn" ? "সর্বশেষ অর্জিত জিপিএ" : "Latest GPA"}</span>
                <div className="text-2xl font-extrabold text-blue-500 mt-1">GPA 5.00</div>
                <p className="text-[11px] text-slate-500 mt-0.5">{lang === "bn" ? "অর্ধবার্ষিক মূল্যায়ন ২০২৬" : "Half-Yearly 2026"}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
                <span className="text-xs text-slate-400 block">{lang === "bn" ? "বেতন ও ফি স্ট্যাটাস" : "Tuition Fee Status"}</span>
                <div className="text-2xl font-extrabold text-emerald-500 mt-1">পরিশোধিত</div>
                <p className="text-[11px] text-slate-500 mt-0.5">{lang === "bn" ? "সেপ্টেম্বর ২০২৬ পর্যন্ত ক্লিয়ার" : "Cleared to Sep 2026"}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
                <span className="text-xs text-slate-400 block">{lang === "bn" ? "ক্লাব সম্পৃক্ততা" : "Active Clubs"}</span>
                <div className="text-2xl font-extrabold text-purple-500 mt-1">২টি ক্লাব</div>
                <p className="text-[11px] text-slate-500 mt-0.5">{lang === "bn" ? "স্কাউট ও ডিবেটিং ক্লাব" : "Scout & Debate"}</p>
              </div>
            </div>
          </div>
        )}

        {/* 2. Teacher Portal Dashboard View */}
        {activeRole === "teacher" && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-[#0c1d2e] text-white border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop"
                  alt="Teacher Profile"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-extrabold text-white">মো: রফিকুল ইসলাম (Md. Rafiqul Islam)</h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-slate-950">
                      প্রধান শিক্ষক
                    </span>
                  </div>
                  <p className="text-xs text-emerald-200 mt-0.5">
                    শিক্ষক আইডি: T-2026 • গণিত ও প্রাতিষ্ঠানিক প্রশাসন
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert("লগআউট সফল হয়েছে")}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{lang === "bn" ? "লগআউট" : "Logout"}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-500" />
                  <span>{lang === "bn" ? "শ্রেণি হাজিরা গ্রহণ ও অনুমোদন" : "Class Attendance Approval"}</span>
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === "bn" ? "আজকের সকল শাখার ডিজিটাল পাঞ্চ ডাটা যাচাই ও অনুমোদন করুন।" : "Review and approve daily RFID punch records."}
                </p>
                <button
                  onClick={() => alert(lang === "bn" ? "আজকের সকল শ্রেণির হাজিরা নিশ্চিত করা হলো।" : "All attendance approved.")}
                  className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                >
                  {lang === "bn" ? "হাজিরা নিশ্চিত করুন" : "Confirm Attendance"}
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span>{lang === "bn" ? "অনলাইন নম্বর এন্ট্রি" : "Online Marks Entry"}</span>
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === "bn" ? "অর্ধবার্ষিক ও নির্বাচনী পরীক্ষার বিষয়ভিত্তিক নম্বর আপলোড।" : "Upload subject-wise evaluation marks."}
                </p>
                <button
                  onClick={() => alert(lang === "bn" ? "নম্বর এন্ট্রি মডিউল খোলা হচ্ছে..." : "Opening marks entry portal...")}
                  className="w-full py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-emerald-600 text-white font-bold text-xs"
                >
                  {lang === "bn" ? "নম্বর এন্ট্রি শুরু করুন" : "Start Mark Entry"}
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  <span>{lang === "bn" ? "ছুটির আবেদন ও নোটিশ জারি" : "Leave Application & Notice"}</span>
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === "bn" ? "অনলাইন নৈমিত্তিক ছুটির আবেদন এবং শিক্ষার্থী নোটিশ প্রকাশ।" : "Apply for casual leave and issue circulars."}
                </p>
                <button
                  onClick={() => alert(lang === "bn" ? "ছুটির আবেদন ফরম খোলা হচ্ছে..." : "Opening leave form...")}
                  className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs"
                >
                  {lang === "bn" ? "আবেদন তৈরি করুন" : "Submit Leave Form"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. Parents Portal Dashboard View */}
        {activeRole === "parent" && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-900 via-rose-950 to-[#0c1d2e] text-white border border-amber-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white">মোঃ মোক্তার হোসেন (অভিভাবক)</h2>
                  <p className="text-xs text-amber-200 mt-0.5">
                    সন্তান: তানভীর আহমেদ (১০ম শ্রেণি, রোল: ১০১) • মোবাইল: ০১৯১৪৫০৪৯৮৫
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert("লগআউট সফল হয়েছে")}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{lang === "bn" ? "লগআউট" : "Logout"}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-4">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-amber-500" />
                  <span>{lang === "bn" ? "দৈনিক হাজিরা এসএমএস ট্র্যাকিং ইতিহাস" : "Daily Attendance SMS Logs"}</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-emerald-800 dark:text-emerald-300 block">৩০ সেপ্টেম্বর, ২০২৬ - ০৮:৪৫ AM</span>
                      <span className="text-slate-500">আপনার সন্তান তানভীর আহমেদ ক্যাম্পাসে প্রবেশ করেছে।</span>
                    </div>
                    <span className="font-bold text-emerald-600 font-mono text-[10px]">DELIVERED</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-emerald-800 dark:text-emerald-300 block">২৯ সেপ্টেম্বর, ২০২৬ - ০৮:৪৮ AM</span>
                      <span className="text-slate-500">আপনার সন্তান তানভীর আহমেদ ক্যাম্পাসে প্রবেশ করেছে।</span>
                    </div>
                    <span className="font-bold text-emerald-600 font-mono text-[10px]">DELIVERED</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-4">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-500" />
                  <span>{lang === "bn" ? "অনলাইন ফি প্রদান ও রসিদ" : "Fees & Online Payment"}</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">মাসিক বেতন ও আইসিটি ফি</span>
                      <span className="text-slate-500">সেপ্টেম্বর ২০২৬ (পরিশোধিত)</span>
                    </div>
                    <span className="font-bold text-emerald-500">৳ ১,২০০</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Admin Portal Dashboard View */}
        {activeRole === "admin" && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-[#0c1d2e] text-white border border-purple-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center text-purple-300">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white">সুপার অ্যাডমিন ড্যাশবোর্ড (Super Admin)</h2>
                  <p className="text-xs text-purple-200 mt-0.5">
                    {schoolInfo.name.bn} • EIIN: {schoolInfo.eiin} • নড়িয়া, শরীয়তপুর
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert("লগআউট সফল হয়েছে")}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{lang === "bn" ? "লগআউট" : "Logout"}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
                <span className="text-xs text-slate-400 block">{lang === "bn" ? "এসএমএস ব্যালেন্স" : "SMS Balance"}</span>
                <div className="text-2xl font-extrabold text-emerald-500 mt-1">১২,৪৫০</div>
                <p className="text-[11px] text-slate-500 mt-0.5">{lang === "bn" ? "হাজিরা অ্যালার্ট সক্রিয়" : "Active & Running"}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
                <span className="text-xs text-slate-400 block">{lang === "bn" ? "নতুন ভর্তি আবেদন" : "New Admissions"}</span>
                <div className="text-2xl font-extrabold text-blue-500 mt-1">৭৪টি</div>
                <p className="text-[11px] text-slate-500 mt-0.5">{lang === "bn" ? "অপেক্ষমান আবেদন" : "Pending Verification"}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
                <span className="text-xs text-slate-400 block">{lang === "bn" ? "মোট শিক্ষক ও কর্মকর্তা" : "Faculty & Staff"}</span>
                <div className="text-2xl font-extrabold text-purple-500 mt-1">৫০ জন</div>
                <p className="text-[11px] text-slate-500 mt-0.5">{lang === "bn" ? "সকল ডাটা আপডেট" : "Active in Directory"}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-md">
                <span className="text-xs text-slate-400 block">{lang === "bn" ? "ক্লাব ও ফোরাম পোস্ট" : "Community Posts"}</span>
                <div className="text-2xl font-extrabold text-amber-500 mt-1">১,০২০+</div>
                <p className="text-[11px] text-slate-500 mt-0.5">{lang === "bn" ? "সক্রিয় মিথস্ক্রিয়া" : "Active Interactions"}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default function PortalPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-slate-400">Loading Portal...</div>}>
      <PortalContent />
    </Suspense>
  );
}
