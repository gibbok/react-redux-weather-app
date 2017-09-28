// @flow
import {ActionType} from '../../types' // eslint-disable-line no-unused-vars

import 'isomorphic-fetch'
import * as api from '../../app/api'
import * as types from './locationFinderActionTypes'
import { getWeather } from '../../forecast/weather/weatherActions'
import { getForecastDaily } from '../../forecast/forecastDaily/forecastDailyActions'
import { getForecastHourly } from '../../forecast/forecastHourly/forecastHourlyActions'

const getLocations = (query:string):ActionType => {
  const value = query.trim()

  if (!value.length) {
    return ({
      type: null,
      payload: null
    })
  }

  return ({
    type: types.GET_LOCATIONS,
    payload: new Promise((resolve, reject) => {
      fetch(api.find(query)).then(response => {
        resolve(response.json())
      })
    })
  })
}
const setSearchValue = (value:string):ActionType => ({
  type: types.SET_SEARCHVALUE,
  payload: value
})

const setLocation = (id:number):ActionType => {
  return dispatch => {
    dispatch(getWeather(id))
    dispatch(getForecastDaily(id))
    dispatch(getForecastHourly(id))
  }
}

export { getLocations, setSearchValue, setLocation }
