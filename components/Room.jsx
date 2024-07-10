import React from 'react'
import {Card, CardContent, CardDescription} from "./ui/card"
import {Button} from "./ui/button"
import Image from 'next/image'
import room1 from "../public/rooms/room1.png"
import Link from 'next/link'

const Room = ({id,image,description,price}) => {
  return (
    <Card>
        <CardContent className='w-full sm:w-1/4 flex flex-col sm:flex-row rounded-md py-3 gap-3'>
            <div className='relative'>
                <Image
                src={image}
                alt={id}/>
            </div>
            <section className='flex flex-col w-full sm:w-3/4 p-1 gap-3'>
                <CardDescription>
                    {description}
                </CardDescription>
                <h1 className='text-xl font-bold'> Price R{price}</h1>
                <Link href={`/rooms/${id}`} className='w-full sm:w-11'><Button className='w-full sm:w-2/5'>Book Now</Button></Link>
            </section>
            

        </CardContent>
    </Card>
  )
}

export default Room
