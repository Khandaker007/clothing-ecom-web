import React from 'react'

import './checkout-item.style.scss'

const CheckoutItem = ({cardItem: {imageUrl, name, price, quantity}}) => (
    <div className="checkout-item">
        <div className="checkout-item__img-container">
            <img className='checkout-item__img' src={imageUrl} alt="item" />
        </div>
        <span className='checkout-item__name'>{name}</span>
        <span className='checkout-item__price'>{quantity}</span>
        <span className='checkout-item__quantity'>{price}</span>
        <div className="checkout-item__remove-button">&#10005;</div>
    </div>
)

export default CheckoutItem;