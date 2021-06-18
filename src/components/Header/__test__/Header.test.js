import React from 'react';
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import { expect } from 'chai';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from '../Header';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000'
  }),
}));

describe('<Header /> when there is no item in cart', () => {
  let wrapper;

  beforeAll(() => {
    const cartSpy = jest.spyOn(redux, 'useSelector')
    cartSpy.mockReturnValue([])
    wrapper = shallow(<Header />);
  })

  it('render a component inside a Route', () => {
    expect(wrapper.find(Router).length).equal(1);
  });

  it('render a root component path', () => {
    expect(location.pathname).equal('/');
  });

});
