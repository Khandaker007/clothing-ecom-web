import React, { useState } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

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

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null

  componentDidMount(){
   this.unsubsribeFromAuth = auth.onAuthStateChanged(async user => {
      
    await createUserProfileDocument(user);

    })
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render (){
    return (
    <div>
    <BrowserRouter>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInAndSignUpPage} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
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

export default App;
