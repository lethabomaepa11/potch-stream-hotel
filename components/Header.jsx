'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { LogIn, LogOut, UserCircle2 } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className='w-full flex items-center justify-between overflow-hidden z-10 px-4'>
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
        <div className="flex items-center">
          {isLoggedIn ? (
            <div className='flex items-center space-x-4'>
              <Button variant="ghost"><UserCircle2 /></Button>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="default"><LogIn />Member login</Button>
            </Link>
          )}
        </div>
      )}
      </div>
    </nav>
  )
}

export default Header
