'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { LogIn, LogOut, UserCircle2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import ModeToggle from "@/components/DarkModeToggle"

const Header = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className='w-full fixed bg-background flex items-center justify-between overflow-hidden z-50 px-4'>
      <div className="flex items-center mt-2">
        <Link href="/">
        <Image
          src="/potch_stream_hotel_demo_logo transparent.png"
          alt='Potch Stream Hotel Logo'
          height={60}
          width={70}
        />
        
        </Link>
        Potch Stream
      </div>
      <div className='flex'>
      
      {pathname !== "/login" && (
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <div className='flex items-center space-x-4'>
              <Button variant="ghost"><UserCircle2 /></Button>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="default"><LogIn />Member login</Button>
            </Link>
          )}
          <ModeToggle/>
        </div>
      )}
      </div>
    </nav>
  )
}

export default Header
