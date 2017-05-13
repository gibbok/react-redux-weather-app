import React from 'react'
import NavigationContainer from '../navigation/navigationContainer'
import LocationFinderListContainer from '../locationFinder/locationFinderListContainer'
import LocationFinderSearchContainer from '../locationFinder/locationFinderSearchContainer'
import WeatherContainer from '../weather/weatherContainer'
import ForecastContainer from '../forecast/forecastContainer'

const App = () => (
  <div>
    <NavigationContainer />
    <LocationFinderSearchContainer />
    <LocationFinderListContainer />
    <WeatherContainer onInit />
    <ForecastContainer onInit />
  </div>
)

export default App
