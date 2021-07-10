import React from 'react'

import './collection-item.style.scss'

const CollectionItem = ({name, price, imageUrl}) => (
    <div className="collection-item">
        <div className='collection-item__img' style={{backgroundImage: `url(${ imageUrl })`}}/>
        <button className="collection-item__btn">add to card</button>
        <div className="collection-item__footer">
            <span className='collection-item__name'>{ name }</span>
            <span className="collection-item__price">${ price }</span>
        </div>
    </div>
)

export default CollectionItem;