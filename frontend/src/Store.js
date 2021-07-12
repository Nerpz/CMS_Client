import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {changePageReducer, changeMainColorReducer} from './reducers'


const reducer = combineReducers({
   pages: changePageReducer,
   changeMainColor: changeMainColorReducer
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
)
export default store