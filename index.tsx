import React from 'react'
import { registerRootComponent } from 'expo'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './src/redux/reducers'
import sagas from './src/redux/sagas'
import App from './src/App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RNRedux)
