import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import Product from '../../components/Product'

const Cart = () => {
  let productsCart = useSelector((state) => state.cartReducer)

  const orderCards = productsCart.reduce((acc, item) => {
    (acc[item.id] = acc[item.id] || []).push(item);
    return acc;
  }, {})

  console.log('orderCards ', orderCards)
  return (
    <Container>
      <Row className="justify-content-md-center">
        {productsCart.map((item, i) =>  <Product key={i} product={item} cart />)}
      </Row>
    </Container>
  );
}

export default Cart
