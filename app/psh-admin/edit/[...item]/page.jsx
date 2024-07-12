import React from 'react'
import {allowedItems} from "../../page"
import { redirect } from 'next/navigation'
import RoomForm from "../../components/RoomForm"
import HelpPagesForm from "../../components/HelpPagesForm"
import { getHelpPageData } from '@/lib/HelpPageQueries'
import { getRoomData } from '@/lib/RoomQueries'

const EditItem = async ({params}) => {
    const item = params.item[0];
    let id = params.item[1];
    !allowedItems.includes(item) && redirect("/psh-admin");
    let helpPage = null;
    let room = null;
    if(item == "help"){
      id = Number(id);
      helpPage = await getHelpPageData(id);
    }
    if(item === "room"){
       room = await getRoomData(id);
    }
      
    
  return (
    <div className='mt-20 flex flex-col justify-center items-center w-full'>
      {item === "room" && <RoomForm room={room}/>}
      {item === "help" && <HelpPagesForm helpPage={helpPage}/>}
    </div>
  )
}

export default EditItem
