"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { clubsAndActivities, ClubActivity } from "@/data/coCurricular";
import {
  Trophy,
  Users,
  Calendar,
  Sparkles,
  CheckCircle2,
  Send,
  MessageSquare,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export default function CoCurricularDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { lang } = useLanguage();

  const club = clubsAndActivities.find((c) => c.slug === slug);

  // Form state for club membership or forum question
  const [forumQuestions, setForumQuestions] = useState([
    {
      author: "মোঃ তানভীর আহমেদ (১০ম শ্রেণি)",
      time: "২ ঘণ্টা আগে",
      question: "ভোকেশনাল শাখার প্র্যাকটিক্যাল পরীক্ষার জন্য কি কি যন্ত্রপাতি সাথে আনতে হবে?",
      answer: "চিফ ইন্সট্রাক্টর মোঃ আনিসুর রহমান: ল্যাব এপ্রোন, টেস্টার, কম্বিনেশন প্লায়ার্স এবং প্র্যাকটিক্যাল খাতা সাথে রাখতে হবে।",
    },
    {
      author: "সাদিয়া আক্তার (৯ম শ্রেণি)",
      time: "১ দিন আগে",
      question: "আসন্ন আন্তঃস্কুল বিতর্ক উৎসবের জন্য অডিশন কবে অনুষ্ঠিত হবে?",
      answer: "মডারেটর নাসরীন জাহান: আগামী বুধবার টিচার্স লাউঞ্জে দুপুর ২টায় বাছাই পর্ব শুরু হবে।",
    },
  ]);
  const [newQuestion, setNewQuestion] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [applied, setApplied] = useState(false);

  if (!club) {
    return notFound();
  }

  const handlePostQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    setForumQuestions([
      {
        author: lang === "bn" ? "শিক্ষার্থী / অতিথি" : "Student / Visitor",
        time: lang === "bn" ? "এইমাত্র" : "Just now",
        question: newQuestion,
        answer: lang === "bn" ? "শিক্ষক মডারেটর শীঘ্রই আপনার প্রশ্নের উত্তর প্রদান করবেন।" : "Moderator will answer your inquiry shortly.",
      },
      ...forumQuestions,
    ]);
    setNewQuestion("");
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => setApplied(false), 4000);
  };

  return (
    <div className="w-full">
      <Breadcrumb
        title={club.name[lang]}
        category={lang === "bn" ? "সহ-শিক্ষা ও ক্লাব" : "Co-Curricular"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner for Club */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-slate-200 dark:border-emerald-800/40">
          <div className="relative h-72 sm:h-96 w-full">
            <img
              src={club.image}
              alt={club.name[lang]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs w-fit mb-3">
                {club.badge[lang]}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {club.name[lang]}
              </h1>
              <p className="text-xs sm:text-sm text-emerald-300 font-semibold mt-1">
                {club.tagline[lang]}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>{club.membersCount} {lang === "bn" ? "সদস্য" : "Active Members"}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>{lang === "bn" ? `প্রতিষ্ঠা: ${club.established}` : `Estd: ${club.established}`}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-3">
                {lang === "bn" ? "কার্যক্রমের বিস্তারিত বিবরণ" : "About the Activity / Club"}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {club.description[lang]}
              </p>
            </div>

            {/* Achievements */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>{lang === "bn" ? "প্রধান অর্জন ও সাফল্য" : "Key Achievements & Honors"}</span>
              </h2>
              <div className="space-y-3">
                {club.achievements[lang].map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Q&A for Forum (Item 20) */}
            {club.id === "forum" && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-6">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-500" />
                    <span>{lang === "bn" ? "২০. একাডেমিক ও স্টুডেন্ট ফোরাম আলোচনা" : "20. Community Q&A & Discussions"}</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {lang === "bn" ? "আপনার প্রশ্ন জিজ্ঞাসা করুন বা সহপাঠীদের প্রশ্নোত্তরে অংশ নিন" : "Ask your academic questions or participate in helpful discussions"}
                  </p>
                </div>

                <form onSubmit={handlePostQuestion} className="space-y-3">
                  <textarea
                    rows={3}
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder={lang === "bn" ? "আপনার একাডেমিক প্রশ্ন বা মতামত এখানে লিখুন..." : "Write your question or comment here..."}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{lang === "bn" ? "পোস্ট করুন" : "Post Question"}</span>
                    </button>
                  </div>
                </form>

                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {forumQuestions.map((q, qIdx) => (
                    <div key={qIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{q.author}</span>
                        <span className="text-slate-400 text-[11px]">{q.time}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        Q: {q.question}
                      </p>
                      <div className="p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300">
                        {q.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Join Club (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Moderator Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {lang === "bn" ? "মডারেটর / দায়িত্বপ্রাপ্ত" : "Faculty Moderator"}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {club.moderator[lang]}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === "bn" ? "ভোজেশ্বর উচ্চ বিদ্যালয়, নড়িয়া, শরীয়তপুর" : "Bhojeshwar High School, Naria, Shariatpur"}
              </p>
            </div>

            {/* Upcoming Events */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <span>{lang === "bn" ? "আসন্ন ইভেন্ট ও শিডিউল" : "Upcoming Schedule"}</span>
              </h3>
              <div className="space-y-2.5 text-xs">
                {club.events.map((ev, eIdx) => (
                  <div key={eIdx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block">{ev.title[lang]}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-[11px] mt-0.5 block">{ev.date[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Join Club Membership Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl space-y-4">
              <h3 className="font-bold text-base">
                {lang === "bn" ? "ক্লাবে সদস্যপদ আবেদন" : "Apply for Membership"}
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                {lang === "bn"
                  ? "ভোজেশ্বর উচ্চ বিদ্যালয়ের যেকোনো নিয়মিত শিক্ষার্থী এই ক্লাবে সদস্য হিসেবে যুক্ত হতে পারবে।"
                  : "Any active student of Bhojeshwar High School is welcome to register for membership."}
              </p>

              {applied ? (
                <div className="p-3 rounded-xl bg-white/20 text-center text-xs font-bold animate-pulse">
                  {lang === "bn" ? "আবেদন গ্রহণ করা হয়েছে!" : "Registration submitted successfully!"}
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder={lang === "bn" ? "আপনার নাম ও শ্রেণি/রোল..." : "Your name & class/roll..."}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950/30 border border-white/30 text-white placeholder-emerald-200 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs shadow hover:bg-emerald-50 transition-colors cursor-pointer"
                  >
                    {lang === "bn" ? "সদস্য হতে আবেদন করুন" : "Submit Registration"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
