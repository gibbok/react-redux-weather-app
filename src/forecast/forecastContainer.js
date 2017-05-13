import { connect } from 'react-redux'
import Forecast from './forecast'
import { getForecast } from './forecastActions'
import store from '../app/store'

let isInitiated = false

const forecast = (forecast) => {
  return forecast
}

const getForecastLocationId = () => {
  return store.getState().forecastReducer.forecast.app.location
}

const onInit = () => {
  if (isInitiated) {
    return
  }
  console.log('init ++++')
  isInitiated = true
  let forecastLocationId = getForecastLocationId()
  store.dispatch(getForecast(forecastLocationId))
}

const mapStateToProps = (state) => {
  return {
    forecast: forecast(state.forecastReducer.forecast.data),
    onInit: onInit()
  }
}

const ForecastContainer = connect(
  mapStateToProps
)(Forecast)

export default ForecastContainer
