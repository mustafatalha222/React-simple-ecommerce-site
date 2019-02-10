import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark navbar-expand-sm">
            <Link to="/">
           <button className="btn btn-primary"> <i className="fa fa-home" aria-hidden="true"></i></button>
            </Link>
            <ul  className="navbar-nav">
            <li className=" ml-3">
            <Link to='/'><h5>product</h5></Link></li>
             </ul>
             <Link to='/cart' className="ml-auto"><button className="btn btn-primary"><i className="fa fa-shopping-cart" aria-hidden="true">  cart</i></button></Link>
          
            </nav>
        );
    }
}

export default Navbar;