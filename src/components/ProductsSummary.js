import { ProductsSummaryCard } from "./ProductsSummaryCard"


export const ProductsSummary = ({cartProducts}) => {

    return (
        <div className="flex flex-col">
            { cartProducts && cartProducts?.map((product, index) => {
                return (
                    <ProductsSummaryCard product={product} key={index} />
                )
            })}
        </div>
    )
}