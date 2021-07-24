import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

import './header.style.scss'

import logo from '../../assets/logo/crown.svg';

// FIREBASE
import {auth} from '../../firebase/firebase.utils'

// COMPONENTS
import CardIcon from '../card-icon/card-icon.component';
import CardDropdown from '../card-dropdown/card-dropdown.component';
import CustomButton from '../custom-button/custom-button.component';

const Header = ({currentUser, hidden}) => (
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
            <CardIcon/>
        </div>
        {
            hidden ? null : <CardDropdown/>
        }

    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.card.hidden

})

export default connect(mapStateToProps)(Header);