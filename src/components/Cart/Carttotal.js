import React from 'react';
import {Link} from 'react-router-dom'

const Carttotal = ({value}) => {
    const {total,tax,subtotal,clearcart}=value;
    return (
        <div className='row'>
        <div className="text-right ml-sm-auto ml-md-auto mb-3">
            <Link to='/'><button className='btn btn-danger mb-3 b-0 r-0' onClick={()=>clearcart()}>Clear Cart</button>
          </Link> <h3> <span>Subtotal: ${subtotal}</span></h3>
            <h3><span>Tax : ${tax}</span></h3>
            <h3><span>Total : ${total}</span></h3>
            </div>
        </div>
    );
};

export default Carttotal;