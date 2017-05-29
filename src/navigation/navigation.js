import React from 'react'

const Navigation = ({ onClick, id, title, tooltip, isActive }) => (
  <li onClick={onClick} alt={tooltip} data-active={isActive}>
    {isActive ? <b>{title}</b> : title }
  </li >
)

export default Navigation
