"use server"
import prisma from "@lib/prisma";

export async function addNewFile(
  email: string,
  fileName: string,
  fileExtension: string,
  url: string,
  size: number,
  visibility: string
) {
  try {
    const findPerson = await prisma.profile.findUnique({
      where: {
        email,
      },
    });

    if (!findPerson) {
      return { errorMsg: "Person not found" };
    }

    const findCompany = await prisma.company.findUnique({
      where: {
        id: findPerson.companyId,
      },
    });

    if (!findCompany) {
      return { errorMsg: "Company not found" };
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
        const newFile = await prisma.file.create({
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

        return { fileSuccess: newFile };
      } else {
        return { max: "File size exceeds the remaining available space." };
      }
    } else {
      return { errorMsg: "Invalid company or file details." };
    }
  } catch (error) {
    console.error("Error adding file:", error);
    return { errorMsg: "Could not save to the database" };
  }
}
