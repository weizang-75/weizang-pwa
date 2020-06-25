import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const connecting = createAction(`API/CONNECTING`)

export const sendEmail = (to, message) => {
	const store = getStore()
	store.dispatch({ type: `API/CONNECTING`, sending: true })
	let mailObj = {
		subject: `${message.substring(0,50)}...`,
		message,
	}
	let endPoint = `https://us-central1-listingslab-production.cloudfunctions.net/api`  
    axios.post(endPoint, mailObj)
    	.then (function(res) {
	    	console.log (res.data.message)
	   //  	store.dispatch({type: `APP/SENT`, sent: true })
	   //  	store.dispatch({ 
				// type: `APP/SNACKBAR`, 
				// snackbar: {
				// 	severity: `info`,
				// 	message: `res.data.message`
				// }})
	    })
	    .catch (function(error) {
	    	store.dispatch({type: `APP/SENT`, sent: true })
	    })
	    .finally (function() {
	    	// console.log ('message sent')
	    	store.dispatch({type: `APP/SENDING`, sending: false })

	    })
}
