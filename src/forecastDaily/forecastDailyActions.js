import 'isomorphic-fetch'
import * as api from '../app/api'
import * as types from './forecastDailyActionTypes'

const getForecastDaily = query => ({
  type: types.GET_FORECAST_DAILY,
  payload: new Promise((resolve, reject) => {
    fetch(api.forecastDaily(query)).then(response => {
      resolve(response.json())
    })
  })
})

export { getForecastDaily }
