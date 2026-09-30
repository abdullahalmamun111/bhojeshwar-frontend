export interface CommitteeMember {
  id: string;
  name: { bn: string; en: string };
  role: { bn: string; en: string };
  category: "president" | "secretary" | "guardian" | "teacher" | "donor";
  occupation: { bn: string; en: string };
  phone: string;
  image: string;
}

export const committeeMembers: CommitteeMember[] = [
  {
    id: "com-01",
    name: { bn: "আলহাজ্ব মোঃ জহিরুল ইসলাম", en: "Alhaj Md. Jahirul Islam" },
    role: { bn: "সভাপতি (ম্যানেজিং কমিটি)", en: "President (Managing Committee)" },
    category: "president",
    occupation: { bn: "বিশিষ্ট সমাজসেবক ও শিক্ষানুরাগী", en: "Social Philanthropist & Educationist" },
    phone: "01712-334455",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "com-02",
    name: { bn: "মো: রফিকুল ইসলাম", en: "Md. Rafiqul Islam" },
    role: { bn: "সদস্য সচিব (পদাধিকারবলে)", en: "Member Secretary (Ex-Officio)" },
    category: "secretary",
    occupation: { bn: "প্রধান শিক্ষক, ভোজেশ্বর উচ্চ বিদ্যালয়", en: "Headmaster, Bhojeshwar High School" },
    phone: "01914-504985",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "com-03",
    name: { bn: "মোঃ মোস্তাফিজুর রহমান", en: "Md. Mostafizur Rahman" },
    role: { bn: "অভিভাবক সদস্য", en: "Guardian Representative" },
    category: "guardian",
    occupation: { bn: "ব্যবসায়ী ও সমাজকর্মী", en: "Businessman & Social Worker" },
    phone: "01819-778899",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "com-04",
    name: { bn: "বেগম শামসুন্নাহার", en: "Begum Shamsunnahar" },
    role: { bn: "সংরক্ষিত মহিলা অভিভাবক সদস্য", en: "Reserved Female Guardian Member" },
    category: "guardian",
    occupation: { bn: "উন্নয়নকর্মী ও নারী উদ্যোক্তা", en: "Social Activist & Entrepreneur" },
    phone: "01733-112233",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "com-05",
    name: { bn: "প্রবীর কুমার রায়", en: "Prabir Kumar Roy" },
    role: { bn: "শিক্ষক প্রতিনিধি সদস্য", en: "Teacher Representative" },
    category: "teacher",
    occupation: { bn: "সিনিয়র সহকারী শিক্ষক", en: "Senior Assistant Teacher" },
    phone: "01812-345678",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "com-06",
    name: { bn: "হাজী তোফাজ্জল হোসেন", en: "Haji Tofazzal Hossain" },
    role: { bn: "দাতা সদস্য", en: "Donor Member" },
    category: "donor",
    occupation: { bn: "বিশিষ্ট ব্যবসায়ী ও জমিদাতা", en: "Prominent Merchant & Land Donor" },
    phone: "01911-667788",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
];
