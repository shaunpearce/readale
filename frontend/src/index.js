import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// REDUX
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducers/index'
import './styles/css/index.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const middleware = applyMiddleware(thunk)

// const store = createStore(
//   reducer,
//   compose(middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// )

const store = createStore(reducer, compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose
))

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider> , document.getElementById('root'))
registerServiceWorker()
