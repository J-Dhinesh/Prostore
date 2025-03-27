import ProductCard from "./product-card";
import { Product } from "@/types";

const ProductList = ({data,title,limit}:{data:Product[] ; title:string; limit:number}) => {
    const limitedData=limit ? data.slice(0,limit) : data;
    return <div className="px-10 my-10">
        <h2 className="font-bold text-2xl lg:text-3xl mb-4">{title}</h2>
        
        {limitedData.length>0 ?( 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {limitedData.map((product:Product)=>
            (
                <ProductCard product={product} key={product.slug}/>
            ))} 
            </div>
        ):(
            <div>
                <p>Product not found</p>
            </div>
        )}
    </div>;
}
 
export default ProductList;