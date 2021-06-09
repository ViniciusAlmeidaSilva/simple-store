import React from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../actions/addToCart';
import './Product.css';

const Product = ({product}) => {
  const dispatch = useDispatch();

  return (
    <Row sm={12} style={{textAlign: 'center', padding: 5}}>
      <Col style={{marginTop: 20}}>
        <Card style={{ width: '18rem' }} className='card-container'>
          <Card.Img className='card-image' src={`${product.image}`} />
          <Card.Body>
            <Card.Title className='card-title'>R$ {product.price}</Card.Title>
            <Card.Text className='card-text'>
              {`${product.name}`}
            </Card.Text>
            <div className='bottom-card'>
              <Button className='btn-adc-cart' onClick={() => dispatch(addToCart(product))}>Adicionar no carrinho</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Product
