import React, {useEffect} from 'react'
import { animateLogo } from './animate'
import {
	WhitelabelLogo,
} from './graphics/jsx'

export default function AnimatedLogo(props) {

	const {
		onComplete
	} = props.options

	useEffect(() => {
		setTimeout(()=>{
			animateLogo(`fadeToWhite`, `#logo`, onComplete) 
		}, 500)
	    return () => {
	    	// console.log ('Cleanup AnimatedLogo')
	    }
	}, [onComplete])

	return (
	  <React.Fragment>
		 <div id={`logo`} className={`logo`}>
		 	<WhitelabelLogo />
	  	</div>
	  </React.Fragment>
	)
}
