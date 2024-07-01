import prisma from "@lib/prisma";

export type Props = {
  params: {
    id: string;
  };
};

export const PATCH = async (req: Request, { params: { id } }: Props) => {
  const { fileVisibility } = await req.json();
  try {
    const result = await prisma.file.update({
      where: { id },
      data: {
        visibility: fileVisibility === "private" ? "public" : "private",
      },
    });
    return new Response(
      JSON.stringify(`Visibility changed to ${result.visibility}`),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify("Error Changing Visibility"), {
      status: 500,
    });
  }
};
