import React from 'react'

const Product = (props) => 
    <div className='hr'>
        <h3>{props.product.name}</h3>
        <h4>{props.product.price.toLocaleString('en-US', {style: 'currency', currency: 'EUR'})}</h4>
        <h5>{props.product.description}</h5>
    </div>

export default Product