"use client"
import React from 'react'
import {Button} from "./button"
import Link from 'next/link'
import { ArrowLeft, BedDouble, HandHeart, HelpCircle } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const CornerNav = () => {
    const currentPath = usePathname();
    const router = useRouter();
    if(!currentPath.includes("login")){
  return (
    
    <div className='fixed bottom-0 right-0 flex flex-col gap-3 mb-10 bg-slate-400 rounded-md p-5'>

        {
            currentPath == "/" &&
            <div className='flex flex-col gap-3'>
          <Link href="/rooms">
              <Button variant="default"><BedDouble />Book a room</Button>
          </Link>
          <Link href="/lost-found">
              <Button variant="secondary"><HandHeart />Lost & Found</Button>
          </Link>
          </div>
        }
        {!currentPath.includes("/help") &&
        <Link href={`/help${currentPath.includes("booking") ? "/booking" : currentPath}`}>
              <Button variant="secondary"><HelpCircle />Get Help</Button>
        </Link>}
        <Button variant="destructive" onClick={() => router.back()}><ArrowLeft/> Go Back</Button>
        </div>
  )
}
}

export default CornerNav
