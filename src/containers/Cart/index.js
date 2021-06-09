import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import Product from '../../components/Product'
import img from '../../images/empty-cart.png'
import CartItem from './CardItem'
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  let productsCart = useSelector((state) => state.cartReducer)
  const sumOfProducts = productsCart.reduce((sum, item) => sum += item.qtd * Number(item.price), 0)

  return (
    <Container style={{marginBottom: 100}}>
      {!productsCart.length ?
        <Container style={{textAlign: 'center'}}>
          <Row>
            <Col>
              <span>Seu carrinho está vazio!</span>
            </Col>
          </Row>
          <img className='img-cart' src={img} />
        </Container>
        :
        <Container className="container-card">
        {productsCart.map((item, i) => <CartItem key={i} {...item} />)}
          <Col>
            <Row className="justify-content-end"><span style={{fontWeight: 'bolder'}}>Total: R$: {sumOfProducts.toFixed(2)}</span></Row>
            <Row className="justify-content-end"><span className='delete-all' onClick={() =>console.log('aquii')}>Excluir todos os itens</span></Row>
          </Col>
      </Container>
      }
    </Container>
  );
}

export default Cart
