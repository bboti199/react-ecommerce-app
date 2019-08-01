import React from 'react';

import './cart-item.styles.scss';

const CartITem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        <strong>{quantity}</strong> x ${price}
      </span>
    </div>
  </div>
);

export default CartITem;
