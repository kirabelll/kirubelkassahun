import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  });

export const metadata: Metadata = {
  title: "Kirubel Kassahun® | Software Developer — Portfolio",
  description: "Creative Thinker & Interface Builder based in Ethiopia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-black bg-white`}>
        {children}
        <Script id="scroll-animations" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };
              
              const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                  }
                });
              }, observerOptions);
              
              const animateElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
              animateElements.forEach(el => observer.observe(el));
            });
          `}
        </Script>
      </body>
    </html>
  );
}
