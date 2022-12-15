import { AddProduct } from "./AddProduct";

export const ProductPreviewCart = ({ product, onAddProduct }) => {

    const addProduct = () => {
        // TODO after redux part
    }

    return (
        <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent center">
            <img src = {product.imageUrl} alt = {product.name}/>
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{product.desciption}</p>
            <AddProduct onAddProduct={addProduct}/>
        </div>
    )
}