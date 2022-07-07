import { combineReducers } from 'redux';

import {
  RECEIVE_PRODUCT,
  CHANGE_INSTOCK,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './actions';

let counter =0;
export function reciveProduct(state=[],action){
    switch(action.type){
        case RECEIVE_PRODUCT:
            return{
                   items: action.items
                }
            
        
        case CHANGE_INSTOCK: // all of this  is very broken, but now it works i guess
          if(counter === 0){
            counter++; 
            return state.items.map((product) =>{
                        if(product.id === action.id){
                          return {
                            ...product,
                            inStock: product.inStock - action.value
                          }
                        }
                        else return product;
                      }
              );        
          }

          return state.map((product) =>{
            if(product.id === action.id){

              return {
                ...product,
                inStock: product.inStock - action.value
              }
            }
            else return product;
          }
  );        
  
        default:
            return state;
    }
}

export function cartReducer(state=[],action){

  switch(action.type){

    case ADD_TO_CART:
      
      let flag;
      state.map(item => {  // this lets us know if the item is already in the cart or not.
        if(item && item.id === action.item.id) 
          flag=true 
          else  flag=false
      });

      if(!flag){ // if its not in the cart then we add it to the cart
        return [...state, {...action.item, inStock: action.value}];
      }
      else if(flag){
        return state.map(item => {
          if(item.id === action.item.id){
            console.log("Current item",item);
            return {...item, inStock: item.inStock + action.value}}
          else return item;
        });
      }
      break;
      case REMOVE_FROM_CART:
        
        return state.filter(item => item.inStock !== 0) // returns a state with only items that have more than 1 in stock (cart)

    default:
      return state;




  }
}


const rootReducer = combineReducers({
  items: reciveProduct,
  cart: cartReducer
});
export default rootReducer;


// import { combineReducers } from 'redux';

// import{RECEIVE_PRODUCT} from './actions'



// export function reciveProduct(state=[],action){

//     switch(action.type){

//         case RECEIVE_PRODUCT:
//             return[
//                 {
//                     id:action.id,
//                     name:action.name,
//                     price:action.price,
//                     inStock:action.inStock,
//                     photoUrl:action.photoUrl
//                 },
//                 ...state
//             ]


//         default:
//             return state;
//     }




// }

// const rootReducer = combineReducers({item:reciveProduct});
// export default rootReducer;



// state[0]?.items.map((product) =>
//           product.id === action.id
//             ? {
//                 ...product,
//                 inStock: product.inStock - action.value,
//               }
//             : product
//         );