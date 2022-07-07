/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../redux/selectors';
import CartItem from './cartItem'

function CartList() { // change later
  const products = useSelector(getCart);
  const contianer = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px;
    width: 60%;
  `;
  // console.log("PROD LIST", products);
  return (
    <div>
      <div css={contianer}>
        {
          products?.map((item) => <CartItem key={item.id} {...item} />)}
        
      </div>
    </div>

  )
}

export default CartList;