import { connect } from 'react-redux'
import Weather from './weather'
import { getLocation as getWeatherLocation } from './weatherActions'
import store from '../app/store'

const getLocation = (location) => {
  return location
}

const onInit = () => {
  let locationId = store.getState().weatherReducer.weather.app.location
  store.dispatch(getWeatherLocation(locationId))
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
