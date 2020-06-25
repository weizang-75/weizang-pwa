import pJSON from '../package.json'
import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import { 
  MuiThemeProvider, 
  createMuiTheme 
} from '@material-ui/core/'
import theme from './theme/'
import WebFont from 'webfontloader'
import App from './App'
import { Provider } from 'react-redux'
import reduxStore from './redux'

// import {PushToTalk} from '@listingslab-software/pushtotalk'

console.log(`${pJSON.name} ${pJSON.version}`)

WebFont.load({
  google: {
    families: ['Noto+Sans+JP', 'sans-serif']
  }
})

const store = reduxStore({
  pushToTalk: true
})
const getStore = () => {
  return store
}
export { getStore }

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
    	<MuiThemeProvider theme={createMuiTheme(theme)}>
  	    <App options={{
  	    	optionZero: `nuffin to see here.`,
  	    }} />
      </MuiThemeProvider>
    </Provider>
  </React.Fragment>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
