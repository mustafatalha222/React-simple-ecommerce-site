import React from 'react';
import Cartitem from './Cartitem';

const Cartlist = ({value}) => {
    const {cart}=value;
    return (
        <div>
            {cart.map(item=>{
            return <Cartitem key={item.id} item={item} value={value}/>
            }
            )

            }
        </div>
    );
};

export default Cartlist;