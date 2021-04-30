const functions = require("firebase-functions");

const express =require("express");
const cors=require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe =require("stripe")('sk_test_51IObMJAnormyMswLM7rEg4np44Kc5Krubs3A1vM5Q0XBKJLmHmiNHzc1og7l4LlPfHneNPnXPXXXT6ePsnf6mDSM00aVqZjeLF')
 
const app=express();
app.use(cors({origin: true}));
app.use(express.json());

app.get('/',(request,response)=>response.status(200).send('hello world'))
app.post('/payments/create', async(request,response)=>{
    const total = request.query.total;
    console.log('payments request recieved,amount is ',total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api =functions.https.onRequest(app);
//http://localhost:5001/challenge-e5a7d/us-central1/api