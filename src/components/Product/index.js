import React from 'react';
import { Button, Card, ListGroup, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../actions/addToCart';
import {removeFromCart} from '../../actions/removeFromCart';

const Product = ({product, cart}) => {
  const dispatch = useDispatch();

  return (
    <Col style={{marginTop: 20}}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${product.image}`} />
        <Card.Body>
          <Card.Title>{`${product.name}`}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
        </Card.Body>
        {
          cart ?
          <Card.Body style={{textAlign: 'center'}}>
            <Button variant="urgent" onClick={() => dispatch(removeFromCart(product))}>Remover</Button>
          </Card.Body>
          :
          <Card.Body style={{textAlign: 'center'}}>
            <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Adicionar no carrinho</Button>
          </Card.Body>
        }
      </Card>
    </Col>
  );
}

export default Product
