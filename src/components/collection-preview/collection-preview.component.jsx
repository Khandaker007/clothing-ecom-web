import React from 'react'

// COMPONENTS
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.style.scss'

const CollectionPreview = ({title, items}) => (
    <div className="collection-previrew">
        <h1 className="collection-preview__title">{title}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4)
                     .map((item) => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)

export default CollectionPreview;