import React from 'react'
import Room from "@/components/Room"
import room1 from "@/public/rooms/room1.png"
import room2 from "@/public/rooms/room2.jpg"  
import room3 from "@/public/rooms/room3.jpg"  
import room4 from "@/public/rooms/room4.png"  
import room5 from "@/public/rooms/room5.jpg"  
import { randomID } from '@/lib/actions'
import {prisma} from "@/prisma/client"

async function addRooms(room) {
    const newUser = await prisma.Room.create({
      data: {
        id: room.id,
        image: room.image,
        description: room.description,
        price: room.price
      },
    });
  }
async function getRooms(){
  const rooms = await prisma.Room.findMany();
  return rooms;
}
const RoomsPage = async () => {
  
 const rooms = await getRooms();

  
  return (
    <div className='mt-20'>
      <div className='flex flex-col sm:flex-row justify-center items-start flex-wrap gap-5'>
        {rooms.map(room =>{
            return <Room
            key={room.id}
            id={room.id}
            image={room.image}
            description={room.description}
            price={room.price}/>
        })}
        
        
      </div>
      
    </div>
  )
}

export default RoomsPage
