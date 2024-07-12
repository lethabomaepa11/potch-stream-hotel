"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { Resend } from 'resend';
import { prisma } from '@/prisma/client';
import { randomID } from './actions';

export const editRoom = async (id,formdata) =>{
    const page = await prisma.room.update({
        where: {
            id: id,
        },
        data: {
            image: formdata.get("image"),
            description: formdata.get("description"),
            price: Number(formdata.get("price")),
        }
    })
    redirect("/psh-admin");

}
export const getRoomData = async(id) =>{
    const page = await prisma.room.findUnique({
        where: {
            id: id,
        }
    })
    return page;
}

export const addRoom = async(formdata) => {
    const page = await prisma.room.create({
        data: {
            image: formdata.get("image"),
            description: formdata.get("description"),
            price: Number(formdata.get("price")),
            id: await randomID(10),
        }
    })
    redirect("/psh-admin");
}

export const deleteRoom = async(id) => {
    const del = await prisma.room.delete({
        where: {
            id: id,
        }
    })
    redirect("/psh-admin");
}