import React, { Component } from 'react';
import Title from './Title';
import {Consumerp} from '../context';
import Product from './Product';
import PropTypes from 'prop-types';

class ProductList extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                <Title name="our site" title="product"/>
                
                <div className="row">
                <Consumerp>
                    {value=>
                        value.products.map(product=>
                       <Product key={product.id} product={product}></Product>
                        )
                    }
                </Consumerp>
                </div>
                </React.Fragment>
            </div>
        );
    }
}

Product.propTypes={
    product: PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        inCart:PropTypes.bool,
        image:PropTypes.string,
        price:PropTypes.number
    })
}

export default ProductList;