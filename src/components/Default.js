import React, { Component } from 'react';
import{Link} from 'react-router-dom'
class Default extends Component {
    render() {
        return (
            <div>
               <Link to='/'> <div className='text-center text-align-center  mx-auto my-auto btn btn-danger'>page not found at location<b> {this.props.location.pathname}</b></div>
               </Link>  </div>
        );
    }
}

export default Default;