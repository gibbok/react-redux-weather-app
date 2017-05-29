import React from 'react'
import NavigationContainer from '../navigation/NavigationContainer'
import LocationFinderSearchContainer from '../locationFinder/LocationFinderSearchContainer'
import LocationFinderContainer from '../locationFinder/LocationFinderContainer'
import WeatherContainer from '../weather/WeatherContainer'
import ForecastDailyContainer from '../forecastDaily/ForecastDailyContainer'
import ForecastHourlyContainer from '../forecastHourly/ForecastHourlyContainer'
import styles from '../../node_modules/weather-icons/css/weather-icons.css'

const App = () => (
  <div>
    <NavigationContainer />
    <LocationFinderSearchContainer />
    <LocationFinderContainer />
    <WeatherContainer onInit />
    <ForecastDailyContainer onInit />
    <ForecastHourlyContainer onInit />
  </div>
)

export default App
