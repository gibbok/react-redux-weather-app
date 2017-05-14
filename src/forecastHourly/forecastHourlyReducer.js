import dotProp from 'dot-prop-immutable'
import * as types from './forecastHourlyActionTypes'
import { createMomentId } from '../app/utility'

const initialState = {
  forecastHourly: {
    data: [],
    app: {
      locationId: 5128581 // nyc usa
    },
    ui: {
      selectedDate: createMomentId(Date.now())
    }
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'forecastHourly.app.isFetching', value)
}

const updateData = (state, action) => {
  const { payload: { list } } = action
  const data = list.map(x => {
    return {
      dt: x.dt,
      momentId: createMomentId(x.dt * 1000),
      date: new Date(x.dt * 1000).toString()
    }
  })
  return dotProp.set(state, 'forecastHourly.data', data)
}

function forecastHourlyReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_FORECAST_HOURLY_PENDING:
      return updateAppIsFetching(state, action, true)
    case types.GET_FORECAST_HOURLY_FULFILLED:
      updateAppIsFetching(state, action, false)
      return updateData(state, action)
    default:
      return state
  }
}

export default forecastHourlyReducer
