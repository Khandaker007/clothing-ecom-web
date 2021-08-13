import React from 'react'

import { connect } from 'react-redux'
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selector'

// COMPONENTS
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.style.scss'

const CollectionOverview = ({shopData}) => (
    <div className="collection-overview">
        <h1 className='heading'>Collections</h1>
        <div className="collection-preview">
            {
                    shopData.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps}/>)
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    shopData: selectShopCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview);