import React from 'react'
import NavigationContainer from '../shared/navigation/NavigationContainer'
import LocationFinderSearchContainer from '../forecast/locationFinder/LocationFinderSearchContainer'
import LocationFinderContainer from '../forecast/locationFinder/LocationFinderContainer'
import WeatherContainer from '../forecast/weather/WeatherContainer'
import ForecastDailyContainer from '../forecast/forecastDaily/ForecastDailyContainer'
import ForecastHourlyContainer from '../forecast/forecastHourly/ForecastHourlyContainer'
import styles from '../../node_modules/weather-icons/css/weather-icons.css' // eslint-disable-line no-unused-vars

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
