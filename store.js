import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
  floatWindowVisible: false
}

export const actionTypes = {
  FLOAT_WINDOW_SHOW: 'FLOAT_WINDOW_SHOW',
  FLOAT_WINDOW_HIDE: 'FLOAT_WINDOW_HIDE',

}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FLOAT_WINDOW_SHOW:
      return {...state, floatWindowVisible: true}
    case actionTypes.FLOAT_WINDOW_HIDE:
      return {...state, floatWindowVisible: false}
    default:
      return state
  }
}

// ACTIONS
export const floatWindowShow = () => {
  return {type: actionTypes.FLOAT_WINDOW_SHOW}
}
export const floatWindowHide = () => {
  return {type: actionTypes.FLOAT_WINDOW_HIDE}
}


export function initializeStore(initialStatee = initialState) {
  return createStore(
    reducer,
    initialStatee,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
