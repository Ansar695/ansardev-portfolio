import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Stack Developer | Ansar Saeed",
  description: "A passionate and experienced developer with 4 years of hands on experience in building innovative web applications. Proficient in both frontend and backend technologies, with a passion for learning and adapting new technologies like AI. I'm skilled in MERN stack with a proven track record of delivering high-quality solutions on time. I have excellent problem-solving skills, team collaboration and always learning and staying up-to-date with industry trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
