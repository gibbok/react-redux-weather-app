// @flow
import * as React from 'react'
import Navigation from './Navigation'
import { Drawer, List, withStyles, IconButton, Divider } from 'material-ui'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
// import HomeIcon from 'material-ui-icons/Home'
// import MapIcon from 'material-ui-icons/Map'

/* eslint-disable no-undef */
type PropsType = {
  +navigations: Array<{
    +id:string,
    +isActive:boolean,
    +title:string,
    +tooltip:string,
    +url:string,
  }>,
  +onNavigationClick: Function,
  +classes: Object
}
/* eslint-enable no-undef */
const drawerWidth = 240
const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
})

const Navigations:React.StatelessFunctionalComponent<any> = ({ navigations, onNavigationClick, classes }:PropsType):React.Element<any> => {
  return (
    <div>
      <Drawer
        type='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
        >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigations.map((navigation, index) =>
              <Navigation
                key={index}
                {...navigations[index]}
                onClick={() => onNavigationClick(navigation)}
            />
           )}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default withStyles(styles)(Navigations)
