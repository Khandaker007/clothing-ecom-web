import React from 'react'
import { withRouter } from 'react-router';

import './directory-item.style.scss'

const DirectoryItem = ({itemType, title, imageUrl, linkUrl, history, match}) =>(
    <div className={itemType} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="content">
            <h1 className="content__title">{title}</h1>
            <span className="content__subtitle">shop now</span>
        </div>
    </div>
)

export default withRouter(DirectoryItem);