import React from 'react';

import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles';

const CartITem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span className='name'>{name}</span>
      <span className='price'>
        <strong>{quantity}</strong> x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartITem;
