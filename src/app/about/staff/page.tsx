"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { facultyData } from "@/data/teachers";
import { ShieldCheck, Phone, Mail, Award, UserCheck } from "lucide-react";

export default function StaffPage() {
  const { lang } = useLanguage();

  const staffMembers = [
    {
      name: { bn: "মো: কামাল হোসেন", en: "Md. Kamal Hossain" },
      designation: { bn: "প্রধান সহকারী কাম হিসাবরক্ষক", en: "Head Assistant cum Accountant" },
      qualification: { bn: "বি.কম (হিসাববিজ্ঞান)", en: "B.Com (Accounting)" },
      phone: "01844556677",
      email: "kamal.admin@gmail.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      joined: "2008",
    },
    {
      name: { bn: "মোঃ দেলোয়ার হোসেন", en: "Md. Delowar Hossain" },
      designation: { bn: "কম্পিউটার ল্যাব অপারেটর", en: "Computer Lab Operator" },
      qualification: { bn: "এইচএসসি ও ডিপ্লোমা ইন আইটি", en: "HSC & Diploma in IT" },
      phone: "01788990011",
      email: "delowar.lab@gmail.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      joined: "2015",
    },
    {
      name: { bn: "আব্দুল মজিদ হাওলাদার", en: "Abdul Majid Hawlader" },
      designation: { bn: "বিজ্ঞানাগার সহকারী (ল্যাব এটেনডেন্ট)", en: "Science Laboratory Assistant" },
      qualification: { bn: "এসএসসি (বিজ্ঞান)", en: "SSC (Science)" },
      phone: "01912345600",
      email: "majid.sci@gmail.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      joined: "2011",
    },
    {
      name: { bn: "মোছাঃ শাহিনুর বেগম", en: "Mst. Shahinur Begum" },
      designation: { bn: "সহকারী গ্রন্থাগারিক (লাইব্রেরি ইনচার্জ)", en: "Assistant Librarian" },
      qualification: { bn: "বি.এ, লাইব্রেরি সায়েন্স সার্টিফিকেট", en: "B.A, Library Science Cert." },
      phone: "01755667788",
      email: "shahinur.lib@gmail.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      joined: "2017",
    },
    {
      name: { bn: "মোঃ বাবুল মিয়া", en: "Md. Babul Miah" },
      designation: { bn: "অফিস সহায়ক ও এমএলএসএস", en: "Office Attendant" },
      qualification: { bn: "অষ্টম শ্রেণি পাস", en: "Class 8 Pass" },
      phone: "01811223344",
      email: "babul.office@gmail.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      joined: "2014",
    },
    {
      name: { bn: "মোঃ রতন ফকির", en: "Md. Ratan Fokir" },
      designation: { bn: "নিরাপত্তা প্রহরী ও গেটম্যান", en: "Security Guard & Gatekeeper" },
      qualification: { bn: "অষ্টম শ্রেণি পাস", en: "Class 8 Pass" },
      phone: "01933445566",
      email: "ratan.guard@gmail.com",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop",
      joined: "2019",
    },
  ];

  return (
    <div className="w-full">
      <Breadcrumb
        title={lang === "bn" ? "৫. কর্মকর্তা ও কর্মচারী (স্টাফ)" : "5. Staff & Administration"}
        category={lang === "bn" ? "পরিচিতি" : "About Us"}
      />

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {lang === "bn" ? "সহায়ক প্রশাসন" : "Administrative Support"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === "bn" ? "কর্মকর্তা ও কর্মচারী তালিকা" : "Administrative & Supporting Staff"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === "bn"
              ? "বিদ্যালয়ের দৈনন্দিন প্রশাসনিক কাজ, হিসাবরক্ষণ, ল্যাব ও নিরাপত্তা ব্যবস্থাপনায় নিয়োজিত কর্মীদল"
              : "Staff personnel committed to daily school administration, accounts, laboratory maintenance, and security"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((staff, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-lg hover:shadow-xl hover:border-emerald-500 transition-all flex items-start gap-4"
            >
              <img
                src={staff.image}
                alt={staff.name[lang]}
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500/40 shrink-0 shadow"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                  {staff.name[lang]}
                </h3>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {staff.designation[lang]}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  {staff.qualification[lang]}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-emerald-500" />
                    <span>{staff.phone}</span>
                  </span>
                  <span>{lang === "bn" ? `যোগদান: ${staff.joined}` : `Joined: ${staff.joined}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
