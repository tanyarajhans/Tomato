import React, { useState, useEffect } from "react";
import { ProductPreviewCart } from "./ProductPreviewCart";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ProductsPreview = () => {
    const [products, setProducts] = useState({});
    useEffect(() =>{
        fetch("http://localhost:8080/api/products")
        // fetch("https://api.github.com/users/adityaajay29")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProducts(data?.data))
            .catch(err => console.log(err))
    })
    // working setup for carousel
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const onAddProduct = (product) => {
        console.log(product);
    }

    return (
        <div className="container mx-auto pb-4 w-2/3 text-white">
            <Carousel responsive={responsive}>
                {
                    products.length > 0 && products.map((product, index) => {
                        return(
                            <div className="w-full p-3 bg-black">
                                <ProductPreviewCart key = {index} product = {product} onAddProduct = {onAddProduct} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}