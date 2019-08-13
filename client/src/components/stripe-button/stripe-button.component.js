import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearCart }) => {
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
        Swal.fire({
          type: 'success',
          title: 'Success!',
          text: 'Payment handled successfully, thank you for choosing us!'
        });
        clearCart();
      })
      .catch(error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong with the payment!'
        });
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(
  null,
  mapDispatchToProps
)(StripeCheckoutButton);
