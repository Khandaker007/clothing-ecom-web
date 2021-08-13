import React from 'react'

import { connect } from 'react-redux'
import { selectShopCollection } from '../../redux/shop/shop.selector'

// COMPONENT
import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.style.scss'

const CollectionPage = ({collection: {items, title}}) => {
    return (
    <div className="collection-page"> 
        <h1 className='title'>{title}</h1>
        <div className="collection">
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>   
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);