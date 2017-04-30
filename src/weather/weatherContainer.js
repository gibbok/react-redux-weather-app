import { connect } from 'react-redux'
import Weather from './weather'

const getLocation = (location) => {
  return location
}

const onInit = () => {
  console.log('onInit-----')
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
