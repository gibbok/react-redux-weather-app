// @flow
import { connect } from 'react-redux'
import ForecastDays from './ForecastDays'
import { getForecastDaily } from './forecastDailyActions'
import store from '../../app/store'

const forecastDaily = (forecastDaily) => {
  return forecastDaily
}

const getForecastDailyLocationId = () => {
  return store.getState().forecastDailyReducer.forecastDaily.app.locationId
}

const mapStateToProps = (state) => {
  return {
    forecastDays: forecastDaily(state.forecastDailyReducer.forecastDaily.data)
  }
}

const ForecastDailyContainer = connect(
  mapStateToProps
)(ForecastDays)

store.dispatch(getForecastDaily(getForecastDailyLocationId()))

export default ForecastDailyContainer
