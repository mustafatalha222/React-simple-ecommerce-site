import React, { Component } from 'react';
import {Consumerp} from '../context';
import {Link} from 'react-router-dom'

class Details extends Component {
    render() {
        return (
            <div>
                <Consumerp>
                    {value=>{
                    const {id,title,company,info,image,price,inCart}=value.detailproduct
              return(
                  
                  <div className='card my-3'>
                      <h3 className="title my-5 text-center">{title}</h3>
                       <div className='row'> <img className='col-lg-5 col-md-5 col-sm-10' src={image} alt={image}/>
                       <div className="col-lg-5 col-md-5 col-sm-10">
                      <h3>Made by: {company}</h3>
                       <h3 >Price: ${price}</h3>
                       <p className='text-muted'>{info}</p>
                       <Link to='/'><button className='btn btn-success col-lg-3  col-md-4 col-sm-4'>Back</button></Link>
                        <button disabled={inCart?true:false} className='btn btn-primary ml-3 col-lg-3  col-md-4 col-sm-4' onClick={()=>value.addtocart(id)}>{inCart? 'InCart': 'Add to Cart'}</button>
                       
                       </div>
                       </div>
                                     
                  </div>
              )
              }}
                </Consumerp>
            </div>
        );
    }
}

export default Details;