import type { Metadata } from "next";
import SideNav from "@/app/help/components/SideNav"
import { prisma } from "@/prisma/client";





export const getHelpData = async() => {
  const helpData = prisma.helpPages.findMany();
  return helpData;
}
export default async function HelpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const helpData = await getHelpData();
  return (
        <div className="flex h-fit w-screen mt-20  p-3 divide-x-2 overflow-x-hidden flex-col-reverse sm:flex-row">    
            <SideNav helpData={helpData}/>
            {children}
        </div>    
  );
}
