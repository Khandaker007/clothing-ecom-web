import React, {useState} from 'react'

import './sign-in-and-sign-up.style.scss'

// COMPONENTS
import SignIn from '../../components/sign-In/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

function SignInAndSignUpPage() {

    const [swap, setSwap] = useState(false);

    return (
        <div className='sign-in-and-sign-out'>
                {
                    !swap ?
                    <SignIn handleClick={() => setSwap(true)}/>
                    :
                    <SignUp/>

                }
                {/* <SignUp/> */}
        </div>
    )
} 

export default SignInAndSignUpPage;