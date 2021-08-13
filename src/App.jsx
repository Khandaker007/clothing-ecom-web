import React, { useState } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

// REDUX

import { setCurrentUser } from './redux/user/user.action'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'

// COMPONENTS
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignUp from './components/sign-up/sign-up.component'


// FIREBASE
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import './App.scss'

class App extends React.Component{

  /*
     <-- HOOK -->
    useEffect(() => {
      if(!currenUser){
        this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {   
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth);
      }

      return () => {
        this.unsubsribeFromAuth();
      }
    },[setCurrentUser]);
  */

  unsubsribeFromAuth = null

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth);
      
    })
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render (){
    return (
    <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/sign-in' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage/>}/>
      </Switch>
    </BrowserRouter>
    </div>
  )}
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
