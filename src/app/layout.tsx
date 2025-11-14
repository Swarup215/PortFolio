import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swarup Kumar - Full Stack Developer & ML Engineer",
  description: "Personal portfolio of Swarup Kumar - Full Stack Developer specializing in C, Java, and Machine Learning. Explore my projects, skills, and professional journey.",
  keywords: ["Swarup Kumar", "Full Stack Developer", "Machine Learning", "C", "Java", "Web Development", "Portfolio"],
  authors: [{ name: "Swarup Kumar" }],
  openGraph: {
    title: "Swarup Kumar - Portfolio",
    description: "Full Stack Developer & Machine Learning Engineer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarup Kumar - Portfolio",
    description: "Full Stack Developer & Machine Learning Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
