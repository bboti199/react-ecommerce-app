import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameLabel,
  PriceLabel,
  CustomButtonContainer
} from './collection-item.style';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />

      <CollectionFooterContainer>
        <NameLabel>{name}</NameLabel>
        <PriceLabel>${price}</PriceLabel>
      </CollectionFooterContainer>
      <CustomButtonContainer
        inverted
        onClick={() => {
          addItem(item);
          toast.info('✓ Item added to cart!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true
          });
        }}
      >
        ADD TO CART
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
