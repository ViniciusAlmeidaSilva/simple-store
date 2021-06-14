import {removeFromCart} from '../removeFromCart';
import {REMOVE_FROM_CART} from '../../utils/const';;

describe('actions', () => {
  it('should create an action to remove a item from cart', () => {
    const payload = {
      id: 1,
      name: 'foo',
      img: 'src/image'
    }
    const expectedAction = {
      type: REMOVE_FROM_CART,
      payload
    }
    expect(removeFromCart(payload)).toEqual(expectedAction)
  })
})
