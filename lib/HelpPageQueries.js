"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { Resend } from 'resend';
import { prisma } from '@/prisma/client';

export const editHelp = async (id,formdata) =>{
    const page = await prisma.helpPages.update({
        where: {
            id: id,
        },
        data: {
            heading: formdata.get("heading"),
            path: formdata.get("path"),
            text: formdata.get("text"),
        }
    })
    redirect("/psh-admin");

}
export const getHelpData = async() => {
    const helpData = prisma.helpPages.findMany();
    return helpData;
  }

export const getHelpPageData = async(id) =>{
    const page = await prisma.helpPages.findUnique({
        where: {
            id: id,
        }
    })
    return page;
}

export const addHelp = async(formdata) => {
    const page = await prisma.helpPages.create({
        data: {
            heading: formdata.get("heading"),
            path: formdata.get("path"),
            text: formdata.get("text"),
        }
    })
    redirect("/psh-admin");
}

export const deleteHelp = async(id) => {
    const del = await prisma.helpPages.delete({
        where: {
            id: id,
        }
    })
    redirect("/psh-admin");
}