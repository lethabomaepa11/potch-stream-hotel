import { Button } from "@/components/ui/button";
import { BedDouble, HandHeart, HelpCircle, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CornerNav from "@/components/ui/CornerNav"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-10 gap-3">
      <h1>WELCOME TO POTCH STREAM HOTEL</h1>
      <h1>Spacious rooms, Great Services</h1>
      <h1>We have a lost and found system to secure your lost belongings for you to claim</h1>
      <Link href="/rooms"><Button variant="default">Check room availability</Button></Link>
    </main>
  );
}
