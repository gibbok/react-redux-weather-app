import React from 'react'
import LocationFinderListContainer from '../locationFinder/locationFinderListContainer'
import LocationFinderSearchContainer from '../locationFinder/locationFinderSearchContainer'
import WeatherContainer from '../weather/weatherContainer'
import NavigationContainer from '../navigation/navigationContainer'

const App = () => (
  <div>
    <NavigationContainer />
    <LocationFinderSearchContainer />
    <LocationFinderListContainer />
    <WeatherContainer onInit />
  </div>
)

export default App
