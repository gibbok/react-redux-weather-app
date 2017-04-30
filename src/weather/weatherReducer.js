import dotProp from 'dot-prop-immutable'
import * as types from './weatherActionTypes'

const initialState = {
  weather: {
    data: {},
    app: {
      location: 5128581 // nyc usa
    },
    ui: {}
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'weather.app.isFetching', value)
}

const updateData = (state, action) => {
  return {}
}

function weatherReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_LOCATION_PENDING:
      return updateAppIsFetching(state, action, true)
    case types.GET_LOCATION_FULFILLED:
      updateAppIsFetching(state, action, false)
      return updateData(state, action)
    default:
      return state
  }
}

export default weatherReducer
