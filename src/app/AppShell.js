import React from 'react'
import App from './components/app'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import reducers from './store/reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

const store = createStoreWithMiddleware(
  reducers,
  persistedState
)

store.subscribe(() => {
  saveState(store.getState())
})

class AppShell extends React.Component {
  componentDidMount () {
    if (!navigator || !navigator.serviceWorker) {
      // service worker not supported
      return
    }

    window.requestIdleCallback(() => {
      navigator.serviceWorker.register('/sw.js')
        .catch(function (err) {
          console.log('ServiceWorker registration failed: ', err)
        })
    })
  }

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

module.exports = AppShell
