const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
(
"sk_test_51PUOLcHIh9hCVSSEswD1gAIL24g9SOOMwybMts2GA6lsKIsZZx8pp9ERXWPErfEsTZohUyg1bknJf1umPOjPRVfN00qx1jR37H"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for this amount >>> ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });

    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    response.status(500).send({
      error: "Payment intent creation failed",
    });
  }
});

// Listen command
exports.api = functions.https.onRequest(app);
