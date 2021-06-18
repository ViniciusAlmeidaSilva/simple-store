import React from 'react';
import { shallow } from 'enzyme'
import { should }  from 'chai';
import CartSaving from '../index';


describe('<CartSaving />', () => {
  describe(('When cart is empty'), () => {

    it('return null when there is no one in cart', () => {
      let wrapper = shallow(<CartSaving />);
      expect(wrapper.contains('span')).toBe(false);
    });

  })
  describe(('When cart is not empty'), () => {

    it('return number of product when there is products in the cart', () => {
      let wrapper = shallow(<CartSaving quatityOfProducts={10} />);
      should(wrapper.find('span')).to.have.lengthOf(1);
    });

    it('when clicked in cart icon', () => {
      const location = window.location;
      delete window.location;
      window.location = {
          ...location,
          reload: jest.fn()
      };
  
  
      const myMock = jest.fn();
  
  
      window.location.reload = jest.fn();
  
  
      const props = {
        history: {
          push: myMock
        }
      }
      
      let wrapper = shallow(<CartSaving quatityOfProducts={10} {...props}  />);
      wrapper.find('span').simulate('click');
      expect(myMock).toHaveBeenCalledTimes(1);
      expect(window.location.reload).toHaveBeenCalledTimes(1);
      jest.restoreAllMocks();
      window.location = location;
    });
  })





});
