import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ApplicationLayout } from '@/components/application-layout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kokopelli Academy",
  description: "Kokopelli Academy - Best Coffee Barista Academy",
  openGraph: {
    title: "Kokopelli Academy",
    description: "Online kahve eğitimi platformu",
    url: "https://kokopelliacademy.com",
    siteName: "Kokopelli Academy",
    images: [
      {
        url: "https://kokopelli-akademi.vercel.app/images/social-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Kokopelli Academy",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kokopelli Academy",
    description: "Online kahve eğitimi platformu",
    images: ["https://kokopelli-akademi.vercel.app/images/social-banner.jpg"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <ApplicationLayout>
          {children}
        </ApplicationLayout>
      </body>
    </html>
  );
}
