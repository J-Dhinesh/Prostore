import { cn } from "@/lib/utils";
const ProductPrice = ({value,className}:{value:number; className?:string;}) => {
    const stringVal=value.toFixed(2);
    const [intVal,floatVal]=stringVal.split('.');
    return <p className={cn('text-2xl',className)}>
        <span className="text-xs align-super">$</span>
        {intVal}
        <span className="text-xs align-super">{floatVal}</span>
    </p>;
}
 
export default ProductPrice;