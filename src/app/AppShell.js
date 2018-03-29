import React from 'react'
import App from './components/app'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import reducers from './store/reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

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
    const { store } = this.props

    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
    )
  }
}

module.exports = AppShell
