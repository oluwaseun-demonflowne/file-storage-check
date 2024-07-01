import { SignActiveLoaded } from "@typesss";
import { type Response } from "@typesss/AppTypes";



export const handleClerkLogin = async (
  emailAddress: string,
  password: string,
  signInObj: SignActiveLoaded
): Promise<Response> => {
  const { isLoaded, setActive, signIn } = signInObj;
  if (!isLoaded) {
    return { stop: false };
  }

  try {
    const result = await signIn?.create({
      identifier: emailAddress,
      password,
    });

    if (result?.status === "complete") {
      setActive && (await setActive({ session: result.createdSessionId }));
      return { complete: "Success signUp" };
    } else {
      console.log(result);
      return { pending: true };
    }
  } catch (err: any) {
    console.log(err)
    return { error: err.errors[0].longMessage };
  }
};
