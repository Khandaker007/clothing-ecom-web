import React, {useState} from 'react'

import './sign-in-and-sign-up.style.scss'

// COMPONENTS
import SignIn from '../../components/sign-In/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

function SignInAndSignUpPage() {

    const [swap, setSwap] = useState(false);

    return (
        <div className='sign-in-and-sign-out'>
                {
                    !swap ?
                    <SignIn handleClick={() => setSwap(true)}/>
                    :
                    <SignUp handleClick={() => setSwap(false)}/>

                }
        </div>
    )
} 

export default SignInAndSignUpPage;