import { createStore } from 'redux'
import middleware from './middleware'
import reducers from './reducers'
import { Map } from 'immutable'

export default createStore(reducers, Map(), middleware)
