const { applyMiddleware, combineReducers, createStore } = require('redux')
const reducers = require('./reducers')

const INITIAL_STATE = {}

function configureStore ({ initialState = INITIAL_STATE, middleware = [] } = {}) {
  const reducer = combineReducers(reducers)

  return createStore(reducer, initialState, applyMiddleware(...middleware))
}

module.exports = {
  configureStore
}
