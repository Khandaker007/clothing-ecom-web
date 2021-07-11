import React from 'react'

import './sign-in-and-sign-out.style.scss'

// COMPONENTS
import SignIn from '../../components/sign-In/sign-in.component';
import SignOut from '../../components/sign-up/sign-up.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-out'>
        <SignIn/>
        {/* <SignOut/>
        <CustomButton/>
        <FormInput/> */}
    </div>
) 

export default SignInAndSignUpPage;