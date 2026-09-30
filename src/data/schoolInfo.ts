export interface SchoolInfoType {
  name: {
    bn: string;
    en: string;
    short: string;
  };
  slogan: {
    bn: string;
    en: string;
  };
  eiin: string;
  established: {
    date: string;
    year: string;
    bn: string;
    en: string;
  };
  contacts: {
    mobile: string;
    hotline: string;
    phoneAlternative: string;
    telephone: string;
    email: string;
  };
  geographical: {
    village: { bn: string; en: string };
    road: { bn: string; en: string };
    union: { bn: string; en: string };
    upazila: { bn: string; en: string };
    postOffice: { bn: string; en: string };
    postCode: string;
    district: { bn: string; en: string };
    division: { bn: string; en: string };
    geoNature: { bn: string; en: string };
    areaType: { bn: string; en: string };
    constituency: { bn: string; en: string };
    fullAddress: { bn: string; en: string };
  };
  academic: {
    levels: {
      bn: string[];
      en: string[];
    };
    groups: {
      bn: string[];
      en: string[];
    };
    vocationalTrades: {
      bn: string[];
      en: string[];
    };
    coEducation: {
      bn: string;
      en: string;
    };
    hasEnglishVersion: boolean;
    board: {
      bn: string;
      en: string;
    };
  };
  statistics: {
    totalStudents: number;
    totalTeachers: number;
    totalStaff: number;
    passRate: string;
    alumniCount: string;
    establishedYears: number;
  };
}

export const schoolInfo: SchoolInfoType = {
  name: {
    bn: "ভোজেশ্বর উচ্চ বিদ্যালয় (ভোকেশনাল শাখা সহ)",
    en: "Bhojeshwar High School, Vocational Branch",
    short: "BHS",
  },
  slogan: {
    bn: "জ্ঞান, শৃঙ্খলা ও নৈতিকতার সমন্বয়ে আলোকিত মানুষ গড়ার প্রত্যয়",
    en: "Nurturing Enlightened Minds through Knowledge, Discipline & Morality",
  },
  eiin: "113587",
  established: {
    date: "1978-01-01",
    year: "1978",
    bn: "রবিবার, ১লা জানুয়ারি, ১৯৭৮",
    en: "Sunday, January 1, 1978",
  },
  contacts: {
    mobile: "01753-940825",
    hotline: "01914504985",
    phoneAlternative: "01309113587",
    telephone: "01914504985",
    email: "bhojeshwarhighschool1978@gmail.com",
  },
  geographical: {
    village: { bn: "মাশুরা", en: "Mashura" },
    road: { bn: "মাশুরা রোড", en: "Mashura Road" },
    union: { bn: "ভোজেশ্বর", en: "Bhojeshwar" },
    upazila: { bn: "নড়িয়া", en: "Naria" },
    postOffice: { bn: "ভোজেশ্বর", en: "Bhozeshwar" },
    postCode: "8021",
    district: { bn: "শরীয়তপুর", en: "Shariatpur" },
    division: { bn: "ঢাকা", en: "Dhaka" },
    geoNature: { bn: "সমতল ভূমি", en: "Plain Terrain" },
    areaType: { bn: "গ্রামীণ", en: "Rural" },
    constituency: { bn: "শরীয়তপুর-২", en: "Shariatpur-2" },
    fullAddress: {
      bn: "গ্রাম: মাশুরা, ইউনিয়ন: ভোজেশ্বর, ডাকঘর: ভোজেশ্বর - ৮০২১, উপজেলা: নড়িয়া, জেলা: শরীয়তপুর।",
      en: "Mashura, Bhojeshwar, Post Code: 8021, Upazila: Naria, District: Shariatpur, Bangladesh.",
    },
  },
  academic: {
    levels: {
      bn: ["নিম্ন মাধ্যমিক (৬ষ্ঠ - ৮ম)", "মাধ্যমিক (৯ম - ১০ম)", "এসএসসি ভোকেশনাল শাখা"],
      en: ["Junior Secondary (Class 6 - 8)", "Secondary (Class 9 - 10)", "SSC Vocational Branch"],
    },
    groups: {
      bn: ["বিজ্ঞান", "মানবিক", "ব্যবসায় শিক্ষা", "ভোকেশনাল (কারিগরি)"],
      en: ["Science", "Humanities", "Business Studies", "Vocational"],
    },
    vocationalTrades: {
      bn: ["জেনারেল ইলেকট্রিক্যাল ওয়ার্কস", "কম্পিউটার ও তথ্য প্রযুক্তি", "ওয়েল্ডিং ও ফেব্রিকেশন"],
      en: ["General Electrical Works", "Computer & IT", "Welding & Fabrication"],
    },
    coEducation: {
      bn: "সহশিক্ষা (ছাত্র ও ছাত্রী)",
      en: "Co-education (Boys & Girls)",
    },
    hasEnglishVersion: false,
    board: {
      bn: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, ঢাকা ও বাংলাদেশ কারিগরি শিক্ষা বোর্ড",
      en: "Board of Intermediate and Secondary Education, Dhaka & BTEB",
    },
  },
  statistics: {
    totalStudents: 1450,
    totalTeachers: 38,
    totalStaff: 12,
    passRate: "98.7%",
    alumniCount: "25,000+",
    establishedYears: new Date().getFullYear() - 1978,
  },
};
