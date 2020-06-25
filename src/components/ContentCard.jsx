import React from 'react'

import clsx from 'clsx'
import {
    makeStyles,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
    Grid,
} from '@material-ui/core/'
import { 
  Icon
} from './'
import { 
  getDocById,
} from '../docs'

const useStyles = makeStyles((theme) => ({
  contentCard: {
    margin: 'auto',
    maxWidth: 600,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
  },
  btnTxt:{
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    // cursor: 'pointer',
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.oneSec,
    }),
  },
  expandOpen: {
    transform: 'rotate(225deg)',
  },
  avatar: {
    // backgroundColor: theme.palette.secondary.main,
  },
}))

export default function ContentCard(props) {

  const classes = useStyles()
  const { id, startExpanded } = props
  let content = getDocById(id)
  const [expanded, setExpanded] = React.useState(startExpanded)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.contentCard}>
      
    
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Expand">
                <Icon icon={`expand`} />
              </IconButton>

              <Button
                variant={`text`}
                color={`primary`}
                onClick={handleExpandClick}>
                {content.label}
              </Button>
              
              <Collapse 
                unmountOnExit
                in={expanded} 
                timeout={`auto`}>
                <CardContent>
                    <Grid container>
                      <Grid item xs={12} md={content.media ? 8 : 12 } className={classes.gridItem}>
                        <Typography variant={`body1`} gutterBottom>
                          {content.body}
                        </Typography>
                      </Grid>
                      { content.media ? <Grid item xs={12} md={4} className={classes.gridItem}>
                        <CardMedia
                          className={classes.media}
                          image={content.media}
                          title={content.title}
                        /></Grid> : null }
                    </Grid>
                </CardContent>
              </Collapse>

        {content.links.length ? <CardActions disableSpacing>
            <Button 
              fullWidth
              variant={`text`}
              color={`primary`}
              onClick={(e) => {
                e.preventDefault()
                console.log ('next')
              }}>
              <span className={classes.btnTxt}>
                Next
              </span> 
              <Icon icon={`next`} color={`inherit`} />
            </Button>
          </CardActions> : null }
    </Card>
  )
}


/*
      <CardHeader
        title={content.title}
        subheader={content.subheader}
        avatar={ content.avatar ? <Avatar src={content.avatar} className={classes.avatar} /> : null }
        action={<IconButton
                  onClick={(e) => {
                    console.log ('next please')
                  }}>
                  <Icon icon={`next`} />
                </IconButton>}
      />  
*/