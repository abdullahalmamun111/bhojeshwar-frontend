"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  Lock,
  User,
  GraduationCap,
  Shield,
  Heart,
  KeyRound,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export type UserRole = "teacher" | "student" | "admin" | "parent";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: UserRole;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  defaultRole = "student",
}) => {
  const { lang } = useLanguage();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole>(defaultRole);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isOpen) return null;

  const roleConfigs = {
    student: {
      title: lang === "bn" ? "শিক্ষার্থী লগইন" : "Student Login",
      icon: GraduationCap,
      color: "from-blue-600 to-indigo-600",
      accent: "text-blue-500",
      demoId: "101",
      demoPass: "student123",
      idLabel: lang === "bn" ? "রোল নম্বর বা শিক্ষার্থী আইডি" : "Roll Number or Student ID",
      placeholder: "e.g. 101",
    },
    teacher: {
      title: lang === "bn" ? "শিক্ষক লগইন" : "Teacher Login",
      icon: User,
      color: "from-emerald-600 to-teal-600",
      accent: "text-emerald-500",
      demoId: "T-2026",
      demoPass: "teacher123",
      idLabel: lang === "bn" ? "শিক্ষক আইডি বা ইমেইল" : "Teacher ID or Email",
      placeholder: "e.g. T-2026",
    },
    admin: {
      title: lang === "bn" ? "প্রশাসনিক লগইন" : "Admin Login",
      icon: Shield,
      color: "from-purple-600 to-indigo-700",
      accent: "text-purple-500",
      demoId: "admin",
      demoPass: "admin123",
      idLabel: lang === "bn" ? "অ্যাডমিন ইউজারনেম" : "Admin Username",
      placeholder: "e.g. admin",
    },
    parent: {
      title: lang === "bn" ? "অভিভাবক লগইন" : "Parents Login",
      icon: Heart,
      color: "from-amber-600 to-rose-600",
      accent: "text-amber-500",
      demoId: "01914504985",
      demoPass: "parent123",
      idLabel: lang === "bn" ? "নিবন্ধিত অভিভাবক মোবাইল নম্বর" : "Registered Mobile Number",
      placeholder: "e.g. 01914504985",
    },
  };

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setIdentifier("");
    setPassword("");
    setLoginSuccess(false);
  };

  const handleFillDemo = () => {
    const cfg = roleConfigs[selectedRole];
    setIdentifier(cfg.demoId);
    setPassword(cfg.demoPass);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
      setTimeout(() => {
        onClose();
        router.push(`/portal?role=${selectedRole}`);
      }, 1000);
    }, 800);
  };

  const currentConfig = roleConfigs[selectedRole];
  const Icon = currentConfig.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-[#0c1d2e] rounded-2xl shadow-2xl border border-slate-200 dark:border-emerald-800/40 overflow-hidden">
        {/* Header */}
        <div className={`p-5 bg-gradient-to-r ${currentConfig.color} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{currentConfig.title}</h3>
              <p className="text-xs text-white/80">
                {lang === "bn" ? "ভোজেশ্বর উচ্চ বিদ্যালয় ডিজিটাল পোর্টাল" : "Bhojeshwar High School Digital Portal"}
              </p>
            </div>
          </div>
        </div>

        {/* Role Tabs */}
        <div className="grid grid-cols-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-1 gap-1 text-xs font-semibold">
          {(["student", "teacher", "parent", "admin"] as UserRole[]).map((role) => {
            const isSelected = selectedRole === role;
            const rCfg = roleConfigs[role];
            return (
              <button
                key={role}
                type="button"
                onClick={() => handleRoleSelect(role)}
                className={`py-2 px-1 text-center rounded-lg transition-all capitalize cursor-pointer ${
                  isSelected
                    ? "bg-white dark:bg-[#10243d] text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/30 font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {role === "student" && (lang === "bn" ? "শিক্ষার্থী" : "Student")}
                {role === "teacher" && (lang === "bn" ? "শিক্ষক" : "Teacher")}
                {role === "parent" && (lang === "bn" ? "অভিভাবক" : "Parent")}
                {role === "admin" && (lang === "bn" ? "অ্যাডমিন" : "Admin")}
              </button>
            );
          })}
        </div>

        {/* Form Body */}
        <div className="p-6">
          {loginSuccess ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                {lang === "bn" ? "লগইন সফল হয়েছে!" : "Login Successful!"}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === "bn" ? "আপনার ড্যাশবোর্ডে প্রবেশ করা হচ্ছে..." : "Redirecting to your portal dashboard..."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {currentConfig.idLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={currentConfig.placeholder}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {lang === "bn" ? "পাসওয়ার্ড" : "Password"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Demo Auto-fill Helper */}
              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === "bn" ? "ডেমো তথ্য বসান" : "Fill Demo Credentials"}</span>
                </button>

                <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors">
                  {lang === "bn" ? "পাসওয়ার্ড ভুলে গেছেন?" : "Forgot password?"}
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <span>{lang === "bn" ? "যাচাই করা হচ্ছে..." : "Verifying..."}</span>
                ) : (
                  <>
                    <span>{lang === "bn" ? "লগইন করুন" : "Sign In to Portal"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
