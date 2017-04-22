import React from 'react'
import LocationFinderListContainer from '../locationFinder/locationFinderListContainer'
import LocationFinderSearchContainer from '../locationFinder/locationFinderSearchContainer'
import NavigationContainer from '../navigation/navigationContainer'

const App = () => (
  <div>
    <NavigationContainer />
    <LocationFinderSearchContainer />
    <LocationFinderListContainer />
  </div>
)

export default App
