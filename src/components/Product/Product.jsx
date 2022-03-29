import React from 'react';

const Product = (props) => {
    const {name, price, pairImage, sideImage} = props.product
    return (
        <div>
            <h1>This is Product{name}</h1>
        </div>
    );
};

export default Product;