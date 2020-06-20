import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route, Switch } from "react-router-dom";
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products/:id" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
