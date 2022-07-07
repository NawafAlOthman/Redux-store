/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

import {React, useState} from 'react';
import { useSelector } from 'react-redux';

import AddProduct from './components/AddProduct';
import ProductList from './components/productsList';
import CartList from './components/cartList';
import {getNumCartItems} from './redux/selectors'







function App() {
const [toggle, setToggle] = useState(false);
  const handleClick = (reason) => {
    setToggle(!toggle);
    console.log("clicked");
  };

  const loading = AddProduct();
  const numCartItems = useSelector(getNumCartItems);

  const btnStyle = css`
    width:5%;
    

  `;


  
  let cart ='';
  if(toggle ){
    cart = <CartList/>;
  }
  else {
    cart ='';
  }

  const background = css`
    background-image: url('https://media.istockphoto.com/vectors/candy-shop-simple-vector-web-banner-border-background-poster-single-vector-id1279768284?k=20&m=1279768284&s=170667a&w=0&h=X9Q76f3ChRXQbPX82QWEKpI8mGkehPxjGg14zAIslew=');

    height: 300px ;
  
  `;  
  const title = css`
  @import url('https://fonts.googleapis.com/css2?family=Shizuru&display=swap');
  font-family: 'Shizuru', cursive;
  font-size: 50px;
  color: white;
  text-align: center;
  text-shadow: 0 0 5px #ffb3ff, 0 0 10px #ffb3ff, 0 0 15px #ffb3ff, 0 0 20px #ffb3ff, 0 0 25px pink, 0 0 30px pink, 0 0 35px pink;
  text-align: center;
  `  

  return (
    <div >
      <div css={background}> <h1 css={title}>Nawaf's Candy Store</h1> </div>
   
    <button css={btnStyle} onClick={handleClick}>
    🛒 : {numCartItems}
    </button> <span></span>
    {cart}
      <>
      {loading? <h3>Loading ...</h3> : <ProductList/>}
      </>
     

    </div>
  );
}

export default App;


// import React from 'react';

// function App() {
//   return (
//     <h1>Penny Candy Store</h1>
//   );
// }

// export default App;



// import useProducts from './hooks/useProducts';


// function App() {

//   //const activeTodoCount = useSelector(getActiveTodoCount);
//   const [products,loading] = useProducts();
//   console.log(products);
//   return (
//     <div>
//       {loading ? (<h1>Loading ...</h1>) : <div>{products.map(product => <div key= {product.id}> {product.name} </div>)} </div>}
//     </div>
//   );
// }

// export default App;

