import React from 'react'
import { 
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    Avatar,
    AppBar,
    ButtonBase,
    Toolbar,
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  icon:{
    marginRight: theme.spacing()
  },
  btnPad:{
    padding: theme.spacing(),
    borderRadius: theme.spacing(0.5),
  },
  appbar:{
    background: 'none',
    boxShadow: 'none',
    border: 'none',
  },
}))

export default function TopAppbar(props) {
  
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div className={classes.grow}>
      <AppBar position={`fixed`} className={classes.appbar}>
        <Toolbar className={classes.topToolbar}>
            <div className={classes.grow} /> 
              <ButtonBase
                className={classes.btnPad}
                onClick={(e) => {
                    e.preventDefault()
                    dispatch({type: `APP/MENU_OPEN`, menuOpen: true})
                }}>
                <div className={classes.icon} >
                  <Avatar src={`/svg/avatars/listingslab.svg`} />
                </div>
                <Typography variant={`h6`} color={`primary`}>
                  {`Whitelabel PWA ™`}
                </Typography>
              </ButtonBase>
            <div className={classes.grow} />  
        </Toolbar>
      </AppBar>
    </div>
  )
}

/*
<Icon icon={`whitelabel`} color={`white`} />
*/