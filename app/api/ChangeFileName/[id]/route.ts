import prisma from "@lib/prisma";

export type Props = {
  params: {
    id: string;
  };
};

export const PATCH = async (req: Request, { params: { id } }: Props) => {
  const { fileName } = await req.json();
  try {
    await prisma.file.update({
      where: { id },
      data: {
        fileName,
      },
    });
    return new Response(JSON.stringify("SuccessFully Updated"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Error Changing File Name"), {
      status: 500,
    });
  }
};
