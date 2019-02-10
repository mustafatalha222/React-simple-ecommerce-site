import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data'

const Providerp=React.createContext();

class Provider extends Component {
    state={
        products:[],
        detailproduct:detailProduct,
        cart:[],
        openmodal:false,
        modalproduct:detailProduct,
        //for cart
        subtotal:0, total:0,tax:0
    }
    componentDidMount(){
        this.setproduct();
    }

    setproduct=()=>{
        let tempprpduct=[];
        storeProducts.forEach(item=>{
            const single={...item};
            tempprpduct=[...tempprpduct,single]
        });
        this.setState({products:tempprpduct})
    }


    //add items to cart
    addtocart=id=>{
        let tempproduct=[...this.state.products];
        const index=tempproduct.indexOf(this.getitem(id));
        const product=tempproduct[index];
        product.count=1;
        product.inCart=true; 
        const price=product.price;
        product.total=price;     
        this.setState({products:tempproduct, cart:[...this.state.cart,product]},()=>this.addtotal())
    }

    getitem=id=>{
        const product=this.state.products.find(item => item.id===id);
        return product;
    }

    handledetail=id=>{
        const product=this.getitem(id);
        this.setState({detailproduct:product})
    }


//MODAL code
    openmodalf=id=>{
        const product=this.getitem(id);
        this.setState({modalproduct:product,openmodal:true})
    }

    closemodal=()=>{
        this.setState({openmodal: false})
    }


    //cart add romove etc
    increment=id=>{
        let tempCart=[...this.state.cart];
        const selected=tempCart.find(item=> item.id === id);
        const index=tempCart.indexOf(selected);
        const product=tempCart[index];
        product.count=product.count+1;
        product.total=product.count*product.price;
        this.setState({cart:[...tempCart]},()=>{this.addtotal()})
    }

    decrement=id=>{
        let tempCart=[...this.state.cart];
        const selected=tempCart.find(item=> item.id === id);
        const index=tempCart.indexOf(selected);
        const product=tempCart[index];
        product.count=product.count-1;
        if(product.count === 0){
            this.remove(id);
        }else{
        product.total=product.count*product.price;
        this.setState({cart:[...tempCart]},()=>{this.addtotal()});
        }
  
    }

    remove=id=>{
        let tempproduct=[...this.state.products];
        let tempcart=[...this.state.cart];
        tempcart=tempcart.filter(item=> item.id!==id);
        
        const index=tempproduct.indexOf(this.getitem(id));
        let removep=tempproduct[index];
        console.log(removep);
        removep.inCart=false;
        removep.count=0;
        removep.total=0;
        console.log(removep);

        this.setState({cart:[...tempcart],products:[...tempproduct]},()=>{this.addtotal()})
    }

    //clear whole cart using 1 button
    clearcart=()=>{
        this.setState({cart:[]},()=>{this.setproduct()})
    }


//total prices in cart
addtotal=()=>{
    let subtotal_=0;
    this.state.cart.map(item=> subtotal_+=item.total);
    const temptax=subtotal_*0.1;
    const tax_=parseFloat(temptax.toFixed(2));
    const total_=subtotal_+tax_;
    this.setState({tax:tax_,subtotal:subtotal_,total:total_})
}


    render() {
        return (
            <div>
                <Providerp.Provider value={{...this.state,addtocart:this.addtocart,handledetail:this.handledetail,openmodalf:this.openmodalf,closemodal:this.closemodal,increment:this.increment,decrement:this.decrement,remove:this.remove,clearcart:this.clearcart}}>
                    {this.props.children}
                </Providerp.Provider>
            </div>
        );
    }
}

const Consumerp=Providerp.Consumer;

export  {Provider,Consumerp};