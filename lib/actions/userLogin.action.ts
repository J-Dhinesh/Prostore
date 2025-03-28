'use server'
import { userDetailsValidate } from "../validators/validator";
import { signIn,signOut } from "@/auth";
import { prisma } from "@/db/prisma";
import { hashSync } from "bcrypt-ts-edge";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { signUpValidate } from "../validators/validator";
import { formatError } from "../utils";

// Action for login

export async function signInWithCredientials(prevState:unknown ,formData: FormData)
{
    
    try{
        const user=userDetailsValidate.parse({
            email:formData.get('email'),
            password:formData.get('password')
        })
        await signIn('credentials',user);
        return {success:true,message:"User Login successfully"};
    }
    catch(error)
    {
        if(isRedirectError(error))
            throw error;
        return {success:false , message:'User login Failed'};
    }
}


// Action for log out

export async function signOutUser() {
    await signOut();
}

// Action for signing up the User

export async function signUpUser(prevState:unknown,formData:FormData){
    try{
    const user=signUpValidate.parse({
        name:formData.get('name'),
        email:formData.get('email'),
        password: formData.get('password'),
        confirmPassword:formData.get('confirmPassword')
    });
    const plainPassword=user.password;
    user.password=hashSync(user.password);

    await prisma.user.create({
        data:{
            name:user.name,
            password:user.password,
            email:user.email
        }
    });
    await signIn('credentials',{email:user.email,password:plainPassword});
    return {success:true,message:'New User created'}
    } catch (error) {
        if(isRedirectError(error))
            throw error;
        return {success:false,message:formatError(error)}
    } 
}
