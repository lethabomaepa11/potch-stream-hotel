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
    <nav className='w-full flex items-center justify-between overflow-hidden z-10 bg-primary p-4'>
      <div className="flex items-center">
        <Link href="/">
        <Image
          src="/potch_stream_hotel_demo_logo transparent.png"
          alt='Potch Stream Hotel Logo'
          height={90}
          width={90}
          
        />
        </Link>
      </div>
      
      {pathname !== "/login" && (
        <div className="flex items-center">
          {isLoggedIn ? (
            <div className='flex items-center space-x-4'>
              <Button variant="default"><UserCircle2 /></Button>
              <Button variant="destructive"><LogOut />Logout</Button>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="secondary"><LogIn />Member login</Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}

export default Header
