import React from 'react'

import './directory-item.style.scss'

const DirectoryItem = ({itemType, title, imageUrl}) => (
    <div style={{
            backgroundImage: `url(${imageUrl})`   
        }} 
        className={itemType}>
        <div className="content">
            <h1 className="content__title">{title}</h1>
            <span className="content__subtitle">shop now</span>
        </div>
    </div>
)

export default DirectoryItem;