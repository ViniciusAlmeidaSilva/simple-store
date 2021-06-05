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

export default function Header() {
  let location = useLocation();
  let cart = useSelector((state) => state.cartReducer)
  console.log('cart ', cart)
  return (
    <Router>
      <Container xs={2} md={4} lg={6}>
        <Nav variant="pills" defaultActiveKey={`${location.pathname}`}>
          <Nav.Item>
            <Nav.Link href="/products">Produtos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cart">Carrinho</Nav.Link>
          </Nav.Item>
          {cart && cart.length ? <span className="number-itens">{cart.length}</span> : null}
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
