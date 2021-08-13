import React, {useState} from 'react'
import { connect } from 'react-redux';

import selectDirectorSections from '../../redux/directory/directory.selector'

// COMPONENT
import DirectoryItem from '../directory-item/directory-item.component';

// DATA
import {DIRECTORY_ITEM_DATA} from '../../datas/directory.data'

import './directory.style.scss'

function Directory ({directoryData}) {
    return(
        <div className='directory'>
            {
                directoryData.map(({id, ...otherProps}) => <DirectoryItem key={id} {...otherProps} />)
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    directoryData: selectDirectorSections(state)
})

export default connect(mapStateToProps)(Directory);