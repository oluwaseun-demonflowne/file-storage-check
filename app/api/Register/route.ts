import prisma from "@lib/prisma";
interface RegisterBody {
  company: string;
  email: string;
}
export const POST = async (req: Request) => {
  const { company, email } = (await req.json()) as RegisterBody;
  const findCompany = await prisma.company.findUnique({
    where: {
      companyName: company,
    },
  });
  if (findCompany) {
    await prisma.profile.create({
      data: {
        companyId: findCompany.id,
        email: email,
      },
    });
    return new Response("Successful", { status: 200 });
  }
  return new Response("Failed To Create", { status: 500 });
};
