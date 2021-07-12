import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({children, ...otherProps}) => (
    <div className="custom-btn-container" {...otherProps}>
        <button className="custom-btn">{ children }</button>
    </div>
)

export default CustomButton;