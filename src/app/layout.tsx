import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abhiiyaar.in"),
  title: {
    default: "Abhiiyaar - Full Stack Developer",
    template: "%s | Abhiiyaar",
  },
  description: "Welcome to the portfolio of Abhishek. I am a passionate Full Stack Developer from India, specializing in React, Next.js, and building robust, self-hosted web applications. Discover my projects, skills, and get in touch.",
  keywords: [
    "Abhiiyaar",
    "abhiiyar",
    "Abhishek",
    "Abhishek Gandhi",
    "Abhishek Portfolio",
    "Abhiiyaar Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Web Development",
    "India",
    "Freelance Developer",
    "Self-hosting",
    "Web Design"
  ],
  authors: [{ name: "Abhishek (Abhiiyaar)", url: "https://www.abhiiyaar.in" }],
  creator: "Abhiiyaar",
  publisher: "Abhiiyaar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abhiiyaar.in",
    title: "Abhiiyaar - Full Stack Developer Portfolio",
    description: "Welcome to the portfolio of Abhishek. I am a passionate Full Stack Developer from India, specializing in React, Next.js, and building robust, self-hosted web applications.",
    siteName: "Abhiiyaar Portfolio",
    images: [
      {
        url: "/img/abhi1.jpg",
        width: 1200,
        height: 630,
        alt: "Abhiiyaar Portfolio - Abhishek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiiyaar - Full Stack Developer Portfolio",
    description: "Welcome to the portfolio of Abhishek. I am a passionate Full Stack Developer from India.",
    creator: "@abhiiyaar",
    images: ["/img/abhi1.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-a.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}
      >
        <Providers>
          <Header />
          <div className="mx-auto flex max-w-3xl flex-col px-8">
            <main className="grow">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
