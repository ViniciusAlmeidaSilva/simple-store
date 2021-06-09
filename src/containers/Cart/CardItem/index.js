import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../actions/addToCart';
import {removeFromCart} from '../../../actions/removeFromCart';
import './styles.css';

const CartItem = (item) => {
  const dispatch = useDispatch();

  const price = item.price * item.qtd
  return (
    <React.Fragment>
      <Row lg={12} md={12} style={{textAlign: 'center'}}>
        <Col>
          <img className='img-cart' src={item.image} />
        </Col>
        <Col>
          <span className='item-name'>{item.name}</span>
        </Col>
        <Col>
          <span className="button-card minus" onClick={() => dispatch(removeFromCart(item))}>-</span>
          {item.qtd}
          <span className="button-card plus" onClick={() => dispatch(addToCart(item))}>+</span>
        </Col>
        <Col><span style={{fontWeight: 'lighter'}}>R$ {price.toFixed(2)}</span></Col>
      </Row>
      <hr/>
    </React.Fragment>
  );
}

export default CartItem
