"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { schoolInfo } from "@/data/schoolInfo";
import {
  MapPin,
  Phone,
  Mail,
  Award,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  Navigation,
} from "lucide-react";

export const HelpDeskAndMap: React.FC = () => {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "ভর্তি ও সাধারণ তথ্য",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", subject: "ভর্তি ও সাধারণ তথ্য", message: "" });
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          {lang === "bn" ? "যোগাযোগ ও ভৌগোলিক তথ্য" : "Location & Help Desk"}
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === "bn" ? "প্রাতিষ্ঠানিক অবস্থান ও হেল্প ডেস্ক" : "Institutional Location & Help Desk"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {lang === "bn"
            ? "সরাসরি ক্যাম্পাসে আসুন অথবা যেকোনো তথ্যের জন্য বার্তা পাঠান"
            : "Visit our campus in Mashura or reach out to our administration desk"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: School Information & Map (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-500" />
              <span>{lang === "bn" ? "ভোজেশ্বর উচ্চ বিদ্যালয়ের পূর্ণাঙ্গ তথ্য" : "Institutional Profile & Address"}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">
                    {lang === "bn" ? "ঠিকানা:" : "Address:"}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {lang === "bn"
                      ? "গ্রাম: মাশুরা, রোড: মাশুরা, ডাকঘর: ভোজেশ্বর - ৮০২১, ইউনিয়ন: ভোজেশ্বর, উপজেলা: নড়িয়া, জেলা: শরীয়তপুর।"
                      : "Village: Mashura, Road: Mashura, Post: Bhozeshwar - 8021, Union: Bhojeshwar, Upazila: Naria, Dist: Shariatpur."}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">
                    {lang === "bn" ? "কোড ও স্বীকৃতি:" : "Code & Recognition:"}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    EIIN: {schoolInfo.eiin} • {lang === "bn" ? "নির্বাচনী এলাকা: শরীয়তপুর-২" : "Constituency: Shariatpur-2"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">
                    {lang === "bn" ? "যোগাযোগের নম্বর:" : "Contact Numbers:"}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {schoolInfo.contacts.mobile} / {schoolInfo.contacts.hotline} / {schoolInfo.contacts.phoneAlternative}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">
                    {lang === "bn" ? "অফিসিয়াল ইমেইল:" : "Official Email:"}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {schoolInfo.contacts.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Geographical Tags */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {lang === "bn" ? "ভৌগোলিক প্রকৃতি: সমতল ভূমি" : "Terrain: Plain"}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {lang === "bn" ? "এলাকার ধরন: গ্রামীণ" : "Area: Rural"}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {lang === "bn" ? "সহশিক্ষা: ছাত্র ও ছাত্রী" : "Co-Education"}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {lang === "bn" ? "শাখা: সাধারণ ও কারিগরি" : "General & Vocational"}
              </span>
            </div>

            {/* Map Container */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-emerald-800/40 h-64 sm:h-72 w-full mt-4">
              <iframe
                title="Bhojeshwar High School Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14639.691341819586!2d90.41804245!3d23.28221815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b77c15234551%3A0x6b774643eb685b82!2sBhojeshwar%2C%20Naria%2C%20Shariatpur!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-110"
              />
              <div className="absolute bottom-2 left-2 bg-slate-950/85 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-md border border-white/20 flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-emerald-400" />
                <span>মাশুরা, ভোজেশ্বর, নড়িয়া, শরীয়তপুর - ৮০২১</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Help Desk & Inquiry Form (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#0c1d2e] border border-slate-200 dark:border-emerald-900/40 shadow-xl">
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Mail className="w-5 h-5 text-emerald-500" />
            <span>{lang === "bn" ? "অনলাইন বার্তা ও অনুসন্ধান" : "Send Inquiry / Message"}</span>
          </h3>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="font-bold text-base text-slate-800 dark:text-white">
                {lang === "bn" ? "আপনার বার্তা সফলভাবে পাঠানো হয়েছে!" : "Message Sent Successfully!"}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === "bn"
                  ? "বিদ্যালয় প্রশাসন শীঘ্রই আপনার সাথে যোগাযোগ করবে।"
                  : "The administration will respond to your query shortly."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 mt-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === "bn" ? "আপনার পূর্ণ নাম *" : "Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === "bn" ? "যেমন: মোঃ আব্দুল করিম" : "e.g. Md. Abdul Karim"}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === "bn" ? "মোবাইল নম্বর *" : "Mobile Number *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === "bn" ? "ইমেইল (ঐচ্ছিক)" : "Email (Optional)"}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="user@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === "bn" ? "অনুসন্ধানের বিষয়" : "Inquiry Subject"}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="ভর্তি ও সাধারণ তথ্য">{lang === "bn" ? "ভর্তি ও সাধারণ তথ্য" : "Admission & General Info"}</option>
                  <option value="ভোকেশনাল শাখা সম্পর্কিত">{lang === "bn" ? "ভোকেশনাল শাখা সম্পর্কিত" : "Vocational Branch Queries"}</option>
                  <option value="ফলাফল ও মার্কশিট">{lang === "bn" ? "ফলাফল ও মার্কশিট" : "Results & Transcripts"}</option>
                  <option value="ডিজিটাল হাজিরা সম্পর্কিত">{lang === "bn" ? "ডিজিটাল হাজিরা সম্পর্কিত" : "Digital Attendance"}</option>
                  <option value="অন্যান্য অভিযোগ বা মতামত">{lang === "bn" ? "অন্যান্য অভিযোগ বা মতামত" : "Other Feedback"}</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === "bn" ? "আপনার বার্তা *" : "Your Message *"}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === "bn" ? "এখানে আপনার প্রশ্ন বা বার্তা লিখুন..." : "Type your inquiry or message here..."}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold text-xs shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "বার্তা প্রেরণ করুন" : "Send Inquiry"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
