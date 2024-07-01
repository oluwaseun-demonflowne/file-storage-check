import prisma from "@lib/prisma";
import { auth } from '@clerk/nextjs'; 
import { Prisma } from "@prisma/client";

export const GET = async () => {
    const {userId} = auth();
    console.log(userId)
    try {

        const files = await prisma.profile.findUnique({
            where: {
                email:"ibuemmanuel60@gmail.com"
            }
        })
    
        if(files) {
            const findPublicComapnyFiles = await prisma.company.findUnique({
                where: {
                    id : files.companyId
                }, 
                include: {
                    companyFiles: true
                }
            })
            if(findPublicComapnyFiles) {
                return new Response(JSON.stringify(findPublicComapnyFiles.companyFiles), {status:200})
            }
        }
    }
    catch (error) {
        
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return new Response("Database error", {status: 500})
          } else if (error instanceof Prisma.PrismaClientValidationError) {
            return new Response("Validation Error", {status: 500})
          } else {
            return new Response("Unknown Error", {status: 500})
          }
    }
}