import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART} from '../utils/const';
const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:     

      //find if a product already inside a cart
      let productInTheCart = state.find(item => action.payload.id === item.id);

      //if a product inside a cart
      if(productInTheCart) {

        //increment a quantity
        const updateProduct = {...productInTheCart, qtd: productInTheCart.qtd += 1}

        //keep the same state
        const newState = state.filter((item) => item.id !== action.payload.id)

        //return the state with new product updated
        return [...newState, updateProduct];
      } else {
        // if it is first product in the cart will add key qtd = 1
        return [...state, {...action.payload, qtd: 1}]
      }

    case REMOVE_FROM_CART:
      // find object for remove
      let product = state.find(item => action.payload.id === item.id);
      
      // verify if there's more than one product
      if(product.qtd > 1) {

        //update product
        product.qtd = product.qtd -=1;
        
        //remove old state for product
        const newState = state.filter((item) => item.id !== action.payload.id)

        //add a product with correct quantity
        return [...newState, {...product }]
      }

      // if there's just one quantity of product it gonna be removed
      const newState = state.filter((item) => item.id !== action.payload.id)
      return [...newState]
    case REMOVE_ALL_FROM_CART:
      return INITIAL_STATE
   default:
    return state
  }
}
