import React, {
	// useEffect, 
	useState,
} from 'react'
import {
    makeStyles,
    CssBaseline,
} from '@material-ui/core'
import {
	TopAppbar,
	ContentCard,
	Menu,
} from './components'
import { getDocs } from './docs'


import { AnimatedLogo } from './plugins/AnimatedSVG'

const useStyles = makeStyles(theme => ({
    screen:{
    	minWidth: '100vw',
    	minHeight: '98vh',
    },
    content:{
    	marginTop: 65 + theme.spacing(),
    	marginBottom: 75 + theme.spacing(),
    },
    btnTxt: {
    	marginLeft: theme.spacing(),
    	marginRight: theme.spacing(),
    }
}))

export default function App(props) {
	let { options } = props
	if (!options) options = {}
	const classes = useStyles()
	const [identComplete, setIdentCompleted] = useState(false)
	const onIdentComplete = () => {
		setIdentCompleted(true)
	}
	if (!identComplete) return <AnimatedLogo options={{ onComplete: onIdentComplete }} />
	const docs = getDocs()
	return (
	  <React.Fragment>
	  	<div className={classes.screen}>
	  		<CssBaseline />
	  		<TopAppbar />
	  		<div className={classes.content}>
	  			{ docs.map((item, i) => {
	  				return <ContentCard 
	  							startExpanded={ i === 0 ? true : false }
	  							key={item.id} 
	  							id={item.id} />
	  			})}
	  		</div>
	  		<Menu />
	  	</div>
	  </React.Fragment>
	)

}
