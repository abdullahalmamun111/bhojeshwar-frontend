export interface ClubActivity {
  id: string;
  slug: string;
  name: { bn: string; en: string };
  badge: { bn: string; en: string };
  tagline: { bn: string; en: string };
  description: { bn: string; en: string };
  moderator: { bn: string; en: string };
  established: string;
  membersCount: number;
  image: string;
  achievements: { bn: string[]; en: string[] };
  events: {
    title: { bn: string; en: string };
    date: { bn: string; en: string };
  }[];
}

export const clubsAndActivities: ClubActivity[] = [
  {
    id: "scout",
    slug: "scout",
    name: { bn: "ভোজেশ্বর হাই স্কুল স্কাউট দল", en: "Bhojeshwar High School Scout Troop" },
    badge: { bn: "স্কাউটিং", en: "Scouting" },
    tagline: { bn: "সদা প্রস্তুত - সেবার ব্রতে নিবেদিত", en: "Be Prepared - Dedicated to Service" },
    description: {
      bn: "আমাদের বিদ্যালয় স্কাউট দল উপজেলা ও জেলা পর্যায়ে সুপরিচিত। শিক্ষার্থীদের শৃঙ্খলা, সমাজসেবা, দুর্যোগ মোকাবিলা ও নেতৃত্বের গুণাবলী বিকাশে স্কাউটিং গুরুত্বপূর্ণ ভূমিকা পালন করছে।",
      en: "Our school scout troop is acclaimed across upazila and district levels, instilling discipline, humanitarian service, and disaster response skills.",
    },
    moderator: { bn: "প্রবীর কুমার রায় (স্কাউট লিডার)", en: "Prabir Kumar Roy (Scout Leader)" },
    established: "1988",
    membersCount: 64,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: [
        "শরীয়তপুর জেলা স্কাউট সমাবেশ ২০২৫-এ চ্যাম্পিয়ন ট্রফি অর্জন",
        "৩ জন শিক্ষার্থীর জাতীয় পর্যায়ে 'প্রেসিডেন্টস স্কাউট অ্যাওয়ার্ড' অর্জন",
        "জাতীয় দিবসসমূহে কুচকাওয়াজ ও শৃঙ্খলা রক্ষায় প্রথম স্থান",
      ],
      en: [
        "Champion Trophy at Shariatpur District Scout Jamboree 2025",
        "3 students received Prestigious President's Scout Award",
        "First place in National Days Parade & Protocol Management",
      ],
    },
    events: [
      { title: { bn: "বার্ষিক স্কাউট ক্যাম্প ও হাইকিং", en: "Annual Scout Camp & Hiking" }, date: { bn: "নভেম্বর ২০২৬", en: "November 2026" } },
      { title: { bn: "বৃক্ষরোপণ ও সমাজকল্যাণ অভিযান", en: "Tree Plantation & Community Drive" }, date: { bn: "আগস্ট ২০২৬", en: "August 2026" } },
    ],
  },
  {
    id: "girls-guide",
    slug: "girls-guide",
    name: { bn: "গার্লস গাইড ও রেঞ্জার্স ইউনিট", en: "Girls Guide & Rangers Unit" },
    badge: { bn: "গার্ল গাইডস", en: "Girls Guide" },
    tagline: { bn: "নারীর ক্ষমতায়ন ও আত্মবিশ্বাসের অগ্রযাত্রা", en: "Empowerment & Confidence for Young Women" },
    description: {
      bn: "মেয়ে শিক্ষার্থীদের আত্মরক্ষা, স্বাস্থ্য সচেতনতা, প্রাথমিক চিকিৎসা ও নেতৃত্বের বিকাশ ঘটাতে গার্লস গাইড ইউনিট নিয়মিত সক্রিয় প্রশিক্ষণ পরিচালনা করে।",
      en: "Active guide unit empowering female students with self-defense, healthcare, first aid, and progressive leadership skills.",
    },
    moderator: { bn: "নাসরীন জাহান (গাইড কমিশনার)", en: "Nasreen Jahan (Guide Commissioner)" },
    established: "1995",
    membersCount: 48,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: ["বিভাগীয় পর্যায়ে প্রাথমিক চিকিৎসা প্রতিযোগিতায় শ্রেষ্ঠত্ব", "পরিবেশ পদক ২০২৪"],
      en: ["First in Divisional First Aid Competition", "Environmental Badge 2024"],
    },
    events: [
      { title: { bn: "নারী নেতৃত্ব ও ক্যারিয়ার কর্মশালা", en: "Women Leadership Workshop" }, date: { bn: "অক্টোবর ২০২৬", en: "October 2026" } },
    ],
  },
  {
    id: "study-tour",
    slug: "study-tour",
    name: { bn: "বার্ষিক শিক্ষা সফর ও শিক্ষামূলক ভ্রমণ", en: "Annual Study Tour & Excursion" },
    badge: { bn: "শিক্ষা সফর", en: "Study Tour" },
    tagline: { bn: "শ্রেণিকক্ষের বাইরে বাস্তব জ্ঞানের সন্ধান", en: "Exploring Real-World Knowledge Beyond Classrooms" },
    description: {
      bn: "প্রতি বছর বিদ্যালয়ের সকল বিভাগের শিক্ষক ও শিক্ষার্থীদের অংশগ্রহণে দেশের ঐতিহাসিক ও প্রাকৃতিক দর্শনীয় স্থানে শিক্ষা সফর আয়োজন করা হয়।",
      en: "Annual educational excursions to historical, scientific, and scenic sites across Bangladesh for real-world experiential learning.",
    },
    moderator: { bn: "সুলতানা রাজিয়া ও সফর কমিটি", en: "Sultana Razia & Tour Committee" },
    established: "1982",
    membersCount: 350,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: ["বঙ্গবন্ধু নভোথিয়েটার ও জাতীয় বিজ্ঞান জাদুঘর পরিদর্শন", "সুন্দরবন ও বাগেরহাট ঐতিহাসিক সফর"],
      en: ["Visit to Bangabandhu Planetarium & Science Museum", "Sundarbans & Bagerhat Heritage Tour"],
    },
    events: [
      { title: { bn: "শিক্ষা সফর ২০২৬: কুয়াকাটা ও সুন্দরবন", en: "Study Tour 2026: Kuakata & Sundarbans" }, date: { bn: "ডিসেম্বর ২০২৬", en: "December 2026" } },
    ],
  },
  {
    id: "sports-club",
    slug: "sports-club",
    name: { bn: "ভোজেশ্বর স্পোর্টস ও অ্যাথলেটিকস ক্লাব", en: "Bhojeshwar Sports & Athletics Club" },
    badge: { bn: "ক্রীড়া ক্লাব", en: "Sports Club" },
    tagline: { bn: "সুস্থ দেহে সুস্থ মন, ক্রীড়া গড়ে চরিত্র", en: "Healthy Body, Sound Mind, Sports Builds Character" },
    description: {
      bn: "ফুটবল, ক্রিকেট, ভলিবল, হ্যান্ডবল ও অ্যাথলেটিকসে নিয়মিত আন্তঃবিদ্যালয় টুর্নামেন্টে অংশগ্রহণ ও শিরোপা অর্জন।",
      en: "Inter-school championship contenders in football, cricket, volleyball, handball, and regional track & field athletics.",
    },
    moderator: { bn: "মোঃ মোস্তাফিজুর রহমান", en: "Md. Mostafizur Rahman" },
    established: "1980",
    membersCount: 120,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: ["নড়িয়া উপজেলা আন্তঃস্কুল ফুটবল টুর্নামেন্ট চ্যাম্পিয়ন ২০২৪ ও ২০২৫", "জেলা স্কুল ক্রিকেট রানার্সআপ"],
      en: ["Naria Upazila Inter-School Football Champion 2024 & 2025", "District School Cricket Runners-up"],
    },
    events: [
      { title: { bn: "বার্ষিক শীতকালীন ক্রিকেট টুর্নামেন্ট", en: "Annual Winter Cricket Tournament" }, date: { bn: "জানুয়ারি ২০২৬", en: "January 2026" } },
    ],
  },
  {
    id: "debating-club",
    slug: "debating-club",
    name: { bn: "ভোজেশ্বর হাই স্কুল ডিবেটিং ক্লাব (BHSDC)", en: "Bhojeshwar High School Debating Club" },
    badge: { bn: "ডিবেটিং ক্লাব", en: "Debating Club" },
    tagline: { bn: "যুক্তির আলোয় মুক্ত করো বুদ্ধি ও জ্ঞান", en: "Illuminating Truth through the Light of Logic" },
    description: {
      bn: "বাংলা ও ইংরেজি সংসদীয় বিতর্ক, উপস্থিত বক্তৃতা ও যুক্তি চর্চায় শিক্ষার্থীদের সাবলীল উপস্থাপনার মঞ্চ।",
      en: "Platform for Bangla & English parliamentary debates, extempore speech, and critical intellectual reasoning.",
    },
    moderator: { bn: "নাসরীন জাহান ও ফারহানা আহমেদ", en: "Nasreen Jahan & Farhana Ahmed" },
    established: "2011",
    membersCount: 45,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: ["শরীয়তপুর জেলা আন্তঃবিদ্যালয় বিতর্ক প্রতিযোগিতায় ১ম স্থান", "জাতীয় টেলিভিশন বিতর্ক উৎসবে অংশগ্রহণ"],
      en: ["1st Place in Shariatpur District Debate Competition", "Participated in National TV Debate Festival"],
    },
    events: [
      { title: { bn: "আন্তঃক্লাস বিতর্ক উৎসব ২০২৬", en: "Inter-Class Debate Festival 2026" }, date: { bn: "নভেম্বর ২০২৬", en: "November 2026" } },
    ],
  },
  {
    id: "cultural-club",
    slug: "cultural-club",
    name: { bn: "সাহিত্য ও সাংস্কৃতিক পরিষদ", en: "Literature & Cultural Council" },
    badge: { bn: "কালচারাল ক্লাব", en: "Cultural Club" },
    tagline: { bn: "ঐতিহ্যের শেকড়ে সংস্কৃতির বিকাশ", en: "Nurturing Culture Deep in Heritage Roots" },
    description: {
      bn: "রবীন্দ্র-নজরুল জয়ন্তী, অমর একুশে ফেব্রুয়ারি, স্বাধীনতা দিবস ও বিজয় দিবসে সঙ্গীত, নাটক, আবৃত্তি ও নৃত্য পরিবেশনা।",
      en: "Celebrating national heritage through drama, recitation, choral music, and folk performing arts.",
    },
    moderator: { bn: "সুলতানা রাজিয়া", en: "Sultana Razia" },
    established: "1985",
    membersCount: 80,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: ["উপজেলা পর্যায়ে দেশাত্মবোধক সঙ্গীতে শ্রেষ্ঠ দলীয় সম্মাননা", "বার্ষিক নাট্যোৎসব প্রযোজনা"],
      en: ["Best Group Performance in Patriotic Music at Upazila level", "Annual Drama Production Award"],
    },
    events: [
      { title: { bn: "বসন্ত উৎসব ও রবীন্দ্র-নজরুল স্মরণ", en: "Spring Festival & Cultural Evening" }, date: { bn: "ফেব্রুয়ারি ২০২৬", en: "February 2026" } },
    ],
  },
  {
    id: "magazine",
    slug: "magazine",
    name: { bn: "বার্ষিক স্কুল ম্যাগাজিন 'পদ্মার কল্লোল'", en: "Annual School Magazine 'Padmar Kollol'" },
    badge: { bn: "স্কুল ম্যাগাজিন", en: "School Magazine" },
    tagline: { bn: "তারুণ্যের ভাবনার শিল্পিত প্রকাশ", en: "Artistic Expression of Youth Intellect" },
    description: {
      bn: "শিক্ষক, শিক্ষার্থী ও প্রাক্তন শিক্ষার্থীদের লেখা গল্প, কবিতা, প্রবন্ধ, কারিগরি উদ্ভাবনী আইডিয়া ও স্মৃতিকথার সমন্বয়ে প্রতি বছর প্রকাশিত হয় ঐতিহ্যবাহী স্কুল ম্যাগাজিন।",
      en: "Annually published prestigious literary journal featuring creative essays, poems, technical innovations, and campus memoirs.",
    },
    moderator: { bn: "সম্পাদনা পরিষদ ও প্রধান শিক্ষক", en: "Editorial Board & Headmaster" },
    established: "1992",
    membersCount: 30,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: ["১২টি সংখ্যা সফলভাবে প্রকাশিত", "শিক্ষার্থীদের শতভাগ মৌলিক লেখার সমাহার"],
      en: ["12 editions published successfully", "100% original student and faculty contributions"],
    },
    events: [
      { title: { bn: "২০২৬ সংখ্যার লেখা আহবান", en: "Call for Submissions for 2026 Issue" }, date: { bn: "চলমান", en: "Ongoing" } },
    ],
  },
  {
    id: "deyalika",
    slug: "deyalika",
    name: { bn: "ত্রৈমাসিক দেয়ালিকা 'অঙ্কুর'", en: "Quarterly Wall Magazine 'Onkur'" },
    badge: { bn: "দেয়ালিকা", en: "Wall Magazine" },
    tagline: { bn: "রঙিন ক্যানভাসে শিক্ষার্থীদের সৃষ্টিশীলতা", en: "Creativity on Canvas by Young Minds" },
    description: {
      bn: "প্রতি জাতীয় দিবসে ও ঋতু পরিবর্তনের সাথে সাথে শিক্ষার্থীরা নিজেদের হাতে আঁকা ও হাতে লেখা দেয়ালিকা প্রকাশ করে।",
      en: "Handcrafted, illustrated quarterly wall magazines by students honoring national days, seasons, and science ideas.",
    },
    moderator: { bn: "ফারহানা আহমেদ", en: "Farhana Ahmed" },
    established: "2000",
    membersCount: 50,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: ["জেলা শিল্পকলা একাডেমি দেয়ালিকা প্রতিযোগিতায় ২য় স্থান"],
      en: ["2nd Prize in District Wall Magazine Showcase"],
    },
    events: [
      { title: { bn: "বিজয় দিবস বিশেষ দেয়ালিকা ২০২৬", en: "Victory Day Special Wall Magazine" }, date: { bn: "ডিসেম্বর ২০২৬", en: "December 2026" } },
    ],
  },
  {
    id: "forum",
    slug: "forum",
    name: { bn: "ভোজেশ্বর স্টুডেন্ট ও টিচার ফোরাম", en: "Bhojeshwar Student-Teacher Forum" },
    badge: { bn: "ফোরাম ও মিথস্ক্রিয়া", en: "Forum & Community" },
    tagline: { bn: "মুক্ত মতামত, জ্ঞান বিনিময় ও প্রশ্নোত্তরের ডিজিটাল প্ল্যাটফর্ম", en: "Digital Hub for Open Dialogue, Q&A & Knowledge Exchange" },
    description: {
      bn: "শিক্ষক, শিক্ষার্থী ও অভিভাবকদের মাঝে গঠনমূলক আলোচনা, একাডেমিক প্রশ্নের সমাধান এবং বিভিন্ন ক্লাব কার্যক্রমের সমন্বয় সাধনের উন্মুক্ত প্ল্যাটফর্ম।",
      en: "Community forum facilitating academic guidance, constructive discussions, and co-curricular collaboration.",
    },
    moderator: { bn: "আইসিটি বিভাগ ও ছাত্রকল্যাণ কমিটি", en: "ICT Department & Student Welfare Committee" },
    established: "2023",
    membersCount: 520,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    achievements: {
      bn: ["১,০০০+ সমাধানকৃত একাডেমিক প্রশ্নোত্তর", "সাপ্তাহিক অনলাইন সাধারণ জ্ঞান কুইজ আয়োজন"],
      en: ["1,000+ academic queries resolved", "Weekly online general knowledge quiz"],
    },
    events: [
      { title: { bn: "সাপ্তাহিক মুক্ত জ্ঞান বিতর্ক", en: "Weekly Open Knowledge Session" }, date: { bn: "প্রতি বৃহস্পতিবার", en: "Every Thursday" } },
    ],
  },
];
