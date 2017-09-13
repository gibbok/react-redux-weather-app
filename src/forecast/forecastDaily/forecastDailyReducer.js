import dotProp from 'dot-prop-immutable'
import * as types from './forecastDailyActionTypes'
import { createMomentId } from '../../app/utility'
import location from '../../app/location'

const initialState = {
  forecastDaily: {
    data: [],
    app: {
      locationId: location().locationId, // nyc usa
      isFetching: false
    },
    ui: {
      selectedDate: createMomentId(Date.now())
    }
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'forecastDaily.app.isFetching', value)
}

const updateData = (state, action) => {
  const { payload: { list } } = action
  const data = list.map(x => {
    return {
      momentId: createMomentId(x.dt * 1000),
      dt: x.dt,
      date: x.dt,
      tempMin: x.temp.min,
      tempMax: x.temp.max,
      iconCode: x.weather[0].id,
      weatherDescription: x.weather[0].description
    }
  })
  return dotProp.set(state, 'forecastDaily.data', data)
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
