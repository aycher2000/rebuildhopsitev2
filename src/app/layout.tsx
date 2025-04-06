import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileNavHelper from "@/components/layout/MobileNavHelper";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: "DJ Hop - Artist Showcase",
  description: "Official website of DJ Hop - Music Producer and Artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <MobileNavHelper />
        <main className="flex-1 pt-24 md:pt-40 pb-16">
          {children}
        </main>
        <Footer />
        {/* Fallback script for mobile menu */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const menuButton = document.getElementById('mobile-menu-button');
              const mobileMenu = document.getElementById('mobile-menu');
              
              if (menuButton && mobileMenu) {
                menuButton.addEventListener('click', function() {
                  if (mobileMenu.style.display === 'block') {
                    mobileMenu.style.display = 'none';
                  } else {
                    mobileMenu.style.display = 'block';
                  }
                });
              }
            });
          `
        }} />
      </body>
    </html>
  );
}
