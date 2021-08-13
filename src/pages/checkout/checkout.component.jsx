import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCardItems, selectCardTotal } from '../../redux/card/card.selector';

// COMPONENTS
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.style.scss'

const CheckoutPage = ({cardItems, cardTotal}) => (
    <div className='checkout-page'>
        <div className="checkout">
            <div className='checkout__header'>
                <span className='checkout__header--product'>Product</span>
                <span className='checkout__header--name'>Name</span>
                <span className='checkout__header--quantity'>Quantity</span>
                <span className='checkout__header--price'>Price</span>
                <span className='checkout__header--remove'>Remove</span>
            </div>
            <div className="checkout__items">
                {
                    cardItems.map(cardItem => <CheckoutItem key={cardItem.id} cardItem={cardItem}/>)
                }
            </div>
            <span className='total-price'>Total: ${cardTotal}</span>
            <h1 className="note-text">*Please use the following test creadit card for payments*</h1>
            <h1 className="note-text">4242 4242 4242 4242 -- Exp: 01/20 -- CW: 123</h1>
            <div className="stripe-container">
                <StripeCheckoutButton price={cardTotal}/>
            </div>
        </div>
    </div>
)

const mapToStateProps = createStructuredSelector({
    cardItems: selectCardItems,
    cardTotal: selectCardTotal
})

export default connect(mapToStateProps)(CheckoutPage);