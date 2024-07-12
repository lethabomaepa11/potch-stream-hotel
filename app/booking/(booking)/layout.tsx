import type { Metadata } from "next";
import SideNav from "@/app/help/components/SideNav"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRoomById } from "@/lib/actions";
import PaymentInfoCard from "@/components/PaymentInfoCard"



export const metadata: Metadata = {
  title: "Potch Stream Hotel",
  description: "Prototype of the Potch Stream hotel system for the cmpg223 module",
};

export default async function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const roomID = cookies().get("roomID");
    roomID == undefined && redirect("/rooms");
    const room = await getRoomById(roomID.value);
    room == null && redirect("/rooms");
  return (
        <div className='flex flex-col sm:flex-row justify-center items-start gap-3 mt-20'>    
            {children}
            <PaymentInfoCard room={room}/>
        </div>    
  );
}
