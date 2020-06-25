import { createReducer } from "@reduxjs/toolkit"

import {
  connecting,
} from "./actions"

export const apiSlice = {
  connecting: false,
}

const apiReducer = createReducer(apiSlice, {

  [connecting]: (state, action) => {
    state.connecting = action.connecting
    return state
  },

})

export { apiReducer }