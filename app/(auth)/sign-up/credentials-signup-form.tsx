'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signUpUser } from "@/lib/actions/userLogin.action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
const SignInForm = () => {

    const searchParams=useSearchParams();
    const callbackUrl=searchParams.get('callbackUrl') || '/';
    const [data,action]=useActionState(signUpUser,{
        success:false,
        message:''
    })

   const SignUpButton = () => {
    const {pending}=useFormStatus();
    return (
            <Button variant={"default"} className="w-full mt-3" disabled={pending} type="submit">
                {pending ? 'Submitting': 'Sign Up'}
            </Button>
        );
   }
    
   
    
    return <form action={action}>
        <input type="hidden" name="callback" value={callbackUrl} />
        <div className="py-4">
            <Label htmlFor="name" className="py-2">Name</Label>
                <Input 
                    type="name"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                />
        </div>
        <div className="py-4">
            <Label htmlFor="email" className="py-2">Email</Label>
                <Input 
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                />
        </div>
        <div className="pb-4">
            <Label htmlFor="password" className="py-2">Password</Label>
                <Input 
                    type="password"
                    name="password"
                    id="password"
                    required
                    autoComplete="password"
                />
        </div>
        <div className="pb-4">
            <Label htmlFor="confirmPassword" className="py-2">Confirm Password</Label>
                <Input 
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    autoComplete="confirmPassword"
                />
        </div>
        <SignUpButton/>
        {data && !data.success && <div className="text-destructive mt-4">{data.message}</div>}
        <div className="py-4">
            Already have an account?{' '}
            <Link href='/sign-in'>Sign in</Link>
        </div>
    </form>
}
 
export default SignInForm;