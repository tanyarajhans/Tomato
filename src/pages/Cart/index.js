<<<<<<< HEAD
import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
// import { selectAllProducts } from "../../stores/menu/productsSlice";
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from "../../hooks/useTabSwitch";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg"

export const Cart = () => {
    const cart = useSelector(cartProducts);
    const tabs = ['Summary', 'Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary')
    console.log(cart);
    if(!cart || cart.length === 0)
    {
        return (
            <div className="bg-white h-full text-black flex items justify-center p-4">
                <h1>Your Cart is Empty</h1>
            </div>
        )
    }

    return(
        <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list = {tabs} onTabSwitch = {handleTabSwitch} activeTab = {currentTab} />
=======
import { useDispatch, useSelector } from "react-redux";
import useTabSwitch from "../../hooks/useTabSwitch";
import { Tabs } from "../../components/Tabs";
import { cartProducts } from "../../stores/cart/cartSlice";
import { AddressForm } from "../../components/AddressForm";

const Cart = () => {
    const cart = useSelector(cartProducts);
    const tabs = ['Summary', 'Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch('Summary', tabs);

    if(!cart || cart.length === 0){
        return(
            <div className="bg-white h-full text-black flex items-center justify-center p-4">
                <h1>Your cart is empty</h1>
            </div>
        )
    }
    return(
        <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}></Tabs>
            <div className={`tabs ${currentTab !=='Summary' ? 'hidden' : ''}`}>
                Summary
            </div>
            <div className={`tabs ${currentTab !=='Delivery' ? 'hidden' : ''}`}>
                <AddressForm></AddressForm>
            </div>
            <div className={`tabs ${currentTab !=='Payment' ? 'hidden' : ''}`}>
                Payment Form
            </div>
>>>>>>> main
        </div>
    )
}

export default Cart;