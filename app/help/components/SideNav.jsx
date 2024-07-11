"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'

const SideNav = () => {
    const currentPath = usePathname();
    const paths = [{
        path: "/booking",
        text: "Booking"
    },{
        path: "/membership",
        text: "Membership"
    },{
        path: "/lost-found",
        text: "Lost and Found"
    },
    {
        path: "/rooms",
        text: "Rooms"
    },{
        path: "/payments",
        text: "Payments"
    },{
        path: "/faq",
        text: "Frequently asked questions"
    }];

  return (
    
       <nav className="w-fit flex flex-col">
            <Link href="/"><Button variant="ghost"><HomeIcon/>Home</Button></Link>
            <Link href="/help"><Button variant="ghost" className='mt-5'>Help Topics</Button></Link>
              {paths.map(link =>{
                
                let path = `/help${link.path}`;
                console.log(path);
                
                return (
                <Link key={path}
                    href={path} 
                    className="hover:text-blue-950">
                    <Button variant="link" className={path === currentPath ? "text-primary " : "text-secondary-foreground font-extrabold"}>
                        {link.text}
                    </Button>
                </Link>)
              })}
              
        </nav>
  )
}

export default SideNav
