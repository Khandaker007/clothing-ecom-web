import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCardItems, selectCardTotal } from '../../redux/card/card.selector';

// COMPONENTS
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
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
        </div>
    </div>
)

const mapToStateProps = createStructuredSelector({
    cardItems: selectCardItems,
    cardTotal: selectCardTotal
})

export default connect(mapToStateProps)(CheckoutPage);