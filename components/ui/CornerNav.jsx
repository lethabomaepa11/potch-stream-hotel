"use client"
import React from 'react'
import {Button} from "./button"
import Link from 'next/link'
import { ArrowLeft, BedDouble, HandHeart, HelpCircle, User, UserCog } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const CornerNav = () => {
    const currentPath = usePathname();
    const router = useRouter();
    
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
        { !(currentPath.includes("/help") || currentPath.includes("/login") || currentPath.includes("/psh-admin")) &&
              <Link href={`/help${currentPath.includes("booking") ? "/booking" : currentPath}`}>
                    <Button variant="secondary"><HelpCircle />Get Help</Button>
              </Link>
          }
          {currentPath.includes("/login") && 
              <div className='flex flex-col gap-3'>
                <Button variant="default"><UserCog/>Demo Admin</Button>
                <Button variant="outline"><User/>Demo Client</Button>
              </div>
            }
        <Button variant="destructive" onClick={() => router.back()}><ArrowLeft/> Go Back</Button>
    </div>
  )
}


export default CornerNav
