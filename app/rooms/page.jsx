import React from 'react'
import Room from "@/components/Room"
import room1 from "@/public/rooms/room1.png"
import room2 from "@/public/rooms/room2.jpg"  
import room3 from "@/public/rooms/room3.jpg"  
import room4 from "@/public/rooms/room4.png"  
import room5 from "@/public/rooms/room5.jpg"  
import { randomID } from '@/lib/actions'

class RoomClass {

    constructor(id,image,description,price) {
    this.id = id;
    this.image = image;
    this.description = description;
    this.price = price;
  };
    id;
    image;
    description;
    price;
}
const RoomsPage = async () => {
  
  const rooms = [
    new RoomClass(await randomID(10),room1,"An affordable suite!",599),
    new RoomClass(await randomID(10),room2,"An affordable suite!",1599),
    new RoomClass(await randomID(10),room3,"An affordable suite!",2589),
    new RoomClass(await randomID(10),room4,"An affordable suite!",658),
    new RoomClass(await randomID(10),room5,"An affordable suite!",13899),
  ]
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
