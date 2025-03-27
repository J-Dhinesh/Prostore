import {z} from 'zod'
import { insertProductValidate } from '@/lib/validators/validator'
export type Product=z.infer<typeof insertProductValidate> & {
    id:string,
    rating:string,
    createdAt:Date
}