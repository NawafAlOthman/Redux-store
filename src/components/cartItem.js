/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {changeInstockValue, addToCart, removeFromCart } from  '../redux/actions';

function CartItem(item) {



const card = css`
@import url('https://fonts.googleapis.com/css2?family=Emilys+Candy&display=swap');
font-family: 'Emilys Candy', cursive;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
margin: 10px;
padding:20px;
width: 17%;
border-radius: 5px;
&:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`
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
    width:30%;
    margin-bottom:15px;
  `;

  const [ text, setText ] = useState("");
  const dispatch = useDispatch();
  return (
      <> { item.inStock !== 0 ? (
    <div css={card}>
        <h2>{item.name}</h2>
        <h3>total price: ${parseFloat(item.price) * parseFloat(item.inStock) }</h3>
        <h4>in cart: {item.inStock} </h4>
        <form css={inputContainer} onSubmit={(e) => {
            e.preventDefault();
            dispatch(changeInstockValue(item.id,parseInt(-text)));
            dispatch(addToCart(item,parseInt(-text)));
            dispatch(removeFromCart(item.id))
        }}>
          <input css={input} type="number" min="0" max={item.inStock} onChange={(e) => setText(e.target.value)}></input>
          <button type="submit" css={btn}>remove from cart</button>
        </form>
    </div>) : <></> }
    </>
  );
}

export default CartItem;