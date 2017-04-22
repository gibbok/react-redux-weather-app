import React from 'react'

const idSuffix = 'navigation__'

const Navigation = ({ onClick, id, title, tooltip, isActive }) => (
  /* replace b by css solution only later on */
  <li id={`${idSuffix}${id}`} onClick={onClick} alt={tooltip} data-active={isActive}>
    {isActive ? <b>{title}</b> : title }
  </li >
)

export default Navigation
