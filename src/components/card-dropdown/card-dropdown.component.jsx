import React from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { selectCardItems } from '../../redux/card/card.selector'
import { createStructuredSelector } from 'reselect'
import { toggleCardHidden } from '../../redux/card/card.action'

// COMPONENTS
import CustomButton from '../custom-button/custom-button.component'
import CardItem from '../card-item/card-item.component'

import './card-dropdown.style.scss'

const CardDropdown = ({cardItems, history, dispatch}) => (
    <div className="card-dropdown">
        <div className='card-items'>
            {
                cardItems.length ?
                cardItems.map(cardItem => (<CardItem key={cardItem.id} item={cardItem}/>))
                :
                <span className="empty-message">Your card is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCardHidden());
        }}>go to checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cardItems: selectCardItems
})

export default withRouter(connect(mapStateToProps)(CardDropdown));