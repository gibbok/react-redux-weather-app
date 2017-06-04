import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ onClick, id, title, tooltip, isActive, url }) => (
  <div onClick={onClick} alt={tooltip} data-active={isActive}>
    <NavLink to={url}>
      {isActive ? <b>{title}</b> : title }
    </NavLink >
  </div >
)

export default Navigation
