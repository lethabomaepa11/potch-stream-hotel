import React from 'react'
import { cookies } from 'next/headers'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { redirect } from 'next/navigation'
import ContactForm from "@/components/ContactForm"

const BookingContactPage = () => {
  const cookie = cookies().get("roomID");
  cookie == undefined && redirect("/rooms");
  return (
    <div className='flex flex-col sm:flex-row justify-center items-start w-screen max-w-screen-lg gap-5 mt-20'>
    <ContactForm/>
    <Card className='mx-auto max-w-sm w-2/5'>
      <CardHeader>
        <CardTitle>Payment Info</CardTitle>
        <CardDescription>To guarantee your booking the full amount is required within 48 hours of making your booking,<br/> 
          but not later than 48 hours prior to your arrival. <br/> 
          If the payment is not received as stipulated, your booking may be cancelled without prior notice
          </CardDescription>
      </CardHeader>
      <CardContent>
      Deposit required: Amount here<br/>
      Bank Details: Nedbank<br/>
      Account Details: 123-4567-890<br/>
      Branch Code: ABCDEF<br/>
      Swift Code: AbCdE<br/>
      Please use your reservation number as a reference when making payment<br/>
      Kindly email a copy of your proof of payment to info@potchstream.vercel.app
      </CardContent>
    </Card>
  </div>
  )
}

export default BookingContactPage
