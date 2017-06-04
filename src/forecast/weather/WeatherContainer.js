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

const mapStateToProps = (state) => {
  return {
    weather: weather(state.weatherReducer.weather.data)
  }
}

const WeatherContainer = connect(
  mapStateToProps
)(Weather)

store.dispatch(getWeather(getWeatherLocationId()))

export default WeatherContainer
