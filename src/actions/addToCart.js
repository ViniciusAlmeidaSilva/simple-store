import {ADD_TO_CART} from '../utils/const';

export const addToCart = (book) => ({type: ADD_TO_CART, payload: book})
