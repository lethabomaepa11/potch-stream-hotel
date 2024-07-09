import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import CornerNav from "@/components/ui/CornerNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Potch Stream Hotel",
  description: "Prototype of the Potch Stream hotel system for the cmpg223 module",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="divide-y-2">
          <Header/>
          <main>
            {children}
            <CornerNav/>
          </main>
         
        </div>
        
        </body>
    </html>
  );
}
