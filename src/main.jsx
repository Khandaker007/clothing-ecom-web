import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import {store, persistor} from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />       
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
