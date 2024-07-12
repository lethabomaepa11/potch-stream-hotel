import { redirect } from 'next/navigation';
import React from 'react'
import { allowedItems } from '../../page';
import RoomForm from "../../components/RoomForm"
import HelpPagesForm from "../../components/HelpPagesForm"


const AddItem = ({params}) => {
    
    const item = params.item;
    !allowedItems.includes(item) && redirect("/psh-admin");
    
  return (
    <div className='mt-20 flex flex-col justify-center items-center w-full'>
      {item === "room" && <RoomForm/>}
      {item === "help" && <HelpPagesForm/>}
    </div>
  )
}

export default AddItem
