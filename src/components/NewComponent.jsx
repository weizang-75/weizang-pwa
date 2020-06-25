import React, {useEffect} from 'react'

export default function NewComponent() {

	useEffect(() => {
	    
	    return () => {
	    	console.log ('cleanup')
	    }
	}, [])

	return (
	  <React.Fragment>
	  	NewComponent
	  </React.Fragment>
	)
}
