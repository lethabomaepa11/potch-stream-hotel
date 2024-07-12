"use client"
import React from 'react'

import ConfirmationDialog from "@/components/ConfirmationDialog"


const deleteItem = (item,id) => {

    console.log(item,id);
}
const DeleteBtn = ({item,id}) => {
  return (
    <div>
        
        <ConfirmationDialog item={item} id={id}/>
    </div>
    
  )
}

export default DeleteBtn
