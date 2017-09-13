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
  debugger
  return {
    forecastDays: forecastDaily(state.forecastDailyReducer.forecastDaily.data)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onForecastDayClick: (id) => {
    }
  }
}

const ForecastDailyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastDays)

store.dispatch(getForecastDaily(getForecastDailyLocationId()))

export default ForecastDailyContainer
