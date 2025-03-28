import { Metadata } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import SignInForm from "./credentials-signin-form";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const metadata : Metadata = ({
    title:'Signin'
})

const SignInPage =async (props:{
    searchParams: Promise<{
        callbackUrl: string
    }>
}) => {
    const {callbackUrl}=await props.searchParams;
    const session=await auth();
    if(session)
        return redirect(callbackUrl || '/');
    return <div className="min-w-md text-center">
        <Card className="px-4">
            <CardHeader className="flex flex-col items-center ">
                <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} width={100} height={100} className=""/>
                <h1 className="text-3xl font-bold ">Sign In</h1>
            </CardHeader>
            <CardTitle className="font-normal">Sign in to your account</CardTitle>
            <CardDescription>
                <SignInForm/>
            </CardDescription>
        </Card>
    </div>;
}
 
export default SignInPage;