'use server';
import { prisma } from "@/db/prisma";
import { convertToPlain } from "../utils";

// Get Latest Product
export async function getProductFromDb(){
    const data= await prisma.product.findMany(
        {
            take:4,
            orderBy:{createdAt:'desc'}
        }
    )
    return convertToPlain(data);
}

// Get single Product
export async function getProductDetails(slug:string)
{
    return await prisma.product.findFirst(
    {
        where: {slug:slug}
    }
    )
}