import prisma from "@lib/prisma";

interface ShareBody {
    email: string,
    fileName: string,
    fileExtension: string,
    url: string,
    size: number,
    visibility: string
}


export const POST = async (req:Request) => {
  const {email,fileName,fileExtension,url,size,visibility}= await req.json() as ShareBody;
  try {
    const findPerson = await prisma.profile.findUnique({
      where: {
        email,
      },
    });

    if (!findPerson) {
        return new Response("Person not found", {status: 400})
    }

    const findCompany = await prisma.company.findUnique({
      where: {
        id: findPerson.companyId,
      },
    });

    if (!findCompany) {
        return new Response("Company not found", {status: 400})
    }
    const maxFileSize = findCompany.maxSize;
    const currentCompanySize = findCompany.currentSize;

    if (maxFileSize && currentCompanySize !== null && size !== null) {
      const remainingSpace = maxFileSize - currentCompanySize;

      if (size < remainingSpace) {
        await prisma.company.update({
          where: {
            id: findPerson.companyId,
          },
          data: {
            currentSize: currentCompanySize + size,
          },
        });
        await prisma.file.create({
          data: {
            companyId: findPerson.companyId,
            fileName,
            fileExtension,
            profileId: findPerson.id,
            visibility,
            email: findPerson.email,
            url,
            size,
            month: new Date().getMonth(),
            date: new Date().getDate(),
            year: new Date().getFullYear(),
            minute: new Date().getMinutes(),
            hour: new Date().getHours(),
            ampm: new Date().getHours() >= 12 ? "PM" : "AM",
          },
        });
        return new Response("Successful", {status:200})
      } else {
        return { max: "File size exceeds the remaining available space." };
      }
    } else {
      return { errorMsg: "Invalid company or file details." };
    }
  } catch (error) {
    return new Response("Could not save to the database", {status: 400})
  }
}
