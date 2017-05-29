import React from 'react'
import Navigation from './Navigation'

const NavigationList = ({ navigations, onNavigationClick }) => (
  <ul>
    {navigations.map((navigation, index) =>
      <Navigation
        key={index}
        {...navigations[index]}
        onClick={() => onNavigationClick(navigation)}
      />
    )}
  </ul>
)

export default NavigationList
