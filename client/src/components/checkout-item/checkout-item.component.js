import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  DetailLabel,
  QuantityContainer,
  ArrowLabel,
  ValueLabel,
  RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>

      <DetailLabel>{name}</DetailLabel>
      <QuantityContainer>
        <ArrowLabel onClick={() => removeItem(cartItem)}>&#10094;</ArrowLabel>
        <ValueLabel>{quantity}</ValueLabel>
        <ArrowLabel onClick={() => addItem(cartItem)}>&#10095;</ArrowLabel>
      </QuantityContainer>
      <DetailLabel>{price}</DetailLabel>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
