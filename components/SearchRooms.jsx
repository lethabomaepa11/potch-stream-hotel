import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { DatePickerWithRange } from './DatePicker'
import { ComboboxDemo } from './ComboBox'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import lostFound from "@/public/lost-found.png"
import { BedDouble, HandHeartIcon } from 'lucide-react'

const SearchRooms = () => {
  return (
    <div className='flex flex-col gap-3 justify-center align-center w-full'>
      <Card className="w-full bg-secondary rounded-md p-3">
        <CardHeader>
            <CardTitle className='flex'><BedDouble/>Search for Rooms</CardTitle>
        </CardHeader>
        <CardContent>
            <form className='flex flex-col sm:flex-row gap-3 items-center flex-wrap'>
            <p>Pick your check in and check out date</p>
            <DatePickerWithRange/>
            <Button variant="default">Check room availability</Button>
            </form>
        </CardContent>
     </Card>
     <Card className="w-full bg-card rounded-md p-3 ">
        <CardHeader>
            <CardTitle className='flex'><HandHeartIcon/>Lost and Found Items</CardTitle>
            <CardDescription>We try by all means to reunite lost items with their owners</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col sm:flex-row gap-3 items-center flex-wrap'>
            <p>If you have lost an item in any of our rooms, Click here</p>
            <Link href="/lost-found"><Button variant="destructive">Make a lost&found claim</Button></Link>
            
            
        </CardContent>
     </Card>
    </div>
  )
}

export default SearchRooms
