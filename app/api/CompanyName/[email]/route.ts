import prisma from "@lib/prisma"

export type Props = {
    params: {
        email:string
    }
}

export const GET = async (req:Request, {params : {email}}: Props) => {
    console.log(req)
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
            return new Response(JSON.stringify(findPerson.personCompany), {status:200})
        }
    } catch (error) {
        return new Response("Unknown Error", {status: 500})
    }    
}


