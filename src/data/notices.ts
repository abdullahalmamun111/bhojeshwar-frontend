export interface NoticeItem {
  id: string;
  title: { bn: string; en: string };
  category: "urgent" | "academic" | "exam" | "admission" | "general";
  date: string;
  publishDate: { bn: string; en: string };
  pinned?: boolean;
  fileSize?: string;
  content: { bn: string; en: string };
}

export const noticesData: NoticeItem[] = [
  {
    id: "not-01",
    title: {
      bn: "২০২৬ শিক্ষাবর্ষে ৬ষ্ঠ ও ৯ম শ্রেণিতে অনলাইন ভর্তি কার্যক্রমের সময়সীমা বৃদ্ধি সংক্রান্ত বিজ্ঞপ্তি",
      en: "Extension of Online Admission Deadline for Class 6 and 9 (Academic Year 2026)",
    },
    category: "urgent",
    date: "2026-09-28",
    publishDate: { bn: "২৮ সেপ্টেম্বর, ২০২৬", en: "28 Sep, 2026" },
    pinned: true,
    fileSize: "420 KB",
    content: {
      bn: "ভোজেশ্বর উচ্চ বিদ্যালয়ের ৬ষ্ঠ শ্রেণি এবং ৯ম শ্রেণির সাধারণ ও ভোকেশনাল শাখায় ভর্তিচ্ছু শিক্ষার্থীদের অবগতির জন্য জানানো যাচ্ছে যে, অনলাইন আবেদনের সময়সীমা আগামী ১০ অক্টোবর পর্যন্ত বৃদ্ধি করা হলো।",
      en: "Notice is hereby given to applicants seeking admission in Class 6 and Class 9 (General & Vocational) that the online application deadline has been extended to October 10.",
    },
  },
  {
    id: "not-02",
    title: {
      bn: "অর্ধবার্ষিক / প্রাক-নির্বাচনী পরীক্ষার ফলাফল প্রকাশ ও মার্কশিট বিতরণ",
      en: "Publication of Mid-Term / Pre-Test Examination Results & Marksheet Distribution",
    },
    category: "exam",
    date: "2026-09-25",
    publishDate: { bn: "২৫ সেপ্টেম্বর, ২০২৬", en: "25 Sep, 2026" },
    pinned: true,
    fileSize: "680 KB",
    content: {
      bn: "২০২৬ শিক্ষাবর্ষের সকল শ্রেণির অর্ধবার্ষিক পরীক্ষার ফলাফল বিদ্যালয়ের ওয়েবসাইটে প্রকাশিত হয়েছে। ফলাফল অপশনে গিয়ে রোল ও রেজিস্ট্রেশন নম্বর দিয়ে মার্কশিট ডাউনলোড করা যাবে।",
      en: "Mid-Term Examination results for all classes have been published on the school website. Marksheets can be downloaded from the results section using Roll and Reg numbers.",
    },
  },
  {
    id: "not-03",
    title: {
      bn: "ভোকেশনাল শাখার ৯ম ও ১০ম শ্রেণির প্র্যাকটিক্যাল পরীক্ষার সময়সূচি ২০২৬",
      en: "Practical Examination Schedule 2026 for Class 9 & 10 Vocational Branch",
    },
    category: "academic",
    date: "2026-09-20",
    publishDate: { bn: "২০ সেপ্টেম্বর, ২০২৬", en: "20 Sep, 2026" },
    pinned: false,
    fileSize: "512 KB",
    content: {
      bn: "বাংলাদেশ কারিগরি শিক্ষা বোর্ডের নির্দেশনা অনুযায়ী ভোকেশনাল শাখার জেনারেল ইলেকট্রিক্যাল ও কম্পিউটার ট্রেডের ব্যবহারিক পরীক্ষা আগামী রবিবার হতে শুরু হবে।",
      en: "In accordance with BTEB guidelines, practical exams for Vocational General Electrical and Computer trades will commence from next Sunday.",
    },
  },
  {
    id: "not-04",
    title: {
      bn: "বার্ষিক ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক সপ্তাহ ২০২৬ এর রেজিস্ট্রেশন আহবান",
      en: "Call for Registration: Annual Sports Competition & Cultural Week 2026",
    },
    category: "general",
    date: "2026-09-15",
    publishDate: { bn: "১৫ সেপ্টেম্বর, ২০২৬", en: "15 Sep, 2026" },
    pinned: false,
    fileSize: "340 KB",
    content: {
      bn: "বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক সপ্তাহের ইভেন্টগুলোতে অংশগ্রহণের জন্য স্ব-স্ব শ্রেণি শিক্ষকের নিকট নাম লিপিবদ্ধ করার নির্দেশ দেওয়া হলো।",
      en: "Students wishing to participate in the Annual Sports and Cultural Week events are advised to register with their respective class teachers.",
    },
  },
  {
    id: "not-05",
    title: {
      bn: "অভিভাবক সমাবেশ ও ডিজিটাল হাজিরা ট্র্যাকিং অ্যাপ সম্পর্কিত বিশেষ নোটিশ",
      en: "Special Notice on Parents Gathering & Student Digital Attendance Tracking",
    },
    category: "academic",
    date: "2026-09-10",
    publishDate: { bn: "১০ সেপ্টেম্বর, ২০২৬", en: "10 Sep, 2026" },
    pinned: false,
    fileSize: "290 KB",
    content: {
      bn: "শিক্ষার্থীদের নিয়মিত উপস্থিতি ও ডিজিটাল হাজিরা পর্যবেক্ষণ সংক্রান্ত অভিভাবক সমাবেশ আগামী শুক্রবার সকাল ১০টায় বিদ্যালয় মিলনায়তনে অনুষ্ঠিত হবে।",
      en: "A parents assembly regarding regular attendance monitoring through the digital attendance portal will be held next Friday at 10:00 AM.",
    },
  },
  {
    id: "not-06",
    title: {
      bn: "উপজেলা ও জেলা পর্যায়ের স্কাউট সমাবেশ ২০২৬ এ অংশগ্রহণের বিজ্ঞপ্তি",
      en: "Notice for Participation in Upazila & District Scout Jamboree 2026",
    },
    category: "general",
    date: "2026-09-05",
    publishDate: { bn: "০৫ সেপ্টেম্বর, ২০২৬", en: "05 Sep, 2026" },
    pinned: false,
    fileSize: "380 KB",
    content: {
      bn: "শরীয়তপুর জেলা স্কাউট সমাবেশে অংশগ্রহণের জন্য আগ্রহী স্কাউট ও গাইড সদস্যদের স্কাউট লিডার প্রবীর কুমার রায়ের নিকট দ্রুত যোগাযোগ করার নির্দেশ দেওয়া হলো।",
      en: "Interested Scout & Guide members are requested to contact Scout Leader Prabir Kumar Roy for participation in the district jamboree.",
    },
  },
  {
    id: "not-07",
    title: {
      bn: "২০২৬ সালের এসএসসি ও এসএসসি ভোকেশনাল নির্বাচনী পরীক্ষা সংক্রান্ত নির্দেশিকা",
      en: "Guidelines for SSC & SSC Vocational Test Examination 2026",
    },
    category: "exam",
    date: "2026-09-01",
    publishDate: { bn: "০১ সেপ্টেম্বর, ২০২৬", en: "01 Sep, 2026" },
    pinned: false,
    fileSize: "450 KB",
    content: {
      bn: "১০ম শ্রেণির সাধারণ ও ভোকেশনাল শাখার নির্বাচনী পরীক্ষার চূড়ান্ত ফি জমা ও অ্যাডমিট কার্ড বিতরণের সময়সূচি প্রকাশ করা হলো।",
      en: "Schedule published for fee deposit and admit card distribution for 10th-grade general and vocational test examinations.",
    },
  },
];
