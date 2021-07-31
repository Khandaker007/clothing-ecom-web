import React from 'react'

import { connect } from 'react-redux'
import { selectCardItems } from '../../redux/card/card.selector'

// COMPONENTS
import CustomButton from '../custom-button/custom-button.component'
import CardItem from '../card-item/card-item.component'

import './card-dropdown.style.scss'

const CardDropdown = ({cardItems}) => (
    <div className="card-dropdown">
        <div className='card-items'>
            {
                cardItems.map(cardItem => (<CardItem key={cardItem.id} item={cardItem}/>))
            }
        </div>
        <CustomButton>go to checkout</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cardItems: selectCardItems(state)
})

export default connect(mapStateToProps)(CardDropdown);