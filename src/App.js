import React from "react";
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Header} />
      </Switch>
    </Router>
  );
}
