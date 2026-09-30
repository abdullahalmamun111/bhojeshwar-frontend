import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickAccessCards } from "@/components/home/QuickAccessCards";
import { NoticeAndMessage } from "@/components/home/NoticeAndMessage";
import { HistoryTimeline } from "@/components/home/HistoryTimeline";
import { FacultySection } from "@/components/home/FacultySection";
import { CoCurricularGallery } from "@/components/home/CoCurricularGallery";
import { StatsBanner } from "@/components/home/StatsBanner";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StarsAlumni } from "@/components/home/StarsAlumni";
import { HelpDeskAndMap } from "@/components/home/HelpDeskAndMap";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section matching user's image */}
      <HeroSection />

      {/* 2. Quick Access Cards Bar */}
      <QuickAccessCards />

      {/* 3. Notice Board & Headmaster Welcome Message */}
      <NoticeAndMessage />

      {/* 4. History & Century-Long Journey Timeline */}
      <HistoryTimeline />

      {/* 5. Faculty & Leadership Directory with Filter */}
      <FacultySection />

      {/* 6. Co-Curricular & Club Activities Gallery */}
      <CoCurricularGallery />

      {/* 7. Our Strength in Numbers Banner */}
      <StatsBanner />

      {/* 8. Why Choose Bhojeshwar High School */}
      <WhyChooseUs />

      {/* 9. Stars & Pride of Our Institution (Alumni) */}
      <StarsAlumni />

      {/* 10. Institutional Location, Map & Help Desk */}
      <HelpDeskAndMap />
    </div>
  );
}
