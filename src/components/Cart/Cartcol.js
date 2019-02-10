import React, { Component } from 'react';

class Cartcol extends Component {
    render() {
        return (
            <div className='row '>                
                <div className="col-lg-2 d-none d-lg-block ">Produt</div>
                <div className="col-lg-2 d-none d-lg-block">Product Name</div>
                <div className="col-lg-2 d-none d-lg-block">Price</div>
                <div className="col-lg-2 d-none d-lg-block">Quantity</div>
                <div className="col-lg-2 d-none d-lg-block">Remove</div>
                <div className="col-lg-2 d-none d-lg-block">Total</div>
            </div>
        );
    }
}

export default Cartcol;