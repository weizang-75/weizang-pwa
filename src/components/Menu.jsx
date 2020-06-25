import React from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    Dialog,
    Badge,
    Slide,
    Fab,
    AppBar,
    Toolbar,
} from '@material-ui/core/'
import { 
    Icon,
    MenuList,
} from './'

const useStyles = makeStyles(theme => ({
  infoDialog: {
  },
  fbBtn:{
    paddingLeft: theme.spacing(1.25),
  },
  twBtn:{
    paddingLeft: theme.spacing(-1),
  },
  fbBtnTxt:{
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: theme.spacing(2),
    margin: '0 auto',
  },
  fixedW: {
    width: 300
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },

}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction={`down`} ref={ref} {...props} />
})

export default function Menu(props) {

  const classes = useStyles()
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
    menuOpen
  } = appSlice

  return <React.Fragment>

      { !menuOpen ? <AppBar position={`fixed`} className={classes.appBar}>
        <Toolbar>
        
          <Fab 
            className={classes.fabButton}
            color={`primary`}
            aria-label={`Main Menu`}
            onClick={(e) => {
              e.preventDefault()
              dispatch({type: `APP/MENU_OPEN`, menuOpen: true})
            }}>
            <Badge badgeContent={0} color={`secondary`}>
              <Icon icon={`menu`} color={`inherit`} />
            </Badge>
          </Fab>
          
        </Toolbar>
      </AppBar> : null }

      <Dialog
        className={classes.infoDialog}
        open={menuOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          dispatch({type:`APP/MENU_OPEN`, menuOpen: false})
        }}
        aria-labelledby="info-title"
        aria-describedby="info-description">
        <div className={classes.fixedW} />
        
        <MenuList />      
      
      </Dialog>

    </React.Fragment>
}
