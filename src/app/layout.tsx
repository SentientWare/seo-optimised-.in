import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SentientWare Tech Solution",
  description: "Sentientware engineers the future of business. We bridge the gap between human ambition and artificial intelligence to deliver unprecedented digital transformation at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md overflow-x-hidden">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <div className="fixed bottom-8 right-20 w-40 h-40 z-[100] pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
          <iframe 
            src="https://lottie.host/embed/9342959c-d5cd-4d5c-955b-29d06f866b9a/CpPWk6pygF.lottie"
            className="w-full h-full border-0 bg-transparent pointer-events-none"
            title="Gemini Bot"
          ></iframe>
        </div>
      </body>
    </html>
  );
}
