import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Redirect from "../../components/login/Redirect";


export default async function Page () {
    const { userId } = auth();
 
    if (userId) {
        redirect('/public')
    }
    return (
        <>
            <Redirect />
        </>
    )
}


