import React from 'react'
import NavigationContainer from '../navigation/NavigationContainer'
import LocationFinderSearchContainer from '../locationFinder/LocationFinderSearchContainer'
import LocationFinderContainer from '../locationFinder/LocationFinderContainer'
import WeatherContainer from '../forecast/weather/WeatherContainer'
import ForecastDailyContainer from '../forecast/forecastDaily/ForecastDailyContainer'
import ForecastHourlyContainer from '../forecast/forecastHourly/ForecastHourlyContainer'
import styles from '../../node_modules/weather-icons/css/weather-icons.css'

const Forecast = () => (
  <div>
    <NavigationContainer />
    <LocationFinderSearchContainer />
    <LocationFinderContainer />
    <WeatherContainer />
    <ForecastDailyContainer />
    <ForecastHourlyContainer />
  </div>
)

export default Forecast
