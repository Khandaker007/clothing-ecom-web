import React, { useState } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// COMPONENTS
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop/shop.component'
import MensPage from './pages/mens/mens.component'
import WomensPage from './pages/womens/womens.component'
import JacketsPage from './pages/jackets/jackets.component'
import SneakersPage from './pages/sneakers/sneakers.component'
import HatsPage from './pages/hats/hats.component'
import Header from './components/header/header.components'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/mens' component={MensPage} />
        <Route path='/womens' component={WomensPage} />
        <Route path='/jackets' component={JacketsPage} />
        <Route path='/sneakers' component={SneakersPage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
