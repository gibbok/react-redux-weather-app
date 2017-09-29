// @flow
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem, ListItemIcon, withStyles } from 'material-ui'
import HomeIcon from 'material-ui-icons/Home'
import MapIcon from 'material-ui-icons/Map'

/* eslint-disable no-undef */
type PropsType = {
  +onClick: Function,
  +id: number,
  +title:string,
  +tooltip:string,
  +url:string
}
/* eslint-enable no-undef */

const styles = theme => ({
  root: theme.typography.button
})

const Navigation:React.StatelessFunctionalComponent<any> = ({ onClick, id, title, tooltip, url, classes }:PropsType):React.Element<any> => {
  const icon = id => {
    switch (id) {
      case 'home':
        return <HomeIcon />
      case 'map':
        return <MapIcon />
    }
  }

  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        { icon(id) }
      </ListItemIcon>
      <NavLink className={classes.root}
        to={url}
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
    >{title}</NavLink ></ListItem>
  )
}

export default withStyles(styles)(Navigation)
