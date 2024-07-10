import React from 'react'
import Room from "@/components/Room"
import room1 from "@/public/rooms/room1.png"
import room2 from "@/public/rooms/room2.jpg"  
import room3 from "@/public/rooms/room3.jpg"  
import room4 from "@/public/rooms/room4.png"  
import room5 from "@/public/rooms/room5.jpg"  

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
const RoomsPage = () => {
  
  const rooms = [
    new RoomClass(1,room1,"An affordable suite!",599),
    new RoomClass(2,room2,"An affordable suite!",1599),
    new RoomClass(3,room3,"An affordable suite!",2589),
    new RoomClass(4,room4,"An affordable suite!",658),
    new RoomClass(5,room5,"An affordable suite!",13899),
  ]
  return (
    <div className='mt-20'>
      <section className='flex flex-col gap-5 '>
        {rooms.map(room =>{
            return <Room
            key={room.id}
            id={room.id}
            image={room.image}
            description={room.description}
            price={room.price}/>
        })}
        
        
      </section>
      
    </div>
  )
}

export default RoomsPage
