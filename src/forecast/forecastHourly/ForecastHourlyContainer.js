import { connect } from 'react-redux'
import ForecastHourly from './ForecastHourly'
import { getForecastHourly, setForecastHourlyActiveReportType } from './forecastHourlyActions'
import store from '../../app/store'

// const forecastHourly = (forecastHourly) => {
//   return forecastHourly.data.filter(x => x.momentId === forecastHourly.ui.selectedDate)
// }

const forecastHourly = (forecastHourly) => {
  return forecastHourly.data
}

const getForecastHourlyLocationId = () => {
  return store.getState().forecastDailyReducer.forecastDaily.app.locationId
}

const getActiveTypeReport = (state) => {
  return state.forecastHourlyReducer.forecastHourly.ui.activeReportType
}

const mapStateToProps = (state) => {
  return {
    forecastHourly: forecastHourly(state.forecastHourlyReducer.forecastHourly),
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

const ForecastHourlyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastHourly)

store.dispatch(getForecastHourly(getForecastHourlyLocationId()))

export default ForecastHourlyContainer
