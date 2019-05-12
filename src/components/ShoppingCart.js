import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createSelector } from 'reselect';
import ProductItem from './ProductItem';
class ShoppingCart extends Component {
    addToCart =(index) =>{
        this.props.dispatch({type: 'ADD_TO_CART', index})
    }
    getProducts = () => {
        return this.props.products.map((product,index) => {
            return (<ProductItem 
                    key = {index}
                    //buttonName="Add to cart"
                    onClick = {this.addToCart.bind(this,index)}
                    {...product}/>)
        })
    }
    render() {
        console.log('shopping cart')

        return (
            <div>
                <h1>CardItems</h1>
                <div className="products-container">
                    {this.getProducts()}
                </div>
            </div>
        )
    }
}

const getshoppingItems = createSelector(
    state => state.productReducer.products,
    state => state.shoppingCartReducer.cartItems,
    (products, cartItems) =>{
        return cartItems.map(index=>{
            return products[index];
        });
    }
)
function mapStateToProps(state) {
    return {
        products:getshoppingItems(state) 
    }
}
export default connect(mapStateToProps)(ShoppingCart);