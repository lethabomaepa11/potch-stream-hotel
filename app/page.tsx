import { Button } from "@/components/ui/button";
import { BedDouble, Facebook, HandHeart, HelpCircle, Instagram, Linkedin, LogIn, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchRooms from "@/components/SearchRooms"
import logo from "@/public/hotel.jpg"
import workers from "@/public/workers.webp"
import room1 from "@/public/rooms/room1.png"
import room2 from "@/public/rooms/room2.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3">
      
      <div className="h-60 sm:h-80 w-full overflow-hidden relative z-0">
        <Image
        src={room1}
        alt="hotel"
        fill
        className="z-0"
        priority={false}
        />
      </div>
      <div className="flex flex-col p-5 gap-3">
      <h1 className="text-3xl font-bold">WELCOME TO POTCH STREAM HOTEL</h1>
      <SearchRooms/>

      <section className="flex flex-col sm:flex-row border-2 rounded-md">
        <Card className="border-none sm:w-2/4">
          <CardHeader>
            <CardDescription>Great services</CardDescription>
          </CardHeader>
          <CardContent>
            
            <Image src={workers}
            alt="workers"/>
          </CardContent>
        </Card>
        <Card className="border-none sm:w-2/4">
          <CardHeader>
            <CardDescription>Spacious rooms</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={room2}
            alt="room"/>
          </CardContent>
        </Card>
        
      </section>
     
      </div>
      <footer className="bottom-0 bg-secondary p-3 pt-10 gap-5 flex flex-col sm:justify-center sm:items-start sm:flex-row divide-x-2">
        <div className="w-full sm:w-1/3">
          <h1 className="text-xl">
            Contact Us
          </h1>
          <section className="text-sm mt-5 flex flex-col gap-1">
            <p>Potch Stream Hotel & Resort</p>
            <p>777 Potchie Holet Blvd,</p>
            <p>Potchesftrum, 1900,</p>
            <p>South Africa</p>
            <p>+27 (0)12 345 6789</p>
            <p>reservations@potchstream.vercel.app</p>
          </section>
            
            
        </div>
        <div className="w-full sm:w-1/3">
          <h1 className="text-xl">
            Social Media
          </h1>
          <section className="text-sm mt-5 flex flex-wrap gap-2">
            <Facebook/>
            <Linkedin/>
            <Instagram/>
            <Twitter/>
          </section>
        </div>
        <div className="w-full sm:w-1/3">
          <h1 className="text-xl">
            NewsLetter
          </h1>
        </div>
      </footer>
    </main>
  );
}
