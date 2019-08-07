import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_w3rl54C2vz3M4gNIOc6Zqgvj000m6ff1JW';

  const onToken = token => {
    const body = {
      amount: priceForStripe,
      token
    };

    axios
      .post('/payment', body)
      .then(response => {
        alert('Payment succesful!');
      })
      .catch(error => {
        console.log(error);
        alert('There was an issue with pamyent!');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
