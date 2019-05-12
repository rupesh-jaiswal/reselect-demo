import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductItem from './ProductItem';
class Products extends Component {
    addToCart =(index) =>{
        this.props.dispatch({type: 'ADD_TO_CART', index})
    }
    getProducts = () => {
        return this.props.products.map((product,index) => {
            return (<ProductItem 
                    key = {index}
                    buttonName="Add to cart"
                    onClick = {this.addToCart.bind(this,index)}
                    {...product}/>)
        })
    }
    render() {
        return (
            <div>
                <h1>Products</h1>
                <div className="products-container">
                    {this.getProducts()}
                </div>
            </div>
        )
    }
}

export default connect(state => ({products: state.productReducer.products}))(Products);