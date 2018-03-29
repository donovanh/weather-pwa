import React from 'react'
import App from './components/app'

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
      <App store={store}></App>
    )
  }
}

module.exports = AppShell
