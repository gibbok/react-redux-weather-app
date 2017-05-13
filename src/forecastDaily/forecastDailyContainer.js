import { connect } from 'react-redux'
import ForecastDayList from './forecastDayList'
import { getForecastDaily } from './forecastDailyActions'
import store from '../app/store'

let isInitiated = false

const forecastDaily = (forecastDaily) => {
  return forecastDaily
}

const getForecastDailyLocationId = () => {
  return store.getState().forecastDailyReducer.forecastDaily.app.location
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
    forecastDayList: forecastDaily(state.forecastDailyReducer.forecastDaily.data),
    onInit: onInit()
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
)(ForecastDayList)

export default ForecastDailyContainer
