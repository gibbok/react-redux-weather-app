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
    // position: 'fix',
    //position: 'relative',
    width: 240,
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

// //--------------
// import React from 'react'
// import InboxIcon from 'material-ui-icons/Inbox'
// import DraftsIcon from 'material-ui-icons/Drafts'
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText
// } from 'material-ui'

// function Navigations () {
//   return (
//     <div>
//       <List>
//         <ListItem button>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary='Inbox' />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary='Drafts' />
//         </ListItem>
//       </List>
//       <Divider />
//       <List>
//         <ListItem button>
//           <ListItemText primary='Trash' />
//         </ListItem>
//         <ListItem button component='a' href='#simple-list'>
//           <ListItemText primary='Spam' />
//         </ListItem>
//       </List>
//     </div>
//   )
// }

// export default Navigations
