
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const CHANGE_INSTOCK = 'CHANGE_INSTOCK';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'



export function receiveProduct(items){
    return{ 
        type: RECEIVE_PRODUCT,
        items: items
    }
}

export function changeInstockValue(id,value){

    return{
        type: CHANGE_INSTOCK,
        id:id,
        value:value
    }
}

export function addToCart(item,value){

    return{
        type: ADD_TO_CART,
        item:item,
        value:value
    }
}

export function removeFromCart(id){

    return{
        type: REMOVE_FROM_CART,
        id:id
    }
}


//  onClick={() => dispatch(toggleTodo(id))}