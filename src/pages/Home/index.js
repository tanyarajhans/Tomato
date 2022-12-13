import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";

export const Home = () => {
    return(
        <>
            <Banner/>
            <ProductsPreview/>
            <About/>
        </>
    )
}