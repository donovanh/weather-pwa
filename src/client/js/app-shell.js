const React = require('react')
const { render } = require('react-dom')
const { configureStore } = require('../../app/store')
const AppShell = require('../../app/AppShell')

const store = configureStore({
  initialState: window.__INITIAL_STATE__,
  middleware: []
})

const container = document.getElementById('app-root')

render(<AppShell store={store} />, container)
