import React from 'react'

import './form-input.style.scss'

const FormInput = ({handleChage, label, ...otherProps}) => (
    <div className="form-input-group">
        <input className="form-input" onChange={handleChage} {...otherProps} />
        {
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            :
            null
        }
    </div>
)

export default FormInput;