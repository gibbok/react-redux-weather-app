import dotProp from 'dot-prop-immutable'
import * as types from './forecastDailyActionTypes'

const initialState = {
  forecastDaily: {
    data: [],
    app: {
      location: 5128581 // nyc usa
    },
    ui: {}
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'forecastDaily.app.isFetching', value)
}

const updateData = (state, action) => {
  const { payload: { list } } = action
  const days = list.map(x => {
    return {
      date: new Date(x.dt).toString(),
      tempMin: x.temp.min,
      tempMax: x.temp.max,
      weatherDescription: x.weather[0].description
    }
  })
  return dotProp.set(state, 'forecastDaily.data', days)
}

function forecastDailyReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_FORECAST_DAILY_PENDING:
      return updateAppIsFetching(state, action, true)
    case types.GET_FORECAST_DAILY_FULFILLED:
      updateAppIsFetching(state, action, false)
      return updateData(state, action)
    default:
      return state
  }
}

export default forecastDailyReducer
