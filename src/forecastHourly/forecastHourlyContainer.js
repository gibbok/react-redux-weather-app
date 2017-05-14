import { connect } from 'react-redux'
import ForecastHourlyChart from './ForecastHourlyChart'
import { getForecastHourly } from './forecastHourlyActions'
import store from '../app/store'

let isInitiated = false

const forecastHourly = (forecastHourly) => {
  return forecastHourly
}

const getForecastHourlyLocationId = () => {
  return store.getState().forecastDailyReducer.forecastDaily.app.locationId
}

const onInit = () => {
  if (isInitiated) {
    return
  }
  isInitiated = true
  store.dispatch(getForecastHourly(getForecastHourlyLocationId()))
}

const mapStateToProps = (state) => {
  return {
    forecastHourly: forecastHourly(state.forecastHourlyReducer.forecastHourly.data),
    onInit: onInit()
  }
}

const ForecastHourlyContainer = connect(
  mapStateToProps
)(ForecastHourlyChart)

export default ForecastHourlyContainer
