"use server";
import prisma from "@lib/prisma";

export async function changeFileName(id: string, fileName: string) {
  try {
    await prisma.file.update({
      where: { id },
      data: {
        fileName,
      },
    });

    return { success: "Successfully updated" };
  } catch (error) {
    return {
      error: error,
    };
  }
}

export async function deleteFile(id: string) {
  try {
    await prisma.file.delete({
      where: { id },
    });

    return { success: "Deleted Successfully" };
  } catch (error) {
    return {
      error: error,
    };
  }
}
