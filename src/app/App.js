import React from 'react'
import NavigationContainer from '../navigation/navigationContainer'
import LocationFinderSearchContainer from '../locationFinder/locationFinderSearchContainer'
import LocationFinderListContainer from '../locationFinder/locationFinderListContainer'
import WeatherContainer from '../weather/weatherContainer'
import ForecastDailyContainer from '../forecastDaily/forecastDailyContainer'
import ForecastHourlyContainer from '../forecastHourly/forecastHourlyContainer'
import styles from '../../node_modules/weather-icons/css/weather-icons.css'

const App = () => (
  <div>
    <NavigationContainer />
    <LocationFinderSearchContainer />
    <LocationFinderListContainer />
    <WeatherContainer onInit />
    <ForecastDailyContainer onInit />
    <ForecastHourlyContainer onInit />
  </div>
)

export default App
