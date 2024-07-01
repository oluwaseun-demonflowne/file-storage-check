import prisma from "@lib/prisma"

type Props = {
    params: {
        email:string
    }
}

export const GET = async (req:Request, {params : {email}}: Props) => {
   console.log(req) 
   try {
        const files = await prisma.profile.findUnique({
            where: {
                email
            },
            include : {
                profileFiles: true
            }
        })
        return new Response(JSON.stringify(files?.profileFiles), {status:200})
   } catch (error: any) {
        return new Response(error, {status: 500})
   }    
}
