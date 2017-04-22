import React from 'react'

const idSuffix = 'navigation__'

const Navigation = ({ onClick, id, title, tooltip, isActive }) => (
  <li id={`${idSuffix}${id}`} onClick={onClick} alt={tooltip}>
    {title}
  </li>
)

export default Navigation
