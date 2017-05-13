import 'isomorphic-fetch'
import * as api from '../app/api'
import * as types from './forecastActionTypes'

const getForecast = query => ({
  type: types.GET_FORECAST,
  payload: new Promise((resolve, reject) => {
    fetch(api.forecast(query)).then(response => {
      resolve(response.json())
    })
  })
})

export { getForecast }
