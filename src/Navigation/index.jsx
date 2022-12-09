import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";
import { Payment } from "../pages/Payment";
import { Signup } from "../pages/Signup";

const Navigation = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/Cart" element={<Cart/>}/>
                <Route path = "/Login" element={<Login/>}/>
                <Route path = "/Menu" element={<Menu/>}/>
                <Route path = "/Payment" element={<Payment/>}/>
                <Route path = "/Signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;