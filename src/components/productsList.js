/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../redux/selectors';
import Product from './product'

function ProductList() { // change later
  const products = useSelector(getProducts);
  const contianer = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px;
    width: 90%;
  `;
  // console.log("PROD LIST", products);
  return (
    <div>
      <div css={contianer}>
        {
          products.items? (products.items?.map((item) => <Product key={item.id} {...item} />)) : (products.map((item) => <Product key={item.id} {...item} />))}
        
      </div>
    </div>

  )
}

export default ProductList;