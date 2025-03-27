'use client'
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProductImage = ({images}:{images:string[]}) => {
    console.log(images);
    const [current,setCurrent]=useState(0);
    return <div className="px-20">
        <Image src={images[current]} alt="product image" width={400} height={400} className="min-h-[300] object-contain object-center"/>
        <div className="flex mt-3 justify-center">
            {images.map((image,index)=>(
                <div key={index} onClick={()=>setCurrent(index)} 
                    className={
                        cn('border mr-4 hover:border-orange-600',current===index && 'border-orange-500')
                    }
                >
                    <Image src={image} alt="product image" width={100} height={100}/>
                </div>
            ))}
        </div>
    </div>;
}
 
export default ProductImage;