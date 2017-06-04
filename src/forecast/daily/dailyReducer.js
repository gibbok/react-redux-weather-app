import dotProp from 'dot-prop-immutable'
import * as types from './dailyActionTypes'
import { createMomentId } from '../../app/utility'

const initialState = {
  forecastDaily: {
    data: [],
    app: {
      locationId: 5128581, // nyc usa
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
      date: new Date(x.dt * 1000).toDateString(),
      tempMin: x.temp.min,
      tempMax: x.temp.max,
      weatherDescription: x.weather[0].description
    }
  })
  return dotProp.set(state, 'forecastDaily.data', data)
}

function dailyReducer (state = initialState, action) {
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

export default dailyReducer
