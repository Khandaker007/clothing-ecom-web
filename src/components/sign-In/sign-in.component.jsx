import React, {useState} from 'react'
import {Link} from 'react-router-dom'

// COMPONENTS
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import SignUp from '../sign-up/sign-up.component';

import './sign-in.style.scss'

function SignIn({handleClick}){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [swap, setSwap] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('');
        setPassword('');
    }

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
        <form onSubmit={handleSubmit} className="form-group">
            <FormInput
                name='email'
                type='email'
                handleChange={handleChange}
                value={email}
                label='Email'
                required
            />
            <FormInput
                name='password'
                type='password'
                handleChange={handleChange}
                value={password}
                label='Password'
                required
            />
            <CustomButton type='submit'>sign in</CustomButton>
        </form>
        {/* <Link to='/sign-up' onClick={handleClick} className='create-account-link'>create an accout?</Link> */}
        <a href='#' onClick={handleClick} > create an account?</a>
        {/* <span></span> */}
    </div>
)} 

export default SignIn;