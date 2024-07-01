import prisma from "@lib/prisma"
export type Props = {
    params: {
        id:string
    }
}

export const DELETE = async (req:Request,{params : {id}}: Props) => {    
    console.log(req) 
    try {
        await prisma.file.delete({
          where: { id }
        });
        return new Response(JSON.stringify("Deleted Updated"), {status:200})
    } catch (error) {
        return new Response(JSON.stringify("Error deleting file"), {status:500})
    }
}
