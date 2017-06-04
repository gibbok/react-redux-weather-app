import React from 'react'

const Location = ({ onLocationClick, id, name, country }) => (
  <li>
    <a onClick={onLocationClick}>{name}, {country}</a>
  </li>
)

export default Location
