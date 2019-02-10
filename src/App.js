import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar' ;
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import {Switch,Route} from 'react-router-dom'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <div className="container">
         <React.Fragment>
           <Navbar/>
           <Switch>
             <Route path='/' exact component={ProductList}/>
             <Route  path='/cart' component={Cart}/>
             <Route  path='/detail' component={Details}/>
             <Route component={Default}/>
           </Switch>
           <Modal/>
         </React.Fragment>
      </div>
      
    );
  }
}

export default App;
