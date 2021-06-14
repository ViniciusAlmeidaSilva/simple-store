import {addToCart} from '../addToCart';
import {ADD_TO_CART} from '../../utils/const';;

describe('actions', () => {
  it('should create an action to add a item to cart', () => {
    const payload = {
      id: 1,
      name: 'foo',
      img: 'src/image'
    }
    const expectedAction = {
      type: ADD_TO_CART,
      payload
    }
    expect(addToCart(payload)).toEqual(expectedAction)
  })
})
