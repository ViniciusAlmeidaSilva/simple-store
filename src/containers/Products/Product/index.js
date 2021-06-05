import React from 'react';
import { Button, Card, ListGroup, Col } from 'react-bootstrap';

const Product = ({product}) => {
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
        <Card.Body style={{textAlign: 'center'}}>
          <Button variant="primary">Adicionar no carrinho</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product
