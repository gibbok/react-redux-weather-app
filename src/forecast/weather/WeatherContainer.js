import { connect } from 'react-redux'
import Weather from './Weather'
import { getWeather } from './weatherActions'
import store from '../../app/store'

let isInitiated = false

const weather = (weather) => {
  return weather
}

const getWeatherLocationId = () => {
  return store.getState().weatherReducer.weather.app.locationId
}

const onInit = () => {
  if (isInitiated) {
    return
  }
  isInitiated = true
  store.dispatch(getWeather(getWeatherLocationId()))
}

const mapStateToProps = (state) => {
  return {
    weather: weather(state.weatherReducer.weather.data),
    onInit: onInit()
  }
}

const WeatherContainer = connect(
  mapStateToProps
)(Weather)

export default WeatherContainer
