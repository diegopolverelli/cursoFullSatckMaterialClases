/* eslint-disable react/prop-types */
// import React from 'react'

// const products = [
//     { title: 'Col', id: 1 },
//     { title: 'Ajo', id: 2 },
//     { title: 'Manzana', id: 3 },
// ];

export const Ingredientes = ({products}) => {
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}


