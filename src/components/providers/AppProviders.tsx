"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { TopBar } from "@/components/layout/TopBar";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { Footer } from "@/components/layout/Footer";
import { LoginModal, UserRole } from "@/components/shared/LoginModal";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState<UserRole>("student");

  const openLogin = (role?: UserRole) => {
    if (role) setModalRole(role);
    setIsLoginModalOpen(true);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#050d18] text-slate-900 dark:text-slate-100 transition-colors duration-200">
          <TopBar onOpenLoginModal={() => openLogin("student")} />
          <HeaderNav onOpenLoginModal={() => openLogin("student")} />
          <main className="flex-1">{children}</main>
          <Footer />

          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
            defaultRole={modalRole}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};
