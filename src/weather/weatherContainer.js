import { connect } from 'react-redux'
import Weather from './weather'
import { getWeather } from './weatherActions'
import store from '../app/store'

const weather = (weather) => {
  return weather
}

const getWeatherLocationId = () => {
  return store.getState().weatherReducer.weather.app.location
}

const onInit = () => {
  let weatherLocationId = getWeatherLocationId()
  store.dispatch(getWeather(weatherLocationId))
}

const mapStateToProps = (state) => {
  return {
    data: weather(state.weatherReducer.weather.data),
    onInit: onInit()
  }
}

const WeatherContainer = connect(
  mapStateToProps
)(Weather)

export default WeatherContainer
