import React, { useState } from 'react'

// COMPONENTS
import HomePage from './pages/home-page/home-page.component'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
