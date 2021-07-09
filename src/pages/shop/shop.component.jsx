import React, {useState} from 'react'

// COMPONENTS
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// DATA
import SHOP_DATA from '../../datas/shop.data';

import './shop.style.scss'

function ShopPage (){
    const [shopData, setShopData] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            <h1 className='shop-page__heading'>Collections</h1>
            {
                shopData.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps}/>)
            }
        </div>
    )
}

export default ShopPage;