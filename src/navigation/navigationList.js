import React from 'react'
import Navigation from './navigation'

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
