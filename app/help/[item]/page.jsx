"use client"
import { Label } from '@/components/ui/label';
import { usePathname } from 'next/navigation'
import React from 'react'

const HelpItemPage = () => {
    const currentPath = usePathname();
    //demo data
    const helpData = [
        {
            heading: "Booking",
            path: "/booking",
            text: "Each user can make a booking logged in or not...",
        },
        {
            heading: "Payments",
            path: "/payments",
            text: "Full payment must be made to the following bank account...",
        },
        {
            heading: "Membership",
            path: "/membership",
            text: "You can create a membership account...",
        },
        {
            heading: "Lost and Found",
            path: "/lost-found",
            text: "A system to make sure that our clients do not lose their items forever...",
        },
        {
            heading: "Rooms",
            path: "/rooms",
            text: "Want to get help with the available rooms?",
        },
    ]
  return (
    <div>
      {/**simulate fetching data from database */}
      {helpData.map(data => {
        let path = `/help${data.path}`;
        if(path == currentPath){
            return(
                <div key="path" className='flex flex-col p-5'>
                    <Label className='text-2xl'>{data.heading}</Label>
                    <Label className='font-normal mt-5'>{data.text}</Label>
                </div>
            )
        }
      })}
    </div>
  )
}

export default HelpItemPage
