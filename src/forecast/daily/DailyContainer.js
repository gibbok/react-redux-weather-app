import { connect } from 'react-redux'
import ForecastDays from './ForecastDays'
import { getForecastDaily } from './dailyActions'
import store from '../../app/store'

let isInitiated = false

const forecastDaily = (forecastDaily) => {
  return forecastDaily
}

const getForecastDailyLocationId = () => {
  return store.getState().forecastDailyReducer.forecastDaily.app.locationId
}

const onInit = () => {
  if (isInitiated) {
    return
  }
  isInitiated = true
  store.dispatch(getForecastDaily(getForecastDailyLocationId()))
}

const mapStateToProps = (state) => {
  return {
    forecastDays: forecastDaily(state.forecastDailyReducer.forecastDaily.data),
    onInit: onInit()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onForecastDayClick: (id) => {
    }
  }
}

const DailyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastDays)

export default DailyContainer
