import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Consumerp} from '../context'

class Product extends Component {
    
    render() {
        const {id,title,image,price,inCart}=this.props.product;
        return (
         <div className='div1  card col-lg-3 mx-3 my-3 col-md-5 col-sm-10'>
            <Consumerp>
                {value=>(
                    <div className=""
                    onClick={()=> value.handledetail(id)} >
            <Link to='/detail'> <img src={image} className='img-container p-3' width="60%" alt='images' />
            </Link>
        <button onClick={()=>{value.addtocart(id); value.openmodalf(id)} } className="cart-btn btn-primary" disabled={inCart? true:false}>
        {inCart?(<p className='text-capitalize'>in cart</p>):(<i className="fas fa-cart-plus"></i>)}</button>   
        </div>
                )}
            </Consumerp>
            
{/*footer*/}
<div className="card-footer d-flex justify-content-between">
<p className="mb-0">{title}</p>
<h5 className='font-italic mb-0'><span className='mr-1'>${price}</span></h5>
</div>
</div>
        );
    }
}
export default Product;