import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ onClick, id, title, tooltip, url }) => (
  <div onClick={onClick} alt={tooltip}>
    <NavLink
      to={url}
      exact
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >{title}</NavLink >
  </div >
)

export default Navigation
