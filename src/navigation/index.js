import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Cart from "../pages/Cart";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Signup from "../pages/Signup";
import Payment from "../pages/Payment";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from "../components/Footer";

export const Navigation = () => {
    const productsInCart = useSelector(cartProducts);

    return(
        <BrowserRouter>
            <Header cartCount = {productsInCart ? productsInCart.length : 0}></Header>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/payment" element={<Payment/>}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}