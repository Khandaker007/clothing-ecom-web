import React from 'react'
import {Link} from 'react-router-dom'

import './header.style.scss'

import logo from '../../assets/logo/crown.svg';

// FIREBASE
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
    <div className="header">
        <Link to='/'>
            <img src={logo} alt='logo' className='header__logo' />
        </Link>
        <div className="header__options">
            <Link className='header__option' to='/shop'>
                shop
            </Link>
            <Link className='header__option' to='/contact'>
                contact
            </Link>

            {
                currentUser ?

                <span className="header__option" onClick={() => auth.signOut()} >sign out</span>

                :

                <Link className='header__option' to='/sign-in'>
                    Sign In
                </Link>
            }
        </div>

    </div>
)

export default Header;