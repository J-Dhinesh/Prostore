import { z } from "zod";
import { formatDecimalNumbers } from "../utils";


const currency=z.string().refine((value)=>/^\d+(\.\d{2})?$/.test(formatDecimalNumbers(Number(value))),'Price must have exactly two decimal Places')

export const insertProductValidate=z.object({
    name:z.string().min(3,'Name should be atleast length 3'),
    slug:z.string().min(3,'Slug should be atleast length 3'),
    category:z.string().min(3,'Category should be atleast length 3'),
    description:z.string().min(3,'Description should be atleast length 3'),
    images : z.array(z.string()).min(1,'Atleast one image should be there'),
    price : currency,
    brand : z.string().min(3,'Brand should contains atleast 3 characters'),
    stock : z.coerce.number(),
    isFeatured:z.boolean(),
    banner : z.string().nullable()
})

// Schema for User Model

export const userDetailsValidate=z.object({
    email : z.string().email('Invalid Email Address'),
    password : z.string().min(6,"Password must be greater than 6 characters")
});

// Scheme for Sign up User

export const signUpValidate=z.object({
    name:z.string().min(3,'Name must be atleast 3 characters'),
    email:z.string().email('Enter a valid Email'),
    password:z.string().min(5,'Password must be atleast 5 Characters'),
    confirmPassword:z.string().min(5,'Confirm Password must be atleast 5 Characters'),
}).refine((data)=> data.password===data.confirmPassword,{
    message:"Password doesn't match",
    path:['confirmPassword']
});