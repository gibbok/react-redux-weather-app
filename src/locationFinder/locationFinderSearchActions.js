import 'isomorphic-fetch'
import * as api from '../app/api'
import * as types from './locationFinderActionTypes'
import { getWeather } from '../forecast/weather/weatherActions'
import { getForecastDaily } from '../forecast/forecastDaily/forecastDailyActions'
import { getForecastHourly } from '../forecast/forecastHourly/forecastHourlyActions'

const getLocations = query => ({
  type: types.GET_LOCATIONS,
  payload: new Promise((resolve, reject) => {
    fetch(api.find(query)).then(response => {
      resolve(response.json())
    })
  })
})

const setSearchValue = value => ({
  type: types.SET_SEARCHVALUE,
  payload: value
})

const setLocation = id => {
  return dispatch => {
    dispatch(getWeather(id))
    dispatch(getForecastDaily(id))
    dispatch(getForecastHourly(id))
  }
}

export { getLocations, setSearchValue, setLocation }
