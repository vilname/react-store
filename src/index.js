import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app'
import StoreService from './services/history-services'
import { StoreServiceProvider } from './components/storeservice-context'

import store from './store'

const storeService = new StoreService()


ReactDOM.render(
  <Provider store={store}>
    <StoreServiceProvider value={storeService}>
      <Router>
        <App />
      </Router>
    </StoreServiceProvider>
  </Provider>,
  document.getElementById('root')
)
