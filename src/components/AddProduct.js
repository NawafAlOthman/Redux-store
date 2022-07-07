import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import {receiveProduct } from  '../redux/actions';
import useProducts from '../hooks/useProducts';



function AddProduct() {
  const [ text, setText ] = useState("");
  const dispatch = useDispatch();
  const [products,loading] = useProducts();

  useEffect(() => {
    if(!loading && products.length >= 1){ // very hacky solution but it works so ... 
    dispatch(receiveProduct(products));
    }
  }, [loading]); // Only re-run the effect if count changes
  return (loading);
}

export default AddProduct;