import ProductList from "@/components/shared/product/product-list";
import {getProductFromDb} from '@/lib/actions/products.actions'
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
const Home = async () => {
  const data=await getProductFromDb();
  return <>
    <ProductList data={data} title='Newest Arrivals' limit={LATEST_PRODUCTS_LIMIT}/>
    </>;
}
 
export default Home;