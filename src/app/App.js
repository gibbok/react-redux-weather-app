import React from 'react'
import NavigationContainer from '../navigation/navigationContainer'
import LocationFinderSearchContainer from '../locationFinder/locationFinderSearchContainer'
import LocationFinderListContainer from '../locationFinder/locationFinderListContainer'

import WeatherContainer from '../weather/weatherContainer'
import ForecastDailyContainer from '../forecastDaily/forecastDailyContainer'

const App = () => (
  <div>
    <NavigationContainer />
    <LocationFinderSearchContainer />
    <LocationFinderListContainer />
    <WeatherContainer onInit />
    <ForecastDailyContainer onInit />
  </div>
)

export default App
