import React from 'react';
import { Container } from 'react-bootstrap';
import {useSelector} from 'react-redux';

const Cart = () => {
  let cart = useSelector((state) => state.cartReducer)

  return (
    <Container>
      Carrinho
      {cart && cart.length ? <span className="number-itens">{cart.length}</span> : null}
    </Container>
  );
}

export default Cart
