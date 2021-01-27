import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.style.scss';

class SingIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h1 className='title'>I already have an account</h1>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'o
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton loginMethod={ signInWithGoogle } isGoogleSignIn>{' '}Google Sign in{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn;