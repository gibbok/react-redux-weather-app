import 'isomorphic-fetch'
import * as api from '../app/api'
import * as types from './forecastHourlyActionTypes'

const getForecastHourly = query => ({
  type: types.GET_FORECAST_HOURLY,
  payload: new Promise((resolve, reject) => {
    fetch(api.forecast(query)).then(response => {
      resolve(response.json())
    })
  })
})

export { getForecastHourly }
