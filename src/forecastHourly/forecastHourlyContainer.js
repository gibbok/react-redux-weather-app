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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSummaryClick: (e) => {
      e.preventDefault()
      console.log('onSummaryClick')
      // dispatch(getLocations(inputValue))
    },
    onDetailsClick: (e) => {
      e.preventDefault()
      console.log('onDetailsClick')
      // let value = e.target.value
      // dispatch(setSearchValue(value))
    }
  }
}

const ForecastHourlyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastHourly)

export default ForecastHourlyContainer
