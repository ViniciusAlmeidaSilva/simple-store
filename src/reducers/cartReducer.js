import {ADD_TO_CART, REMOVE_FROM_CART} from '../utils/const';
const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
   default:
    return state
  }
}
