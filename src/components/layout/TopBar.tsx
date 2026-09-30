"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { schoolInfo } from "@/data/schoolInfo";
import { Phone, Mail, Sun, Moon, Globe, LogIn, Award, Calendar, Sparkles } from "lucide-react";

interface TopBarProps {
  onOpenLoginModal?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenLoginModal }) => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full bg-[#064e3b] dark:bg-[#03080e] text-[#ecfdf5] dark:text-[#a7f3d0] border-b border-emerald-900/40 text-xs py-2 px-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Contact info & Highly Prominent EIIN Badge */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {/* Prominent EIIN Badge with High Contrast */}
          <div className="flex items-center gap-1.5 bg-emerald-900/90 dark:bg-emerald-950/90 px-2.5 py-1 rounded-md border border-amber-400/60 shadow-sm text-xs font-bold text-white">
            <Award className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="text-white">EIIN: <span className="font-extrabold text-amber-300 tracking-wider font-mono text-xs">{schoolInfo.eiin}</span></span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-emerald-100 dark:text-emerald-300">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {lang === "bn" ? "স্থাপিত: ১৯৭৮" : "Estd: 1978"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <a href={`tel:${schoolInfo.contacts.mobile}`} className="font-semibold tracking-wide">
              {schoolInfo.contacts.mobile}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <a href={`mailto:${schoolInfo.contacts.email}`}>
              {schoolInfo.contacts.email}
            </a>
          </div>
        </div>

        {/* Actions: Language, Dark/Light Toggle, Portal Login */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {/* Language Switcher */}
          <div className="flex items-center bg-emerald-950/80 dark:bg-slate-900/90 rounded-full p-0.5 border border-emerald-600/60 shadow-inner">
            <button
              onClick={() => setLang("bn")}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                lang === "bn"
                  ? "bg-emerald-500 text-slate-950 shadow"
                  : "text-emerald-200 hover:text-white"
              }`}
              title="বাংলা ভাষা"
            >
              বাংলা
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-emerald-500 text-slate-950 shadow"
                  : "text-emerald-200 hover:text-white"
              }`}
              title="English Language"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle (Dark / Light) with clear label */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 dark:bg-slate-900/90 border border-emerald-600/60 text-emerald-200 hover:text-white hover:border-amber-400 transition-all cursor-pointer shadow-inner"
            title={theme === "dark" ? "লাইট মোডে পরিবর্তন করুন" : "ডার্ক মোডে পরিবর্তন করুন"}
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-[11px] font-semibold text-amber-200 hidden sm:inline">লাইট</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-emerald-200" />
                <span className="text-[11px] font-semibold text-emerald-100 hidden sm:inline">ডার্ক</span>
              </>
            )}
          </button>

          {/* Portal Log In Button */}
          {onOpenLoginModal ? (
            <button
              onClick={onOpenLoginModal}
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3.5 py-1 rounded-full font-extrabold shadow-md transition-all cursor-pointer text-xs"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{lang === "bn" ? "লগইন" : "Login"}</span>
            </button>
          ) : (
            <Link
              href="/portal"
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3.5 py-1 rounded-full font-extrabold shadow-md transition-all text-xs"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{lang === "bn" ? "লগইন" : "Login"}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
