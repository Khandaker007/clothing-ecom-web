import React, {useState} from 'react'

// COMPONENTS
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// FIREBASE
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss'

function SignUp({handleClick}) {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert(`your password did'nt match, please try again`)
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        }catch(error){
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        if(name == 'name'){
            setDisplayName(value)
        }
        else if (name == 'email'){
            setEmail(value)
        }
        else if (name == 'password'){
            setPassword(value)
        }
        else{
            setConfirmPassword(value)
        }
    }

    return(
        <div className="sign-up">
            <h1 className="sign-up__heading">create an account</h1>
            <form onSubmit={handleSubmit} className="form-group">
                <FormInput
                    name='name'
                    type='name'
                    handleChange={handleChange}
                    value={displayName}
                    label='User Name'
                    required
                />
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
                    handleChange={handleChange}
                    value={password}
                    label='Password'
                    required
                />
                <FormInput
                    name='confirm-password'
                    type='password'
                    handleChange={handleChange}
                    value={confirmPassword}
                    label='Confirm Password'
                    required
                />
                <div className="btn-group">
                    <CustomButton type='submit'>sign up</CustomButton>
                    <a href='#' className='create-account-link' onClick={handleClick} > Already have an account?</a>
                </div>
            </form>


        </div>
)
}

export default SignUp;