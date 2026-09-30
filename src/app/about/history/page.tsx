"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { schoolInfo } from "@/data/schoolInfo";
import { Calendar, Award, Landmark, BookOpen, Users, Compass, CheckCircle } from "lucide-react";

export default function HistoryPage() {
  const { lang } = useLanguage();

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "১. ইতিহাস ও ঐতিহ্য" : "1. History & Heritage"}
        category={lang === "bn" ? "পরিচিতি" : "About Us"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "প্রতিষ্ঠার ইতিহাস ও পটভূমি" : "Historical Background & Inception"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "ভোজেশ্বর উচ্চ বিদ্যালয়ের গৌরবময় ইতিহাস" : "Glorious History of Bhojeshwar High School"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {lang === "bn"
              ? "মাশুরা, ভোজেশ্বর, নড়িয়া, শরীয়তপুর - ১৯৮৮ সালের সূচনা থেকে আজকের আধুনিক স্মার্ট বিদ্যাপীঠ"
              : "From humble rural beginnings in 1978 to a premier smart academic campus"}
          </p>
        </div>

        {/* Hero Photo & Key Milestones Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-emerald-800/40 group">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop"
              alt="Historical Campus"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="bg-emerald-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded w-fit mb-2">
                {lang === "bn" ? "ঐতিহ্যের ৪৭+ বছর" : "47+ Years of Heritage"}
              </span>
              <h3 className="text-xl font-bold">
                {lang === "bn" ? "ভোজেশ্বর উচ্চ বিদ্যালয় (মাশুরা)" : "Bhojeshwar High School (Mashura)"}
              </h3>
              <p className="text-xs text-slate-300">
                {lang === "bn" ? "স্থাপিত: রবিবার, ১লা জানুয়ারি, ১৯৭৮" : "Established: Sunday, January 1, 1978"}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                {lang === "bn" ? "সংক্ষিপ্ত প্রাতিষ্ঠানিক পরিসংখ্যান" : "Institutional Highlights"}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block">{lang === "bn" ? "প্রতিষ্ঠার তারিখ" : "Establishment Date"}</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{schoolInfo.established[lang]}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block">EIIN নম্বর</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{schoolInfo.eiin}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block">{lang === "bn" ? "ভৌগোলিক অবস্থান" : "Location"}</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">মাশুরা, নড়িয়া, শরীয়তপুর</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block">{lang === "bn" ? "শিক্ষা স্তর" : "Educational Level"}</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">নিম্ন মাধ্যমিক, মাধ্যমিক ও ভোকেশনাল</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30">
              {lang === "bn"
                ? "ভোজেশ্বর উচ্চ বিদ্যালয় শরীয়তপুর জেলার নড়িয়া উপজেলার অন্যতম প্রাচীন ও স্বনামধন্য শিক্ষাপ্রতিষ্ঠান। ১৯৭৮ সালে প্রতিষ্ঠিত হওয়ার পর থেকে এটি এলাকার শিক্ষার্থীদের জন্য জ্ঞান, নৈতিকতা ও কারিগরি শিক্ষার আলো ছড়িয়ে আসছে।"
                : "Bhojeshwar High School is one of the premier academic institutions in Naria Upazila, Shariatpur. Since 1978, it has nurtured enlightened, skilled citizens with both academic and technical excellence."}
            </p>
          </div>
        </div>

        {/* Narrative Article */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "প্রতিষ্ঠার প্রেক্ষাপট ও জমিদান" : "Inception & Philanthropic Land Donation"}</span>
            </h2>
            <p>
              {lang === "bn"
                ? "বিংশ শতাব্দীর শেষভাগে শরীয়তপুরের পদ্মা বিধৌত নড়িয়া অঞ্চলে আধুনিক মাধ্যমিক শিক্ষার সুযোগ ছিল অত্যন্ত সীমিত। মাশুরা ও ভোজেশ্বর ইউনিয়নের দূরদৃষ্টিসম্পন্ন শিক্ষানুরাগী ব্যক্তিবর্গ ও স্থানীয় গণ্যমান্য ব্যক্তিরা এলাকায় একটি মানসম্পন্ন মাধ্যমিক বিদ্যালয় প্রতিষ্ঠার স্বপ্ন দেখেন। স্থানীয় সমাজহিতৈষীদের অকৃপণ জমিদান এবং সাধারণ মানুষের স্বতঃস্ফূর্ত সহযোগিতায় ১৯৭৮ সালের ১লা জানুয়ারি এই বিদ্যাপীঠের যাত্রা শুরু হয়।"
                : "In the late 20th century, secondary education opportunities in Naria along the Padma basin were scarce. Visionary philanthropists and community leaders of Mashura and Bhojeshwar united to establish a quality school. Through land donations and grassroots enthusiasm, the school was founded on January 1, 1978."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "কারিগরি (ভোকেশনাল) শাখার নবদিগন্ত" : "Vocational Technical Branch Breakthrough"}</span>
            </h2>
            <p>
              {lang === "bn"
                ? "এলাকার তরুণ প্রজন্মকে যুগোপযোগী বাস্তবমুখী কারিগরি শিক্ষায় পারদর্শী করতে ১৯৯৮ সালে বাংলাদেশ কারিগরি শিক্ষা বোর্ডের (BTEB) অধীনে এসএসসি ভোকেশনাল শাখা সংযোজন করা হয়। জেনারেল ইলেকট্রিক্যাল ওয়ার্কস এবং কম্পিউটার অ্যাপ্লিকেশন ট্রেডের মাধ্যমে শত শত শিক্ষার্থী কারিগরি দক্ষতা অর্জন করে দেশে এবং বিদেশে সফল ক্যারিয়ার গড়ছেন।"
                : "To empower students with tangible workforce skills, the SSC Vocational Branch was integrated in 1998 under BTEB, providing General Electrical Works and IT trade education."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "বর্তমান স্মার্ট রূপান্তর" : "Today's Smart Campus Transformation"}</span>
            </h2>
            <p>
              {lang === "bn"
                ? "বর্তমানে বিদ্যালয়টিতে রয়েছে সুপরিসর তিনতলা পাকা ভবন, আধুনিক মাল্টিমিডিয়া ক্লাসরুম, সমৃদ্ধ বিজ্ঞানাগার, লাইব্রেরি এবং স্বয়ংক্রিয় ডিজিটাল হাজিরা ব্যবস্থা। ২০২৬ সালে শিক্ষার্থীদের ফলাফল ও হাজিরাকে শতভাগ অনলাইন ডাটাবেজের আওতায় আনা হয়েছে।"
                : "Today, the school boasts modern multistory buildings, multimedia facilities, enriched science labs, an automated digital attendance system, and real-time online result publishing."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
