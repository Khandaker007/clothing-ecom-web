import React, {useState} from 'react'
import {Link} from 'react-router-dom'

// COMPONENTS
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss'

function SignIn(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = event => {
        const { value, name } = event.target;

        console.log(name);

        if(name == 'email'){
            setEmail(value)
        }else{
            setPassword(value)
        }
    }

   return (
    <div className='sign-in'>
        <h1 className="sign-in__heading">sign in to your account</h1>
        <form className="form-group">
            <FormInput
                name='email'
                type='email'
                onChange={handleChange}
                value={email}
                label='Email'
                required
            />
            <FormInput
                name='password'
                type='password'
                onChange={handleChange}
                value={password}
                label='Password'
                required
            />
        </form>
        <CustomButton className='cb' />
        <Link to='#' className='create-account-link'>create an accout?</Link>
    </div>
)} 

export default SignIn;