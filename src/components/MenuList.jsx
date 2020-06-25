import React from 'react'
// import { useHistory } from 'react-router-dom'
// import { 
//     useDispatch,
// } from 'react-redux'
import {
    makeStyles,
    List,
} from '@material-ui/core/'
import { 
    MenuListItem,
} from './'

const useStyles = makeStyles(theme => ({
}))

export default function MenuList(props) {

  const classes = useStyles()
  // const dispatch = useDispatch()
  // const history = useHistory()
  
  return  <List className={classes.none}>
            <MenuListItem options={{
              primary: `Home`,
              // secondary: `go back to the start`,
              icon: `home`,
              onClick: () => {
                console.log (`home`)
              },
            }}/>
            <MenuListItem options={{
              primary: `Github`,
              // secondary: `Fork the repository`,
              icon: `github`,
              svg: true,
              onClick: () => {
                window.open(`https://github.com/listingslab-software/whitelabel-pwa`, `_blank`)
                console.log (`github`)
              },
            }}/>

            <MenuListItem options={{
              primary: `Next`,
              // secondary: `go back to the start`,
              icon: `next`,
              onClick: () => {
                console.log (`Next`)
              },
            }}/>


          </List>
}
