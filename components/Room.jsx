import React from 'react';
import { Card, CardContent, CardDescription } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { setRoomCookie } from '@/lib/actions';


const Room = ({ id, image, description, price }) => {
  const setCookie = setRoomCookie.bind(null,id);
  return (
    <Card>
      <CardContent className="w-full sm:w-1/4 flex flex-col sm:flex-row rounded-md py-3 gap-3">
        <div className="relative w-40 h-40 sm:w-52 sm:h-52">
          {/* Adjust width and height based on your design */}
          <Image src={image} alt={id}  objectFit="cover" width={600} height={600} />
        </div>
        <section className="flex flex-col w-full sm:w-3/4 p-1 gap-3">
          <CardDescription>{description}</CardDescription>
          <h1 className="text-xl font-bold">Price R{price}</h1>
          
            <form action={setCookie}><Button className="w-full sm:w-2/5">Book Now</Button></form>
          
        </section>
      </CardContent>
    </Card>
  );
};

export default Room;
