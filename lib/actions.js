"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { Resend } from 'resend';
import { prisma } from '@/prisma/client';


export const setRoomCookie = async (roomID,formData) => {
    //check if cookie exists, then delete if exists 
    cookies().delete("roomID");
    cookies().set("roomID",roomID);
    redirect("/booking/contact");
  }



export const submitContactInfo = async (formdata) =>{
    const firstName = formdata.get("firstname");
    const lastName = formdata.get("lastname");
    const email = formdata.get("email");
    const phone = formdata.get("phone");
    const roomID = cookies().get("roomID").value;
    const identifier = await randomID(5);

    //send an otp to the email and phone
    const bookingSubmission = await prisma.Booking.create({
        data: {
            randomID: identifier,
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            roomID: roomID,
        },
    })

    cookies().set("reserved",identifier);

    redirect("/booking/confirmation");
}
export const getRoomData = async() =>{
    const rooms = await prisma.room.findMany();
    return rooms;
}

export const getRoomById = async(id) => {
    const room = prisma.room.findUnique({
        where: {
            id: id,
        }
    })
    
    return room;
}

    
/*
needs own domain
const resend = new Resend('re_41bUWFxH_HFayVawrpxQjiETK1XV1rKPN');

export async function sendOTP(email,otp,fullname) {
    try {
    const { data, error } = await resend.emails.send({
        from: 'PotchStream <onboarding@potchstream.vercel.app>',
        to: [email],
        subject: 'OTP for Room Booking',
        html: `Dear ${fullname}, your requested OTP code is: ${otp}<br/>Do not share this code with anyone!`,
    });

    if (error) {
        return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
    } catch (error) {
    return Response.json({ error }, { status: 500 });
    }
}
*/

export const randomID = (size) => {
    const alphabets = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let id = "";
    for(let i = 0; i < size; i++){
        let randomIndex = Math.floor(Math.random() * alphabets.length);
        let decider = Math.floor(Math.random() * 4);
        switch(decider){
            case 1:
                //lowercase
                id += alphabets[randomIndex];
                break;
            case 2:
                //uppercase
                id += alphabets[randomIndex].toUpperCase();
                break;
            default:
                //number
                id += Math.floor(Math.random() * 10);
                
                break;
        }
    }
    return id;
}