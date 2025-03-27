import { getProductDetails } from "@/lib/actions/products.actions";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImage from "@/components/shared/product/product-image";

const ProductDetails = async (props:{
    params:Promise<{slug:string}>
}) => {
    const {slug}=await props.params;
    const product=await getProductDetails(slug);
    if(!product) notFound();
    return <div className="grid grid-cols-1 md:grid-cols-5 p-5">
        <div className="col-span-2">
            <ProductImage images={product.images}/>
        </div>
        <div className="col-span-2 p-2">
            <div>
                <p>{product.brand} {product.category}</p>
                <h1 className="font-bold text-xl py-4">{product.name}</h1>
                <p className="py-4">
                    {product.rating} of {product.numReviews}
                </p>
                <div>
                    <Badge className="px-4 py-2 rounded-full bg-green-100 text-green-700">
                        <ProductPrice value={Number(product.price)}/>
                    </Badge>
                </div>
            </div>
            <div className="mt-5">
                {/* Description */}
                <p className="font-medium">Description</p>
                <p>{product.description}</p>
            </div>
        </div>
        <div>
            <Card className="p-4">
                <div className="flex justify-between">
                    <h3>Price</h3>
                    <ProductPrice value={Number(product.price)}/>
                </div>
                <div className="flex justify-between">
                    <h3>Status</h3>
                    {product.stock>0 ? (
                        <Badge variant={"outline"}>
                            {product.stock} items left
                        </Badge>
                    ):(
                        <Badge variant={"destructive"}>
                            Out of stock
                        </Badge>
                    )}
                </div>
                {product.stock>0 && <Button className="bg-black text-white font-bold">
                    Add to Cart
                </Button>}
            </Card>
        </div>
    </div>;
}
 
export default ProductDetails;