import React from 'react';
import { connect } from 'react-redux';

import { toggleCardHidden } from '../../redux/card/card.action';
import { selectCardItemCount } from '../../redux/card/card.selector';

import ShoppingIcon from './shopping-icon';

import './card-icon.style.scss';

const CardIcon = ({toggleCardHidden, itemCount}) => (
    <div className='card-icon' onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> {itemCount} </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCardItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);