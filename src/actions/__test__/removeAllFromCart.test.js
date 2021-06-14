import {removeAllFromCart} from '../removeAllFromCart';
import {REMOVE_ALL_FROM_CART} from '../../utils/const';;

describe('actions', () => {
  it('should create an action to remove all products from from cart', () => {
    const expectedAction = {
      type: REMOVE_ALL_FROM_CART,
    }
    expect(removeAllFromCart()).toEqual(expectedAction)
  })
})
