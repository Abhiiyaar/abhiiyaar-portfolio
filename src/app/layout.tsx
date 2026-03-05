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
  metadataBase: new URL("https://abhiiyaar.in"),
  title: {
    default: "Abhishek | Full Stack Developer",
    template: "%s | Abhishek 'Abhiiyaar'",
  },
  description: "Portfolio of Abhishek (Abhiiyaar), a Full Stack Developer from India passionate about building and self-hosting web applications.",
  keywords: [
    "Abhishek",
    "Abhiiyaar",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Web Development",
    "India",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek" }],
  creator: "Abhishek",
  publisher: "Abhishek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Abhishek | Full Stack Developer",
    description: "Portfolio of Abhishek (Abhiiyaar), a Full Stack Developer from India passionate about building and self-hosting web applications.",
    siteName: "Abhiiyaar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek | Full Stack Developer",
    description: "Portfolio of Abhishek (Abhiiyaar), a Full Stack Developer from India passionate about building and self-hosting web applications.",
    creator: "@abhiiyaar",
  },
  icons: {
    icon: [
      { url: "/favicon-a.svg", type: "image/svg+xml" },
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
