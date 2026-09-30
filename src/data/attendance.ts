export interface ClassAttendanceSummary {
  className: { bn: string; en: string };
  code: string;
  totalStudents: number;
  boys: number;
  girls: number;
  present: number;
  absent: number;
  percentage: number;
}

export interface StudentAttendanceRecord {
  roll: number;
  name: { bn: string; en: string };
  className: string;
  section: string;
  status: "Present" | "Absent" | "Late";
  inTime: string;
}

export const dailyAttendanceSummary: ClassAttendanceSummary[] = [
  {
    className: { bn: "৬ষ্ঠ শ্রেণি (ক ও খ শাখা)", en: "Class 6 (Sec A & B)" },
    code: "6",
    totalStudents: 280,
    boys: 135,
    girls: 145,
    present: 268,
    absent: 12,
    percentage: 95.7,
  },
  {
    className: { bn: "৭ম শ্রেণি (ক ও খ শাখা)", en: "Class 7 (Sec A & B)" },
    code: "7",
    totalStudents: 265,
    boys: 130,
    girls: 135,
    present: 251,
    absent: 14,
    percentage: 94.7,
  },
  {
    className: { bn: "৮ম শ্রেণি (ক ও খ শাখা)", en: "Class 8 (Sec A & B)" },
    code: "8",
    totalStudents: 250,
    boys: 120,
    girls: 130,
    present: 240,
    absent: 10,
    percentage: 96.0,
  },
  {
    className: { bn: "৯ম শ্রেণি (বিজ্ঞান, মানবিক, ব্যবসায়)", en: "Class 9 (Sci, Hum, Bus)" },
    code: "9",
    totalStudents: 240,
    boys: 115,
    girls: 125,
    present: 228,
    absent: 12,
    percentage: 95.0,
  },
  {
    className: { bn: "৯ম শ্রেণি (কারিগরি/ভোকেশনাল শাখা)", en: "Class 9 (Vocational Branch)" },
    code: "9-voc",
    totalStudents: 85,
    boys: 60,
    girls: 25,
    present: 82,
    absent: 3,
    percentage: 96.5,
  },
  {
    className: { bn: "১০ম শ্রেণি (বিজ্ঞান, মানবিক, ব্যবসায়)", en: "Class 10 (Sci, Hum, Bus)" },
    code: "10",
    totalStudents: 230,
    boys: 110,
    girls: 120,
    present: 221,
    absent: 9,
    percentage: 96.1,
  },
  {
    className: { bn: "১০ম শ্রেণি (কারিগরি/ভোকেশনাল শাখা)", en: "Class 10 (Vocational Branch)" },
    code: "10-voc",
    totalStudents: 100,
    boys: 70,
    girls: 30,
    present: 96,
    absent: 4,
    percentage: 96.0,
  },
];

export const sampleStudentsAttendance: StudentAttendanceRecord[] = [
  { roll: 101, name: { bn: "তানভীর আহমেদ", en: "Tanvir Ahmed" }, className: "10", section: "A (বিজ্ঞান)", status: "Present", inTime: "08:45 AM" },
  { roll: 102, name: { bn: "সাদিয়া আক্তার", en: "Sadia Akter" }, className: "10", section: "A (বিজ্ঞান)", status: "Present", inTime: "08:48 AM" },
  { roll: 103, name: { bn: "মোঃ রাব্বি হাসান", en: "Md. Rabbi Hasan" }, className: "10", section: "A (বিজ্ঞান)", status: "Present", inTime: "08:52 AM" },
  { roll: 104, name: { bn: "জান্নাতুল ফেরদৌস", en: "Jannatul Ferdous" }, className: "10", section: "A (বিজ্ঞান)", status: "Late", inTime: "09:05 AM" },
  { roll: 105, name: { bn: "আরিফুল ইসলাম", en: "Ariful Islam" }, className: "10", section: "A (বিজ্ঞান)", status: "Absent", inTime: "--" },
  { roll: 106, name: { bn: "নুসরাত জাহান", en: "Nusrat Jahan" }, className: "10", section: "A (বিজ্ঞান)", status: "Present", inTime: "08:40 AM" },
  { roll: 107, name: { bn: "শাহিন মাহমুদ", en: "Shahin Mahmud" }, className: "10", section: "A (বিজ্ঞান)", status: "Present", inTime: "08:42 AM" },
  { roll: 108, name: { bn: "ফারজানা হক", en: "Farzana Haque" }, className: "10", section: "A (বিজ্ঞান)", status: "Present", inTime: "08:50 AM" },
];
