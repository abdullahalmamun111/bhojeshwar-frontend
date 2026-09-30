export interface FacultyMember {
  id: string;
  name: { bn: string; en: string };
  role: "headmaster" | "asst_headmaster" | "senior_teacher" | "teacher" | "vocational" | "staff";
  designation: { bn: string; en: string };
  qualification: { bn: string; en: string };
  subject: { bn: string; en: string };
  email: string;
  phone: string;
  joined: string;
  image: string;
}

export const facultyData: FacultyMember[] = [
  {
    id: "fac-01",
    name: { bn: "মো: রফিকুল ইসলাম", en: "Md. Rafiqul Islam" },
    role: "headmaster",
    designation: { bn: "প্রধান শিক্ষক", en: "Headmaster" },
    qualification: { bn: "এম.এসসি (গণিত), বি.এড (১ম শ্রেণি)", en: "M.Sc (Math), B.Ed (1st Class)" },
    subject: { bn: "গণিত ও প্রাতিষ্ঠানিক প্রশাসন", en: "Mathematics & Administration" },
    email: "headmaster.bhs1978@gmail.com",
    phone: "01914504985",
    joined: "1998",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fac-02",
    name: { bn: "নাসরীন জাহান", en: "Nasreen Jahan" },
    role: "asst_headmaster",
    designation: { bn: "সহকারী প্রধান শিক্ষক", en: "Assistant Headmaster" },
    qualification: { bn: "এম.এ (ইংরেজি), বি.এড", en: "M.A (English), B.Ed" },
    subject: { bn: "ইংরেজি ভাষা ও সাহিত্য", en: "English Language & Literature" },
    email: "assthead.bhs@gmail.com",
    phone: "01753940825",
    joined: "2004",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fac-03",
    name: { bn: "প্রবীর কুমার রায়", en: "Prabir Kumar Roy" },
    role: "senior_teacher",
    designation: { bn: "সিনিয়র শিক্ষক (বিজ্ঞান)", en: "Senior Science Teacher" },
    qualification: { bn: "এম.এসসি (পদার্থবিজ্ঞান), বি.এড", en: "M.Sc (Physics), B.Ed" },
    subject: { bn: "পদার্থবিজ্ঞান ও উচ্চতর গণিত", en: "Physics & Higher Math" },
    email: "prabir.sci@gmail.com",
    phone: "01812345678",
    joined: "2001",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fac-04",
    name: { bn: "ফারহানা আহমেদ", en: "Farhana Ahmed" },
    role: "senior_teacher",
    designation: { bn: "সিনিয়র শিক্ষক (জীববিজ্ঞান)", en: "Senior Biology Teacher" },
    qualification: { bn: "এম.এসসি (প্রাণিবিজ্ঞান), এম.এড", en: "M.Sc (Zoology), M.Ed" },
    subject: { bn: "জীববিজ্ঞান ও কৃষি শিক্ষা", en: "Biology & Agricultural Studies" },
    email: "farhana.bio@gmail.com",
    phone: "01711223344",
    joined: "2006",
    image: "https://images.unsplash.com/photo-1580894732454-defbe4fe8a04?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fac-05",
    name: { bn: "মোঃ আনিসুর রহমান", en: "Md. Anisur Rahman" },
    role: "vocational",
    designation: { bn: "চিফ ইন্সট্রাক্টর (ভোকেশনাল)", en: "Chief Instructor (Vocational)" },
    qualification: { bn: "বি.এসসি ইঞ্জিনিয়ারিং (ইলেকট্রিক্যাল)", en: "B.Sc Engg (Electrical)" },
    subject: { bn: "জেনারেল ইলেকট্রিক্যাল ওয়ার্কস", en: "General Electrical Works" },
    email: "anis.tech@gmail.com",
    phone: "01998877665",
    joined: "2010",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fac-06",
    name: { bn: "মাহমুদুল হাসান", en: "Mahmudul Hasan" },
    role: "vocational",
    designation: { bn: "জুনিয়র ইন্সট্রাক্টর (আইসিটি ও ট্রেড)", en: "Junior Instructor (ICT & Trade)" },
    qualification: { bn: "ডিপ্লোমা ইন কম্পিউটার টেকনোলজি", en: "Diploma in Computer Tech" },
    subject: { bn: "তথ্য ও যোগাযোগ প্রযুক্তি (আইসিটি)", en: "Information & Communication Tech" },
    email: "mahmud.ict@gmail.com",
    phone: "01677889900",
    joined: "2016",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fac-07",
    name: { bn: "সুলতানা রাজিয়া", en: "Sultana Razia" },
    role: "teacher",
    designation: { bn: "সহকারী শিক্ষক (সামাজিক বিজ্ঞান)", en: "Asst. Teacher (Social Science)" },
    qualification: { bn: "এম.এ (ইতিহাস), বি.এড", en: "M.A (History), B.Ed" },
    subject: { bn: "বাংলাদেশ ও বিশ্বপরিচয়", en: "Bangladesh & Global Studies" },
    email: "sultana.soc@gmail.com",
    phone: "01723456789",
    joined: "2012",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fac-08",
    name: { bn: "মো: কামাল হোসেন", en: "Md. Kamal Hossain" },
    role: "staff",
    designation: { bn: "প্রধান সহকারী কাম হিসাবরক্ষক", en: "Head Assistant cum Accountant" },
    qualification: { bn: "বি.কম (হিসাববিজ্ঞান)", en: "B.Com (Accounting)" },
    subject: { bn: "হিসাব ও অফিস ব্যবস্থাপনা", en: "Accounts & Office Admin" },
    email: "kamal.admin@gmail.com",
    phone: "01844556677",
    joined: "2008",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
];
