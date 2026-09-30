"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { committeeMembers } from "@/data/committee";
import { Award, Phone, ShieldCheck, User, Quote } from "lucide-react";

export default function CommitteePage() {
  const { lang } = useLanguage();

  const president = committeeMembers.find((m) => m.category === "president");
  const others = committeeMembers.filter((m) => m.category !== "president");

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "২. ম্যানেজিং কমিটি" : "2. Managing Committee"}
        category={lang === "bn" ? "পরিচিতি" : "About Us"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "পরিচালনা পর্ষদ" : "Governing Body"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "বিদ্যালয় ম্যানেজিং কমিটি" : "School Managing Committee"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ডের বিধি মোতাবেক গঠিত পরিচালনা পর্ষদ"
              : "Governing body constituted in accordance with Dhaka Education Board regulations"}
          </p>
        </div>

        {/* President Message Spotlight */}
        {president && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1d2e] to-[#071320] text-white border border-emerald-800/50 shadow-2xl relative overflow-hidden">
            <Quote className="absolute right-4 bottom-4 w-32 h-32 text-emerald-500/5 pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 text-center">
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-emerald-500/40 shadow-xl mb-3">
                  <img
                    src={president.image}
                    alt={president.name[lang]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-extrabold text-lg text-white">{president.name[lang]}</h3>
                <p className="text-xs text-emerald-400 font-semibold">{president.role[lang]}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{president.occupation[lang]}</p>
                <div className="mt-2 text-xs text-slate-300 flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{president.phone}</span>
                </div>
              </div>

              <div className="md:col-span-8 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                <div className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  {lang === "bn" ? "সভাপতির বাণী" : "Message from the President"}
                </div>
                <p>
                  {lang === "bn"
                    ? "“ভোজেশ্বর উচ্চ বিদ্যালয় কেবল একটি পাঠশালা নয়, এটি আমাদের মাশুরা ও নড়িয়া অঞ্চলের হাজারো পরিবারের আশা-আকাঙ্ক্ষার কেন্দ্রবিন্দু। একটি সৎ, শৃঙ্খলাবদ্ধ ও প্রযুক্তিবান্ধব শিক্ষাঙ্গন নিশ্চিত করতে ম্যানেজিং কমিটি সার্বক্ষণিকভাবে প্রতিশ্রুতিবদ্ধ।”"
                    : "“Bhojeshwar High School is the epicenter of educational aspiration for thousands of families in Mashura and Naria. Our Managing Committee is devoted to maintaining ethical, disciplined, and technologically progressive academia.”"}
                </p>
                <p>
                  {lang === "bn"
                    ? "“শিক্ষক, অভিভাবক ও এলাকার সুধীজনদের সক্রিয় সহযোগিতায় এই প্রতিষ্ঠানটিকে আমরা দেশের অন্যতম শীর্ষ আদর্শ মডেল বিদ্যালয়ে পরিণত করতে কাজ করে যাচ্ছি।”"
                    : "“With the combined collaboration of teachers, guardians, and local citizens, we aspire to build Bhojeshwar High School into a benchmark institution.”"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Committee Members Grid */}
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-emerald-500 pl-3">
          {lang === "bn" ? "সম্মানিত সদস্যবৃন্দ" : "Committee Members"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg hover:border-emerald-500 transition-all flex items-center gap-4"
            >
              <img
                src={member.image}
                alt={member.name[lang]}
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500/40 shrink-0 shadow"
              />
              <div className="min-w-0">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                  {member.name[lang]}
                </h4>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {member.role[lang]}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {member.occupation[lang]}
                </p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                  <Phone className="w-3 h-3 text-emerald-500" />
                  <span>{member.phone}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
