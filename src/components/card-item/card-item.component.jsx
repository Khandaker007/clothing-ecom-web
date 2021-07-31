import React from 'react'

import './card-item.style.scss'

const CardItem = ({item: {imageUrl, name, price, quantity}}) => (
    <div className='card-item'>
        <img className='card-item__img' src={imageUrl} alt="item" />
        <div className="card-item__details">
            <span className='card-item__details--name'> {name} </span>
            <span className='card-item__details--price'>{quantity} X {price}</span>
        </div>
    </div>
)

export default CardItem;