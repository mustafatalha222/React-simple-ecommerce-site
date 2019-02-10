import React, { Component } from 'react';
import {Consumerp} from '../context';
import {Link} from 'react-router-dom'
class Modal extends Component {
    render() {
        return (
            <div>
                <Consumerp>
                    {(value)=>{
                        const {openmodal,closemodal}=value;
                        const {title,image,price}=value.modalproduct;
                        if(!openmodal){
                            return null;
                        }
                        else{
                            return(
                                <div className='container modal1'>
                                   <div className="p-5 mrow">
                                   <h5>{title}</h5>
                                   <img src={image} alt={image}/>
                                   <h5>Price: ${price}</h5>
                                   <Link to='/'><button onClick={()=>closemodal()}  className='btn btn-primary'>Continue Shopping</button></Link>
                                   <Link to='/cart'><button onClick={()=>closemodal()} className='ml-3 btn btn-info'>Go to Cart</button></Link>
                                   </div>
                                </div>
                            )
                        }
                    }}
                </Consumerp>
            </div>
        );
    }
}

export default Modal;