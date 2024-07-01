"use server";
import { FileData } from "@typesss";
import prisma from "@lib/prisma";

interface Response {
  companyName?: FileData[];
  none?: string;
  error?: any;
}

export async function getPublicFiles(
  email: string | undefined
): Promise<Response> {
  const files = await prisma.profile.findUnique({
    where: {
      email,
    },
  });

  try {
    const findPublicComapnyFiles = await prisma.company.findUnique({
      where: {
        id: files?.companyId,
      },
      include: {
        companyFiles: {
          where: {
            visibility: "public",
          },
        },
      },
    });
    if (findPublicComapnyFiles) {
      return {
        companyName: findPublicComapnyFiles.companyFiles,
      };
    }
    return {
      none: "No files",
    };
  } catch (error) {
    return { error: error };
  }
}
