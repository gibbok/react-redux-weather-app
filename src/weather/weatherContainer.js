import { connect } from 'react-redux'
import Weather from './weather'
import { getLocation as getWeatherInfo } from './weatherActions'
import store from '../app/store'

const getWeather = (weather) => {
  return weather
}

const getWeatherLocationId = () => {
  return store.getState().weatherReducer.weather.app.location
}

const onInit = () => {
  let weatherLocationId = getWeatherLocationId()
  store.dispatch(getWeatherInfo(weatherLocationId))
}

const mapStateToProps = (state) => {
  return {
    weather: getWeather(state.weatherReducer.weather.data),
    onInit: onInit()
  }
}

const WeatherContainer = connect(
  mapStateToProps
)(Weather)

export default WeatherContainer
