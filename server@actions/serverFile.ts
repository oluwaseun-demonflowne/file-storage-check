"use server";
import { FileData } from "@typesss";
import prisma from "@lib/prisma";
import { Prisma } from "@prisma/client";

interface ResponseFile {
  success?: FileData[] | undefined;
  error?: string | Prisma.PrismaClientValidationError | undefined;
}

export async function getMyOwnFiles(
  email: string | undefined
): Promise<ResponseFile> {
  try {
    const files = await prisma.profile.findUnique({
      where: {
        email,
      },
      include: {
        profileFiles: true,
      },
    });
    return { success: files?.profileFiles };
  } catch (error: any) {
    return { error: error };
  }
}
