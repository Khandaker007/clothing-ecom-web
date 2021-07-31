import React from 'react'
import { connect } from 'react-redux';

import { addItems } from '../../redux/card/card.action';

import './collection-item.style.scss'

const CollectionItem = ({item, addItems}) => {

    const { name, price, imageUrl } = item;

    return(
        <div className="collection-item">
            <div className='collection-item__img' style={{backgroundImage: `url(${ imageUrl })`}}/>
            <button className="collection-item__btn" onClick={() => addItems(item)}>add to card</button>
            <div className="collection-item__footer">
                <span className='collection-item__name'>{ name }</span>
                <span className="collection-item__price">${ price }</span>
            </div>
        </div>)
}
const mapDispatchToProps = dispatch => ({
    addItems: item => dispatch(addItems(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);