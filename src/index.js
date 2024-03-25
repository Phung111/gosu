import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import store from 'app/store'

import 'animate.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
