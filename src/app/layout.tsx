import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"],
});

// 🏢 CUSTOMIZE: Update site title and description for your business
export const metadata: Metadata = {
  title: "Service Boilerplate", // ← Change to your business name
  description: "A modern Next.js service boilerplate with TypeScript and shadcn/ui", // ← Change to your business description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redditSans.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
