import React from 'react'

import './directory-item.style.scss'

const DirectoryItem = ({itemType, title, imageUrl}) => (
    <div className={itemType}>
        <div className="background-image" style={{backgroundImage:`url(${imageUrl}`}}/>
        <div className="content">
            <h1 className="content__title">{title}</h1>
            <span className="content__subtitle">shop now</span>
        </div>
    </div>
)

export default DirectoryItem;