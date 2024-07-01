"use server"
import prisma from "@lib/prisma"

export async function getCompanyProfile (email:string)  {
    try {
        const findPerson = await prisma.profile.findUnique({
            where: {
                email
            }, 
            include: {
                personCompany: true
            }
        })
        if(findPerson) {
            return {
                companyName : findPerson.personCompany
            }
        }
        return {
            none: "Does not exist"
        }
    } catch (error) {
        return {error : error}
    }
    
    
    
}