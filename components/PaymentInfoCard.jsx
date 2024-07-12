import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { cookies } from 'next/headers'

const PaymentInfoCard = ({room}) => {
    const reserved = cookies().get("reserved");
  return (
    <Card className='w-full sm:w-2/4 sm:mr-24'>
        <CardHeader>
            <CardTitle>Payment Info</CardTitle>
            <CardDescription>To guarantee your booking the full amount is required within 48 hours of making your booking,<br/> 
                but not later than 48 hours prior to your arrival. <br/> 
                If the payment is not received as stipulated, your booking may be cancelled without prior notice
            </CardDescription>
        </CardHeader>
        <CardContent>
            Deposit required: <b>R{room.price}</b><br/>
            Bank Details: Nedbank<br/>
            Account Details: 123-4567-890<br/>
            Branch Code: ABCDEF<br/>
            Swift Code: AbCdE<br/>
            Reservation code: <span className='text-primary '>{reserved == undefined ? "(Will be generated after submitting form)":reserved.value}</span><br/><br/>
            Please use your reservation code {reserved != undefined && `(${reserved.value})`} as a reference when making payment<br/>
            Kindly email a copy of your proof of payment to info@potchstream.vercel.app
        </CardContent>
    </Card>
  )
}

export default PaymentInfoCard
