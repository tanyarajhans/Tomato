const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db=require("./db");
const productRouter=require("./routes/productRouter.js");
const userRouter = require("./routes/userRouter");

const Order = require("./models/orderModel");


const app=express();

const env = require("dotenv");
env.config({path : "../.env"});

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

app.use(
    // verification of webhook signature
    express.json({
        verify : function(req, res, buf){
            if (req.originalUrl.startsWith('/webhook')) {
                req.rawBody = buf.toString();
            }
        },
    })
);

// source : https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local

app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
    let signature = req.headers['stripe-signature'];
  
    let event;
  
    try {
        event = stripe.webhooks.constructEvent(
            req.body, 
            signature, 
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } 
    catch (err) {
      console.log(`Webhook signature verification failed`);
      return res.sendStatus(400);
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        console.log(`payment captured!`);
        break;
      // ... handle other event types
      case 'payment_intent.payment_failed':
        console.log(`payment failed.`);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    res.sendStatus(200);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/', productRouter);
app.use('/api/', userRouter);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', function (req, res) {
    res.json({msg: 'Server set up successfully!'})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const calculateOrderAmount = (orderItems) => {
    const initialValue = 0;
    const itemsPrice = orderItems.reduce(
        (prevValue, currValue) => 
        prevValue + currValue.price * currValue.amount, initialValue
    );
    return itemsPrice * 100
}

app.post('/create-payment-intent', async(req, res) => {
    try {
        const { orderItems, shippingAddress, userId } = req.body;

        const totalPrice = calculateOrderAmount(orderItems);

        const taxPrice = 0;
        const shippingPrice = 0;

        const order = new Order({
            orderItems, 
            shippingAddress, 
            paymentMethod : 'stripe',
            totalPrice, 
            taxPrice,
            shippingPrice, 
            user : ''
        })

        // await order.save();

        const paymentIntent = await stripe.paymentIntents.create({
            amount : totalPrice, 
            currency : 'inr'
        })

        // TODO : create order

        res.send({
            clientSecret : paymentIntent.client_secret
        })
    }
    catch(err) {
        res.status(400).json({
            error : {
                message : err.message
            }
        })
    }
})