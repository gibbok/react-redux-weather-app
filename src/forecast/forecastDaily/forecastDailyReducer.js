// @flow
import {StateType, ActionType} from '../../types' // eslint-disable-line no-unused-vars

import dotProp from 'dot-prop-immutable'
import * as types from './forecastDailyActionTypes'
import { createMomentId } from '../../app/utility'
import location from '../../app/location'

const initialState:StateType = {
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

const updateAppIsFetching = (state:StateType, action:ActionType, value:boolean):StateType => {
  return dotProp.set(state, 'forecastDaily.app.isFetching', value)
}
const updateData = (state:StateType, action:ActionType):StateType => {
  const { payload: { list } } = action
  const data = list.map(x => {
    return {
      momentId: createMomentId(x.dt * 1000),
      dt: x.dt,
      date: x.dt,
      tempMin: x.temp.min,
      tempMax: x.temp.max,
      iconCode: x.weather[0].id,
      weatherMain: x.weather[0].main
    }
  })
  return dotProp.set(state, 'forecastDaily.data', data)
}

function forecastDailyReducer (state:StateType = initialState, action:ActionType):StateType {
  switch (action.type) {
    case types.GET_FORECAST_DAILY_PENDING:
      return updateAppIsFetching(state, action, true)

    case types.GET_FORECAST_DAILY_FULFILLED:
      return updateData(updateAppIsFetching(state, action, false), action)

    default:
      return state
  }
}

export default forecastDailyReducer
