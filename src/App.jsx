import React, { useState } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

// REDUX

import {setCurrentUser} from './redux/user/user.action'

// COMPONENTS
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import SignUp from './components/sign-up/sign-up.component'

import MensPage from './pages/mens/mens.component'
import WomensPage from './pages/womens/womens.component'
import JacketsPage from './pages/jackets/jackets.component'
import SneakersPage from './pages/sneakers/sneakers.component'
import HatsPage from './pages/hats/hats.component'

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
        <Route exact path='/sign-in' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage/>}/>
        <Route path='/mens' component={MensPage} />
        <Route path='/womens' component={WomensPage} />
        <Route path='/jackets' component={JacketsPage} />
        <Route path='/sneakers' component={SneakersPage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </BrowserRouter>
    </div>
  )}
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
