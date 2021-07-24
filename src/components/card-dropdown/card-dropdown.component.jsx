import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './card-dropdown.style.scss'

const CardDropdown = () => (
    <div className="card-dropdown">
        <div className='card-items'/>
        <CustomButton>go to checkout</CustomButton>
    </div>
)

export default CardDropdown;