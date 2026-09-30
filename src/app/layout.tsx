import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

export const metadata: Metadata = {
  title: "ভোজেশ্বর উচ্চ বিদ্যালয় (ভোকেশনাল শাখা সহ) | Bhojeshwar High School, Naria",
  description:
    "ভোজেশ্বর উচ্চ বিদ্যালয়, মাশুরা, নড়িয়া, শরীয়তপুর - ৮০২১। EIIN: ১১৩৫৮৭, স্থাপিত: ১৯৭৮। সাধারণ ও ভোকেশনাল শিক্ষার একটি ঐতিহ্যবাহী বিদ্যাপীঠ।",
  keywords: [
    "Bhojeshwar High School",
    "ভোজেশ্বর উচ্চ বিদ্যালয়",
    "Naria Shariatpur High School",
    "EIIN 113587",
    "Mashura Naria",
    "Vocational Branch Shariatpur",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
