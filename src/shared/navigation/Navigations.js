// @flow
import * as React from 'react'
import { Drawer, withStyles, IconButton, Divider, ListItem, ListItemIcon } from 'material-ui'
import HomeIcon from 'material-ui-icons/Home'
import MapIcon from 'material-ui-icons/Map'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import { NavLink } from 'react-router-dom'

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
          <NavLink
            to={'/'}
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              Weather
            </ListItem>
          </NavLink >
          <NavLink
            to={'/map'}
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}>
            <ListItem button>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              Map
            </ListItem>
          </NavLink >
        </div>
      </Drawer>
    </div>
  )
}

// const Navigations:React.StatelessFunctionalComponent<any> = ({ navigations, onNavigationClick, classes }:PropsType):React.Element<any> => {
//   return (
//     <div>
//       <Drawer
//         type='permanent'
//         classes={{
//           paper: classes.drawerPaper
//         }}
//         >
//         <div className={classes.drawerInner}>
//           <div className={classes.drawerHeader}>
//             <IconButton>
//               <ChevronLeftIcon />
//             </IconButton>
//           </div>
//           <Divider />
//           <ListItem button>
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <NavLink
//               to={'/'}
//               exact
//               activeStyle={{
//                 fontWeight: 'bold',
//                 color: 'red'
//               }}
//             >Weather</NavLink >
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon>
//               <MapIcon />
//             </ListItemIcon>
//             <NavLink
//               to={'/map'}
//               exact
//               activeStyle={{
//                 fontWeight: 'bold',
//                 color: 'red'
//               }}
//             >Map</NavLink >
//           </ListItem>
//         </div>
//       </Drawer>
//     </div>
//   )
// }

export default withStyles(styles)(Navigations)
