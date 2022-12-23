import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { ProductSummaryCard } from "./ProductSummaryCard";

export const ProductsSummary = () => {
    const cart = useSelector(cartProducts);
    return (
        <div>
            {cart && cart.map((product, index) => {
                return (
                    <ProductSummaryCard product={product} key={index}/>
                )
            })}
        </div>
    )
}