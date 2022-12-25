import { CardElement, useElements, useStripe, Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, cartProducts } from '../stores/cart/cartSlice';
import { getAddress, clearAddress } from '../stores/userInfo/addressSlice' 
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from './elements/Button';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publishable_key=`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`;
const stripePromise = loadStripe(publishable_key);

export const StripeWrapper = () => {
    return (
        <Elements stripe = {stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(cartProducts);
    const address = useSelector(getAddress); 
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(!stripe || !elements || !cart?.length)
        {
            return
        }

        setLoading(true);
        try {
            const {error : backendError, clientSecret} = await fetch('http://localhost:8080/create-payment-intent', {
                method : 'POST', 
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({
                    paymentMethodType : 'card', 
                    orderItems : cart,
                    userId : '',
                    shippingAddress : address
                })
            }).then (response => response.json());

            const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
                clientSecret, {
                    payment_method : {
                        card : elements.getElement(CardElement)
                    }
                }
            )
            if(backendError || stripeError)
            {
                setError(backendError || stripeError);
            }
            else if(paymentIntent.status === 'succeeded'){
                dispatch(clearAddress());
                dispatch(clearCart());
                navigate('/payment');
            }
        } catch(err) {
            console.log(err);
        }

        setLoading(false);
    }

    return (
        <form className="md:2/3 md:mx-auto px-2 pt-1" id = "payment-form" onSubmit={handleSubmit}>
            <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">Please enter your card details</label>
            <div className='mx-4'>
                <CardElement id = "card-element"/>
            </div>
            <div className='flex justify-center p-2'>
                <Button type = "submit" disabled = {loading}>
                    {
                        loading ? 
                        'loading...' :
                        'pay now'
                    }
                </Button>
            </div>
        </form>
    )
}