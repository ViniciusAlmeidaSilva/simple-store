import {REMOVE_FROM_CART} from '../utils/const';

export const removeFromCart = (book) => ({type: REMOVE_FROM_CART, payload: book})
