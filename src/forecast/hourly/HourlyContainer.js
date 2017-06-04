import { connect } from 'react-redux'
import ForecastHourly from './ForecastHourly'
import { getForecastHourly, setForecastHourlyActiveReportType } from './hourlyActions'
import store from '../../app/store'

let isInitiated = false

const forecastHourly = (forecastHourly) => {
  return forecastHourly.data.filter(x => x.momentId === forecastHourly.ui.selectedDate)
}

const getForecastHourlyLocationId = () => {
  return store.getState().forecastDailyReducer.forecastDaily.app.locationId
}

const getActiveTypeReport = (state) => {
  return state.forecastHourlyReducer.forecastHourly.ui.activeReportType
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
    onInit: onInit(),
    activeTypeReport: getActiveTypeReport(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSummaryClick: (e) => {
      e.preventDefault()
      dispatch(setForecastHourlyActiveReportType('summary'))
    },
    onDetailsClick: (e) => {
      e.preventDefault()
      dispatch(setForecastHourlyActiveReportType('details'))
    }
  }
}

const HourlyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastHourly)

export default HourlyContainer
