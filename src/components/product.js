/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {changeInstockValue, addToCart } from  '../redux/actions';

function Product(item) {

  const style = css`
    
  `;

const card = css`
@import url('https://fonts.googleapis.com/css2?family=Emilys+Candy&display=swap');
font-family: 'Emilys Candy', cursive;
font-size: 15px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
margin: 10px;
padding:20px;
width: 15%;

border-radius: 5px;
&:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

  const img = css`
    display:block;

    object-fit: cover;
    margin-top: 10px;
    overflow: contain;
    max-width: 100%;
    max-height: 100%;
  `;

  const inputContainer = css`
  display:flex;
  justify-content: center;
  `;
  const input = css`
    margin: 5px;
    width:20%;
    height:19px;

  `

  const btn = css`
    width:25%;
    margin-bottom:15px;
  `;

  const [ text, setText ] = useState("");
  const dispatch = useDispatch();
  return (
    <div css={card}>
        <h1>{item.name}</h1>
        <h2>Price: ${item.price}</h2>
        <h3>in stock: {item.inStock} </h3>
        <img  css={img} src={item.photoUrl} alt={item.name}/>
        <form css={inputContainer} onSubmit={(e) => {
            e.preventDefault();
            dispatch(changeInstockValue(item.id,text));
            dispatch(addToCart(item,parseInt(text)));

            //setText("");
        }}>
          <input css={input} type="number" min="0" max={item.inStock} onChange={(e) => setText(e.target.value)}></input>
          {
            item.inStock !== 0 ? ( 
          <button type="submit" css={btn}>Add to cart</button> ) : <button disabled={true} css={btn}>out of stock</button>
          }
        </form>

        
        
    </div>
  );
}

export default Product;