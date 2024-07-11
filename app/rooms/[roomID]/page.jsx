import React from 'react'
import {setRoomCookie} from "@/lib/actions"



const  RedirectToBooking = async ({params}) => {
  await setRoomCookie(params.roomID)
  return (
    <div className='mt-20'>
      This is room {params.roomID},
      do not display this page to the user, just make sure you take the roomID
      and assign it to the cookies or session then redirect to /booking
    </div>
  )
}

export default RedirectToBooking
