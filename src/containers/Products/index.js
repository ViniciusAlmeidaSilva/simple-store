import React, {useEffect, useState} from 'react';
import api from '../../boot/client';
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import Product from '../../components/Product';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await api('api/v1/product');
      setData(result.data)
      if(data.length) {
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      setErrorMessage('Ocorreu um problema, por favor tentar novamente mais tarde.')
    }
  }

  if(!data.length && loading) return <Container><Row style={{textAlign: 'center'}}><Col><Spinner animation="border" /></Col></Row></Container>
  if(errorMessage) return <Container>{errorMessage}</Container>
  return (
    <Container className="product-container">
      <Row className="justify-content-md-center">
        {data.map((item, i) =>  <Product key={i} product={item} />)}
      </Row>
    </Container>
  );
}

export default Products
