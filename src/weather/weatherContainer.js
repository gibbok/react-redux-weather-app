import { connect } from 'react-redux'
import Weather from './weather'
import { getLocation as getWeatherLocation } from './weatherActions'
import store from '../app/store'

const getLocation = (location) => {
  return location
}

const onInit = () => {
  debugger
  store.dispatch(getWeatherLocation(5128581))
}

const mapStateToProps = (state) => {
  return {
    location: getLocation(state.weatherReducer.weather.data),
    onInit: onInit()
  }
}

const WeatherContainer = connect(
  mapStateToProps
)(Weather)

export default WeatherContainer
