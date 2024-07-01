import prisma from "@lib/prisma"

export type Props = {
    params: {
        email:string
    }
}

export const GET = async (req:Request, {params : {email}}: Props) => {
    console.log(req) 
    const files = await prisma.profile.findUnique({
        where: {
            email
        }
    })

    try {
        const findPublicComapnyFiles = await prisma.company.findUnique({
            where: {
                id : files?.companyId
            }, 
            include: {
                companyFiles: {
                    where: {
                        visibility: 'public'
                    }
                },
            },
        })
        if(findPublicComapnyFiles) {
            return new Response(JSON.stringify(findPublicComapnyFiles.companyFiles), {status:200})
        }
        return {
            none: "No files"
        } 
    } catch (error:any) {
        return new Response(error, {status: 500})
    }

    
}


