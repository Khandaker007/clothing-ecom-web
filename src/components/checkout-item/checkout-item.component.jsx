import React from 'react'
import { connect } from 'react-redux';
import { clearItemsFromCard, addItems, removeItem } from '../../redux/card/card.action';

import './checkout-item.style.scss'

const CheckoutItem = ({cardItem, clearItem, removeItem, addItem}) =>{

    const {imageUrl, name, price, quantity} = cardItem;

    return (
    <div className="checkout-item">
        <div className="checkout-item__img-container">
            <img className='checkout-item__img' src={imageUrl} alt="item" />
        </div>
        <span className='checkout-item__name'>{name}</span>
        <div className='checkout-item__quantity'>
            <div className="checkout-item__quantity--remove" onClick={() => removeItem(cardItem)}>&#10094;</div>
            <span className='checkout-item__quantity--value'>{quantity}</span>
            <div className="checkout-item__quantity--add" onClick={() => addItem(cardItem)}>&#10095;</div>
        </div>
        <span className='checkout-item__price'>{price}</span>
        <div className="checkout-item__remove-button" onClick={() => clearItem(cardItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: cardItem => dispatch(clearItemsFromCard(cardItem)),
    removeItem: cardItem => dispatch(removeItem(cardItem)),
    addItem: cardItem => dispatch(addItems(cardItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);