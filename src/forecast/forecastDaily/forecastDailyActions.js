// @flow
import {ActionType} from '../../types' // eslint-disable-line no-unused-vars

import 'isomorphic-fetch'
import * as api from '../../app/api'
import * as types from './forecastDailyActionTypes'

const getForecastDaily = (query:number):ActionType => ({
  type: types.GET_FORECAST_DAILY,
  payload: new Promise((resolve, reject) => {
    fetch(api.forecastDaily(query)).then(response => {
      resolve(response.json())
    })
  })
})

export { getForecastDaily }
