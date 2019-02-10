import React from 'react';

const Cartitem = ({value,item}) => {
    const {increment,decrement,remove}=value;
    const {id,image,title,price,total,count}=item;
    return (
            <div className='row text-center my-5'>
                <div className="col-lg-2 col-sm-10 my-2"><img className="img-fluid" src={image} alt={image}/></div>
                <div className="col-lg-2 col-sm-10 my-2"><span className="d-lg-none">Name:</span>{title}</div>
                <div className="col-lg-2 col-sm-10 my-2"><span className="d-lg-none">Price:</span>${price}</div>

                <div className="col-lg-2 col-sm-10 mx-1 my-1"><button className="btn btn-info" onClick={()=>decrement(id)}>-</button>
                <span className="btn btn-green">{count}</span>
                <button className="btn btn-info" onClick={()=>increment(id)}>+</button>
                </div>

                <div className="col-lg-1 col-sm-10 my-2"><i onClick={()=>remove(id)} className='fas fa-trash' ></i></div>
                <div className="col-lg-2 col-sm-10 my-2"><span className="d-lg-none">Item total:</span>${total}</div>
            </div>
       
    );
};

export default Cartitem;