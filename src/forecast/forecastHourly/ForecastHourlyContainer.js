// @flow
import { connect } from 'react-redux'
import ForecastHourly from './ForecastHourly'
import { getForecastHourly, setForecastHourlyActiveReportType } from './forecastHourlyActions'
import store from '../../app/store'
import type { Dispatch } from 'redux' // eslint-disable-line no-unused-vars

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

/* istanbul ignore next */
const mapDispatchToProps = (dispatch:Dispatch<*>, ownProps) => {
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
