import React, { Component } from 'react';

class Empty extends Component {
    render() {
        return (
            <div className="container" style={{fontSize:'20px',color:'blue', textAlign:'center'}}>
    <div style={{display:'inline-block'}} className="row title" ><h2><strong >Your Cart is Empty</strong></h2></div>
        </div>
        );
    }
}

export default Empty;