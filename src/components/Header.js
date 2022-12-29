import foody from "../assets/images/foody.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useState, useEffect } from "react";

export const Header = ({cartCount}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate('/');
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            token ? setIsLoggedIn(true) : setIsLoggedIn(false);
        }
        
        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, [])
    
    return (
        <nav id="header" className="bg-black text-white">
            <div className="container w-full mx-atuo flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to ="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={foody} alt="logo" className="w-40 h-40 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to = "/" className="text-xl">Home</Link>
                    <Link to = "#about" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to = "/Cart" className="mr-4 relative">
                        <img src={cartIcon} alt = "cart"/>
                        {
                            cartCount ? 
                                <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">
                                    {cartCount}
                                </div> : 
                            null
                        }
                    </Link>
                    {
                        isLoggedIn ? 
                        <Button onClick = {handleLogout}>Logout</Button> : 
                        (
                            <>
                                <Link to = "/Login">Login</Link>
                                <Link to = "/Signup">Sign Up</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
