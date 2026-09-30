export interface RoutinePeriod {
  period: number;
  time: string;
  subject: { bn: string; en: string };
  teacher: { bn: string; en: string };
  room: string;
}

export interface DayRoutine {
  day: { bn: string; en: string };
  periods: RoutinePeriod[];
}

export interface ClassRoutineInfo {
  className: string;
  section: string;
  shift: { bn: string; en: string };
  days: DayRoutine[];
}

export const sampleClassRoutines: Record<string, ClassRoutineInfo> = {
  "10": {
    className: "১০ম শ্রেণি (বিজ্ঞান বিভাগ)",
    section: "A",
    shift: { bn: "প্রভাতী / দিবা (সকাল ৯:০০ - বিকাল ৩:৩০)", en: "Day Shift (9:00 AM - 3:30 PM)" },
    days: [
      {
        day: { bn: "রবিবার", en: "Sunday" },
        periods: [
          { period: 1, time: "09:00 - 09:45 AM", subject: { bn: "বাংলা ১ম পত্র", en: "Bangla 1st" }, teacher: { bn: "সুলতানা রাজিয়া", en: "Sultana Razia" }, room: "২০১" },
          { period: 2, time: "09:45 - 10:30 AM", subject: { bn: "ইংরেজি ১ম পত্র", en: "English 1st" }, teacher: { bn: "নাসরীন জাহান", en: "Nasreen Jahan" }, room: "২০১" },
          { period: 3, time: "10:30 - 11:15 AM", subject: { bn: "গণিত", en: "Mathematics" }, teacher: { bn: "মো: রফিকুল ইসলাম", en: "Md. Rafiqul Islam" }, room: "২০১" },
          { period: 4, time: "11:30 - 12:15 PM", subject: { bn: "পদার্থবিজ্ঞান", en: "Physics" }, teacher: { bn: "প্রবীর কুমার রায়", en: "Prabir Kumar Roy" }, room: "বিজ্ঞান ল্যাব" },
          { period: 5, time: "12:15 - 01:00 PM", subject: { bn: "রসায়ন", en: "Chemistry" }, teacher: { bn: "ফারহানা আহমেদ", en: "Farhana Ahmed" }, room: "বিজ্ঞান ল্যাব" },
          { period: 6, time: "01:45 - 02:30 PM", subject: { bn: "আইসিটি ল্যাব", en: "ICT Practical" }, teacher: { bn: "মাহমুদুল হাসান", en: "Mahmudul Hasan" }, room: "কম্পিউটার ল্যাব" },
        ],
      },
      {
        day: { bn: "সোমবার", en: "Monday" },
        periods: [
          { period: 1, time: "09:00 - 09:45 AM", subject: { bn: "উচ্চতর গণিত", en: "Higher Math" }, teacher: { bn: "প্রবীর কুমার রায়", en: "Prabir Kumar Roy" }, room: "২০১" },
          { period: 2, time: "09:45 - 10:30 AM", subject: { bn: "জীববিজ্ঞান", en: "Biology" }, teacher: { bn: "ফারহানা আহমেদ", en: "Farhana Ahmed" }, room: "২০১" },
          { period: 3, time: "10:30 - 11:15 AM", subject: { bn: "বাংলা ২য় পত্র", en: "Bangla 2nd" }, teacher: { bn: "সুলতানা রাজিয়া", en: "Sultana Razia" }, room: "২০১" },
          { period: 4, time: "11:30 - 12:15 PM", subject: { bn: "ইংরেজি ২য় পত্র", en: "English 2nd" }, teacher: { bn: "নাসরীন জাহান", en: "Nasreen Jahan" }, room: "২০১" },
          { period: 5, time: "12:15 - 01:00 PM", subject: { bn: "বাংলাদেশ ও বিশ্বপরিচয়", en: "BGS" }, teacher: { bn: "মো: কামাল হোসেন", en: "Md. Kamal Hossain" }, room: "২০১" },
          { period: 6, time: "01:45 - 02:30 PM", subject: { bn: "শারীরিক শিক্ষা ও স্বাস্থ্য", en: "Physical Education" }, teacher: { bn: "স্পোর্টস শিক্ষক", en: "Sports Instructor" }, room: "মাঠ" },
        ],
      },
    ],
  },
  "10-voc": {
    className: "১০ম শ্রেণি (কারিগরি ও ভোকেশনাল শাখা)",
    section: "ট্রেড ১ ও ২",
    shift: { bn: "দিবা শাখা (সকাল ৯:০০ - বিকাল ৩:৪৫)", en: "Day Shift (9:00 AM - 3:45 PM)" },
    days: [
      {
        day: { bn: "রবিবার", en: "Sunday" },
        periods: [
          { period: 1, time: "09:00 - 09:45 AM", subject: { bn: "ট্রেড থিওরি (ইলেকট্রিক্যাল)", en: "Trade Theory" }, teacher: { bn: "মোঃ আনিসুর রহমান", en: "Md. Anisur Rahman" }, room: "ট্রেড ল্যাব ১" },
          { period: 2, time: "09:45 - 11:15 AM", subject: { bn: "ট্রেড প্র্যাকটিক্যাল ও ওয়্যারিং", en: "Trade Practical" }, teacher: { bn: "মোঃ আনিসুর রহমান", en: "Md. Anisur Rahman" }, room: "ওয়ার্কশপ" },
          { period: 3, time: "11:30 - 12:15 PM", subject: { bn: "পদার্থবিজ্ঞান ও গণিত", en: "Physics & Math" }, teacher: { bn: "প্রবীর কুমার রায়", en: "Prabir Kumar Roy" }, room: "১০২" },
          { period: 4, time: "12:15 - 01:00 PM", subject: { bn: "বাংলা ও ইংরেজি", en: "Bangla & English" }, teacher: { bn: "নাসরীন জাহান", en: "Nasreen Jahan" }, room: "১০২" },
          { period: 5, time: "01:45 - 03:00 PM", subject: { bn: "কম্পিউটার অ্যাপ্লিকেশন", en: "Computer App" }, teacher: { bn: "মাহমুদুল হাসান", en: "Mahmudul Hasan" }, room: "আইটি ল্যাব" },
        ],
      },
    ],
  },
};

export interface SyllabusItem {
  id: string;
  className: { bn: string; en: string };
  subject: { bn: string; en: string };
  academicYear: string;
  fileSize: string;
  term: { bn: string; en: string };
}

export const syllabusData: SyllabusItem[] = [
  { id: "syl-01", className: { bn: "১০ম শ্রেণি (বিজ্ঞান)", en: "Class 10 (Science)" }, subject: { bn: "পদার্থবিজ্ঞান ও রসায়ন পূর্ণাঙ্গ সিলেবাস", en: "Physics & Chemistry Full Syllabus" }, academicYear: "2026", fileSize: "1.4 MB", term: { bn: "বার্ষিক / প্রি-টেস্ট", en: "Annual / Pre-Test" } },
  { id: "syl-02", className: { bn: "১০ম শ্রেণি (কারিগরি)", en: "Class 10 (Vocational)" }, subject: { bn: "জেনারেল ইলেকট্রিক্যাল ওয়ার্কস ও ট্রেড সিলেবাস", en: "General Electrical & Trade Syllabus" }, academicYear: "2026", fileSize: "1.8 MB", term: { bn: "বোর্ড ফাইনাল ২০২৬", en: "Board Final 2026" } },
  { id: "syl-03", className: { bn: "৯ম শ্রেণি (সকল বিভাগ)", en: "Class 9 (All Groups)" }, subject: { bn: "গণিত, ইংরেজি ও বাংলা পাঠ পরিকল্পনা", en: "Math, English & Bangla Lesson Plan" }, academicYear: "2026", fileSize: "2.1 MB", term: { bn: "অর্ধবার্ষিক ও বার্ষিক", en: "Mid-Term & Annual" } },
  { id: "syl-04", className: { bn: "৮ম শ্রেণি", en: "Class 8" }, subject: { bn: "নতুন জাতীয় শিক্ষাক্রম মূল্যায়ন নির্দেশিকা", en: "New National Curriculum Evaluation Guide" }, academicYear: "2026", fileSize: "1.2 MB", term: { bn: "সামষ্টিক মূল্যায়ন", en: "Summative Evaluation" } },
  { id: "syl-05", className: { bn: "৬ষ্ঠ ও ৭ম শ্রেণি", en: "Class 6 & 7" }, subject: { bn: "বার্ষিক পাঠ্যসূচি ও শিখন অভিজ্ঞতা ভিত্তিক সিলেবাস", en: "Annual Syllabus & Learning Experience Plan" }, academicYear: "2026", fileSize: "1.9 MB", term: { bn: "বাৎসরিক মূল্যায়ন", en: "Yearly Evaluation" } },
];
