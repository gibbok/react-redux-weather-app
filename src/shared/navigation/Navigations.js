// @flow
import * as React from 'react'
import Navigation from './Navigation'
import { Drawer, List, withStyles } from 'material-ui'
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
    width: drawerWidth
  },
  drawerHeader: theme.mixins.toolbar
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
        <List>
          {navigations.map((navigation, index) =>
            <Navigation
              key={index}
              {...navigations[index]}
              onClick={() => onNavigationClick(navigation)}
            />
           )}
        </List>
      </Drawer>
    </div>
  )
}

export default withStyles(styles)(Navigations)
