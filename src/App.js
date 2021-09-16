import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Nav from './components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [{name: 'phone', price: '$5'}, {name: 'house', price: '$20,000'}],
    };
  }



  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/products" render={(props) => <Products {...props} products={this.state.products}/> } />
        </Switch>
      </div>
    );
  }
}

export default App;
