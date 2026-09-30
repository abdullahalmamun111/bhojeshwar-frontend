"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  title: string;
  category?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, category }) => {
  const { lang } = useLanguage();

  return (
    <div className="bg-slate-100/80 dark:bg-[#071320] border-b border-slate-200 dark:border-emerald-950/60 py-3 px-4 text-xs transition-colors">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-emerald-500 flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>{lang === "bn" ? "হোম" : "Home"}</span>
        </Link>

        {category && (
          <>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span>{category}</span>
          </>
        )}

        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{title}</span>
      </div>
    </div>
  );
};
