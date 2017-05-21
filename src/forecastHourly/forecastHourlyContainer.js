import { connect } from 'react-redux'
import ForecastHourly from './ForecastHourly'
import { getForecastHourly } from './forecastHourlyActions'
import store from '../app/store'

let isInitiated = false

const forecastHourly = (forecastHourly) => {
  return forecastHourly.data.filter(x => x.momentId === forecastHourly.ui.selectedDate)
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
    forecastHourly: forecastHourly(state.forecastHourlyReducer.forecastHourly),
    onInit: onInit()
  }
}

const ForecastHourlyContainer = connect(
  mapStateToProps
)(ForecastHourly)

export default ForecastHourlyContainer
