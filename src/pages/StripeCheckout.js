import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA');

const StripeCheckout = () => (
  <div>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </div>
);

export default StripeCheckout;
