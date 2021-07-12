import React, {useState} from 'react'

// COMPONENTS
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.style.scss'

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        if(name == 'name'){
            setName(value)
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
                    value={name}
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
                <CustomButton type='submit'>sign up</CustomButton>
            </form>


        </div>
)
}

export default SignUp;