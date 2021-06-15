import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Produtcs from '../../containers/Products';
import Cart from '../../containers/Cart';
import { Nav, Container } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import './Header.css';
import img from '../../images/background.jpeg'

export default function Header(props) {
  let location = useLocation();
  let cart = useSelector((state) => state.cartReducer);
  const quatityOfProducts = cart.reduce((sum, item) => sum += item.qtd, 0)
  console.log('quatityOfProducts ', quatityOfProducts)
  return (
    <Router>
      <Container justify-center>
        <img className='img-header' src={img} alt="header" />
      </Container>
      <Container xs={2} md={4} lg={6}>
        <Nav variant="pills" defaultActiveKey={`${location.pathname}`}>
          <Nav.Item>
            <Nav.Link href="/products">Produtos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cart">Carrinho</Nav.Link>
          </Nav.Item>
          {quatityOfProducts ? <span className="number-itens" onClick={() => {props.history.push('/cart'); window.location.reload();}}>{quatityOfProducts}</span> : null}
        </Nav>
      </Container>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={Produtcs} />
        <Route path="/" component={Produtcs} />
      </Switch>
    </Router>
  );
}
