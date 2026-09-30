"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { schoolInfo } from "@/data/schoolInfo";
import {
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Users,
  Award,
  Calendar,
  FileText,
  UserCheck,
  Search,
  Sparkles,
  Shield,
  HeartHandshake,
  Compass,
  Trophy,
  MessageSquare,
  Newspaper,
  Palette,
  ExternalLink,
  MoreHorizontal,
  Bell,
} from "lucide-react";

interface HeaderNavProps {
  onOpenLoginModal?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenLoginModal }) => {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  // Structured menu items with "More / Others" grouping for clean layout
  const navLinks = [
    { title: lang === "bn" ? "হোম" : "Home", href: "/" },
    {
      title: lang === "bn" ? "পরিচিতি" : "About Us",
      id: "about",
      items: [
        { title: lang === "bn" ? "১. ইতিহাস ও ঐতিহ্য" : "1. History & Heritage", href: "/about/history", icon: Calendar },
        { title: lang === "bn" ? "২. ম্যানেজিং কমিটি" : "2. Managing Committee", href: "/about/committee", icon: Award },
        { title: lang === "bn" ? "৩. শিক্ষক তথ্য" : "3. Teachers Info", href: "/about/teachers", icon: Users },
        { title: lang === "bn" ? "৪. শিক্ষার্থী তথ্য" : "4. Students Info", href: "/about/students", icon: GraduationCap },
        { title: lang === "bn" ? "৫. কর্মকর্তা ও কর্মচারী (স্টাফ)" : "5. Staff & Administration", href: "/about/staff", icon: Shield },
      ],
    },
    {
      title: lang === "bn" ? "একাডেমিক" : "Academic",
      id: "academic",
      items: [
        { title: lang === "bn" ? "৬. ক্লাস রুটিন" : "6. Class Routine", href: "/academic/routine", icon: Calendar },
        { title: lang === "bn" ? "৭ ও ৯. সিলেবাস ও প্রশ্ন ব্যাংক" : "7 & 9. Syllabus & Question Bank", href: "/academic/syllabus", icon: BookOpen },
        { title: lang === "bn" ? "৮. একাডেমিক তথ্য ও বর্ষপঞ্জি" : "8. Academic Info & Calendar", href: "/academic/info", icon: FileText },
        { title: lang === "bn" ? "১১. কারিকুলাম ও ভোকেশনাল ট্রেড" : "11. Curriculum & Trades", href: "/academic/curriculum", icon: Sparkles },
      ],
    },
    {
      title: lang === "bn" ? "ভর্তি" : "Admission",
      href: "/admission",
      tag: lang === "bn" ? "চলছে" : "Open",
    },
    {
      title: lang === "bn" ? "ডিজিটাল হাজিরা" : "Attendance",
      href: "/attendance",
    },
    {
      title: lang === "bn" ? "ফলাফল" : "Results",
      href: "/results",
    },
    {
      title: lang === "bn" ? "অন্যান্য ও সহ-শিক্ষা" : "More & Activities",
      id: "more",
      icon: MoreHorizontal,
      items: [
        { title: lang === "bn" ? "১০. সার্বিক নোটিশ বোর্ড" : "10. Notice Board", href: "/notices", icon: Bell },
        { title: lang === "bn" ? "১২. স্কাউট দল" : "12. Scout Troop", href: "/co-curricular/scout", icon: Compass },
        { title: lang === "bn" ? "১৩. গার্লস গাইড" : "13. Girls Guide", href: "/co-curricular/girls-guide", icon: HeartHandshake },
        { title: lang === "bn" ? "১৪. বার্ষিক শিক্ষা সফর" : "14. Study Tour", href: "/co-curricular/study-tour", icon: Compass },
        { title: lang === "bn" ? "১৫. ক্রীড়া ও স্পোর্টস ক্লাব" : "15. Sports Club", href: "/co-curricular/sports-club", icon: Trophy },
        { title: lang === "bn" ? "১৬. ডিবেটিং ক্লাব (বিতর্ক)" : "16. Debating Club", href: "/co-curricular/debating-club", icon: MessageSquare },
        { title: lang === "bn" ? "১৭. সাহিত্য ও কালচারাল ক্লাব" : "17. Cultural Club", href: "/co-curricular/cultural-club", icon: Palette },
        { title: lang === "bn" ? "১৮. স্কুল ম্যাগাজিন 'পদ্মার কল্লোল'" : "18. School Magazine", href: "/co-curricular/magazine", icon: Newspaper },
        { title: lang === "bn" ? "১৯. ত্রৈমাসিক দেয়ালিকা" : "19. Wall Magazine", href: "/co-curricular/deyalika", icon: Palette },
        { title: lang === "bn" ? "২০. ফোরাম ও কমিউনিটি প্রশ্নোত্তর" : "20. Community Q&A Forum", href: "/co-curricular/forum", icon: MessageSquare },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#06121e]/95 backdrop-blur-md border-b border-slate-200 dark:border-emerald-950/60 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2">
          {/* Logo & School Branding with High-Visibility EIIN Badge */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" onClick={closeMenus}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg lg:text-xl text-slate-900 dark:text-white tracking-tight leading-tight">
                  {lang === "bn" ? "ভোজেশ্বর উচ্চ বিদ্যালয়" : "Bhojeshwar High School"}
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 px-1.5 py-0.5 rounded">
                  {lang === "bn" ? "কারিগরি শাখা" : "Vocational"}
                </span>
              </div>

              {/* Location & Prominently Highlighted EIIN */}
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {lang === "bn" ? "মাশুরা, নড়িয়া, শরীয়তপুর" : "Mashura, Naria, Shariatpur"}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/40 text-[11px] font-black font-mono tracking-wider shadow-xs">
                  EIIN: {schoolInfo.eiin}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Clean Navigation (7 Compact Items) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              if (link.items) {
                const isOpen = activeDropdown === link.id;
                const IconComponent = link.icon;
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-bold transition-all cursor-pointer ${
                        isOpen
                          ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                          : "text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-900/60"
                      }`}
                    >
                      {IconComponent && <IconComponent className="w-3.5 h-3.5 opacity-80" />}
                      <span>{link.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-emerald-500" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white dark:bg-[#0c1d2e] rounded-2xl shadow-2xl border border-slate-200 dark:border-emerald-800/40 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {link.items.map((subItem) => {
                          const SubIcon = subItem.icon;
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={closeMenus}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                                isSubActive
                                  ? "bg-emerald-500 text-slate-950 font-bold"
                                  : "text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 dark:hover:text-emerald-400"
                              }`}
                            >
                              <SubIcon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span className="truncate">{subItem.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-bold transition-all ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-extrabold"
                      : "text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-900/60"
                  }`}
                >
                  <span>{link.title}</span>
                  {link.tag && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-black bg-rose-500 text-white animate-pulse">
                      {link.tag}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header: Login CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenLoginModal}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-md shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all cursor-pointer"
            >
              <Users className="w-3.5 h-3.5" />
              <span>{lang === "bn" ? "লগইন পোর্টাল" : "Login Portal"}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#07131e] border-b border-slate-200 dark:border-emerald-950/60 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            if (link.items) {
              const isOpen = activeDropdown === link.id;
              return (
                <div key={link.id} className="border-b border-slate-100 dark:border-slate-800 pb-2">
                  <button
                    onClick={() => toggleDropdown(link.id)}
                    className="flex items-center justify-between w-full py-2 text-slate-800 dark:text-slate-200 font-bold text-sm"
                  >
                    <span>{link.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-emerald-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pl-3 mt-1 space-y-1">
                      {link.items.map((subItem) => {
                        const SubIcon = subItem.icon;
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeMenus}
                            className="flex items-center gap-2 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                          >
                            <SubIcon className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{subItem.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="flex items-center justify-between py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 border-b border-slate-100 dark:border-slate-800"
              >
                <span>{link.title}</span>
                {link.tag && (
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-black bg-rose-500 text-white">
                    {link.tag}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3">
            <button
              onClick={() => {
                closeMenus();
                if (onOpenLoginModal) onOpenLoginModal();
              }}
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>{lang === "bn" ? "লগইন পোর্টাল (শিক্ষক/শিক্ষার্থী/প্রশাসন/অভিভাবক)" : "Portals (Teacher/Student/Admin/Parent)"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
