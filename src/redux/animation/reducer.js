
import { createAction } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'

export const current = createAction(`ANIMATION/URRENT`)
export const complete = createAction(`ANIMATION/COMPLETE`)
export const initted = createAction(`ANIMATION/INIT`)

export const animationSlice = {
  initted: false,
  current: null,
  complete: false,
}

const animationReducer = createReducer(animationSlice, {

  [initted]: (state, action) => {
    state.initted = action.initted
    return state
  },

  [current]: (state, action) => {
    state.current = action.current
    return state
  },

  [complete]: (state, action) => {
    state.complete = action.complete
    return state
  },

})

export { animationReducer }
