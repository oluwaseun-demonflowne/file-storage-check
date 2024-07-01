import prisma from "@lib/prisma";

export const POST = async (req:Request) => {
    const {company}= await req.json();
    const findCompany = await prisma.company.findUnique({
        where: {
            companyName:company
        },
    })
    if(findCompany) {
        return new Response("Company Exists", {status:409})
    }
    return new Response("Not found", {status:404})
}