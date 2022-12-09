import banner from "../assets/images/pizza_banner.png"
import { Link } from "react-router-dom";
import Button from "./elements/Button";


export const Banner = ()=>{
    return(
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-description w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl text-white font-bold">
                    Order your Favorite dishes
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Get Started Today!
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <Link to = "/Menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        see menu
                    </Link>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src = {banner} alt = "banner" className="max-h-95"/>
            </div>
        </div>
    )
}