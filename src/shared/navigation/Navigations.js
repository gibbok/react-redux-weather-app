import React from 'react'
import Navigation from './Navigation'

const Navigations = ({ navigations, onNavigationClick }) => (
  <div>
    {navigations.map((navigation, index) =>
      <Navigation
        key={index}
        {...navigations[index]}
        onClick={() => onNavigationClick(navigation)}
      />
    )}
  </div>
)

export default Navigations
