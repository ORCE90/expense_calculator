import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Expenses from './components/Expenses/Expenses';
import Products from './components/Products/Products';
import NewProduct from './components/NewProduct/NewProduct';
import Table from './components/Table/Table';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path="/products" render={() => <Products header={Header} table={Table} />} />
          <Route exact path="/expenses" render={() => <Expenses header={Header} table={Table} />} />
          <Route exact path="/new-product" render={() => <NewProduct header={Header} />} />
        </Switch>
      </Router>
    )
  }
}

export default App;
