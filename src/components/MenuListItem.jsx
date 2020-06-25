import React from 'react'
// import { useHistory } from 'react-router-dom'
import { 
    useDispatch,
} from 'react-redux'
import {
    useTheme,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'
import { 
    Icon,
} from './'


export default function MenuListItem(props) {

  const dispatch = useDispatch()
  const theme = useTheme()
  // const history = useHistory()
  const { options } = props
  
  return  <ListItem 
            button
            onClick={(e) => {
              console.log (`history.push('/')`)
              e.preventDefault()
              options.onClick()
              dispatch({type: `APP/MENU_OPEN`, menuOpen: false})
            }}>

            <ListItemIcon>
              <Icon icon={options.icon} color={ options.svg ? theme.palette.secondary.main : `inherit`} />
            </ListItemIcon>

            <ListItemText 
              primary={options.primary}
              secondary={options.secondary}
            />

          </ListItem>
}
