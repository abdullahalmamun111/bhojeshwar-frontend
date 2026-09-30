"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "bn" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, { bn: string; en: string }> = {
  // Top bar & Header
  schoolName: {
    bn: "ভোজেশ্বর উচ্চ বিদ্যালয়",
    en: "Bhojeshwar High School",
  },
  schoolBranch: {
    bn: "ভোকেশনাল শাখা সহ | নড়িয়া, শরীয়তপুর",
    en: "Vocational Branch | Naria, Shariatpur",
  },
  eiinLabel: { bn: "EIIN: ১১৩৫৮৭", en: "EIIN: 113587" },
  estdLabel: { bn: "স্থাপিত: ১৯৭৮", en: "Estd: 1978" },
  portalLogin: { bn: "লগইন পোর্টাল", en: "Login Portal" },
  
  // Navigation Menu
  navHome: { bn: "হোম", en: "Home" },
  navAbout: { bn: "পরিচিতি", en: "About Us" },
  navHistory: { bn: "ইতিহাস", en: "History" },
  navCommittee: { bn: "ম্যানেজিং কমিটি", en: "Managing Committee" },
  navTeachers: { bn: "শিক্ষক তথ্য", en: "Teachers" },
  navStudents: { bn: "শিক্ষার্থী তথ্য", en: "Students Info" },
  navStaff: { bn: "স্টাফ সদস্য", en: "Staff Members" },
  navAcademic: { bn: "একাডেমিক", en: "Academic" },
  navRoutine: { bn: "ক্লাস রুটিন", en: "Class Routine" },
  navSyllabus: { bn: "সিলেবাস ও প্রশ্ন ব্যাংক", en: "Syllabus & Question Bank" },
  navCurriculum: { bn: "কারিকুলাম ও ট্রেড", en: "Curriculum & Trades" },
  navCoCurricular: { bn: "সহ-শিক্ষা", en: "Co-Curricular" },
  navScout: { bn: "স্কাউট", en: "Scout" },
  navGirlsGuide: { bn: "গার্লস গাইড", en: "Girls Guide" },
  navStudyTour: { bn: "শিক্ষা সফর", en: "Study Tour" },
  navSports: { bn: "ক্রীড়া ক্লাব", en: "Sports Club" },
  navDebating: { bn: "ডিবেটিং ক্লাব", en: "Debating Club" },
  navCultural: { bn: "কালচারাল ক্লাব", en: "Cultural Club" },
  navMagazine: { bn: "স্কুল ম্যাগাজিন", en: "School Magazine" },
  navDeyalika: { bn: "দেয়ালিকা", en: "Wall Magazine" },
  navForum: { bn: "ফোরাম ও মতামত", en: "Forum & Community" },
  navAdmission: { bn: "অনলাইন ভর্তি", en: "Admission" },
  navAttendance: { bn: "ডিজিটাল হাজিরা", en: "Digital Attendance" },
  navResults: { bn: "পরীক্ষার ফলাফল", en: "Results" },
  navNotice: { bn: "নোটিশ বোর্ড", en: "Notices" },
  navContact: { bn: "যোগাযোগ", en: "Contact" },

  // Hero Section
  heroBadge: {
    bn: "★ শিক্ষা, নৈতিকতা ও কারিগরি দক্ষতার ৪৭+ বছরের ঐতিহ্য",
    en: "★ 47+ Years of Legacy in Education, Morality & Technical Skills",
  },
  heroSubtitle: {
    bn: "মাশুরা, ভোজেশ্বর, নড়িয়া, শরীয়তপুর - ৮০২১ | EIIN: ১১৩৫৮৭ | স্থাপিত: ১৯৭৮",
    en: "Mashura, Bhojeshwar, Naria, Shariatpur - 8021 | EIIN: 113587 | Estd: 1978",
  },
  heroDesc: {
    bn: "ভোজেশ্বর উচ্চ বিদ্যালয় আধুনিক শিক্ষা, বিজ্ঞান ও তথ্যপ্রযুক্তি এবং কারিগরি শিক্ষার মাধ্যমে প্রতিটি শিক্ষার্থীকে সুনাগরিক হিসেবে গড়ে তুলতে নিরলসভাবে কাজ করে যাচ্ছে।",
    en: "Bhojeshwar High School is dedicated to fostering enlightened citizens equipped with modern knowledge, science, IT, and vocational proficiency.",
  },
  heroApplyBtn: { bn: "অনলাইন ভর্তি আবেদন", en: "Apply for Admission" },
  heroResultBtn: { bn: "ফলাফল অনুসন্ধান", en: "Check Results" },
  heroAttendanceBtn: { bn: "ডিজিটাল হাজিরা", en: "Digital Attendance" },

  // Quick Action Cards
  quickAdmission: { bn: "অনলাইন ভর্তি", en: "Online Admission" },
  quickAdmissionDesc: { bn: "নতুন শিক্ষাবর্ষে ভর্তি আবেদন", en: "Admission application for new session" },
  quickResult: { bn: "ফলাফল শীট", en: "Result Sheet" },
  quickResultDesc: { bn: "রোল ও রেজি দিয়ে মার্কশিট দেখুন", en: "Instant marksheet with roll & reg" },
  quickAttendance: { bn: "ডিজিটাল হাজিরা", en: "Digital Attendance" },
  quickAttendanceDesc: { bn: "দৈনিক শ্রেণিভিত্তিক হাজিরা", en: "Daily class-wise attendance report" },
  quickRoutine: { bn: "ক্লাস রুটিন", en: "Class Routine" },
  quickRoutineDesc: { bn: "শ্রেণিভিত্তিক সাপ্তাহিক সময়সূচি", en: "Weekly class schedule download" },
  quickSyllabus: { bn: "সিলেবাস ও বই", en: "Syllabus & Books" },
  quickSyllabusDesc: { bn: "পরীক্ষার সিলেবাস ও পাঠ্যক্রম", en: "Exam syllabus & textbook guide" },
  quickForum: { bn: "ফোরাম ও মতামত", en: "Student Forum" },
  quickForumDesc: { bn: "শিক্ষক ও শিক্ষার্থীদের মিথস্ক্রিয়া", en: "Interaction & discussions" },

  // Notice & Headmaster section
  urgentNotices: { bn: "জরুরী নোটিশসমূহ", en: "Urgent Notices" },
  viewAllNotices: { bn: "সকল নোটিশ দেখুন", en: "View All Notices" },
  headmasterTitle: { bn: "প্রধান শিক্ষকের বাণী", en: "Message from the Headmaster" },
  headmasterName: { bn: "মো: রফিকুল ইসলাম", en: "Md. Rafiqul Islam" },
  headmasterDesignation: { bn: "প্রধান শিক্ষক, ভোজেশ্বর উচ্চ বিদ্যালয়", en: "Headmaster, Bhojeshwar High School" },

  // Statistics
  statStudents: { bn: "বর্তমান শিক্ষার্থী", en: "Enrolled Students" },
  statTeachers: { bn: "শিক্ষক ও শিক্ষিকা", en: "Qualified Teachers" },
  statStaff: { bn: "কর্মচারী ও কর্মকর্তা", en: "Supporting Staff" },
  statPassRate: { bn: "পাসের গড় হার", en: "Average Pass Rate" },
  statAlumni: { bn: "প্রাক্তন শিক্ষার্থী", en: "Proud Alumni" },

  // Footer & Help Desk
  addressTitle: { bn: "আমাদের অবস্থান", en: "Our Location" },
  contactTitle: { bn: "জরুরী যোগাযোগ", en: "Contact Information" },
  quickLinks: { bn: "গুরুত্বপূর্ণ লিংক", en: "Important Links" },
  emergencyHotline: { bn: "জরুরী সেবা", en: "Emergency Services" },
  allRightsReserved: {
    bn: "সর্বস্বত্ব সংরক্ষিত © ২০২৬ ভোজেশ্বর উচ্চ বিদ্যালয়, মাশুরা, নড়িয়া, শরীয়তপুর।",
    en: "All Rights Reserved © 2026 Bhojeshwar High School, Mashura, Naria, Shariatpur.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("bn");

  useEffect(() => {
    const saved = localStorage.getItem("bhs_lang") as Language;
    if (saved === "bn" || saved === "en") {
      setLangState(saved);
      document.body.classList.toggle("lang-en", saved === "en");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("bhs_lang", newLang);
    document.body.classList.toggle("lang-en", newLang === "en");
  };

  const toggleLang = () => {
    setLang(lang === "bn" ? "en" : "bn");
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][lang] || translations[key].bn;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
