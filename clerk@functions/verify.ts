import { Verify } from "@typesss/AppTypes";

export const onPressVerify = async (
    isLoaded: boolean,
    code: string,
    signUp: any,
    setActive: any
  ): Promise<Verify> => {
    if (!isLoaded) {
      return { stop: true };
    }
  
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      console.log(completeSignUp);
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
        return { inComplete: completeSignUp };
      } else if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        return { success: completeSignUp };
      } else {
        return { error: "Error Creating User" };
      }
    } catch (err: any) {
      console.log(err);
      console.error(JSON.stringify(err, null, 2));
      return { error: "Error Creating User" };
    }
  };
  