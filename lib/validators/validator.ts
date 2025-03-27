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