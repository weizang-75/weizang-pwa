import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { animationReducer, animationSlice } from './animation/reducer'
import { appReducer, appSlice } from './app/reducer'
import { apiReducer, apiSlice } from './api/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    api: apiReducer,
    app: appReducer,
    animation: animationReducer,
  })

  const preloadedState = {
    api: apiSlice,
    app: appSlice,
    animation: animationSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: []
  })
  return store
}

export default reduxStore