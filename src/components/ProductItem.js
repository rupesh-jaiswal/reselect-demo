import React from 'react';
export default function ProductItem(props) {
    return (<div className="product-container">
                <h4>{props.name}</h4>
                <h4>{props.price}</h4>
                <button onClick={props.onClick}>{props.buttonName}</button>
            </div>);
}
