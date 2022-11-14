import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button from "../button/button.component";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

import { useState } from "react";

import { useSelector } from "react-redux";

const PaymentForm = () => {

    const stripe = useStripe();

    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({amount: 10000}),
        }).then((res) => res.json());

        console.log(response);

        const {
            paymentIntent: {client_secret},
        } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Guest'
                },
            },
        });

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successfully Processed');
            }
        }
    };


    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2> Credit Card Payment: </h2>
                <CardElement></CardElement>
                <Button buttonType='inverted' onClick={paymentHandler}> Pay now </Button>
            </FormContainer>
        </PaymentFormContainer>
    )

}

export default PaymentForm;