"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { Resend } from 'resend';


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
    const fullname = `${firstName} ${lastName}`;

    //send an otp to the email and phone
    sendOTP(email,1234,fullname);

    redirect("/booking/confirmation");
}


    

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