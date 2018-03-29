import React from 'react'
import App from './components/app'
import { Provider as ReduxProvider } from 'react-redux'

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
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    )
  }
}

module.exports = AppShell
