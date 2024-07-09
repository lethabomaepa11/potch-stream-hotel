import type { Metadata } from "next";
import SideNav from "@/app/help/components/SideNav"




export const metadata: Metadata = {
  title: "Potch Stream Hotel",
  description: "Prototype of the Potch Stream hotel system for the cmpg223 module",
};

export default function HelpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="flex h-fit w-screen  p-3 divide-x-2 overflow-x-hidden">    
            <SideNav/>
            {children}
        </div>    
  );
}
