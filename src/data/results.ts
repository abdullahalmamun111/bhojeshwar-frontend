export interface SubjectMark {
  subject: { bn: string; en: string };
  totalMarks: number;
  obtainedMarks: number;
  grade: string;
  gradePoint: number;
}

export interface StudentResult {
  roll: string;
  regNo: string;
  studentName: { bn: string; en: string };
  fatherName: { bn: string; en: string };
  motherName: { bn: string; en: string };
  className: string;
  group: { bn: string; en: string };
  examName: { bn: string; en: string };
  year: string;
  gpa: number;
  resultStatus: "PASSED" | "FAILED";
  subjects: SubjectMark[];
}

export const mockResultsData: StudentResult[] = [
  {
    roll: "101",
    regNo: "113587202601",
    studentName: { bn: "তানভীর আহমেদ", en: "Tanvir Ahmed" },
    fatherName: { bn: "মোঃ মোক্তার হোসেন", en: "Md. Moktar Hossain" },
    motherName: { bn: "রোকেয়া বেগম", en: "Rokeya Begum" },
    className: "10",
    group: { bn: "বিজ্ঞান বিভাগ", en: "Science Group" },
    examName: { bn: "অর্ধবার্ষিক মূল্যায়ন পরীক্ষা ২০২৬", en: "Half-Yearly Evaluation Exam 2026" },
    year: "2026",
    gpa: 5.0,
    resultStatus: "PASSED",
    subjects: [
      { subject: { bn: "বাংলা ১ম ও ২য় পত্র", en: "Bangla 1st & 2nd" }, totalMarks: 100, obtainedMarks: 86, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "ইংরেজি ১ম ও ২য় পত্র", en: "English 1st & 2nd" }, totalMarks: 100, obtainedMarks: 84, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "গণিত", en: "Mathematics" }, totalMarks: 100, obtainedMarks: 94, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "পদার্থবিজ্ঞান", en: "Physics" }, totalMarks: 100, obtainedMarks: 88, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "রসায়ন", en: "Chemistry" }, totalMarks: 100, obtainedMarks: 89, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "জীববিজ্ঞান", en: "Biology" }, totalMarks: 100, obtainedMarks: 82, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "উচ্চতর গণিত", en: "Higher Mathematics" }, totalMarks: 100, obtainedMarks: 92, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "তথ্য ও যোগাযোগ প্রযুক্তি", en: "ICT" }, totalMarks: 50, obtainedMarks: 47, grade: "A+", gradePoint: 5.0 },
    ],
  },
  {
    roll: "102",
    regNo: "113587202602",
    studentName: { bn: "সাদিয়া আক্তার", en: "Sadia Akter" },
    fatherName: { bn: "মোঃ আব্দুল জলিল", en: "Md. Abdul Jalil" },
    motherName: { bn: "ফাতেমা আক্তার", en: "Fatema Akter" },
    className: "10",
    group: { bn: "বিজ্ঞান বিভাগ", en: "Science Group" },
    examName: { bn: "অর্ধবার্ষিক মূল্যায়ন পরীক্ষা ২০২৬", en: "Half-Yearly Evaluation Exam 2026" },
    year: "2026",
    gpa: 4.89,
    resultStatus: "PASSED",
    subjects: [
      { subject: { bn: "বাংলা ১ম ও ২য় পত্র", en: "Bangla 1st & 2nd" }, totalMarks: 100, obtainedMarks: 81, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "ইংরেজি ১ম ও ২য় পত্র", en: "English 1st & 2nd" }, totalMarks: 100, obtainedMarks: 76, grade: "A", gradePoint: 4.0 },
      { subject: { bn: "গণিত", en: "Mathematics" }, totalMarks: 100, obtainedMarks: 90, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "পদার্থবিজ্ঞান", en: "Physics" }, totalMarks: 100, obtainedMarks: 82, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "রসায়ন", en: "Chemistry" }, totalMarks: 100, obtainedMarks: 85, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "জীববিজ্ঞান", en: "Biology" }, totalMarks: 100, obtainedMarks: 80, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "উচ্চতর গণিত", en: "Higher Mathematics" }, totalMarks: 100, obtainedMarks: 88, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "তথ্য ও যোগাযোগ প্রযুক্তি", en: "ICT" }, totalMarks: 50, obtainedMarks: 45, grade: "A+", gradePoint: 5.0 },
    ],
  },
  {
    roll: "201",
    regNo: "113587202621",
    studentName: { bn: "মোঃ শুভ হাওলাদার", en: "Md. Shuvo Hawlader" },
    fatherName: { bn: "বশির আহমেদ হাওলাদার", en: "Bashir Ahmed Hawlader" },
    motherName: { bn: "রেহানা বেগম", en: "Rehana Begum" },
    className: "10-voc",
    group: { bn: "জেনারেল ইলেকট্রিক্যাল ওয়ার্কস (ভোকেশনাল)", en: "General Electrical (Vocational)" },
    examName: { bn: "এসএসসি ভোকেশনাল প্রাক-নির্বাচনী ২০২৬", en: "SSC Vocational Pre-Test 2026" },
    year: "2026",
    gpa: 5.0,
    resultStatus: "PASSED",
    subjects: [
      { subject: { bn: "ট্রেড থিওরি ও প্র্যাকটিক্যাল", en: "Trade Theory & Practical" }, totalMarks: 200, obtainedMarks: 185, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "পদার্থবিজ্ঞান ও রসায়ন", en: "Physics & Chemistry" }, totalMarks: 100, obtainedMarks: 86, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "গণিত", en: "Mathematics" }, totalMarks: 100, obtainedMarks: 91, grade: "A+", gradePoint: 5.0 },
      { subject: { bn: "বাংলা ও ইংরেজি", en: "Bangla & English" }, totalMarks: 100, obtainedMarks: 80, grade: "A+", gradePoint: 5.0 },
    ],
  },
];
