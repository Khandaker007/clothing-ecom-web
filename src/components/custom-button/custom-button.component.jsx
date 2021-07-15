import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <div className="custom-btn-container" {...otherProps}>
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-btn`}>{ children }</button>
    </div>
)

export default CustomButton;