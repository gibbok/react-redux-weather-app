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

const styles = theme => ({
  drawerPaper: {
    width: 160,
    height: '100%'
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
