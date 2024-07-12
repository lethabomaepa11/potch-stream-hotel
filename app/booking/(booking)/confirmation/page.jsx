import React from 'react'
import { prisma } from '@/prisma/client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const getBookingDetails = (randomID) => {
  const booking = prisma.booking.findUnique({
    where: {
      randomID: randomID,
    }
  })
  return booking;
}
const BookingConfirmationPage = async() => {
  const reserved = cookies().get("reserved");
  reserved == undefined && redirect("/rooms");
  const booking = await getBookingDetails(reserved.value);
  return (
    <div>
      <Card className='mx-auto'>
        <CardHeader>
          <CardTitle>
            Room Reservation {booking.randomID}
          </CardTitle>
          <CardDescription>
            Dear {booking.firstname} {booking.lastname}, your reservation {booking.randomID} is waiting for you!<br/>
          </CardDescription>
          <CardContent>
            <b>Your contact details</b><br/>
            Email: {booking.email}<br/>
            Phone: {booking.phone}

          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default BookingConfirmationPage
