import pJSON from '../../../package.json'
import { createReducer } from "@reduxjs/toolkit"

import {
  menuOpen,
} from "./actions"

export const appSlice = {
  pJSON,
  menuOpen: false,
}

const appReducer = createReducer(appSlice, {

  [menuOpen]: (state, action) => {
    state.menuOpen = action.menuOpen
    return state
  },

})

export { appReducer }