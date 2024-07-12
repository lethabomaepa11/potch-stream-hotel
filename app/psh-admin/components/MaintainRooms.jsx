import { getHelpData } from '@/app/help/layout'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Edit, PlusSquare, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import {getRoomData} from "../../../lib/actions"
import Image from 'next/image';
import DeleteBtn from "../components/DeleteBtn"


const MaintainRooms = async() => {
    const rooms = await getRoomData();
  return (
    <Card className='mt-20'>
        <CardHeader>
            <CardTitle className='flex justify-between'>
                Maintain Rooms
                <Link href="/psh-admin/add/room"><Button variant="default"><PlusSquare/>Add New</Button></Link>
            </CardTitle>
            <CardDescription>
                You can add/delete or edit rooms here...
            </CardDescription>
            <CardContent className='flex flex-col gap-3'>
                { 
                    rooms.map(data => {
                        return (
                            <Card key={data.id}>
                                <CardHeader>
                                    <CardTitle className='flex justify-between'>
                                        <span>Room: {data.id}</span>
                                        <span className='flex gap-1'>
                                            <Link href={`psh-admin/edit/room/${data.id}`}><Button variant="ghost"><Edit/></Button></Link>
                                            <DeleteBtn item="room" id={data.id}/>
                                        </span>
                                        
                                    </CardTitle>
                                    <CardDescription>
                                    <div className="relative w-40 h-40 sm:w-52 sm:h-52">
                                    
                                        <Image src={data.image} alt={data.id}  objectFit="cover" width={600} height={600} />
                                    </div>
                                      {data.description}
                                    </CardDescription>
                                    <CardContent>
                                        <p className='text-primary text-xl font-bold'>R {data.price}</p>
                                    </CardContent>
                                    
                                </CardHeader>
                            </Card>
                        )
                    })
                }
            </CardContent>
        </CardHeader>
        
    </Card>
  )
}

export default MaintainRooms
