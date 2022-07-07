
export function getProducts(state) {
  //console.log("get prod state", state.items);
  return state.items
}

export function getCart(state){
  return state.cart
}

export function getNumCartItems(state){
  
  return state.cart.length
}
