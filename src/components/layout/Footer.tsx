"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { schoolInfo } from "@/data/schoolInfo";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Calendar,
  Heart,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="w-full bg-[#050f1a] text-slate-300 border-t border-emerald-900/40 transition-colors">
      {/* Upper Footer: Institutional Info & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Branding & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {lang === "bn" ? schoolInfo.name.bn : schoolInfo.name.en}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {lang === "bn"
                    ? "নড়িয়া, শরীয়তপুর • EIIN: ১১৩৫৮৭ • স্থাপিত: ১৯৭৮"
                    : "Naria, Shariatpur • EIIN: 113587 • Estd: 1978"}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {lang === "bn" ? schoolInfo.slogan.bn : schoolInfo.slogan.en}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{lang === "bn" ? schoolInfo.geographical.fullAddress.bn : schoolInfo.geographical.fullAddress.en}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {schoolInfo.contacts.mobile}, {schoolInfo.contacts.hotline}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${schoolInfo.contacts.email}`} className="hover:text-emerald-400 transition-colors">
                  {schoolInfo.contacts.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {lang === "bn" ? "নির্বাচনী এলাকা: শরীয়তপুর-২ • ভৌগোলিক ধরন: সমতল গ্রামীণ" : "Constituency: Shariatpur-2 • Plain Rural Area"}
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2">
              {lang === "bn" ? "প্রশাসনিক পরিচিতি" : "Administration"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about/history" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "১. ইতিহাস ও ঐতিহ্য" : "1. History & Heritage"}
                </Link>
              </li>
              <li>
                <Link href="/about/committee" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "২. ম্যানেজিং কমিটি" : "2. Managing Committee"}
                </Link>
              </li>
              <li>
                <Link href="/about/teachers" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "৩. শিক্ষক তথ্য" : "3. Teachers Info"}
                </Link>
              </li>
              <li>
                <Link href="/about/students" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "৪. শিক্ষার্থী তথ্য" : "4. Students Info"}
                </Link>
              </li>
              <li>
                <Link href="/about/staff" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "৫. কর্মকর্তা ও কর্মচারী (স্টাফ)" : "5. Staff & Employees"}
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "২১. অনলাইন ভর্তি আবেদন" : "21. Online Admission"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Academic & Attendance */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2">
              {lang === "bn" ? "একাডেমিক ও সেবা" : "Academic & Services"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/academic/routine" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "৬. ক্লাস রুটিন" : "6. Class Routine"}
                </Link>
              </li>
              <li>
                <Link href="/academic/syllabus" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "৭ ও ৯. সিলেবাস ও প্রশ্ন ব্যাংক" : "7 & 9. Syllabus & Question Bank"}
                </Link>
              </li>
              <li>
                <Link href="/academic/curriculum" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "১১. কারিকুলাম ও ভোকেশনাল শাখা" : "11. Curriculum & Vocational"}
                </Link>
              </li>
              <li>
                <Link href="/attendance" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "২২ ও ২৪. ডিজিটাল হাজিরা ও সার্বিক রিপোর্ট" : "22 & 24. Digital Attendance Report"}
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "২৩. পরীক্ষার ফলাফল ও মার্কশিট" : "23. Exam Results & Marksheet"}
                </Link>
              </li>
              <li>
                <Link href="/notices" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "১০. সার্বিক নোটিশ বোর্ড" : "10. Notice Board"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Co-curricular & Emergency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2">
              {lang === "bn" ? "সহ-শিক্ষা ও জরুরী সেবা" : "Co-Curricular & Help"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/co-curricular/scout" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "১২. স্কাউট দল" : "12. Scout Troop"}
                </Link>
              </li>
              <li>
                <Link href="/co-curricular/girls-guide" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "১৩. গার্লস গাইড" : "13. Girls Guide"}
                </Link>
              </li>
              <li>
                <Link href="/co-curricular/study-tour" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "১৪. শিক্ষা সফর" : "14. Study Tour"}
                </Link>
              </li>
              <li>
                <Link href="/co-curricular/sports-club" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "১৫. ক্রীড়া ক্লাব" : "15. Sports Club"}
                </Link>
              </li>
              <li>
                <Link href="/co-curricular/magazine" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "১৮. ম্যাগাজিন ও ১৯. দেয়ালিকা" : "18. Magazine & 19. Deyalika"}
                </Link>
              </li>
              <li>
                <Link href="/co-curricular/forum" className="hover:text-emerald-400 transition-colors">
                  {lang === "bn" ? "২০. ফোরাম ও মুক্ত আলোচনা" : "20. Forum & Discussions"}
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40 text-[11px] space-y-1">
                <span className="font-bold text-emerald-300 block">
                  {lang === "bn" ? "জরুরী হেল্পলাইন:" : "Emergency Helplines:"}
                </span>
                <div className="flex flex-wrap gap-2 text-slate-300">
                  <span className="bg-emerald-900/60 px-2 py-0.5 rounded">জাতীয় সেবা: ৯৯৯</span>
                  <span className="bg-emerald-900/60 px-2 py-0.5 rounded">নারী ও শিশু: ১০৯</span>
                  <span className="bg-emerald-900/60 px-2 py-0.5 rounded">তথ্য সেবা: ৩৩৩</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright & Board Recognition */}
      <div className="bg-[#030911] border-t border-slate-800/80 py-6 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            {lang === "bn"
              ? "সর্বস্বত্ব সংরক্ষিত © ২০২৬ ভোজেশ্বর উচ্চ বিদ্যালয় (ভোকেশনাল শাখা সহ)। মাশুরা, নড়িয়া, শরীয়তপুর।"
              : "All Rights Reserved © 2026 Bhojeshwar High School, Vocational Branch. Mashura, Naria, Shariatpur."}
          </p>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>ঢাকা শিক্ষা বোর্ড অনুমোদিত</span>
            <span>•</span>
            <span>বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB)</span>
            <span>•</span>
            <Link href="/portal" className="text-emerald-400 hover:underline font-semibold">
              {lang === "bn" ? "পোর্টাল লগইন" : "Portal Login"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
