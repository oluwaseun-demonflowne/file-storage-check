"use server"
import prisma from "@lib/prisma"

const newExpirationDate = new Date();
newExpirationDate.setDate(newExpirationDate.getDate() + 30);
const today = new Date();
const differenceInMilliseconds: number = newExpirationDate.getTime() - today.getTime();
const differenceInDays: number = Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24));

interface RegisterBody {
    companyName: string
}

export const POST = async (req:Request) => {
    const {companyName}= await req.json() as RegisterBody; 
    const findCompany = await prisma.company.findUnique({
        where: {
            companyName: companyName?.toString(),
        },
    })

    if(findCompany) {
        return new Response("Company already Exists", {status:409})    
    }
    try {
        if(companyName) {
            await prisma.company.create({
                data: {
                    companyName : companyName,
                    plan: "freePlan",
                    freePlanExpirationDate: newExpirationDate,
                    currentSize:0,
                    maxSize:  100,
                    days: differenceInDays,
                    sentEmailReminder: false
                }
            })
            return new Response("Successful", {status: 201})
        } 
        else {
            return new Response("Unknown error", {status:500})    
        }
    } catch (error) {
        return new Response("Failed To Create", {status:500})    
    }
}


