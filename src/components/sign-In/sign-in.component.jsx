import React, {useState} from 'react'
import {Link} from 'react-router-dom'

// COMPONENTS
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import SignUp from '../sign-up/sign-up.component';

// FIREBASE 
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss'

function SignIn({handleClick}){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password);

        setEmail('');
        setPassword('');
    }

    const handleChange = event => {
        const { value, name } = event.target;

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
            <div className="btn-group">
                <CustomButton type='submit'>sign in</CustomButton>
                <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn >sign in with google</CustomButton>
            </div>
        </form>
        {/* <Link to='/sign-up' onClick={handleClick} className='create-account-link'>create an accout?</Link> */}
        <a href='#' className='create-account-link' onClick={handleClick} > create an account?</a>
        {/* <span></span> */}
    </div>
)} 

export default SignIn;