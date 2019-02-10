import React, { Component } from 'react';
import Title from '../Title';
import Empty from './Empty';
import {Consumerp} from '../../context'
import Cartcol from './Cartcol';
import Cartlist from './Cartlist';
import Carttotal from './Carttotal';
class Cart extends Component {
    render() {
        return (
            <div>
<Consumerp>
    {value=> {const {cart}=value;
if(cart.length>0){
   return (
   <div>
   <Title name='My' title='Cart'/>
   <Cartcol/>
   <Cartlist value={value} />
<Carttotal value={value}/>
   </div>
)
}
else{
return <Empty/>
}

}
}

</Consumerp>


                
            </div>
        );
    }
}

export default Cart;