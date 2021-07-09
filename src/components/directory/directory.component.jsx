import React, {useState} from 'react'

// COMPONENT
import DirectoryItem from '../directory-item/directory-item.component';

// DATA
import {DIRECTORY_ITEM_DATA} from '../../datas/directory.data'

import './directory.style.scss'

function Directory () {
    const [directoryData, setDirectoryData] = useState(DIRECTORY_ITEM_DATA);
    return(
        <div className='directory'>
            {
                directoryData.map(({id, ...otherProps}) => <DirectoryItem key={id} {...otherProps} />)
            }
        </div>
    )
}

export default Directory;